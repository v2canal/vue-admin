import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
Vue.use(Router)
import login from '../views/login'
import dashboard from '../views/dashboard'

const router = new VueRouter({
  routes: [
    // 登陆界面，首次进入这里
    {
      path: '/login',
      component: login,
    },
    {
      path: '/',
      component: dashboard,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: dashboard,
        }
      ]
    }
  ]
})

export default router