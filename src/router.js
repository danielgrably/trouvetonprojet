import Vue from 'vue'
import Router from 'vue-router'
import Informations from '@/components/Informations'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'informations',
      components: Informations
    }
  ]
})
