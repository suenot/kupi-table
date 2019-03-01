import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VCharts from 'v-charts'
Vue.use(ElementUI)
Vue.use(VCharts)
import vueShortkey from 'vue-shortkey'
Vue.use(vueShortkey, { prevent: ['input', 'textarea'] })


import VueVirtualScroller from 'vue-virtual-scroller'
Vue.use(VueVirtualScroller)

import vuejsStorage from 'vuejs-storage'
Vue.use(vuejsStorage)


import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify, {
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})

Vue.config.productionTip = false

import {observable, isObservable, toJS} from 'mobx'
import VueMobx from 'vue-mobx'
Vue.use(VueMobx, {
  toJS: toJS, // must
  isObservable: isObservable, // must
  observable: observable,  // optional
})

import Movue from 'movue'
import * as mobx from 'mobx'
Vue.use(Movue, mobx)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


