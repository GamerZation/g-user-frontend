import Vue from 'vue'
import Router from 'vue-router'
import homeView from '@/views/homeView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: { name: 'Home' }
    },
    {
      path: '/home',
      name: 'Home',
      component: homeView
    }
  ]
})
