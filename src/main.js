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
Vue.prototype.$aa = aa
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
// Vue.prototype.formatDate = function (dateTimeStamp) {
//   var result;
//   var minute = 1000 * 60;
//   var hour = minute * 60;
//   var day = hour * 24;
//   var halfamonth = day * 15;
//   var month = day * 30;
//   var now = new Date().getTime();
//   var diffValue = now - dateTimeStamp;
//   if(diffValue < 0){
//     return;
//   }
//   var monthC =diffValue/month;
//   var weekC =diffValue/(7*day);
//   var dayC =diffValue/day;
//   var hourC =diffValue/hour;
//   var minC =diffValue/minute;
//   if(monthC>=1){
//     if(monthC<=12)
//       result="" + parseInt(monthC) + "月前";
//     else{
//       result="" + parseInt(monthC/12) + "年前";
//     }
//   }
//   else if(weekC>=1){
//     result="" + parseInt(weekC) + "周前";
//   }
//   else if(dayC>=1){
//     result=""+ parseInt(dayC) +"天前";
//   }
//   else if(hourC>=1){
//     result=""+ parseInt(hourC) +"小时前";
//   }
//   else if(minC>=1){
//     result=""+ parseInt(minC) +"分钟前";
//   }else{
//     result="刚刚";
//   }
//   return result;
// }
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
