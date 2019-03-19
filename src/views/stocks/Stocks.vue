<template>
  <div class="grid-x grid-margin-x">
    <app-card class="card cell large-6" v-for="stock in stocks" :stock="stock"></app-card>
  </div>
</template>

<script>
 import Card from './Card.vue'

 export default {
   computed: {
     stocks() {
       return this.$store.getters['stocks/stocks']
     }
   }
   , components: {
     appCard: Card
   }
 }
</script>

