import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/base.css'
import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.config.productionTip = false
Vue.prototype.$http = axios
axios.interceptors.request.use(config => {
  Nprogress.start()
  return config
})
axios.interceptors.response.use(config => {
  Nprogress.done()
  return config
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
