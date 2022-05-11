import { createApp } from "vue";
import store from "./store";
import App from "./App.vue";
import router from "./router";
//import "./assets/reset.css";
import "./assets/tailwind.css";
import vueResource from "./resource.js";
import "./axios";

// Vue.prototype.$http = axios
// axios.defaults.baseURL="http://localhost:3000/api/"

const app = createApp(App);
app.use(store);
app.use(router);
app.mixin(vueResource);
app.mount("#app");
