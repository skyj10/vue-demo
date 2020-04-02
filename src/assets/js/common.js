function formatDateAgo (dateTimeStamp) {
  dateTimeStamp = dateTimeStamp * 1000
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
    return formatDate(dateTimeStamp)
    //        if (monthC <= 12)
    //          result = '' + parseInt(monthC) + '月前'
    //        else {
    //          result = '' + parseInt(monthC / 12) + '年前'
    //        }
  } else if (weekC >= 1) {
    //        result = '' + parseInt(weekC) + '周前'
    return this.formatDate(new Date(dateTimeStamp))
  } else if (dayC >= 1) {
    //        result = '' + parseInt(dayC) + '天前'
    return this.formatDate(new Date(dateTimeStamp))
  } else if (hourC >= 1) {
    result = '' + parseInt(hourC) + '小时前'
  } else if (minC >= 1) {
    result = '' + parseInt(minC) + '分钟前'
  } else {
    result = '刚刚'
  }
  return result
}

function add0 (m) {
  return m < 10 ? '0' + m : m
}

function formatDate (dateTimeStamp) {
  var time = new Date(dateTimeStamp)
  var y = time.getFullYear()
  var m = time.getMonth() + 1
  var d = time.getDate()
  var h = time.getHours()
  var mm = time.getMinutes()
  var s = time.getSeconds()
  return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s)
}

function test () {
  console.log('test')
}

export default {
  formatDateAgo,
  formatDate,
  test
}
