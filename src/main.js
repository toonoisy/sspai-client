import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'

Vue.config.productionTip = false

// 引入element-ui 轮播图
import { Carousel, CarouselItem, Icon } from 'element-ui'
Vue.use(Carousel)
Vue.use(Icon)
Vue.use(CarouselItem)

// 公共组件 Header
import Header from '@/components/Header'
Vue.component('Header', Header)

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app')
