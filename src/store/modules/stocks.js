const state = {
  stocks: [
    {
      title: 'BMW'
      , price: 110
    }
    , {
      title: 'Google'
      , price: 200
    }
    , {
      title: 'Apple'
      , price: 250
    }
    , {
      title: 'Twitter'
      , price: 8
    }
  ]
}

const getters = {
  stocks: (state) => {
    return state.stocks;
  }
}

const actions = {
  buy: ({ commit, rootState }, payload) => {
    commit('portfolio/BUY', payload, { root: true });
  }
}

export default {
  namespaced: true
  , state
  , actions
  , getters
}
