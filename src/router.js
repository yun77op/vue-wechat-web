import VueRouter from 'vue-router'
import PageIndex from './pages/index'
import PageLogs from './pages/logs'

const routes = [
  { path: '/', component: PageIndex },
  { path: '/logs', component: PageLogs }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
