<template>
  <div class="product-card">
    <div class="category-badge">{{ product.category.name }}</div>
    <h3 class="product-name">{{ product.name }}</h3>
    <p class="product-price">R$ {{ product.price.toFixed(2) }}</p>
    <button class="btn-add" @click="$emit('add-to-cart', product)">
      Adicionar ao carrinho
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { Product } from '../model/product.model'

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  emits: ['add-to-cart'],
})
</script>

<style scoped>
.product-card {
  background: #fff;
  border-radius: 10px;
  padding: 1.2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.category-badge {
  font-size: 0.75rem;
  background: #e8f4fd;
  color: #1a73e8;
  padding: 2px 8px;
  border-radius: 20px;
  width: fit-content;
}
.product-name { font-size: 1rem; font-weight: 600; color: #222; }
.product-price { font-size: 1.1rem; font-weight: 700; color: #2d8a4e; }
.btn-add {
  margin-top: auto;
  padding: 0.5rem;
  background: #1a73e8;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
}
.btn-add:hover { background: #1558b0; }
</style>
