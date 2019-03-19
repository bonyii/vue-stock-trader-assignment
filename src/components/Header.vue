<template>
  <div class="top-bar align-center">
    <div class="top-bar-left">
      <ul class="menu">
        <router-link to="/" tag="li" class="menu-text" style="cursor: pointer">Stock Trader</router-link>
        <router-link :to="{ name: 'portfolio' }" tag="li" active-class="is-active"><a>Portfolio</a></router-link>
        <router-link :to="{ name: 'stocks' }" tag="li" active-class="is-active"><a>Stocks</a></router-link>
      </ul>
    </div>
    <div class="top-bar-right">
      <ul class="menu dropdown" data-dropdown-menu>
        <li><a @click="endDay">End day</a></li>
        
        <li class="is-dropdown-submenu-parent">
          <a>Save & Load</a>
          <ul class="menu" >
            <li><a @click="save">Save</a></li>
            <li><a @click="load">Load</a></li>
          </ul>
        </li>

        <li><p>Funds: {{ funds | currency }}</p></li>
      </ul>
    </div>
  </div>
</template>

<script>
 import { mapMutations } from 'vuex'

 export default {
   computed: {
     funds() {
       return this.$store.state.portfolio.funds;
     }
   }
   , methods: {
     ...mapMutations([
       'newDay'
     ])
     , endDay() {
       // this.$store.commit('newDay');
       this.newDay()
     }
     , save() {
       this.$store.commit('save');
     }
     , load() {
       this.$store.commit('load');
     }
   }

 }
</script>

<style scoped>
 .top-bar {
   border: 1px #2c3e5080 solid;
 }
</style>
