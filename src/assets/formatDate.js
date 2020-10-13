export function CNDateString(date) {
  var cn = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  var s = []
  var YY = date.getFullYear().toString()
  for (var i = 0; i < YY.length; i++)
    if (cn[YY.charAt(i)]) s.push(cn[YY.charAt(i)])
    else s.push(YY.charAt(i))
  s.push('年')
  var MM = date.getMonth() + 1
  if (MM < 10) s.push(cn[MM])
  else if (MM < 20) s.push('十')
  s.push('月')
  var DD = date.getDate()
  if (DD < 10) s.push(cn[DD])
  else if (DD < 20) s.push('十' + cn[DD % 10])
  else s.push('二十' + cn[DD % 10])
  s.push('日')
  return s.join('')
}

export function getWeek() {
  var date = new Date()
  var day = date.getDay() //获取当前星期几
  if (day === 1) {
    return '星期一'
  } else if (day === 2) {
    return '星期二'
  } else if (day === 3) {
    return '星期三'
  } else if (day === 4) {
    return '星期四'
  } else if (day === 5) {
    return '星期五'
  } else if (day === 6) {
    return '星期六'
  } else if (day === 0) {
    return '星期日'
  }
}

export function getDifValue(nowtimestamp, beforetimestamp) {
  var difValue = nowtimestamp - beforetimestamp
  var day = Math.floor(difValue / 1000 / 60 / 60 / 24) //天
  difValue = difValue % (1000 * 60 * 60 * 24)
  var hour = Math.floor(difValue / 1000 / 60 / 60) //小时
  difValue = difValue % (1000 * 60 * 60)
  var min = Math.floor(difValue / 1000 / 60) //分钟
  difValue = difValue % (1000 * 60)
  var second = Math.floor(difValue / 1000)
  if (day) {
    return day + '天'
  } else if (hour) {
    return hour + '小时'
  } else if (min) {
    return min + '分钟'
  } else if (second) {
    return second + '秒'
  }
  // return "超时:" + day + "年" + hour + "小时" + min + "分钟" + second + "秒"
}
