import Vue from 'vue'

import router from './router'
import store from './store'

import App from './App'
import Home from './components/Home'
import ItemList from './components/ItemList'
import ProductList from './components/ProductList'

Vue.config.productionTip = false

Vue.component('home', Home)
Vue.component('item-list', ItemList)
Vue.component('product-list', ProductList)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
