import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'
import dayjs from 'dayjs'

//  引入并注册全局组建TopicsList
import TopicsList from '@/components/TopicsList'
Vue.component('TopicsList', TopicsList)

import { Input } from 'element-ui'
Vue.use(Input)
import 'swiper/css/swiper.css'
import Carousel from '@/components/Carousel/Carousel'
Vue.component('Carousel', Carousel)

// 引入并全局注册button组建
import 'element-ui/lib/theme-chalk/index.css'
import { Button } from 'element-ui'
Vue.use(Button)

// 引入包含所有接口请求函数模块的API对象
import * as API from '@/api'
Vue.prototype.$API = API
//  注册全局时间过滤器
Vue.filter('timeformat', function (value, formatStr = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(value).format(formatStr)
})
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

import { MenuItem } from 'element-ui'
Vue.use(MenuItem)

Vue.config.productionTip = false

// 引入element-ui 轮播图
import { Carousel, CarouselItem, Icon, Dialog } from 'element-ui'
Vue.use(Carousel)
Vue.use(Icon)
Vue.use(CarouselItem)
Vue.use(Dialog)

// 引入
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

// 测试接口
import '@/api'
import * as API from '@/api'

// 公共组件 Header
import Header from '@/components/Header'
Vue.component('Header', Header)

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$API = API
  },
  store,
  router,
}).$mount('#app')
