import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import store from './store'
import './web.css'

Vue.config.productionTip = false

const config = {
  render: h => h(App),
  router,
  store
}

Vue.mixin({
  // beforeCreate () {
  //   console.log(this);
  // },

  beforeDestroy () {
    if (this.scrollHandler) {
      document.removeEventListener('scroll', this.scrollHandler)
    }
  },

  created () {
    // page
    if (!this.$options._componentTag) {
      if (this.$options.onPageScroll) {
        this.scrollHandler = () => {
          this.$options.onPageScroll.call(this)
        }
        document.addEventListener('scroll', this.scrollHandler)
      }

    }
  }
})

Vue.use(VueRouter)
const app = new Vue(config)
app.$mount('#app')
