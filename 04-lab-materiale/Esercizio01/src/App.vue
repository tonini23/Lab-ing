<script lang="ts">
import { defineComponent } from "vue"

import personaggi from "./assets/sw.json"

import SwCard from "./components/SwCard.vue"  

export default defineComponent({
  data() {
    return { personaggi }
  },
  components: { SwCard }
})
</script>

<template>
  <div>
    <h1>Star Wars Character Database</h1>
    <div class="container">
      <sw-card v-for="personaggio in personaggi" 
      :key="personaggio.nome" :personaggio="personaggio"/>
    </div>
  </div>
</template>

<style scoped>

h1 {
  text-align: center;
}

.container {
  max-width: 768px;
  margin: auto;
}

</style>
