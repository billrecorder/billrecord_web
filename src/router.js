import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('./pages/index'),
  },
  {
    path: '/login',
    component: () => import('./pages/login'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes, // (缩写) 相当于 routes: routes
})

export default router
