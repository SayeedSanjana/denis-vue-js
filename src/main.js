import { createApp } from "vue";
import store from "./store";
import App from "./App.vue";
import router from "./router";
import vueResource from "./resource.js";
import "./axios";
import './assets/index.css'

import Default from './layouts/Default.vue';
import Blank from './layouts/Blank.vue';

const app = createApp(App);
app.use(store);
app.use(router);
// app.use(vueResource);

app.component("default-layout", Default);
app.component("blank-layout", Blank);
app.mixin(vueResource);
app.mount("#app");
