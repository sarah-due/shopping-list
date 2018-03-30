<template>
  <div id='product-container'>
    <div class='product-header-container'>
      <div class='product-header'>
        <h1>Shopping List</h1>
        <hr/>
      </div>
      <div class='product-form-header-wrapper'>
        Add a New Product
        <div class='add-product-tooltip'>
          <i class='fas fa-info-circle info-circle'></i>
          <span class='add-product-tooltip-text'>Here's where you can add new products and information to your list!</span>
        </div>
      </div>
      <form @submit.prevent='handleSubmit' id='add-product-form'>
        <div class='product-form-section'>
          <label>Name of Product</label>
          <input type='text' placeholder='Name' v-model='newProduct.newProductTitle'>
        </div>
        <div class='product-form-section'>
          <label>Link to Product Image</label>
          <input type='text' placeholder='Link' v-model='newProduct.newProductImg'>
        </div>
        <div class='product-form-section'>
          <label>Price of Product</label>
          <input type='text' placeholder='Price' v-model='newProduct.newProductPrice' />
        </div>
        <button class='add-product-button' type='submit'>Add Item</button>
      </form>
      <p class='product-form-message'>{{ formMessage }}</p>
      <div class='search-container'>
        <label>Search Product List</label>
        <input type='search' v-model='searchInput' placeholder='Search products...' />
      </div>
      <hr/>
    </div>
      <div class='product-card-content' v-for='product in filteredProducts' v-bind:key='product.productId'>
        <p class='product-title'>{{ product.productTitle }}</p>
        <img v-bind:src="product.productImg" class='product-img'  alt='Image not available' />
        <p class='product-price'>${{ parseFloat(product.productPrice).toFixed(2) }}</p>
        <button class='product-button teal' v-on:click="handleAddItem({product})"><i class="fas fa-plus"></i></button>
        <button class='product-button orange' v-on:click="handleUpdateProductModal({product})"><i class="far fa-edit"></i></button>
        <button class='product-button red' v-on:click="handleRemoveProduct({product})"><i class="far fa-times-circle"></i></button>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import eventBus from '../../main'

export default {
  name: 'ProductList',
  data () {
    return {
      searchInput: '',
      newProduct: {
        newProductTitle: '',
        newProductImg: '',
        newProductPrice: ''
      },
      formMessage: ''
    }
  },

  computed: {
    ...mapState(['products', 'items']),
    filteredProducts () {
      return this.products.filter(product => {
        return product.productTitle.toLowerCase().includes(this.searchInput.toLowerCase())
      })
    }
  },

  mounted () {
    this.$store.dispatch('LOAD_PRODUCTS')
  },

  methods: {
    handleAddItem (product) {
      this.$store.commit('ADD_ITEM', product.product)
    },

    handleRemoveProduct (product) {
      this.$store.commit('REMOVE_PRODUCT', product.product)
    },

    handleSubmit () {
      if ((this.newProduct.newProductTitle === '') ||
          (this.newProduct.newProductImg === '') ||
          (this.newProduct.newProductPrice === '')) {
        this.formMessage = 'Please complete form before submitting.'
      } else {
        this.$store.commit('ADD_PRODUCT', this.newProduct)
        this.resetForm()
      }
    },

    resetForm () {
      this.newProduct.newProductTitle = ''
      this.newProduct.newProductImg = ''
      this.newProduct.newProductPrice = ''
    },

    handleUpdateProductModal (data) {
      eventBus.$emit('SEND_PRODUCT_DATA', data.product)
    }
  },

  watch: {
    newProductTitle (value) {
      this.newProduct.newProductTitle = value
    },

    newProductImg (value) {
      this.newProduct.newProductImg = value
    },

    newProductPrice (value) {
      this.newProduct.newProductPrice = value
    }
  }
}

</script>

<style scoped>

#product-container {
  min-height: 100vh;
  display: grid;
  grid-auto-rows: max-content;
  background-color: white;
  margin: 25px auto;
  border-radius: 5px;
}

.product-header-container {
  display: grid;
  grid-auto-rows: max-content;
}

.product-header {
  padding: 20px 100px 10px;
  text-align: center;
  font-family: 'Lato', sans-serif;
}

.product-list-header-wrapper {
  padding: 0 25px;
  font-family: 'Lato', sans-serif;
}

.product-form-container {
  padding: 0 25px;
}

.product-form-header-wrapper {
  display: inline-flex;
  justify-content: center;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  text-align: center;
  margin: 0 0 20px;
}

.add-product-tooltip-text {
  width: 130px;
  background-color: rgba(0, 0, 120, 0.8);
  color: #FFF;
  font-size: 16px;
  border-radius: 5px;
  padding: 8px;
  margin-left: 6px;
  visibility: hidden;
  position: absolute;
  z-index: 1;
}

.info-circle {
  padding-left: 4px;
  font-size: 0.8em;
}

.info-circle:hover {
  cursor: pointer;
}

.add-product-tooltip:hover .add-product-tooltip-text {
  visibility: visible;
}

#add-product-form {
  padding: 0 40px;
  margin: 0 auto;
  display: grid;
  align-items: end;
  grid-template-columns: 1fr 1fr 1fr 100px;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
}

#add-product-form input {
  margin: 5px 10px 5px 0;
  min-width: 120px;
}

.add-product-button {
  width: 120px;
  height: 35px;
  margin: 0 auto 5px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #20B2AA;
  color: #FFF;
  font-size: 18px;
}

.add-product-button:hover {
  background-color: #FFF;
  color: #20B2AA;
  border: 2px solid #20B2AA;
}

.product-form-message {
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  color: #A52026;
}

.search-container {
  padding: 0 40px;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
}

.search-container label {
  padding-right: 5px;
}

.product-card-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 60px 60px 60px;
  padding: 15px 12px;
  font-family: 'Open Sans', sans-serif;
}

.product-title, .product-price {
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
}

.product-img {
  margin: 0 auto;
  border-radius: 3px;
  height: 150px;
  width: auto;
}

.product-button {
  font-size: 24px;
  cursor: pointer;
  color: #FFF;
  width: 2em;
  height: 2em;
  border-radius: 5px;
}

.orange {
  background-color: #FF8C00;
}

.orange:hover {
  background-color: #FFF;
  color: #FF8C00;
  border: 1px solid #FF8C00;
}

.orange svg {
  padding-left: 4px;
}

.red {
  background-color: #A52026;
}

.red:hover {
  background-color: #FFF;
  color: #A52026;
  border: 1px solid #A52026;
}

.teal {
  background-color: #20B2AA;
}

.teal:hover {
  background-color: #FFF;
  color: #20B2AA;
  border: 1px solid #20B2AA;
}

img {
  height: 200px;
  width: auto;
}

input {
  font-size: 18px;
}

hr {
  border-bottom: 1px solid black;
  width: 90%;
  margin: 35px auto;
}

@media only screen and (max-width: 1200px) {
  #add-product-form {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }

  #add-product-form input {
    margin: 5px;
    width: 100%;
  }
}

</style>
