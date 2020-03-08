import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import header from './components/header.vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// Vue.component('header', header)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
