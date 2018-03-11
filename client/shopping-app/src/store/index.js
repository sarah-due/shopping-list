import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  products: [],
  items: []
}

const actions = {
  LOAD_PRODUCTS ({ commit }) {
    axios.get('/api/products').then((response) => {
      commit('SET_PRODUCTS', { products: response.data.products })
    }, (err) => {
      console.log(err)
    })
  },

  LOAD_ITEMS ({ commit }) {
    axios.get('/api/items').then((response) => {
      commit('SET_ITEMS', { items: response.data.items })
    }, (err) => {
      console.log(err)
    })
  }
}

const mutations = {
  SET_PRODUCTS: (state, { products }) => {
    state.products = products
  },

  SET_ITEMS: (state, { items }) => {
    state.items = items
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
