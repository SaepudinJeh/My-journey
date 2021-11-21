import { createApp } from 'vue'
import { KinesisContainer, KinesisElement }from 'vue-kinesis';

import router from './router';
import App from './App.vue'
import '../src/assets/tailwind.css'

const app = createApp(App)

app.component('kinesis-container', KinesisContainer)
app.component('kinesis-element', KinesisElement)

app.use(router)
app.mount('#app')
