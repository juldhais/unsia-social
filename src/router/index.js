// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/profile',
    component: () => import('@/views/Profile.vue')
  },
  {
    path: '/follow',
    component: () => import('@/views/Follow.vue')
  },
  {
    path: '/chat',
    component: () => import('@/views/Chat.vue')
  },
  {
    path: '/channel',
    component: () => import('@/views/Channel.vue')
  },
  {
    path: '/posting',
    component: () => import('@/views/Posting.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
