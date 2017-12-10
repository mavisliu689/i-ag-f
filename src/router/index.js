import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import UserCreate from '@/components/UserCreate'
import Village from '@/components/Village'
import Store from '@/components/Store'
import Land from '@/components/Land'
import Seedling from '@/components/Seedling'
import Fertilizer from '@/components/Fertilizer'
import Machine from '@/components/Machine'
import Shipping from '@/components/Shipping'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user-create',
      name: 'UserCreate',
      component: UserCreate
    },
    {
      path: '/village',
      name: 'Village',
      component: Village
    },
    {
      path: '/store',
      name: 'Store',
      component: Store
    },
    {
      path: '/land',
      name: 'Land',
      component: Land
    },
    {
      path: '/seedling',
      name: 'Seedling',
      component: Seedling
    },
    {
      path: '/fertilizer',
      name: 'Fertilizer',
      component: Fertilizer
    },
    {
      path: '/machine',
      name: 'Machine',
      component: Machine
    },
    {
      path: '/shipping',
      name: 'Shipping',
      component: Shipping
    }
  ]
})
