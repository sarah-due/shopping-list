<template>
  <div id="item-container">

    <div class='item-list-container'>
      <p class='item-list-header'>Shopping List</p>
      <hr/>
      <div class='item-card-container'>
        <div class='item-card-content' v-for='item in items' v-bind:key='item.itemId'>
          <p class='item-card-data'>{{ item.productData[0].productTitle }}</p>
          <p class='item-card-data'>{{ item.itemQuantity }}</p>
          <p class='item-card-data'>${{ parseFloat(item.productData[0].productPrice).toFixed(2) }}</p>
          <button class='item-card-button' v-on:click="handleClick({item})"><i class="fas fa-minus"></i></button>
        </div>
        <hr/>
      </div>
      <hr />
      <div class='item-list-totals'>
        <p>Total Items: {{ calculateItemTotal(items) }}</p>
        <p>Total Cost: ${{ calculateTotalCost(items) }}</p>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ItemList',
  computed: mapState([
    'items'
  ]),

  methods: {
    calculateItemTotal (items) {
      let totalItems = 0
      items.map(item => {
        totalItems += (item.itemQuantity)
      })
      return totalItems
    },

    calculateTotalCost (items) {
      let totalCost = 0
      items.map(item => {
        totalCost += (item.itemQuantity * item.productData[0].productPrice)
      })
      return totalCost.toFixed(2)
    },

    handleClick (item) {
      this.$store.commit('REMOVE_ITEM', item.item)
    }
  },

  mounted () {
    this.$store.dispatch('LOAD_ITEMS')
  }
}
</script>

<style scoped>
#item-container {
  padding-left: 25px;
  min-width: 275px;
}

.item-list-container {
  position: sticky;
  top: 10%;
  max-width: 500px;
  background-color: white;
  border-radius: 5px;
  padding: 10px 5px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 8px 8px rgba(0,0,0,0.23);
}

.item-list-header {
  text-align: center;
  font-size: 22px;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
}

.item-card-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  margin: 5px auto;
}

.item-card-content p {
  margin: auto;
}

.item-card-data {
  padding: 5px;
}

.item-list-totals {
  text-align: center;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
}

hr {
  border-bottom: 1px solid black;
  width: 80%;
  margin: auto;
}

button {
  height: 1.75em;
  width: 1.75em;
  font-size: 16px;
  background-color: #A52026;
  color: #FFF;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px;
  margin: auto;
}

button:hover {
  background-color: #FFF;
  color: #A52026;
  border: 1px solid #A52026;
}

@media only screen and (max-width: 1200px) {
  .item-list-container {
    margin: 20px auto;
  }
}

</style>
