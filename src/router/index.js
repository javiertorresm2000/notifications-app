import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../views/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: '/categories',
          name: 'categories',
          component: () => import('../views/CategoriesView.vue'),
        },
        {
          path: '/channels',
          name: 'channels',
          component: () => import('../views/ChannelsView.vue'),
        },
        {
          path: '/users',
          name: 'users',
          component: () => import('../views/UsersView.vue'),
        },
      ]
    }
  ]
})

export default router
