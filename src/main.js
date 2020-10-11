import Vue from "vue";
import App from "./App.vue";
import store from "@/store";
import router from "@/router";
import { Input } from 'element-ui';
Vue.use(Input);
import 'swiper/css/swiper.css'
import Carousel from '@/components/Carousel/Carousel'
Vue.component('Carousel', Carousel)

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
