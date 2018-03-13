<template>
  <div id="product-list">
    <h2>Product List!</h2>
    <input type='search' v-model='searchInput' placeholder='Search products...' />
    <div>
      <h3>Add a new Product</h3>
      <form @submit.prevent='handleSubmit' id='add-product-form'>
        <div class='product-form-section'>
          <label>Name of Product: </label>
          <input type='text' placeholder='Name' v-model='newProduct.newProductTitle'>
        </div>
        <div class='product-form-section'>
          <label>Link to Product Image: </label>
          <input type='text' placeholder='Link' v-model='newProduct.newProductImg'>
        </div>
        <div class='product-form-section'>
          <label>Price of Product: </label>
          <span>$</span><input type='text' placeholder='Price' v-model='newProduct.newProductPrice' />
        </div>
        <p>{{ formMessage }}</p>
        <button type='submit'>Add Item</button>
      </form>
    </div>
    <div class='product-list'>
        <div class='product-card-content' v-for='product in filteredProducts' v-bind:key='product.productId'>
          <p class='product-title'>{{ product.productTitle }}</p>
          <img v-bind:src="product.productImg" class='product-img'  alt='Image not available' />
          <p class='product-price'>${{ parseFloat(product.productPrice).toFixed(2) }}</p>
          <button v-on:click="handleAddItem({product})"><i class="fas fa-plus"></i></button>
          <button v-on:click="handleRemoveProduct({product})"><i class="far fa-times-circle"></i></button>
          <button v-on:click="handleUpdateProduct({product})"><i class="far fa-edit"></i></button>
        </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

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
        return product.productTitle.toLowerCase().includes(this.searchInput)
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
        this.formMessage = 'Please complete form.'
      } else {
        this.$store.commit('ADD_PRODUCT', this.newProduct)
        this.resetForm()
      }
    },

    resetForm () {
      this.newProduct.newProductTitle = ''
      this.newProduct.newProductImg = ''
      this.newProduct.newProductPrice = ''
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-product-form {
  display: flex;
  flex-direction: row;
}

.product-list {
  display: grid;
  grid-template-rows: repeat(5, 1fr)
}

.product-card-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 50px 50px 50px
}

button {
  font-size: 24px;
  background-color: #A52026;
  cursor: pointer;
  color: #FFF;
  width: 2em;
  height: 2em;
  border-radius: 5px;
  margin: auto;
}

img {
  height: 200px;
  width: auto;
}
</style>
