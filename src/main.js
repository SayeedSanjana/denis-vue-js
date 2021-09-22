import { createApp } from "vue";
//import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import './axios'

// Vue.prototype.$http = axios
// axios.defaults.baseURL="http://localhost:3000/api/"

createApp(App).use(router).mount("#app");
