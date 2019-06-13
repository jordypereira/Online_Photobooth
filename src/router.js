import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Album from './views/Album.vue'
import Start from './views/Start.vue'
import Settings from './views/Settings.vue'
import Review from './views/Review.vue'
import Preview from './views/Preview.vue'
import Final from './views/Final.vue'

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
    {
      path: '/review',
      name: 'review',
      component: Review
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview
    },
    {
      path: '/final',
      name: 'final',
      component: Final
    },
  ]
})
