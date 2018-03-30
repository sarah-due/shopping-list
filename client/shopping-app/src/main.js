import Vue from 'vue'

import router from './router'
import store from './store'

import App from './App'

Vue.config.productionTip = false

export const eventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

export default eventBus
