<template>
  <Card class="hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between group border-0 bg-white dark:bg-slate-800 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 overflow-hidden transform hover:-translate-y-1">
    <template #title>
      <div class="p-2 pb-0">
        <div class="text-[10px] text-blue-500 font-black uppercase tracking-widest mb-2 bg-blue-50 dark:bg-blue-900/30 w-fit px-2 py-0.5 rounded-full">
          {{ product.category.name }}
        </div>
        <h3 class="text-xl font-black text-slate-800 dark:text-gray-100 leading-tight m-0 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {{ product.name }}
        </h3>
      </div>
    </template>
    
    <template #content>
      <div class="px-2">
        <div class="flex items-end mt-4">
          <span class="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">
            <span class="text-sm font-bold text-slate-400 dark:text-slate-500 mr-1 uppercase">R$</span>{{ product.price.toFixed(2) }}
          </span>
        </div>
      </div>
    </template>
    
    <template #footer>
      <div class="flex flex-col gap-2 p-2 pt-4">
        <Button 
          label="Comprar Agora" 
          icon="pi pi-cart-plus" 
          class="w-full font-bold shadow-md shadow-blue-100 dark:shadow-none" 
          severity="info" 
          @click="addToCart" 
        />
        
        <router-link :to="`/product/${product.id}`" class="w-full">
          <Button label="Detalhes" icon="pi pi-search" class="w-full text-xs" severity="secondary" text />
        </router-link>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Product } from '../model/product.model';
import Card from 'primevue/card';
import Button from 'primevue/button';

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
});

const emit = defineEmits(['add-to-cart']);

const addToCart = () => {
  console.log("Emitting add-to-cart event for product:", props.product.name);
  emit('add-to-cart', props.product);
};
</script>
