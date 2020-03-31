// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/css/font.css'

// import './assets/icons'
import './icons'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.config.productionTip = false

// 注册一个全局自定义指令 `v-focus`
Vue.directive('clickOutside', {
  // 当被绑定的元素插入到 DOM 中时……
  bind: function (el, binding, vnode) {
    // 聚焦元素
    el.focus()
    function clickHandler (e) {
      // 这里判断点击的元素是否是本身，是本身，则返回
      if (el.contains(e.target)) {
        return false
      }
      // 判断指令中是否绑定了函数
      if (binding.expression) {
        // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
        binding.value(e)
      }
    }
    el.__vueClickOutside__ = clickHandler
    document.addEventListener('click', clickHandler)
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
