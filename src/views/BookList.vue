<template>
  <div class=" container max-w-4xl mx-auto">
    <CardItem></CardItem>
  </div>
</template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import CardItem from '../components/products/CardItem.vue'

export default {
  name: 'BookList',
  components: {
    CardItem
  }
}
</script>
