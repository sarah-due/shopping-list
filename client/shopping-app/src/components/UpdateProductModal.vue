<template>
  <div id='update-product-modal' v-if="showModal">
    <h3>Update Product</h3>
    <form @submit.prevent='handleSubmit' id=''>
      <div class='update-form-section'>
        <label>Name of Product: </label>
        <input type='text' placeholder='Name' v-model='product.productTitle'>
      </div>
      <div class='update-form-section'>
        <label>Link to Product Image: </label>
        <input type='text' placeholder='Link' v-model='product.productImg'>
      </div>
      <div class='update-form-section'>
        <label>Price of Product: </label>
        <span>$</span><input type='text' placeholder='Price' v-model='product.productPrice' />
      </div>
      <p>{{ formMessage }}</p>
      <button type='submit'>Update Item</button>
      <button v-on:click="handleCancelButton()">Cancel</button>
    </form>
  </div>
</template>

<script>
import eventBus from '../main'

export default {
  name: 'UpdateProductModal',
  data () {
    return {
      showModal: false,
      product: {
        productId: '',
        productTitle: '',
        productImg: '',
        productPrice: ''
      },
      formMessage: ''
    }
  },

  beforeMount () {
    this.$store.dispatch('LOAD_PRODUCTS')
    eventBus.$on('SEND_PRODUCT_DATA', (data) => {
      this.showModal = true
      this.product.productId = data.productId
      this.product.productTitle = data.productTitle
      this.product.productImg = data.productImg
      this.product.productPrice = data.productPrice
    })
  },

  methods: {
    handleSubmit () {
      if ((this.product.productTitle === '') ||
          (this.product.productImg === '') ||
          (this.product.productPrice === '')) {
        this.formMessage = 'Please complete form before submitting.'
      } else {
        this.$store.commit('UPDATE_PRODUCT', this.product)
        this.showModal = false
        this.resetForm()
      }
    },

    handleCancelButton () {
      this.resetForm()
      this.showModal = false
    },

    resetForm () {
      this.productId = ''
      this.productImg = ''
      this.productPrice = ''
    }
  },

  watch: {
    productTitle (value) {
      this.product.productTitle = value
    },

    productImg (value) {
      this.product.productImg = value
    },

    productPrice (value) {
      this.product.productPrice = value
    }
  }
}

</script>

<style>

button {
  font-size: 24px;
  background-color: #A52026;
  cursor: pointer;
  color: #FFF;
  height: 2em;
  border-radius: 5px;
  margin: auto;
}
</style>
