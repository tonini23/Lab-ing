<template>
  <nav>
    <ul>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contatti">Contatti</router-link>
      <router-link to="/newsletter">Newsletter</router-link>
    </ul>
  </nav>
</template>

<style scoped>

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 16px;
}

</style>
