import Vue from 'vue'

import Router from 'vue-router'

import Layout from '@/views/Layout'
import Welcome from '@/views/Welcome'
import Table from '@/views/Table'
import Carousels from '@/views/Carousels'
import Form from '@/views/Form'

Vue.use(Router)

const routes = [
  {
    path: '/', component: Layout,
    children: [
      {path: 'dashboard', component: Welcome},
      {path: 'table', component: Table},
      {path: 'carousels', component: Carousels},
      {path: 'form', component: Form},
    ],
    redirect: '/dashboard'
  },
]

const router = new Router({
  routes
})

export default router
