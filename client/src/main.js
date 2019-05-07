import Vue from 'vue'

import Vuex from 'vuex'
import VueRouter from 'vue-router'

import App from './App.vue'
import routes from './routes'
import store from './store'

Vue.use(Vuex)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({ routes })

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
