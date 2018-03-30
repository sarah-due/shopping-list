import Vue from 'vue'
import Router from 'vue-router'

import About from '@/components/About'
import Home from '@/components/shoppingComponent/Home'
import NotFound from '@/components/NotFound'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '*', component: NotFound }
]

Vue.use(Router)

export default new Router({
  routes,
  mode: 'history'
})
