import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: '根目录',
      path: '/',
      redirect: '/home'
    }, {
      name: '会员管理',
      path: '/home',
      component: () => import('@/views/home/Home.vue')
    }
  ]
})
