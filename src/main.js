import Vue from 'vue'
import VueSwal from 'vue-swal'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

Vue.use(VueSwal)
Vue.config.productionTip = false



new Vue({
  store,
  VueSwal,
  router,
  render: h => h(App),
}).$mount('#app')
