import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createRouter, createWebHistory, type Router } from 'vue-router'

import Home from './pages/Home.vue'
import About from './pages/About.vue'

const router: Router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: Home},
    {path: '/about', component: About}
  ]
});

createApp(App).use(router).mount('#app')
