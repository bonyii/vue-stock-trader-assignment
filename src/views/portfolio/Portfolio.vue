<template>
  <div class="grid-x grid-margin-x">
    <app-card class="card cell large-6" v-for="stock in portfolio" :stock="stock"></app-card>
  </div>
</template>

<script>

 import Card from './Card.vue'

 export default {
   computed: {
     portfolio() {
       return this.$store.getters['portfolio/stocks']
     }
   }
   , components: {
     appCard: Card
   }
 }
</script>

