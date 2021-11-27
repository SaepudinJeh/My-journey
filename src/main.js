import { createApp } from 'vue'
import AOS from 'aos';

import './assets/tailwind.css';
// import 'aos/dist/aos.css';
import router from './router';
import App from './App.vue';

const app = createApp(App);

app.use(router)
app.use(AOS.init({
  once: true
}));
app.mount('#app')
