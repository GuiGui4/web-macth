import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/home/index'
import layout from '@/views/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    redirect: { name: 'index' },
    children: [
      // 首页
      {
        path: '/index',
        name: 'index',
        component: index
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
