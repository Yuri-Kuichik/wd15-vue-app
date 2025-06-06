import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth';

import HomePage from '../pages/HomePage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import PostPage from '@/pages/PostPage.vue';
import UserPage from '@/pages/UserPage.vue';
import CounterPage from '@/pages/CounterPage.vue';
import CalculatorPage from '@/pages/CalculatorPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    { 
      path: '/posts/:id',
      name: 'post', 
      component: PostPage 
    },
    {
      path: '/user',
      name: 'user',
      component: UserPage
    },
    {
      path: '/counter',
      name: 'counter',
      component: CounterPage
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: CalculatorPage
    },

  ],
})

router.beforeEach( (to, from, next) => {
  const authStore = useAuthStore()
  console.log(to)
  console.log('isAuth: ', authStore.isAuth())

  if (!authStore.isAuth() && to.name !== 'login') {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
