// Plugins
import { registerPlugins } from '@/plugins'
import axios from "axios";
import VueGtag from "vue-gtag";

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)


const api = 'https://buddyrail.com/api/'
//const api = 'http://localhost:5000/api/'


export const httpServer = axios.create({
  withCredentials: true,
  baseURL: api,
});

registerPlugins(app)

app.mount('#app')
app.use(VueGtag, {
  config: {
    id: process.env.VUE_APP_GOOGLE_ANALYTICS_PROPERTY_ID || 'G-3BFXBNXGVE',
  }
});