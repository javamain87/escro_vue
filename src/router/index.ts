import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/Main.vue')
  },
  {
    path: '/step1',
    name: 'Step1',
    component: () => import('@/views/Step1.vue')
  },
  {
    path: '/step2',
    name: 'Step2',
    component: () => import('@/views/Step2.vue')
  },
  {
    path: '/step3',
    name: 'Step3',
    component: () => import('@/views/Step3.vue')
  },
  {
    path: '/success',
    name: 'Success',
    component: () => import('@/views/Success.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
