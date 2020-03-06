import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MySearch from '../views/MySearch.vue'
import MyMessage from '../views/MyMessage.vue'
import Mine from '../views/Mine.vue'
import Myitem from '../views/Myitem.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mysearch',
    name: 'MySearch',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "mysearch" */ '../views/MySearch.vue')
  },
  {
    path: '/mymessage',
    name: 'MyMessage',
    component: () => import(/* webpackChunkName: "mymessage" */ '../views/MyMessage.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import(/* webpackChunkName: "mine" */ '../views/Mine.vue')
  },
  {
    path: '/myitem/:itemid',
    name: 'Myitem',
    component: () => import(/* webpackChunkName: "mine" */ '../views/Myitem.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
