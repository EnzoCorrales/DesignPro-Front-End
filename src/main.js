import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// Vuex
import { store } from './store/store';

import "./scss/app.scss"; // importa el scss global

Vue.config.productionTip = false;

new Vue({
  router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");
