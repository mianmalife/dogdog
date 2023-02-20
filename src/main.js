import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "element-plus/theme-chalk/index.css";

// import "./style/index.css";

const app = createApp(App);

app.use(router);

app.use(store);

app.mount("#app");