import './assets/tailwind.css';
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './routes/router';

const aplication = createApp(App);

aplication.use(router);

aplication.use(createPinia());

aplication.mount('#app');
