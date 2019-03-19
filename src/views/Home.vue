<template>
  <div class="callout">
    <h3>Trade or view your portfolio</h3>
    <p>You may save & Load your Data</p>
    <p>Click on 'End Day' to begin a new Day!</p>
    <hr>
    <h5> Your funds: {{ funds | currency }} </h5>
  </div>
</template>

<script>
 export default {
   computed: {
     funds() {
       return this.$store.state.portfolio.funds;
     }
   }
 }
</script>

<style scoped>
 .callout {
   text-align: left;
 }
</style>
