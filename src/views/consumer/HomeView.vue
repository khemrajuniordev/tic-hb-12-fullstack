<template>
  <div class="bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 transition-colors">
    <div class="flex justify-between items-end mb-6 border-b pb-4">
      <div>
        <h2 class="text-3xl font-extrabold text-gray-800 dark:text-gray-100">Produtos em Destaque</h2>
        <p class="text-gray-500 dark:text-gray-400 mt-1">Bem-vindo à TIC-HUB. Aproveite nossas ofertas!</p>
      </div>
    </div>

    <!-- Layout Grid Tailwind Responsivo -->
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCard
        v-for="product in store.products"
        :key="product.id"
        :product="product"
        @add-to-cart="(p) => store.addToCart(p)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { store } from '../../store';
import ProductCard from '../../components/ProductCard.vue';
</script>
