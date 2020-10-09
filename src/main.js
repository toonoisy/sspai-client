import Vue from "vue";
import App from "./App.vue";
import store from "@/store";
import router from "@/router";

import { Button, MenuItem } from "element-ui";

Vue.use(Button);
Vue.use(MenuItem);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
