import Vue from 'vue'

import router from './router'
import store from './store'

import App from './App'
import Home from './components/Home'
import ProductList from './components/ProductList'
import ItemList from './components/ItemList'

Vue.config.productionTip = false

Vue.component('product-list', ProductList)
Vue.component('home', Home)
Vue.component('item-list', ItemList)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
