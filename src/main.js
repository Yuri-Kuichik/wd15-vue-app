import './assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { markRaw } from 'vue'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css';

import BaseLayout from './components/BaseLayout.vue';
import BaseInput from './components/BaseInput.vue';
import BaseButton from './components/BaseButton.vue';
import BaseModal from './components/BaseModal.vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(ElementPlus)

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.component('BaseLayout', BaseLayout);
app.component('BaseInput', BaseInput);
app.component('BaseButton', BaseButton);
app.component('BaseModal', BaseModal);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.directive('highlight', {
  mounted: (el) => el.classList.add('is-highlight')
})

app.mount('#app')
