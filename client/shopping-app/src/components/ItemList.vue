<template>
  <div id="item-list">
    <p>
      Shopping List!
    </p>
    <div class='item-list'>
        <div class='item-card-content' v-for='item in items' v-bind:key='item.itemId'>
          <p>{{ item.productData[0].productTitle }}</p>
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
  mounted () {
    this.$store.dispatch('LOAD_ITEMS')
  }
}
</script>

<style>
#item-list {
}
</style>
