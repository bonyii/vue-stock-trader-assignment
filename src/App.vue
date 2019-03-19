<template>
  <div>
    <div id="app" class="grid-x">
      <div class="cell large-offset-1 large-10">
        <app-header></app-header>
      </div>
    </div>
    <br>
    <div id="app" class="grid-x">
      <div class="cell large-offset-1 large-10">
        <transition name="slide" mode="out-in">
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
 import Header from './components/Header.vue'

 export default {
   components: {
     appHeader: Header
   }
 }
</script>

<style>
 #app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
 }
 #nav {
   padding: 30px;
 }

 #nav a {
   font-weight: bold;
   color: #2c3e50;
 }

 #nav a.router-link-exact-active {
   color: #42b983;
 }

 .slide-enter-active {
   animation: slide-in 200ms ease-out forwards;
 }

 .slide-leave-active {
   animation: slide-out 200ms ease-out forwards;
 }

 @keyframes slide-in {
   from {
     transform: translateY(-30px);
     opacity: 0;
   }

   to {
     transform: translateY(0);
     opacity: 1;
   }
 }

 @keyframes slide-out {
   from {
     transform: translateY(0);
     opacity: 1;
   }

   to {
     transform: translateY(-30px);
     opacity: 0;
   }
 }
</style>
