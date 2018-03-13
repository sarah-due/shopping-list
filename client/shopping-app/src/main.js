import Vue from 'vue'

import router from './router'
import store from './store'

import App from './App'
import Home from './components/Home'
import ItemList from './components/ItemList'
import ProductList from './components/ProductList'
import UpdateProductModal from './components/UpdateProductModal'

Vue.config.productionTip = false

export const eventBus = new Vue()

Vue.component('home', Home)
Vue.component('item-list', ItemList)
Vue.component('product-list', ProductList)
Vue.component('update-product-modal', UpdateProductModal)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

export default eventBus
