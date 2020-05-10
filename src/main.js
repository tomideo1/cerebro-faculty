import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import router from "./router.js";
import VueClipboard from "vue-clipboard2";
import Toasted from "vue-toasted";

VueClipboard.config.autoSetContainer = true; // add this line
Vue.use(VueClipboard);
Vue.use(Toasted);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
