// Plugins
import { registerPlugins } from '@/plugins'
import axios from "axios";

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)


const API = 'https://buddyrail.com/api/'
// const API = 'http://localhost:5000/api/'


export const httpServer = axios.create({
    withCredentials: true,
    baseURL: API,
  });





registerPlugins(app)

app.mount('#app')
