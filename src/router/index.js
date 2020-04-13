import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BilibiliPage',
      component: resolve => require(['../pages/P-BilibiliPage.vue'], resolve),
      meta: {
        title: 'bilibili'
      }
    },
    {
      path: '/BilibiliPage',
      name: 'BilibiliPage',
      component: resolve => require(['../pages/P-BilibiliPage.vue'], resolve),
      meta: {
        title: 'bilibili'
      }
    }
  ]
})
