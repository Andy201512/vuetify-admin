import Vue from 'vue'

import Router from 'vue-router'

import Layout from '@/views/Layout'

Vue.use(Router)

const routes = [
  {path: '/', component: Layout},
]

const router = new Router({
  routes
})

export default router
