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
  SET_PRODUCTS: (state, {products}) => {
    state.products = products
  },

  SET_ITEMS: (state, {items}) => {
    state.items = items
  },

  ADD_ITEM: (state, newItemData) => {
    let matches = 0
    state.items.forEach((item) => {
      if (item.productData[0].productId === newItemData.productId) {
        item.itemQuantity += 1
        matches += 1
      }
    })
    if (matches === 0) {
      state.items.push({'itemId': state.items.length, 'itemQuantity': 1, 'productData': [newItemData]})
    }
  },

  REMOVE_ITEM: (state, itemToRemove) => {
    state.items.forEach((item, index) => {
      if (item.productData[0].productId === itemToRemove.productData[0].productId) {
        if (item.itemQuantity === 1) {
          state.items.splice(index, 1)
        } else {
          item.itemQuantity -= 1
        }
      }
    })
  },

  ADD_PRODUCT: (state, newProduct) => {
    state.products.push({
      'productTitle': newProduct.newProductTitle,
      'productImg': newProduct.newProductImg,
      'productPrice': newProduct.newProductPrice
    })
  },

  UPDATE_PRODUCT: (state, updatedProductData) => {
    state.products.forEach((product) => {
      if (product.productId === updatedProductData.productId) {
        product.productTitle = updatedProductData.productTitle
        product.productImg = updatedProductData.productImg
        product.productPrice = updatedProductData.productPrice
      }
    })

    state.items.forEach((item) => {
      let itemData = item.productData[0]
      if (itemData.productId === updatedProductData.productId) {
        itemData.productTitle = updatedProductData.productTitle
        itemData.productImg = updatedProductData.productImg
        itemData.productPrice = updatedProductData.productPrice
      }
    })
  },

  REMOVE_PRODUCT: (state, productToRemove) => {
    state.products.forEach((product, index) => {
      if (product.productId === productToRemove.productId) {
        state.products.splice(index, 1)
      }
    })
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
