import { createApp } from "vue";
import router from "./router";
import "./style.css";
import App from "./App.vue";
import '@fortawesome/fontawesome-free/css/all.css';
import { languages } from "./i18n";
import { defaultLocale } from "./i18n";
import { createI18n } from 'vue-i18n'

const savedLocale = localStorage.getItem('locale') || defaultLocale;

const messages = Object.assign(languages)
const i18n = createI18n({
    legacy: false,
    locale: savedLocale,
    fallbackLocale: 'uz',
    messages
  })

const app = createApp(App);

app.use(router);
app.use(i18n)

app.mount("#app");
