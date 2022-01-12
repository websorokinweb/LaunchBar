import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Libs

import "normalize.css"

// Libs

const app = createApp(App)

// Global Components

import AppButton from './components/App/AppButton'
import AppLogo from './components/App/AppLogo'

app.component('AppButton', AppButton)
app.component('AppLogo', AppLogo)

// Global Components

app.use(store).use(router).mount('#app')
