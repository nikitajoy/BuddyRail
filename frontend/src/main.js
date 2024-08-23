/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import axios from "axios";

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)
// prod https://buddyrail.com local localhost

const API = 'https://buddyrail.com/api/'
export const httpServer = axios.create({
    withCredentials: true,
    baseURL: API,
  });





registerPlugins(app)

app.mount('#app')
