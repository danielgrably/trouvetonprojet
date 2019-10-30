import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Informations from '@/components/Informations'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HelloWord',
      components: HelloWorld
    },
    {
      path: '/informations',
      name: 'informations',
      components: Informations
    }
  ]
})
