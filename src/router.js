import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './pages/index/index.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Index },
]

const router = new VueRouter({
  mode: 'history',
  routes, // (缩写) 相当于 routes: routes
})

export default router
