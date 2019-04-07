import Vue from 'vue'

import router from './router'

import iview from 'iview'
import 'iview/dist/styles/iview.css'
import './common/themes/iview.less'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(iview, {
  transfer: true,
  size: 'large',
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
