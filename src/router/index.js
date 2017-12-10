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
import Normal from '@/components/Normal'
import Step1 from '@/components/Step1'
import Step2 from '@/components/Step2'
import Step3 from '@/components/Step3'
import Step4 from '@/components/Step4'
import Step5 from '@/components/Step5'
import Step6 from '@/components/Step6'
import Step7 from '@/components/Step7'
import Step8 from '@/components/Step8'

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
    },
    {
      path: '/normal',
      name: 'Normal',
      component: Normal
    },
    {
      path: '/normal/step1',
      name: 'Step1',
      component: Step1
    },
    {
      path: '/normal/step2',
      name: 'Step2',
      component: Step2
    },
    {
      path: '/normal/step3',
      name: 'Step3',
      component: Step3
    },
    {
      path: '/normal/step4',
      name: 'Step4',
      component: Step4
    },
    {
      path: '/normal/step5',
      name: 'Step5',
      component: Step5
    },
    {
      path: '/normal/step6',
      name: 'Step6',
      component: Step6
    },
    {
      path: '/normal/step7',
      name: 'Step7',
      component: Step7
    },
    {
      path: '/normal/step8',
      name: 'Step8',
      component: Step8
    }
  ]
})
