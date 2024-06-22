import { createApp } from "vue";
import router from "./router";
import "./style.css";
import App from "./App.vue";
import '@fortawesome/fontawesome-free/css/all.css';
import { vMaska } from 'maska/vue';
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';



const app = createApp(App);

app.use(router);
app.use(VCalendar, { componentPrefix: 'vc' });

app.mount("#app");
