// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import TButton from './components/TButton.vue';

const app = createApp(App);
app.component('TButton', TButton);
app.mount('#app');
