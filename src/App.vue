<template>
  <div class="app-container">
    <header class="header">
      <h1>E-Commerce Vue</h1>
    </header>

    <main class="main-content">
      <div class="products-section">
        <h2>Produtos</h2>
        <div class="products-grid">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            @add-to-cart="handleAddToCart"
          />
        </div>
      </div>

      <aside class="cart-section">
        <div class="cart-container">
          <h2>Carrinho</h2>
          <div class="cart-summary">
            <p><strong>Total de itens:</strong> {{ cartItemsCount }}</p>
            <p><strong>Preço Final:</strong> R$ {{ cartFinalPrice }}</p>
          </div>

          <div v-if="cartItems.length > 0" class="cart-items">
            <h3>Itens Adicionados:</h3>
            <div v-for="item in cartItems" :key="item.product.id" class="cart-item">
              <div class="item-info">
                <span>{{ item.product.name }}</span>
                <span>(R$ {{ item.product.price.toFixed(2) }} x {{ item.quantity }})</span>
              </div>
              <div class="item-actions">
                <button class="btn-icon" @click="handleRemoveItem(item.product.id)">-</button>
                <span class="quantity">{{ item.quantity }}</span>
                <button class="btn-icon" @click="handleAddToCart(item.product)">+</button>
                <button class="btn-danger" @click="handleDeleteItem(item.product.id)">Excluir</button>
              </div>
            </div>
          </div>
          <div v-else class="empty-cart">
            Seu carrinho está vazio.
          </div>
        </div>
      </aside>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductCard from './components/ProductCard.vue';
import { Product } from './model/product.model';
import { Category } from './model/category.model';
import { Cart } from './model/cart.model';

export default defineComponent({
  name: 'App',
  components: {
    ProductCard
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
      cart: new Cart()
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
  methods: {
    handleAddToCart(product: Product) {
      this.cart.addItem(product, 1);
      // Forcing reactivity update for pure classes in Options API data
      // In Vue 3, wrapped objects in data() are reactive, but mutating inner class instances 
      // sometimes require re-assigning if not deep-reactive or to trigger computed correctly.
      // However, modifying the array inside Cart usually triggers updates if Vue tracks the items array.
      // To be strictly safe and ensure the UI updates:
      this.cart = Object.assign(new Cart(), this.cart);
    },
    handleRemoveItem(productId: number) {
      this.cart.removeItem(productId);
      this.cart = Object.assign(new Cart(), this.cart);
    },
    handleDeleteItem(productId: number) {
      this.cart.deleteItem(productId);
      this.cart = Object.assign(new Cart(), this.cart);
    }
  }
});
</script>

<style>
/* Global Resets */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Inter', 'Roboto', sans-serif;
  background-color: #f5f7fa;
  color: #333;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: #2c3e50;
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header h1 {
  margin: 0;
  font-size: 1.5rem;
}

.main-content {
  display: flex;
  flex: 1;
  padding: 2rem;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.products-section {
  flex: 2;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}

.cart-section {
  flex: 1;
  min-width: 300px;
}

.cart-container {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  position: sticky;
  top: 2rem;
}

.cart-summary {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  border-left: 4px solid #4CAF50;
}

.cart-summary p {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart-item {
  display: flex;
  flex-direction: column;
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;
  gap: 0.5rem;
}

.item-info {
  display: flex;
  flex-direction: column;
  font-weight: 500;
}

.item-info span:last-child {
  font-size: 0.85rem;
  color: #666;
  font-weight: normal;
}

.item-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.btn-icon:hover {
  background-color: #f0f0f0;
}

.quantity {
  min-width: 20px;
  text-align: center;
}

.btn-danger {
  margin-left: auto;
  background-color: #ff5252;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 0.8rem;
  cursor: pointer;
}

.btn-danger:hover {
  background-color: #ff1744;
}

.empty-cart {
  text-align: center;
  color: #888;
  padding: 2rem 0;
}
</style>
