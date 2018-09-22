import Vue from 'vue'
import Router from '../node_modules/vue-router'
import App from './App.vue'
import Hello from './components/Hello.vue'
import Region from './components/Region.vue'
import VueGoogleCharts from 'vue-google-charts'

Vue.use(Router)
Vue.use(VueGoogleCharts)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Hello,
    },
    {
      path: '/region/:id',
      name: 'region',
      component: Region,
      props: true,
    },
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
