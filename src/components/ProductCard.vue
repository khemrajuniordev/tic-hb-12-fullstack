<template>
  <div class="product-card">
    <div class="category">{{ product.category.name }}</div>
    <h3 class="name">{{ product.name }}</h3>
    <div class="price">R$ {{ product.price.toFixed(2) }}</div>
    <button @click="addToCart" class="add-button">Adicionar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { Product } from '../model/product.model';

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product);
    }
  }
});
</script>

<style scoped>
.product-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-2px);
}

.category {
  font-size: 0.8rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.name {
  margin: 0;
  font-size: 1.2rem;
  color: #333;
}

.price {
  font-size: 1.25rem;
  font-weight: bold;
  color: #2c3e50;
  margin-top: auto;
}

.add-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 8px;
  transition: background-color 0.2s;
}

.add-button:hover {
  background-color: #45a049;
}
</style>
