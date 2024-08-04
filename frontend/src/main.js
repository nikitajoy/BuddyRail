import { createApp } from 'vue'
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'


const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {path: '/', name: 'Home', component: HomeView},
            {path: '/about', name: 'About', component: AboutView},
         ]
    })
createApp(App)
.use(router)
.mount('#app')
