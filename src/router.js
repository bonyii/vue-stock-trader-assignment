import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Portfolio from './views/portfolio/Portfolio.vue'
import Stocks from './views/stocks/Stocks.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/'
      , name: 'home'
      , component: Home
    }
    , {
      path: '/portfolio'
      , name: 'portfolio'
      , component: Portfolio
    }
    , {
      path: '/stocks'
      , name: 'stocks'
      , component: Stocks
    }
    , {
      path: '/about'
      , name: 'about'
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      , component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

