export default {
  install (Vue, options) {
    Vue.prototype.$toTop = function () {
      console.log('Plugin Test')
    }
  }
}
