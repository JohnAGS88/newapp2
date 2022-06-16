import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/List',
    name: 'list',
    component: List
  },
  {
    path: '/Profile',
    name: 'profile',
    // route level code-splitting
    // this generates a separate chunk (Profile.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
