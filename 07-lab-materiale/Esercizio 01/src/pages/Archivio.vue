<script lang="ts">
import { defineComponent } from "vue"
import { $fetch } from "../fetch"
import { Articolo } from "../types"

export default defineComponent({
  data() {
    return {
      datiArticoli: [] as Articolo[]
    }
  },
  methods: {
    getArchivioArticoli() {
      $fetch("/api/articoli").then(response => this.datiArticoli = response as Articolo[])
    }
  },
  mounted() {
    this.getArchivioArticoli()
  }
})
</script>

<template>
  <h2>Archivio Articoli</h2>
  <article v-for="articolo in datiArticoli">
    <img :src="'/img/' + articolo.imgarticolo" alt="" />
    <h3>{{articolo.titoloarticolo}}</h3>
    <p>{{articolo.nome}} - {{articolo.dataarticolo.slice(0, 10)}}</p>
    <p>{{articolo.anteprimaarticolo}}</p>
    <RouterLink :to="'/articolo/' + articolo.idarticolo">Leggi tutto</RouterLink>
  </article>
</template>
