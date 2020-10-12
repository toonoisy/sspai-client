import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app')
