<template>
  <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
    <div class="flex justify-between items-center mb-8 pb-4 border-b border-slate-200">
      <div class="flex items-center gap-4">
        <div class="bg-blue-600 p-3 rounded-xl shadow-lg shadow-blue-200 text-white">
          <i class="pi pi-box text-2xl"></i>
        </div>
        <div>
          <h2 class="text-2xl font-black text-slate-800 m-0">Catálogo de Produtos</h2>
          <p class="text-sm font-medium text-slate-500 mt-1 m-0">Gerencie todos os itens disponíveis na loja do Vue Router</p>
        </div>
      </div>
      <Button label="Adicionar Módulo" icon="pi pi-plus" severity="info" class="shadow-sm font-bold tracking-wide" />
    </div>

    <!-- Data Table de Gestão Otimizada com PrimeVue -->
    <div class="card bg-white rounded-xl shadow-inner border border-slate-100 flex-1 overflow-hidden">
        <DataTable 
          :value="store.products" 
          stripedRows 
          hoverHover 
          tableStyle="min-width: 50rem"
          class="p-datatable-sm"
        >
          <Column field="id" header="CÓD" class="font-mono text-slate-500 p-4" headerStyle="width: 5rem"></Column>
          
          <Column field="name" header="Produto">
            <template #body="slotProps">
              <span class="font-bold text-slate-700 text-lg">{{ slotProps.data.name }}</span>
            </template>
          </Column>
          
          <Column field="category.name" header="Sessão">
            <template #body="slotProps">
              <span class="bg-indigo-50 text-indigo-700 font-semibold px-3 py-1 rounded-full text-xs uppercase tracking-wider border border-indigo-100 inline-block">
                {{ slotProps.data.category.name }}
              </span>
            </template>
          </Column>
          
          <Column field="price" header="Valor (R$)">
            <template #body="slotProps">
              <span class="font-black text-slate-800 tracking-tight">R$ {{ slotProps.data.price.toFixed(2) }}</span>
            </template>
          </Column>
          
          <Column header="Ações Rápidas" headerStyle="width: 10rem">
            <template #body>
              <div class="flex gap-1 justify-end">
                <Button icon="pi pi-pencil" text rounded severity="secondary" v-tooltip.top="'Editar'" class="w-10 h-10" />
                <Button icon="pi pi-trash" text rounded severity="danger" v-tooltip.top="'Deletar Módulo'" class="w-10 h-10" />
              </div>
            </template>
          </Column>
        </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import { store } from '../../store';
</script>

<style>
/* Reset dos fundos da datatable pra Tailwind assumir as bordas fluidas */
.p-datatable .p-datatable-thead > tr > th {
    background-color: #f8fafc !important;
    color: #475569 !important;
    font-size: 0.75rem !important;
    text-transform: uppercase !important;
    letter-spacing: 0.05em !important;
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
    border-bottom: 2px solid #e2e8f0 !important;
}
</style>
