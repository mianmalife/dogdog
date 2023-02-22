import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/main.css";
// import "./style/index.css";

const app = createApp(App);

app.use(router);

app.use(store);

app.mount("#app");
