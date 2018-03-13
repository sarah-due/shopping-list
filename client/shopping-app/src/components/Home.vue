<template>
  <div id="home">
    <product-list/>
    <item-list/>
    <update-product-modal/>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
#home {
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: 50px;
}
</style>
