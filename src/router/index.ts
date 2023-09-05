import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/currency',
      name: 'currency',
      //lazy load currency charts module
      component: () => import('../views/CurrencyView.vue')
    }
  ]
})

export default router
