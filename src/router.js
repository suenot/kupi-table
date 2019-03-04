import Vue from 'vue'
import Router from 'vue-router'

import KupiTable from './components/KupiTable/KupiTable.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'KupiTable',
      component: KupiTable,
    },
  ]
})
