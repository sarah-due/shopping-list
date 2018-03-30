<template>
  <div id="home">
    <div id='main-shopping-container'>
      <ProductList />
      <ItemList />
      <UpdateProductModal />
    </div>
  </div>
</template>

<script>
import ItemList from './ItemList'
import ProductList from './ProductList'
import UpdateProductModal from './UpdateProductModal'

export default {
  name: 'Home',
  components: {
    ItemList,
    ProductList,
    UpdateProductModal
  }
}
</script>

<style>
#home {
  background-color: #247BA0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#main-shopping-container {
  min-height: 100vh;
  width: 90%;
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-template-columns: 4fr 1fr;
}

@media only screen and (max-width: 900px) {
  #main-shopping-container {
    display: grid;
    grid-template-columns: 1fr;
  }
}

</style>
