<template>
  <div class="flex min-h-screen bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
    <!-- Menu Lateral Exclusivo do Dashboard Administrativo -->
    <aside class="w-64 bg-slate-900 text-white flex flex-col shadow-xl z-20">
      <div class="p-6 border-b border-slate-800 bg-slate-950 flex flex-col items-center">
        <i class="pi pi-shop text-4xl mb-3 text-blue-400"></i>
        <h2 class="text-xl font-bold tracking-wider uppercase">Admin Store</h2>
      </div>
      
      <div class="flex-1 p-4">
        <Menu :model="sidebarItems" class="w-full bg-transparent border-none text-white text-sm" />
      </div>
      
      <div class="p-4 border-t border-slate-800">
        <Button label="Voltar à Vitrine" icon="pi pi-arrow-left" severity="secondary" outlined class="w-full text-white" @click="goToStore" />
      </div>
    </aside>

    <!-- Estrutura Principal do Painel -->
    <main class="flex-1 flex flex-col">
      <header class="bg-white dark:bg-slate-900 px-8 py-4 shadow-sm flex items-center justify-between z-10 sticky top-0 border-b dark:border-slate-800">
        <div class="flex items-center gap-4">
          <!-- Uso dos Breadcrumbs Dinâmicos -->
          <Breadcrumb :home="home" :model="breadcrumbModel" class="border-none bg-transparent p-0 text-sm" />
        </div>
        <div class="flex items-center gap-4">
          <span class="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-bold shadow-inner border dark:border-blue-800">
            <i class="pi pi-user mr-1"></i> ADMIN LOGGED
          </span>
        </div>
      </header>

      <!-- View com Rotas Aninhadas Administrativas -->
      <section class="p-8 pb-12 overflow-y-auto">
        <RouterView />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Menu from 'primevue/menu';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';

const router = useRouter();
const route = useRoute();

// Usando rotas aninhadas via links do vue-router (push)
const sidebarItems = [
  { label: 'Gestão de Produtos', icon: 'pi pi-box', command: () => router.push('/admin') },
  { label: 'Relatórios de Vendas', icon: 'pi pi-chart-bar', command: () => router.push('/admin/reports') }
];

const home = { icon: 'pi pi-home', command: () => router.push('/admin') };

// Computar caminho de rato dinamicamente usando metadata configurada no router/index.ts
const breadcrumbModel = computed(() => {
  return (route.meta.breadcrumb as any) || [{ label: 'Painel Geral' }];
});

const goToStore = () => router.push('/');
</script>

<style>
/* Estilo utilitário para itens do menu fluirem corretamente no tema dark customizado */
.p-menu .p-menuitem-link {
    background: transparent !important;
    color: #e2e8f0 !important;
}
.p-menu .p-menuitem-link:hover {
    background: #1e293b !important;
    color: #ffffff !important;
}
.p-menu .p-menuitem-icon {
    color: #94a3b8 !important;
}
</style>
