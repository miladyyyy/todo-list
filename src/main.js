import Vue from 'vue'
import App from './App.vue'

import store from '@/store'

import './styles/base.css'
import './styles/index.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
