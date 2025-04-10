import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/counter',
      name: 'counter',
      component: HomePage
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: HomePage
    }
  ]
})

export default router