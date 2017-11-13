import Vue from 'vue'
import Router from 'vue-router'
const user = r => require.ensure([], () => r(require('../views/userMange.vue')))
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/views/index.vue'], resolve)
    },
    {
      path: '/bar',
      name: 'bar',
      component: resolve => require(['@/components/bar.vue'], resolve), // 此写法实现了按需加载
      children: [{path: 'user', component: user},
                  {path: 'role', component: resolve => require(['@/views/role.vue'], resolve)}
      ]
    }
  ]
})
