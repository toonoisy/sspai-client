import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'

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
