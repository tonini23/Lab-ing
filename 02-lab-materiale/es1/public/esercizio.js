const Home = {     
    data() {
        return {
            datiArticoli: null       
        }
    }, 
    template:  `
    <h2>Ultimi Articoli</h2>
    <article v-for="articolo in datiArticoli">
        <img v-bind:src="'/img/'+ articolo['imgarticolo']" alt="" />
        <h3>{{articolo["titoloarticolo"]}}</h3>
        <p>{{articolo["nome"]}} - {{articolo["dataarticolo"]}}</p>
        <p>{{articolo["anteprimaarticolo"]}}</p>
        <a href="#">Leggi tutto</a>
    </article>
    `,
    methods: {
        getUltimiArticoli: function(){
            axios.get('/api/articoli/:n')
              .then(response => {
                this.datiArticoli = response.data
              });
        }
    },
    mounted(){
        this.getUltimiArticoli();
    }
};

const Archivio = {     
    data() {
        return {
            datiArticoli: null        
        }
    }, 
    template:  `
    <h2>Archivio Articoli</h2>
    <article v-for="articolo in datiArticoli">
        <img v-bind:src="'/img/'+ articolo['imgarticolo']" alt="" />
        <h3>{{articolo["titoloarticolo"]}}</h3>
        <p>{{articolo["nome"]}} - {{articolo["dataarticolo"]}}</p>
        <p>{{articolo["anteprimaarticolo"]}}</p>
        <a href="#">Leggi tutto</a>
    </article>
    `,
    methods: {
        getArchivioArticoli: function(){
            axios.get('/api/articoli')
              .then(response => {
                this.datiArticoli = response.data
              });
        }
    },
    mounted(){
        this.getArchivioArticoli();
    }

};


const Contatti = {
    data() {
        return {
            autori: null        
        }
    }, 
    template:  `
    <h2>Autori del Blog</h2>
    <section>
        <table>
            <tr>
                <th id="autore">Autore</th><th id="email">Email</th><th id="argomenti">Argomenti</th>
            </tr>
            <tr v-for="autore in autori">
                <th>{{autore.nome}}</th><td>{{autore.username}}</td><td>{{autore.argomenti}}</td>
            </tr>
        </table>
    </section>    `,
    methods: {
        getAutori: function(){
            axios.get('/api/autori')
              .then(response => {
                this.autori = response.data
              });
        }
    },
    mounted(){
        this.getAutori();
    }

};

const Login = {     
    template:  `
    <h2>Login</h2>
    <form action="#" method="POST">
        <ul>
            <li>
                <label for="username">Username:</label><input type="text" id="username" name="username" />
            </li>
            <li>
                <label for="password">Password:</label><input type="password" id="password" name="password" />
            </li>
            <li>
                <input type="submit" name="submit" value="Invia" />
            </li>
        </ul>
    </form>
   `
};



const routes = [
  { path: '/', component: Home },
  { path: '/archivio', component: Archivio },
  { path: '/contatti', component: Contatti },
  { path: '/login', component: Login }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
