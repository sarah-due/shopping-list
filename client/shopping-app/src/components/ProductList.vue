<template>
  <div id="product-list">
    <h2>Product List!</h2>
    <div class='product-list'>
        <div class='product-card-content' v-for='product in products' v-bind:key='product.productId'>
          <p class='product-title'>{{ product.productTitle }}</p>
          <img v-bind:src="product.productImg" class='product-img'  alt='Image not available' />
          <p class='product-price'>${{ product.productPrice }}</p>
          <button><i class="fas fa-plus"></i></button>
        </div>
      </div>
  </div>
</template>

<script>
import { fetchProducts } from '@/./../api/ProductList'
export default {
  name: 'ProductList',
  data () {
    return {
      products: []
    }
  },
  beforeMount () {
    fetchProducts().then(response => {
      this.products = response
    })
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
