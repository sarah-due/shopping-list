<template>
  <div id='update-product-modal' v-if="showModal">
    <div id='modal-container'>
      <h3 class='form-header'>Update Product</h3>
      <div class='form-container'>
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
          <button class='update-button' type='submit'>Update Item</button>
          <button class='cancel-button' v-on:click="handleCancelButton()">Cancel</button>
        </form>
      </div>
    </div>
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

<style scoped>

#update-product-modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: rgba(54,69,79, 0.8);
}

#modal-container {
  width: 80%;
  max-width: 800px;
  height: 80%;
  max height: 400px;
  margin: 10em auto 0;
  border-radius: 10px;
  background-color: #FFF;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 8px 8px rgba(0,0,0,0.23);
}

.form-header {
  font-family: 'Lato', sans-serif;
  text-align: center;
  padding-top: 5rem;
}

.form-container {
  max-width: 600px;
  margin: auto;
  font-family: 'Open Sans', sans-serif;
}

button {
  font-size: 20px;
  cursor: pointer;
  color: #FFF;
  height: 2em;
  border-radius: 5px;
  margin: auto;
}

.update-button {
  background-color: #247BA0;
}

.cancel-button {
  background-color: #EB783F;
}
</style>
