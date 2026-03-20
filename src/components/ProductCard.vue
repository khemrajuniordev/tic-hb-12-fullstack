<template>
  <Card class="hover:shadow-lg transition-transform duration-200 hover:-translate-y-1 h-full flex flex-col justify-between dark:bg-gray-800 dark:border-gray-700">
    <template #title>
      <div class="text-xs text-gray-500 uppercase tracking-wide dark:text-gray-400">
        {{ product.category.name }}
      </div>
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-1 m-0">
        {{ product.name }}
      </h3>
    </template>
    
    <template #content>
      <div class="text-2xl font-bold text-blue-900 dark:text-blue-300">
        R$ {{ product.price.toFixed(2) }}
      </div>
    </template>
    
    <template #footer>
      <Button 
        label="Adicionar" 
        icon="pi pi-cart-plus" 
        class="w-full mt-4" 
        severity="success" 
        @click="addToCart" 
      />
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { Product } from '../model/product.model';
import Card from 'primevue/card';
import Button from 'primevue/button';

export default defineComponent({
  name: 'ProductCard',
  components: {
    Card,
    Button
  },
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
/* Estilos Customizados foram removidos para a Etapa 2 de acordo com a exigência (apenas utilitários Tailwind) */
</style>
