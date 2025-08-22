import { createRouter, createWebHistory } from 'vue-router';
import SimpleFormView from '@/views/SimpleFormView.vue';
import AdvancedFormView from '@/views/AdvancedFormView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'simple-form',
      component: SimpleFormView
    },
    {
      path: '/advanced',
      name: 'advanced-form',
      component: AdvancedFormView
    }
  ]
});

export default router;