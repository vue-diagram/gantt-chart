import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Grid from './views/GridBox'
import sandbox from './components/sandbox/HelloWorldArturKe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About')
    },
    {
      path: '/sandbox',
      name: 'sandbox',
      props: {
        msg: 'Hey, ArturKe! :)'
      },
      component: sandbox
    },
    // Страница с grid разметкой
    {
      path: '/grid',
      name: 'grid',
      component: Grid
    }
  ]
})
