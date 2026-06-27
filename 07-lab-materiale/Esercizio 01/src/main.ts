import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import Home from "./pages/Home.vue"
import Archivio from "./pages/Archivio.vue"
import Contatti from "./pages/Contatti.vue"
import Login from "./pages/Login.vue"
import Articolo from "./pages/Articolo.vue"
import PageNotFound from "./pages/NotFound.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/archivio", component: Archivio },
    { path: "/contatti", component: Contatti },
    { path: "/login", component: Login },
    { path: "/articolo/:idArticolo", component: Articolo },
    { path: "/:pathMatch(.*)*", component: PageNotFound }
  ]
})

createApp(App)
  .use(router)
  .mount("#app")
