<script lang="ts">
import { defineComponent } from "vue"
import { $fetch } from "../fetch"
import { DettagliArticolo } from "../types"

export default defineComponent({
  data() {
    return {
      articolo: null as DettagliArticolo | null
    }
  },
  methods: {
    getArticolo() {
      $fetch("/api/articolo/" + this.$route.params.idArticolo).then(response => this.articolo = (response as any)[0])
    }
  },
  mounted() {
    this.getArticolo()
  }
})
</script>

<template>
  <template v-if="articolo">
    <h2>{{articolo.titoloarticolo}}</h2>
    <article>
      <img :src="'/img/' + articolo.imgarticolo" alt="" />
      <h3>{{articolo.titoloarticolo}}</h3>
      <p>{{articolo.nome}} - {{articolo.dataarticolo.slice(0, 10)}}</p>
      <p>{{articolo.testoarticolo}}</p>
    </article>
  </template>
</template>
