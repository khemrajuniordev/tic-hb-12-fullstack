<template>
  <div class="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700 max-w-3xl mx-auto mt-6">
    <div class="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6">
      <i class="pi pi-wallet text-4xl text-blue-600 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-full"></i>
      <div>
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white m-0">Finalizar Compra</h2>
        <p class="text-gray-500 dark:text-gray-400 m-0 mt-1">Ambiente seguro verificado por Guard Routes</p>
      </div>
    </div>
    
    <div v-if="cartItems.length > 0">
      <div class="bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6 mb-8 shadow-inner">
        <ul class="divide-y divide-slate-200 dark:divide-slate-700 m-0 p-0">
          <li v-for="item in cartItems" :key="item.product.id" class="py-4 flex justify-between items-center group">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-white dark:bg-slate-800 rounded-lg shadow-sm border dark:border-slate-700 flex items-center justify-center">
                 <i class="pi pi-box text-blue-300"></i>
              </div>
              <div>
                <h4 class="font-bold text-slate-800 dark:text-gray-100 m-0">{{ item.product.name }}</h4>
                <span class="text-slate-500 dark:text-slate-400 text-sm font-medium">Qtd: {{ item.quantity }} x R$ {{ item.product.price.toFixed(2) }}</span>
              </div>
            </div>
            <span class="font-black text-xl text-slate-700 dark:text-white">R$ {{ (item.quantity * item.product.price).toFixed(2) }}</span>
          </li>
        </ul>
      </div>
      
      <div class="bg-blue-600 p-8 flex justify-between items-center rounded-xl shadow-xl shadow-blue-200">
        <div>
           <span class="text-blue-100 uppercase tracking-widest font-bold text-sm">TOTAL FINAL</span>
        </div>
        <span class="text-5xl font-black text-white">R$ {{ finalPrice }}</span>
      </div>

      <div class="mt-10 flex flex-col sm:flex-row justify-end gap-4 border-t pt-8">
        <Button label="Voltar à Vitrine" severity="secondary" outlined size="large" icon="pi pi-arrow-left" @click="router.push('/')" />
        <Button label="Pagar Agora" icon="pi pi-verified" severity="success" size="large" class="shadow-md shadow-green-200" @click="confirmPayment" />
      </div>
    </div>
    
    <div v-else class="text-center py-16 flex flex-col items-center">
      <i class="pi pi-times-circle text-7xl text-gray-300 mb-6 block"></i>
      <h3 class="text-2xl font-bold text-gray-800 m-0">Nenhum Pedido</h3>
      <p class="text-gray-500 mt-2 max-w-md">Seu checkout parece vazio. Adicione itens antes de realizar o pagamento final.</p>
      <Button label="Ver Produtos" class="mt-8 shadow-md" size="large" @click="router.push('/')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import Button from 'primevue/button';
import { store } from '../../store';

const router = useRouter();
const cartItems = computed(() => store.cart.getItems());
const finalPrice = computed(() => store.cart.getFinalPrice().toFixed(2));

const confirmPayment = () => {
  if (confirm('Sua compra processará o valor inteiro. Realizar debito?')) {
      alert('Compra executada! Parábens!');
      store.cart.getItems().forEach(item => {
        store.deleteFromCart(item.product.id);
      });
      router.push('/');
  }
};
</script>
