import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./scss/app.scss"; // importa el scss global

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
