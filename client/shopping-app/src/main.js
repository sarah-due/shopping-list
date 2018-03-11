import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import ProductList from './components/ProductList'
import ItemList from './components/ItemList'
import router from './router'

Vue.config.productionTip = false

Vue.component('product-list', ProductList)
Vue.component('home', Home)
Vue.component('item-list', ItemList)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
