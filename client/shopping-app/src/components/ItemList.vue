<template>
  <div id="item-list">
    <p>
      Shopping List!
    </p>
    <div class='item-list'>
        <div class='item-card-content' v-for='item in items' v-bind:key='item.itemId'>
          <p class='item-card-data'>{{ item.productData[0].productTitle }}</p>
          <p class='item-card-data'>{{ item.itemQuantity }}</p>
          <p class='item-card-data'>{{ item.productData[0].productPrice }}</p>
          <button class='item-card-button' v-on:click="handleClick({item})"><i class="fas fa-minus"></i></button>
        </div>
      </div>
      <div class='item-list-totals'>
        <p>{{ calculateItemTotal(items) }}</p>
        <p>{{ calculateTotalCost(items) }}</p>
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
      this.$store.commit('REMOVE_ITEM', item)
    }
  },

  mounted () {
    this.$store.dispatch('LOAD_ITEMS')
  }
}
</script>

<style>
#item-list {
}

.item-card-content {
  display: flex;
  flex-direction: row;
}

.item-card-data {
  padding: 5px;
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

</style>
