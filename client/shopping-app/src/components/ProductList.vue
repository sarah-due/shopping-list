<template>
  <div id="product-list">
    <h2>Product List!</h2>
    <div class='product-list'>
      <input type='text' v-model='searchInput' placeholder='Search products...' />
        <div class='product-card-content' v-for='product in filteredProducts' v-bind:key='product.productId'>
          <p class='product-title'>{{ product.productTitle }}</p>
          <img v-bind:src="product.productImg" class='product-img'  alt='Image not available' />
          <p class='product-price'>${{ product.productPrice }}</p>
          <button v-on:click="handleClick({product})"><i class="fas fa-plus"></i></button>
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
      searchInput: ''
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
    handleClick (productData) {
      this.$store.commit('ADD_ITEM', productData)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.product-list {
  display: grid;
  grid-template-rows: repeat(5, 1fr)
}

.product-card-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr)
}

button {
  font-size: 24px;
  background-color: #A52026;
  cursor: pointer;
  color: #FFF;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  margin: auto;
}

img {
  height: 200px;
  width: auto;
}
</style>
