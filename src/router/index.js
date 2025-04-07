import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import CounterPage from "../pages/CounterPage.vue";
import CalculatorPage from "../pages/CalculatorPage.vue";
import PostPage from "../pages/PostPage.vue";


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
      path: '/counter',
      name: 'counter',
      component: CounterPage,
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: CalculatorPage,
    },
    {
      path: '/posts/:id',
      name: 'post',
      component: PostPage,
    }
  ],
})

//обновление страницы или изменение path
router.beforeEach((to, from, next) => {
  const isAuth = true; //метод проверки токена в куках
  if (!isAuth && to.name !== 'login') {
    next({name: 'login'});
  }
  next();
})

export default router
