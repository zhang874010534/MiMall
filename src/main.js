import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import '../src/assets/global.css'
// import baseURL from "./env.js"; 

Vue.config.productionTip = false;
// webpack接口代理了'/api' 那么请求的时候甚至/api都不用写了直接写想要的接口
axios.defaults.baseURL = '';
// 超时时间
axios.defaults.timeout = 8000;
axios.interceptors.response.use((response) => {
  let res = response.data;
  if (res.status === 0) {
    return res.data;
  } else if (res.status === 10) {
    window.location.href = "/#/login";
  }
});
Vue.prototype.axios = axios;

axios.get("");

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
