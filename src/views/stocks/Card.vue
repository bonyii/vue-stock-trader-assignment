<template>
  <div>
    <div class="card-divider">
      <h5>
        <span class="title">{{ stock.title }}</span>
        <span class="price">(Price: {{ stock.price }})</span>
      </h5>
    </div>
    <div class="card-section">
      <div class="grid-x grid-margin-x">
        <div class="cell large-4">
          <input type="number" placeholder="Quantity" v-model.number="quantity" :class="{danger: insufficientFund}">
        </div>
        <div class="cell large-1">
          <button class="success button" @click.prevent="buy" :disabled="disabled" >
            {{ insufficientFund ? "Insufficient fund" : 'Buy' }}
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
     funds() {
       return this.$store.state.portfolio.funds;
     }
     , insufficientFund() {
       return this.quantity * this.stock.price > this.funds;
     }
     , disabled() {
       console.log('Card is disabled ', this.quantity, Number.isInteger(this.quantity), typeof this.quantity )
       return this.insufficientFund || this.quantity <= 0 || !Number.isInteger(this.quantity)
     }
   }
   , methods: {
     buy() {
       console.log('Buy ', this.quantity, ' ', this.stock.title);
       this.$store.dispatch('stocks/buy', {
         title: this.stock.title
         , quantity: parseInt(this.quantity)
         , price: this.stock.price
       })
       this.quantity = 0
     }
   }
 }
</script>

<style scoped>
 .card-divider {
   background-color: #3adb7680;
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
