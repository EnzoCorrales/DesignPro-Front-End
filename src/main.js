import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Axios from "axios";
// Vuex
import { store } from "./store/store";

import "./scss/app.scss"; // importa el scss global

Vue.config.productionTip = false;

// Implementacion TOKEN
Vue.prototype.$http = Axios;
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

new Vue({
  router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");
