import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { Layouts } from '@/layouts';
import { layoutMiddleware } from './layout.middleware';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: Layouts.default
      }
    },
    {
      path: '/catalog/product/:id',
      name: 'product',
      component: () => import('../views/ProductView.vue'),
      meta: {
        layout: Layouts.default
      }
    }
  ]
});

router.beforeEach(layoutMiddleware);

export default router;
