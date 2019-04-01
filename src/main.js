import Vue from 'vue'
import VueRouter from 'vue-router'
import iview from 'iview'
import 'iview/dist/styles/iview.css'

import App from './App.vue'
import Index from './pages/index/index.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(iview, {
  transfer: true,
  size: 'large',
})

const routes = [
  { path: '/', component: Index },
]

const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
