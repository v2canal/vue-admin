import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
Vue.use(Router)
import login from '../views/login'
// import dashboard from '../views/dashboard'
import layout from '../layout'
const router = new VueRouter({
  routes: [
    // 登陆界面，首次进入这里
    {
      path: '/login',
      component: login,
    },
    {
      path: '/',
      component: layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('@/views/dashboard'),
        },
        {
          path: '/warnings',
          component: () => import("@/views/warnings")
        },
        {
          path: '/index',
          component: () => import("@/views/index")
        },
        {
          path: '/remote',
          component: () => import("@/views/remote")
        },
        {
          path: '/data',
          component: () => import("@/views/data")
        },
        {
          path: '/charges',
          component: () => import("@/views/charges")
        }
      ]
    },
  ]
})

export default router