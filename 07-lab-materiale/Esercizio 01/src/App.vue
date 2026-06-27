<template>
  <header>
    <h1>Blog di Tecnologie Web</h1>
  </header>
  <nav>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/archivio">Archivio</RouterLink></li>
      <li><RouterLink to="/contatti">Contatti</RouterLink></li>
      <li><RouterLink to="/login">Login</RouterLink></li>
    </ul>
  </nav>
  <main>
    <RouterView />
  </main>
  <aside>
    <section>
      <h2>Post Popolari</h2>
      <ul>
        <li><a href="#">Intro alle Tecnologie Web Client Side</a></li>
        <li><a href="#">Intro alle Tecnologie Web Server Side</a></li>
      </ul>
    </section>
    <section>
      <h2>Categorie</h2>
      <ul>
        <li><a href="#">HTML</a></li>
        <li><a href="#">CSS</a></li>
        <li><a href="#">PHP</a></li>
        <li><a href="#">Javascript</a></li>
        <li><a href="#">jQuery</a></li>
        <li><a href="#">Apache</a></li>
      </ul>
    </section>
  </aside>
  <footer>
    <p>Ingegneria dei Sistemi Web - A.A. 2022/2023</p>
  </footer>
</template>

<style lang="scss">
@import "./style.css";
</style>
