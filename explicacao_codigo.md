# Explicação Detalhada do Sistema de E-commerce

Olá! Este documento foi criado para explicar passo a passo, linha a linha, como construímos o nosso sistema de e-commerce usando TypeScript. Vamos usar exemplos da vida real para que tudo fique bem claro e fácil de entender.

---

## 1. O que é Orientação a Objetos (POO)?

Imagine o mundo real: você tem "coisas" como Carros, Pessoas, Produtos. Na programação, nós chamamos essas coisas de **Objetos**. Para criar um objeto, nós precisamos de um "molde" ou uma "planta baixa", que chamamos de **Classe**.

Além disso, no TypeScript, usamos **Interfaces**. Uma interface é como um contrato rigoroso. Se a interface diz "Todo Produto deve ter um preço", a classe que cria o Produto **obrigatoriamente** tem que colocar um preço nele. Isso evita muitos erros!

---

## 2. Etapa 1: Categorias (`src/model/category.model.ts`)

No mundo real, um supermercado é dividido em seções: "Limpeza", "Açougue", "Padaria". No nosso sistema, chamamos isso de Categoria.

```typescript
// Aqui estamos criando o "contrato" (Interface) para uma Categoria.
// Pense nisso como uma regra: "Toda categoria TEM que ter um ID (número) e um Nome (texto)".
export interface ICategory {
    id: number;     // Ex: 1 (O código do corredor no supermercado)
    name: string;   // Ex: "Eletrônicos" (A placa pendurada no corredor)
}

// Aqui é a "Fábrica" de categorias. A classe usa o contrato "ICategory" criado acima.
export class Category implements ICategory {
    // O constructor é a função executada no momento em que "nascemos" uma nova categoria.
    // O "public" na frente diz: "Crie a variável e já guarde o valor que estou recebendo".
    constructor(
        public id: number,   // Recebe o ID (ex: 1) e guarda.
        public name: string  // Recebe o Nome (ex: "Celulares") e guarda.
    ) {}
}
```

---

## 3. Etapa 1 (Continuação): Produtos (`src/model/product.model.ts`)

Um produto não existe no vazio. Uma "TV" pertence à categoria "Eletrônicos". Vamos ver como ligamos um ao outro.

```typescript
// Precisamos importar o molde da Categoria, pois um Produto pertence a uma Categoria.
import { Category, type ICategory } from './category.model.js';

// O contrato do Produto. Todo produto PRECISA ter essas características.
export interface IProduct {
    id: number;          // Ex: 101 (Código de barras)
    name: string;        // Ex: "Notebook Dell"
    price: number;       // Ex: 3500.00 (O preço na etiqueta)
    category: ICategory; // Ex: A categoria inteira de "Eletrônicos".
                         // Note que não é apenas o nome da categoria, é o OBJETO categoria completo!
}

// A fábrica de Produtos. Ela obedece (implements) o contrato IProduct.
export class Product implements IProduct {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public category: Category // Recebe o objeto Category quando for criado
    ) {}
}
```

---

## 4. Etapa 2: Usuários e Papéis (`src/model/user.model.ts`)

Numa loja, existem os **Clientes** (que compram) e os **Gerentes/Administradores** (que controlam a loja). Para organizar isso sem o risco de alguém digitar "Adminnistrador" (com dois 'n's) e quebrar o sistema, usamos um **Enum** (Enumeração).

```typescript
// O Enum é como um menu de opções fixas. Só se pode escolher o que está aqui dentro.
// É como o tamanho de roupa: P, M ou G. Não existe tamanho "Xpto".
export enum Role {
    ADMIN = 'ADMIN',       // O dono da loja
    CUSTOMER = 'CUSTOMER'  // O cliente
}

// O contrato pro Usuário.
export interface IUser {
    id: number;
    username: string; // Ex: "joaozinho_gameplays"
    email: string;    // Ex: "joao@email.com"
    role: Role;       // O papel dele na loja. Note que o tipo não é 'string', é o nosso menu 'Role' criado acima!
}

// A fábrica de Usuários.
export class User implements IUser {
    constructor(
        public id: number,
        public username: string,
        public email: string,
        public role: Role // Quando criarmos o usuário, diremos se ele é ADMIN ou CUSTOMER.
    ) {}
}
```

---

## 5. Etapa 3 e Desafio: O Carrinho de Compras (`src/model/cart.model.ts`)

Aqui é onde a mágica acontece. No supermercado da vida real, o seu carrinho físico (Cart) vai recebendo itens. Se você pega 3 pacotes de arroz iguais, você não diz que tem "Arroz, Arroz, Arroz". Você diz "Tenho 3 unidades do mesmo Arroz". 

Vamos programar exatamente essa lógica!

```typescript
import { Product } from './product.model.js';

// O CartItem é apenas a representação do que vai DENTRO do carrinho.
// Ele une o Produto com a Quantidade.
export interface CartItem {
    product: Product; // O saco de arroz
    quantity: number; // 3 pacotes
}

export class Cart {
    // A nossa lista de itens do carrinho. 
    // É 'private' porque ninguém de fora da classe pode mexer diretamente aqui dentro.
    // A lista começa vazia: []
    private items: CartItem[] = [];

    // Função para adicionar produto ao carrinho.
    addItem(product: Product, quantity: number): void {
        // [DESAFIO HOF]: O método '.some()'
        // Ele vai olhar item por item no carrinho e perguntar: 
        // "O ID deste item é IGUAL ao ID do produto que estou tentando adicionar agora?"
        // Retorna True (verdadeiro, o produto já tá lá) ou False (falso, produto não tá lá).
        const itemExists = this.items.some(item => item.product.id === product.id);

        if (itemExists) {
            // Se o item JÁ EXISTE no carrinho...
            // Usamos o '.map()' para recriar a lista.
            // Quando ele encontra o produto repetido, ele soma a quantidade antiga + a quantidade nova.
            this.items = this.items.map(item => {
                if (item.product.id === product.id) {
                    // "...item" significa "Mantenha o produto intacto, mas mude a quantity"
                    return { ...item, quantity: item.quantity + quantity };
                }
                return item;
            });
        } else {
            // Se o item NÃO EXISTE no carrinho, apenas jogue ele lá dentro (push).
            this.items.push({ product, quantity });
        }
    }

    // Função para contar quantos itens totais temos. 
    // Ex: 2 TVs + 3 Celulares = 5 Itens.
    getTotalItems(): number {
        // [DESAFIO HOF]: O método '.reduce()'
        // O reduce vai rodar uma vez por cada item e ir ACUMULANDO o valor na variável 'total'.
        // O '0' no final significa que a contagem (total) começa no zero.
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Função para pegar o preço final da compra.
    getFinalPrice(): number {
        // [DESAFIO HOF]: '.reduce()' novamente.
        // Mesma lógica anterior, mas agora a gente multiplica (Preço do Produto * Quantidade) 
        // antes de somar no total.
        // Ex: Acumulador Total + (R$ 3500.00 * 2) = Acumulador Total + R$ 7000.00
        return this.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    }
    
    // Devolve a lista de itens para podermos imprimir na tela.
    getItems(): CartItem[] {
        return this.items;
    }
}
```

---

## 6. Juntando Tudo (`src/index.ts`)

Agora é a hora de simularmos a vida real colocando as fábricas para funcionar!

```typescript
// Importações (Trazendo nossos moldes e fábricas para cá)
import { Category } from './model/category.model.js';
import { Product } from './model/product.model.js';
import { User, Role } from './model/user.model.js';
import { Cart } from './model/cart.model.js';

// 1. Criamos as seções do supermercado
const electronicsCategory = new Category(1, "Electronics");
const clothingCategory = new Category(2, "Clothing");

// 2. Colocamos produtos nas prateleiras dessas seções
const laptop = new Product(1, "Laptop XYZ", 3500, electronicsCategory);
const smartphone = new Product(2, "Smartphone 12", 2000, electronicsCategory);
const tshirt = new Product(3, "T-Shirt Basic", 50, clothingCategory);

// 3. Chegam os humanos na loja
const adminUser = new User(1, "admin123", "admin@store.com", Role.ADMIN); // O Gerente
const customerUser = new User(2, "john_doe", "john@email.com", Role.CUSTOMER); // O Cliente que vai comprar

// 4. O cliente pega um carrinho de compras na entrada
const myCart = new Cart();

// 5. O cliente começa a jogar coisas dentro do carrinho
myCart.addItem(laptop, 1);    // Botou 1 Laptop 
myCart.addItem(smartphone, 2); // Botou 2 Celulares
myCart.addItem(tshirt, 3);    // Botou 3 Camisetas

// E se ele voltar na seção e pegar mais 1 Laptop igualzinho?
// A nossa função '.some()' do Cart.ts vai perceber e falar: "Opa, só soma a quantidade!"
myCart.addItem(laptop, 1); 

// E por fim, o caixa (terminal) diz o valor total usando as funções '.reduce()'.
console.log(`Total Unit Items: ${myCart.getTotalItems()}`); // Vai dar 7 itens totais
console.log(`Final Price: R$ ${myCart.getFinalPrice()}`); // R$ 11.150,00
```

---

## 7. A Cereja do Bolo (`package.json`)

Você deve ter notado que os imports usam a terminação `.js` (Ex: `import { Product } from './product.model.js';`). Por que isso?

No Node.js moderno (uma das formas de rodar TypeScript), para ele conseguir conversar entre os arquivos do nosso sistema se utilizando o "ECMAScript Modules" (um formato oficial da web e do Javascript de importar coisas), precisamos dizer explicitly: **"Ei Node, estamos usando o formato moderno de Módulos"**. 

Nós fizemos isso adicionando a linha:
`"type": "module"` 
Perto do topo do nosso arquivo `package.json`. Sem isso, o Node tentaria rodar os arquivos de uma forma antiga (CommonJS) e o TypeScript do novo projeto ia reclamar dando erro na compilação.
