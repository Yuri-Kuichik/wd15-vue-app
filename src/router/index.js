import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import PostPage from '@/pages/PostPage.vue';

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/HomePage.vue'),
    },
  ],
})

router.beforeEach( (to, from, next) => {
  console.log(to)

  const isAuth = true // метод проверки токена в куках
  if (!isAuth && to.name !== 'login') {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
