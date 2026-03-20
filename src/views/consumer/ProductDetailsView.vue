<template>
  <div class="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto ring-1 ring-gray-100 relative overflow-hidden">
    <Button label="Voltar" icon="pi pi-arrow-left" text severity="info" class="mb-6 z-10 relative" @click="router.back()" />
    
    <div v-if="product" class="flex flex-col md:flex-row gap-10">
      <div class="flex-1 bg-slate-100 rounded-2xl flex items-center justify-center min-h-[300px] border border-slate-200">
        <i class="pi pi-image text-8xl text-slate-300"></i>
      </div>
      
      <div class="flex-[2] flex flex-col justify-center gap-4">
        <span class="text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full uppercase self-start shadow-sm tracking-wide">
          {{ product.category.name }}
        </span>
        
        <h2 class="text-4xl font-black text-gray-900 leading-tight">{{ product.name }}</h2>
        
        <div class="bg-green-50 rounded-xl p-4 border border-green-100 shadow-sm w-fit mt-2">
            <p class="text-4xl font-extrabold text-green-700 m-0">R$ {{ product.price.toFixed(2) }}</p>
        </div>
        
        <p class="text-gray-600 leading-relaxed mt-4 text-lg">
          Este é o super modelo {{ product.name }} de qualidade premium. Esta página demonstra 
          o uso de rotas dinâmicas capturando o ID e validando as informações no sistema utilizando guards.
        </p>

        <div class="flex gap-4 mt-8">
          <Button label="Adicionar Múltiplos" icon="pi pi-shopping-cart" size="large" severity="success" class="flex-1 shadow-md shadow-green-200" @click="addAndGoToHome" />
        </div>
      </div>
    </div>
    
    <div v-else class="text-center py-20 flex flex-col items-center">
      <i class="pi pi-exclamation-circle text-6xl text-red-400 mb-4 block"></i>
      <h2 class="text-3xl font-bold text-gray-700 m-0">Produto Insatisfeito</h2>
      <p class="text-gray-500 mt-2">O produto solicitado pode não estar ativo nas rotas do momento.</p>
      <Button label="Explorar Loja" icon="pi pi-home" class="mt-8" @click="router.push('/')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Button from 'primevue/button';
import { store } from '../../store';

const route = useRoute();
const router = useRouter();

const productId = computed(() => Number(route.params.id));
const product = computed(() => store.products.find(p => p.id === productId.value));

const addAndGoToHome = () => {
    if (product.value) {
        store.addToCart(product.value);
        router.push('/');
    }
}
</script>
