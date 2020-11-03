import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.prototype.$http = Axios;
import { extend } from "vee-validate";
import { required, min, email } from "vee-validate/dist/rules";
extend("required", required);
extend("min", min);
extend("email", email);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const token = localStorage.getItem('user-token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
