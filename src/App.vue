<template>
  <div class="min-h-screen flex flex-col transition-colors duration-300" :class="{ 'dark': isDarkMode }">
    <header class="bg-blue-900 text-white p-4 shadow-md flex justify-between items-center dark:bg-gray-800">
      <h1 class="text-2xl font-bold m-0">E-Commerce Vue</h1>
      <Button 
        :icon="isDarkMode ? 'pi pi-sun' : 'pi pi-moon'" 
        severity="secondary" 
        rounded 
        aria-label="Toggle Dark Mode"
        @click="toggleDarkMode"
      />
    </header>

    <main class="flex-1 flex flex-col lg:flex-row p-6 gap-8 max-w-7xl mx-auto w-full">
      <!-- Seção de Produtos -->
      <section class="flex-[3]">
        <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Produtos</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            @add-to-cart="handleAddToCart"
          />
        </div>
      </section>

      <!-- Seção de Carrinho -->
      <aside class="flex-[1] min-w-[320px]">
        <div class="sticky top-6 flex flex-col gap-4">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 m-0">Carrinho</h2>
          
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-green-500">
            <p class="m-0 mb-2 font-semibold">Total de itens: <span class="text-green-600 dark:text-green-400">{{ cartItemsCount }}</span></p>
            <p class="m-0 text-lg font-bold">Preço Final: <span class="text-blue-600 dark:text-blue-400">R$ {{ cartFinalPrice }}</span></p>
          </div>

          <div v-if="cartItems.length > 0">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-semibold m-0 dark:text-gray-200">Itens Adicionados:</h3>
              <Button label="Limpar" icon="pi pi-trash" severity="danger" text @click="confirmClearCart" />
            </div>

            <!-- Listagem de itens com DataView -->
            <DataView :value="cartItems" class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 overflow-hidden">
              <template #list="slotProps">
                <div class="flex flex-col">
                  <div v-for="(item, index) in slotProps.items" :key="index" class="p-4 border-b dark:border-gray-700 last:border-b-0">
                    <div class="flex flex-col gap-3">
                      <div class="font-bold text-gray-800 dark:text-gray-100 text-lg">
                        {{ item.product.name }}
                      </div>
                      <div class="text-sm text-gray-500 dark:text-gray-400">
                        R$ {{ item.product.price.toFixed(2) }} unit.
                      </div>
                      
                      <div class="flex justify-between items-center mt-2">
                        <InputNumber 
                          :modelValue="item.quantity" 
                          @update:modelValue="onQuantityChange(item.product, $event)"
                          inputId="horizontal-buttons" 
                          showButtons 
                          buttonLayout="horizontal" 
                          :step="1" 
                          :min="1"
                          inputClass="w-12 text-center"
                          class="w-32"
                        >
                          <template #incrementbuttonicon>
                            <span class="pi pi-plus" />
                          </template>
                          <template #decrementbuttonicon>
                            <span class="pi pi-minus" />
                          </template>
                        </InputNumber>

                        <div class="font-bold text-blue-900 dark:text-blue-300">
                          R$ {{ (item.product.price * item.quantity).toFixed(2) }}
                        </div>
                      </div>
                      
                      <Button label="Remover" icon="pi pi-times" severity="danger" text size="small" class="mt-2 self-start p-0" @click="handleDeleteItem(item.product.id)" />
                    </div>
                  </div>
                </div>
              </template>
            </DataView>
          </div>
          
          <Card v-else class="text-center shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <template #content>
              <i class="pi pi-shopping-cart text-5xl text-gray-300 dark:text-gray-600 mb-4 block"></i>
              <p class="text-gray-500 dark:text-gray-400 font-medium m-0">Seu carrinho está vazio.</p>
              <p class="text-sm text-gray-400 dark:text-gray-500 mt-2 m-0">Adicione produtos para continuar.</p>
            </template>
          </Card>

        </div>
      </aside>
    </main>

    <ConfirmDialog></ConfirmDialog>
    <Toast />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductCard from './components/ProductCard.vue';
import { Product } from './model/product.model';
import { Category } from './model/category.model';
import { Cart } from './model/cart.model';

import Button from 'primevue/button';
import Card from 'primevue/card';
import DataView from 'primevue/dataview';
import InputNumber from 'primevue/inputnumber';
import ConfirmDialog from 'primevue/confirmdialog';
import Toast from 'primevue/toast';

export default defineComponent({
  name: 'App',
  components: {
    ProductCard,
    Button,
    Card,
    DataView,
    InputNumber,
    ConfirmDialog,
    Toast
  },
  data() {
    const electronics = new Category(1, "Electronics");
    const clothing = new Category(2, "Clothing");
    const food = new Category(3, "Food");

    return {
      products: [
        new Product(1, "Laptop XYZ", 3500, electronics),
        new Product(2, "Smartphone 12", 2000, electronics),
        new Product(3, "T-Shirt Basic", 50, clothing),
        new Product(4, "Headphones", 300, electronics),
        new Product(5, "Batata Recheada", 25, food),
      ] as Product[],
      cart: new Cart(),
      isDarkMode: false
    };
  },
  computed: {
    cartItems() {
      return this.cart.getItems();
    },
    cartItemsCount() {
      return this.cart.getTotalItems();
    },
    cartFinalPrice() {
      return this.cart.getFinalPrice().toFixed(2);
    }
  },
  created() {
    // Inicialização da classe dark no html baseada num estado se necessário
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
       this.isDarkMode = true;
       document.documentElement.classList.add('dark');
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      if(this.isDarkMode) {
          document.documentElement.classList.add('dark');
      } else {
          document.documentElement.classList.remove('dark');
      }
    },
    handleAddToCart(product: Product) {
      this.cart.addItem(product, 1);
      this.cart = Object.assign(new Cart(), this.cart);
    },
    onQuantityChange(product: Product, newQuantity: number) {
        // Encontra o item atual
        const item = this.cart.getItems().find(i => i.product.id === product.id);
        if (item) {
            const difference = newQuantity - item.quantity;
            if (difference > 0) {
               this.cart.addItem(product, difference);
            } else if (difference < 0) {
               // Remove a quantia correta
               for(let i=0; i<Math.abs(difference); i++) {
                   this.cart.removeItem(product.id);
               }
            }
        }
        this.cart = Object.assign(new Cart(), this.cart);
    },
    handleRemoveItem(productId: number) {
      this.cart.removeItem(productId);
      this.cart = Object.assign(new Cart(), this.cart);
    },
    handleDeleteItem(productId: number) {
      this.cart.deleteItem(productId);
      this.cart = Object.assign(new Cart(), this.cart);
    },
    confirmClearCart() {
      this.$confirm.require({
        message: 'Tem certeza que deseja remover todos os itens do carrinho?',
        header: 'Confirmação',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Sim, limpar',
        rejectLabel: 'Cancelar',
        rejectClass: 'p-button-secondary p-button-outlined',
        acceptClass: 'p-button-danger',
        accept: () => {
          this.cartItems.forEach(item => {
            this.handleDeleteItem(item.product.id)
          });
          (this as any).$toast?.add({ severity: 'success', summary: 'Carrinho Limpo', detail: 'Todos os itens foram removidos.', life: 3000 });
        }
      });
    }
  }
});
</script>

<style>
/* Global CSS foi movido para arquivos separados usando Tailwind */
</style>
