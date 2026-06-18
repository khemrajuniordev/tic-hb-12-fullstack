<template>
  <div class="layout">
    <!-- Catálogo -->
    <main class="catalog">
      <h1>🛍️ E-commerce</h1>
      <div class="product-grid">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @add-to-cart="addToCart"
        />
      </div>
    </main>

    <!-- Carrinho -->
    <aside class="cart-panel">
      <h2>🛒 Carrinho</h2>

      <p v-if="cart.items.length === 0" class="empty">Carrinho vazio</p>

      <table v-else class="cart-table">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Qtd</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart.items" :key="item.product.id">
            <td>{{ item.product.name }}</td>
            <td class="qty">
              <button class="btn-qty" @click="removeUnit(item.product.id)">−</button>
              {{ item.quantity }}
              <button class="btn-qty" @click="addToCart(item.product)">+</button>
            </td>
            <td>R$ {{ (item.product.price * item.quantity).toFixed(2) }}</td>
            <td>
              <button class="btn-remove" @click="removeItem(item.product.id)">✕</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="cart-totals">
        <p>Total de itens: <strong>{{ totalItems }}</strong></p>
        <p class="final-price">Valor final: <strong>R$ {{ finalPrice }}</strong></p>
      </div>
    </aside>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'
import { Cart } from './model/cart.model'
import { Category } from './model/category.model'
import { Product } from './model/product.model'
import type { CartItem } from './model/cart.model'
import ProductCard from './components/ProductCard.vue'

const eletronicos = new Category(1, 'Eletrônicos')
const perifericos = new Category(2, 'Periféricos')

export default defineComponent({
  name: 'App',
  components: { ProductCard },

  data() {
    return {
      products: [
        new Product(1, 'Notebook Pro',  4500.00, eletronicos),
        new Product(2, 'Mouse Gamer',    250.00, perifericos),
        new Product(3, 'Teclado RGB',    380.00, perifericos),
        new Product(4, 'Monitor 4K',    2800.00, eletronicos),
        new Product(5, 'Headset Pro',    450.00, perifericos),
        new Product(6, 'Webcam HD',      350.00, perifericos),
      ] as Product[],
      cart: reactive(new Cart()),
    }
  },

  computed: {
    totalItems(): number {
      return this.cart.getTotalItems()
    },
    finalPrice(): string {
      return this.cart.getFinalPrice().toFixed(2)
    },
  },

  methods: {
    addToCart(product: Product): void {
      this.cart.addItem(product)
    },
    removeUnit(productId: number): void {
      this.cart.removeUnit(productId)
    },
    removeItem(productId: number): void {
      this.cart.removeItem(productId)
    },
  },
})
</script>

<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Segoe UI', sans-serif; background: #f0f2f5; }

.layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  min-height: 100vh;
}

.catalog {
  padding: 2rem;
}
.catalog h1 { margin-bottom: 1.5rem; font-size: 1.8rem; color: #222; }

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.2rem;
}

.cart-panel {
  background: #fff;
  padding: 1.5rem;
  border-left: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.cart-panel h2 { font-size: 1.3rem; }

.empty { color: #999; font-style: italic; }

.cart-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
.cart-table th, .cart-table td { padding: 6px 4px; border-bottom: 1px solid #f0f0f0; }
.cart-table th { text-align: left; color: #666; font-weight: 600; }

.qty { text-align: center; white-space: nowrap; }
.btn-qty {
  border: 1px solid #ddd; background: #f5f5f5; border-radius: 4px;
  padding: 1px 6px; cursor: pointer; font-size: 1rem;
}
.btn-qty:hover { background: #e0e0e0; }
.btn-remove { border: none; background: none; color: #e53935; cursor: pointer; font-size: 1rem; }

.cart-totals { margin-top: auto; border-top: 2px solid #f0f0f0; padding-top: 1rem; }
.cart-totals p { margin-bottom: 0.4rem; color: #444; }
.final-price { font-size: 1.1rem; color: #222; }
</style>
