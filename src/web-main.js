import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

const config = {
  render: h => h(App),
  router
}

Vue.use(VueRouter)
const app = new Vue(config)
app.$mount('#app')
