import { createApp } from "vue"
import { createRouter, createWebHistory, Router } from "vue-router"
import "./style.css"
import App from "./App.vue"
import Home from "./pages/Home.vue"
import Archivio from "./pages/Archivio.vue"
import Contatti from "./pages/Contatti.vue"
import Login from "./pages/Login.vue"
import Articolo from "./pages/Articolo.vue"
import Autore from "./pages/Autore.vue"
import NotFound from "./pages/NotFound.vue"

const router: Router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/archivio", component: Archivio },
    { path: "/contatti", component: Contatti },
    { path: "/login", component: Login },
    { path: "/articolo/:idArticolo", component: Articolo },
    { path: "/autore/:idAutore", component: Autore },
    { path: "/:pathMatch(.*)*", component: NotFound }
  ]
})

createApp(App)
  .use(router)
  .mount("#app")
