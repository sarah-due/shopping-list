<template>
  <div id="home">
    <div id='main-container'>
      <product-list/>
      <item-list/>
      <update-product-modal/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
#home {
  background-color: #247BA0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#main-container {
  width: 90%;
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-template-columns: 4fr 1fr;
}

@media only screen and (max-width: 900px) {
  #main-container {
    display: grid;
    grid-template-columns: 1fr;
  }
}

</style>
