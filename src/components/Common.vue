<template>

</template>
<script>
export default {
  components: {},
  data () {

  },
  computed: {},
  methods: {
    formatDateAgo (dateTimeStamp) {
      var result
      var minute = 1000 * 60
      var hour = minute * 60
      var day = hour * 24
      var halfamonth = day * 15
      var month = day * 30
      var now = new Date().getTime()
      var diffValue = now - dateTimeStamp
      if (diffValue < 0) {
        return
      }
      var monthC = diffValue / month
      var weekC = diffValue / (7 * day)
      var dayC = diffValue / day
      var hourC = diffValue / hour
      var minC = diffValue / minute
      if (monthC >= 1) {
        return this.formatDate(new Date(dateTimeStamp));
//        if (monthC <= 12)
//          result = '' + parseInt(monthC) + '月前'
//        else {
//          result = '' + parseInt(monthC / 12) + '年前'
//        }
      }
      else if (weekC >= 1) {
//        result = '' + parseInt(weekC) + '周前'
        return this.formatDate(new Date(dateTimeStamp));
      }
      else if (dayC >= 1) {
//        result = '' + parseInt(dayC) + '天前'
        return this.formatDate(new Date(dateTimeStamp));
      }
      else if (hourC >= 1) {
        result = '' + parseInt(hourC) + '小时前'
      }
      else if (minC >= 1) {
        result = '' + parseInt(minC) + '分钟前'
      } else {
        result = '刚刚'
      }
      return result
    },
    formatDate (now) {
      var year = now.getFullYear()
      var month = now.getMonth() + 1
      var date = now.getDate()
      var hour = now.getHours()
      var minute = now.getMinutes()
      var second = now.getSeconds()
      return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
    }

  },
  created () {

  },
  props: {}

}


</script>
<style type="text/scss" lang="scss">

</style>
