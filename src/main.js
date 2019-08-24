import Vue from "vue";
import App from "./App.vue";
import moment from "moment";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "font-awesome/css/font-awesome.css";

import "./plugins/vuetify";
import "./plugins/filter";
import router from "./router/";
import store from "./store";

Vue.config.productionTip = false;
Vue.prototype.$moment = moment;
Vue.prototype.$eventHub = new Vue();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
