import { createRouter, createWebHistory } from 'vue-router';
import { store } from '../store';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/ConsumerLayout.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../views/consumer/HomeView.vue')
        },
        {
          path: 'product/:id',
          name: 'ProductDetails',
          component: () => import('../views/consumer/ProductDetailsView.vue')
        },
        {
          path: 'checkout',
          name: 'Checkout',
          component: () => import('../views/consumer/CheckoutView.vue'),
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/admin',
      component: () => import('../layouts/AdminLayout.vue'),
      meta: { requiresAdmin: true },
      children: [
        {
          path: '',
          name: 'AdminDashboard',
          component: () => import('../views/admin/AdminDashboardView.vue'),
          meta: {
            breadcrumb: [{ label: 'Admin', to: '/admin' }, { label: 'Produtos' }]
          }
        },
        {
          path: 'reports',
          name: 'AdminReports',
          component: () => import('../views/admin/AdminReportsView.vue'),
          meta: {
            breadcrumb: [{ label: 'Admin', to: '/admin' }, { label: 'Relatórios' }]
          }
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.auth.isAuthenticated;
  const isAdmin = store.auth.role === 'ADMIN';

  if (to.meta.requiresAdmin && !isAdmin) {
    alert('Acesso restrito a administradores.');
    return next('/');
  }

  if (to.meta.requiresAuth && !isAuthenticated) {
    alert('Você precisa estar logado para acessar o checkout.');
    return next('/');
  }

  next();
});

export default router;
