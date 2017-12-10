import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import UserCreate from '@/components/UserCreate'
import Village from '@/components/Village'
import Store from '@/components/Store'
import Land from '@/components/Land'

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
    }
  ]
})
