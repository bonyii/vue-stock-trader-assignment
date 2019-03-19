<template>
  <div>
    <div class="card-divider">
      <h5>
        <span class="title">{{ stock.title }}</span>
        <span class="price">(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</span>
      </h5>
    </div>
    <div class="card-section">
      <div class="grid-x grid-margin-x">
        <div class="cell large-4">
          <input type="number" placeholder="Quantity" v-model.number="quantity" :class="{danger: notEnoughQuantity}">
        </div>
        <div class="cell large-1">
          <button class="success button" @click.prevent="sell" :disabled="disabled">
            {{ notEnoughQuantity ? 'Not enough quantity' :  'Sell' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
   props: {
     stock: Object
   }
   , data() {
     return {
       quantity: null
     }
   }
   , computed: {
     disabled() {
       console.log('Card is disabled ', this.quantity, Number.isInteger(this.quantity), typeof this.quantity )
       return this.notEnoughQuantity || this.quantity <= 0 || !Number.isInteger(this.quantity)
     }
     , funds() {
       return this.$store.state.portfolio.funds
     }
     , notEnoughQuantity() {
       return this.quantity > this.stock.quantity
     }
   }
   , methods: {
     sell() {
       console.log('Sell ', this.quantity, ' ', this.stock.title);
       this.$store.dispatch('portfolio/sell', {
         title: this.stock.title,
         price: this.stock.price,
         quantity: parseInt(this.quantity)
       })
       this.quantity = 0
     }
   }
 }
</script>

<style scoped>
 .card-divider {
   background-color: lightblue;
 }
 .title {
   font-weight: 401;
 }
 .price {
   font-size: 50%;
   margin-left: 0.5em;
 }

 .danger {
   border: 1px solid red;
 }

</style>
