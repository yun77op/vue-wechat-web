import VueRouter from 'vue-router'
import PageIndex from './pages/index'
import PageDetail from './pages/detail'

const routes = [
  { path: '/', component: PageIndex },
  { path: '/detail', component: PageDetail }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
