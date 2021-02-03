import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css';

import AppLayout from './components/layout/AppLayout.vue';
import EmptyLayout from './components/layout/EmptyLayout.vue';

const app = createApp(App)
app.component('default-layout', AppLayout);
app.component('empty-layout', EmptyLayout);
app.use(router)
app.mount('#app')
