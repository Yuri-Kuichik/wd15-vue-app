import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import CounterPage from "../pages/CounterPage.vue";
import CalculatorPage from "../pages/CalculatorPage.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/counter',
      name: 'counter',
      component: CounterPage,
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: CalculatorPage,
    },
  ],
})

export default router
