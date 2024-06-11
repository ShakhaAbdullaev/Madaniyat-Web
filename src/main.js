import { createApp } from "vue";
import router from "./router";
import "./style.css";
import App from "./App.vue";
import '@fortawesome/fontawesome-free/css/all.css';
import { vMaska } from 'maska/vue'

createApp(App).use(router).directive("maska", vMaska).mount("#app");
