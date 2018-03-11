import Vue from 'vue'
import Vuex from 'vuex'

import { fetchProducts } from '@/../api/ProductList'
import { fetchItemList } from '@/../api/ItemList'

Vue.use(Vuex)

const state = {
  products: [],
  items: []
}

const actions = {
  loadProducts (data) {
    return fetchProducts()
      .then((response) => data.commit('setProducts', { products: response }))
  },

  loadItems (data) {
    return fetchItemList()
      .then((response) => data.commit('setItems', { items: response }))
  }

}

const mutations = {
  setProducts (state, payload) {
    state.products = payload.products
  },

  setItems (state, payload) {
    state.items = payload.items
  }
}

const getters = {

}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

export default store
