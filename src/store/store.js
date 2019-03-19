import Vue from 'vue'
import Vuex from 'vuex'
import portfolio from './modules/portfolio.js'
import stocks from './modules/stocks.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true
  , modules: {
    portfolio
    , stocks
  }
  , state: {
    savedState: {}

  },
  mutations: {
    newDay: (state, payload) => {
      state.stocks.stocks.forEach((stock) => {
        let price = Math.floor(Math.random() * (120 - 40)) + -40;
        if (stock.price + price > 0) {
          stock.price += price
        }
      })
    }
    , save: (state, payload) => {
      state.savedState = {
        funds: JSON.stringify(state.portfolio.funds)
        , stocks: JSON.stringify(state.stocks.stocks.slice())
        , portfolio: JSON.stringify(state.portfolio.stocks.slice())
      }
    }
    , load: (state, payload) => {
      state.portfolio.funds = JSON.parse(state.savedState.funds)
      state.stocks.stocks = JSON.parse(state.savedState.stocks)
      state.portfolio.stocks = JSON.parse(state.savedState.portfolio)
      console.log(state, state.savedState);
    }
  }
})
