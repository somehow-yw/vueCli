import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'header',
      component: header
    },
    {
      path: '/bar',
      name: 'bar',
      component: resolve => require(['@/components/bar.vue'], resolve) // 此写法实现了按需加载
    }
  ]
})
