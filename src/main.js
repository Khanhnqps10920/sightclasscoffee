import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// libs
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueSmoothScroll from "vue2-smooth-scroll";

Vue.use(VueSmoothScroll, {
  duration: 1000,
  updateHistory: false,
  offset: -50
});

Vue.use(BootstrapVue);

Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
