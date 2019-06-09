import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Album from './views/Album.vue'
import Start from './views/Start.vue'
import Settings from './views/Settings.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/album',
      name: 'album',
      component: Album
    },
    {
      path: '/start',
      name: 'start',
      component: Start
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
  ]
})
