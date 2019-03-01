import Vue from 'vue'
import Router from 'vue-router'

import Empty from './components/Empty.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Empty',
      component: Empty,
    },
  ]
})
