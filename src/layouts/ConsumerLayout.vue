<template>
  <div class="flex flex-col min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
    <!-- Header visível em toda a área de consumidor -->
    <header class="shadow-md sticky top-0 z-50">
      <Menubar :model="items" class="border-none rounded-none px-6 py-4 bg-white dark:bg-slate-800">
        <template #start>
          <router-link to="/" class="text-xl font-bold text-blue-800 dark:text-blue-400 no-underline mr-4">
            TIC-HUB Store
          </router-link>
        </template>
        <template #end>
          <div class="flex gap-4 items-center">
            <Button 
              :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'" 
              severity="secondary" 
              text 
              rounded 
              @click="toggleDarkMode" 
              v-tooltip.bottom="'Alternar Tema'"
            />
            
            <span v-if="store.auth.isAuthenticated" class="text-sm font-semibold dark:text-gray-200">
               {{ store.auth.role }}
            </span>
            
            <div class="flex gap-2">
              <Button v-if="!store.auth.isAuthenticated" label="Logar" icon="pi pi-user" size="small" @click="store.loginAs('USER')" />
              <Button v-if="store.auth.isAuthenticated" label="Sair" severity="danger" text size="small" icon="pi pi-sign-out" @click="store.logout()" />
            </div>
          </div>
        </template>
      </Menubar>
    </header>

    <main class="flex-1 w-full max-w-7xl mx-auto p-6">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- ÁREA DINÂMICA (Home, Details, Checkout) -->
        <section class="flex-[3]">
          <RouterView />
        </section>

        <!-- CARRINHO LATERAL (Sempre visível entre as trocas) -->
        <aside class="flex-[1] min-w-[350px]">
          <div class="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm sticky top-24 border border-gray-100 dark:border-slate-700">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-2xl font-black text-slate-800 dark:text-white flex items-center gap-3 m-0">
                <i class="pi pi-shopping-bag text-blue-600 dark:text-blue-400"></i>
                Carrinho
              </h2>
              <Button 
                v-if="cartItems.length > 0" 
                icon="pi pi-trash" 
                severity="danger" 
                text 
                rounded 
                v-tooltip.top="'Limpar Carrinho'" 
                @click="confirmClearCart" 
              />
            </div>
            
            <div class="bg-blue-600 dark:bg-blue-700 p-5 mb-8 rounded-xl shadow-lg shadow-blue-100 dark:shadow-none text-white">
               <div class="flex justify-between items-center mb-1">
                 <span class="text-blue-100 font-bold text-xs uppercase tracking-widest">Resumo</span>
                 <span class="text-xs">{{ itemsCount }} itens</span>
               </div>
               <div class="text-3xl font-black tracking-tight">R$ {{ finalPrice }}</div>
            </div>

            <div v-if="cartItems.length > 0">
              <DataView :value="cartItems" class="max-h-[500px] overflow-auto mb-6 pr-2">
                <template #list="slotProps">
                  <div class="flex flex-col gap-4">
                    <div v-for="item in slotProps.items" :key="item.product.id" class="p-4 rounded-xl border border-slate-50 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex flex-col gap-3">
                      <div class="flex justify-between items-start">
                        <div class="flex gap-3">
                           <div class="w-12 h-12 rounded-lg bg-white dark:bg-slate-700 border dark:border-slate-600 flex items-center justify-center">
                              <i class="pi pi-box text-blue-400"></i>
                           </div>
                           <div>
                              <div class="font-bold text-slate-800 dark:text-gray-100 text-sm leading-tight mb-1">{{ item.product.name }}</div>
                              <div class="text-xs font-semibold text-blue-600 dark:text-blue-400">R$ {{ item.product.price.toFixed(2) }}</div>
                           </div>
                        </div>
                        <Button icon="pi pi-times" severity="danger" text rounded class="w-8 h-8" @click="store.deleteFromCart(item.product.id)" />
                      </div>
                      
                      <div class="flex justify-between items-center mt-1 pt-3 border-t border-slate-100 dark:border-slate-700">
                        <InputNumber 
                          v-model="item.quantity" 
                          showButtons 
                          buttonLayout="horizontal" 
                          :min="1" 
                          @update:modelValue="(val) => store.updateCartQuantity(item.product.id, val!)"
                          inputClass="w-12 text-center text-sm font-bold p-1"
                          class="h-8"
                          incrementButtonClass="w-8"
                          decrementButtonClass="w-8"
                          incrementButtonIcon="pi pi-plus text-[10px]"
                          decrementButtonIcon="pi pi-minus text-[10px]"
                        />
                        <div class="text-sm font-black text-slate-700 dark:text-slate-300">
                          R$ {{ (item.product.price * item.quantity).toFixed(2) }}
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </DataView>
              
              <Button label="Finalizar Checkout" icon="pi pi-verified" severity="info" class="w-full py-4 font-bold tracking-wide shadow-lg shadow-blue-100 dark:shadow-none" @click="goToCheckout" />
            </div>
            
            <Card v-else class="border-2 border-dashed border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/30">
              <template #content>
                <div class="text-center py-6">
                  <div class="w-16 h-16 bg-white dark:bg-slate-800 rounded-full shadow-sm flex items-center justify-center mx-auto mb-4">
                    <i class="pi pi-shopping-bag text-3xl text-slate-300"></i>
                  </div>
                  <h3 class="text-lg font-bold text-slate-700 dark:text-slate-300 m-0">Sacola Vazia</h3>
                  <p class="text-sm text-slate-500 mt-2">Explore nossa vitrine e adicione produtos incríveis aqui.</p>
                </div>
              </template>
            </Card>
          </div>
        </aside>
      </div>
    </main>

    <!-- Global Components -->
    <ConfirmDialog />
    <Toast />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import DataView from 'primevue/dataview';
import InputNumber from 'primevue/inputnumber';
import Card from 'primevue/card';
import ConfirmDialog from 'primevue/confirmdialog';
import Toast from 'primevue/toast';
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import { store } from '../store';

const router = useRouter();
const confirm = useConfirm();
const toast = useToast();

const isDark = ref(false);

const items = [
  { label: 'Vitrine', icon: 'pi pi-home', command: () => router.push('/') },
  { label: 'Admin', icon: 'pi pi-shield', command: () => router.push('/admin') },
];

const cartItems = computed(() => store.cart.items);
const itemsCount = computed(() => store.cart.getTotalItems());
const finalPrice = computed(() => store.cart.getFinalPrice().toFixed(2));

const goToCheckout = () => {
  if (cartItems.value.length === 0) {
    toast.add({ severity: 'warn', summary: 'Carrinho Vazio', detail: 'Adicione itens antes de prosseguir.', life: 3000 });
    return;
  }
  router.push('/checkout');
};

const confirmClearCart = () => {
    confirm.require({
        message: 'Deseja realmente remover todos os itens do carrinho?',
        header: 'Limpar Carrinho',
        icon: 'pi pi-exclamation-triangle',
        rejectLabel: 'Cancelar',
        acceptLabel: 'Limpar',
        acceptProps: {
            severity: 'danger'
        },
        accept: () => {
            cartItems.value.forEach(item => {
              store.deleteFromCart(item.product.id);
            });
            toast.add({ severity: 'info', summary: 'Carrinho Limpo', detail: 'Todos os itens foram removidos.', life: 3000 });
        }
    });
};

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add('p-dark');
  } else {
    document.documentElement.classList.remove('p-dark');
  }
};

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('p-dark');
});
</script>

<style scoped>
:deep(.p-dataview .p-dataview-content) {
  background: transparent;
}
</style>
