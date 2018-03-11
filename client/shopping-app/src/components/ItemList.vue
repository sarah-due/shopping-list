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
import { fetchItemList } from '@/./../api/ItemList'
export default {
  name: 'ItemList',
  data () {
    return {
      items: []
    }
  },
  beforeMount () {
    fetchItemList().then(response => {
      this.items = response
    })
  }
}
</script>

<style>
#item-list {
}
</style>
