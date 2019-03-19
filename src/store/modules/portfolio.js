const state = {
  funds: 10000
  , stocks: []
}

const mutations = {
  'BUY'(state, payload) {
    state.funds -= payload.quantity * payload.price;

    let portfolioStock = state.stocks.find((portfolioStock) => {
      return portfolioStock.title == stock.title;
    })

    if (portfolioStock) {
      portfolioStock.quantity += payload.quantity
    } else {
      if (payload.quantity > 0) {
        state.stocks.push({
          title: payload.title
          , quantity: payload.quantity
        })
      }
    }
  }

  , 'SELL'(state, payload) {
    let stock = state.stocks.find((stock) => { return stock.title === payload.title });
    state.funds += payload.quantity * payload.price

    if (stock.quantity > payload.quantity) {
      stock.quantity -= payload.quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(stock), 1);
    }
  }
}

// const actions = {
//   buy: ({ commit, rootState, getters, rootGetters }, payload) => {
//     payload.availableStocks = rootGetters['stocks/stocks']
//     commit('BUY', payload);
//   }
// }

// This is not being used as of now instead of stocks.js buy action is bbeing used
const actions = {
  //   buy: ({ commit, rootState }, payload) => {
  //     payload.availableStocks = rootState.stocks.stocks
  //     commit('BUY', payload);
  //   }
  sell: ({ commit, rootState, getters, rootGetters }, payload) => {
    commit('SELL', payload)
  }
}

const getters = {
  stocks: (state, getters, rootState, rootGetters) => {
    return state.stocks.map((portfolioStock) => {
      const stock = rootGetters['stocks/stocks'].find((stock) => {
        return stock.title === portfolioStock.title
      })

      return {
        title: stock.title
        , quantity: portfolioStock.quantity
        , price: stock.price
      }
    })
  }
}

export default {
  namespaced: true
  , state
  , mutations
  , actions
  , getters
}
