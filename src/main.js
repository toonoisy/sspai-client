import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'
import api from '@/api'


//  引入并注册全局组建TopicsList
import TopicsList from '@/components/TopicsList'
Vue.component('TopicsList', TopicsList)

// 引入并全局注册button组建
import 'element-ui/lib/theme-chalk/index.css';
import {
  Button
} from 'element-ui'
Vue.use(Button);

// 引入包含所有接口请求函数模块的API对象
import * as API from "@/api"
Vue.prototype.$API = API

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')