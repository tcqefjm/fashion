import Vue from 'vue'
import Router from 'vue-router'
import index from './pages/index'
import intro from './components/intro'
import gallery from './components/gallery'
import login from './pages/login'
import register from './pages/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '',
          component: intro
        },
        {
          path: '/view',
          component: gallery
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
