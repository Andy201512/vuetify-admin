import Vue from 'vue'

import Router from 'vue-router'

import { CheckLogin } from '@/api/api.js'

Vue.use(Router)

const routes = [
  {
    path: '/login', name: 'login', component: () => import ('@/views/Login'),
  },
  {
    path: '/', component: () => import ('@/views/Layout'),
    redirect: { name: 'login' },
    children: [
      {path: 'dashboard', name: 'dashboard', component: () => import ('@/views/Dashboard')},
      {path: 'table', name: 'table', component: () => import ('@/views/Table')},
      {path: 'carousels', name: 'carousels', component: () => import ('@/views/Carousels')},
      {path: 'form', name: 'form', component: () => import ('@/views/Form')},
    ],
  },
  {
    path: '/404', name: 'notFound', component: () => import ('@/views/404'),
  },
  {
    path: '*', redirect: '/404',
  },
]

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path === '/login'){
    next()
  }else{
    CheckLogin().then((data) => {
      if(data === false) {
        next({ name: 'login'})
      }else{
        next()
      }
    })
  }
})

export default router
