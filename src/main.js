import './assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import BaseLayout from './components/BaseLayout.vue';
import BaseInput from './components/BaseInput.vue';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('MyBaseLayout', BaseLayout);
app.component('BaseInput', BaseInput);

app.mount('#app')
