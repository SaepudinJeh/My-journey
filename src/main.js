import { createApp } from 'vue'
import { KinesisContainer, KinesisElement }from 'vue-kinesis';
import AOS from 'aos';

import router from './router';
import App from './App.vue'
import '../src/assets/tailwind.css'

const app = createApp(App)

app.component('kinesis-container', KinesisContainer)
app.component('kinesis-element', KinesisElement)

app.use(router)
app.use(AOS.init({
  once: true
}));
app.mount('#app')
