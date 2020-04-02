/* eslint-disable import/no-duplicates */
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
import ToTop from './plugin/toTop' // 引入
import './assets/js/common' // 引入
import common from './assets/js/common' // 引入
Vue.use(ToTop) // 添加

Vue.prototype.$http = axios
Vue.prototype.common = common
Vue.config.productionTip = false
Vue.prototype.getToken = () => {

}
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


// 注册一个全局自定义指令 `v-focus`
Vue.directive('resize', { // 指令的名称
  bind(el, binding) { // el为绑定的元素，binding为绑定给指令的对象
    let width = '', height = '';
    function isReize() {
      const style = document.defaultView.getComputedStyle(el);
      if (width !== style.width || height !== style.height) {
        let size={
          width:width,
          height:height
        }
        binding.value(size);  // 关键
      }
      width = style.width;
      height = style.height;
    }
    el.__vueSetInterval__ = setInterval(isReize, 100);
  },
  unbind(el) {
    clearInterval(el.__vueSetInterval__);
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
