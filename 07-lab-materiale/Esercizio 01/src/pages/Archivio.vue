<script lang="ts">
import { defineComponent } from "vue"
import { $fetch } from "../fetch"
import { Articolo } from "../types"
import ArticoloItem from "../components/ArticoloItem.vue"

export default defineComponent({
  components: { ArticoloItem },
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
  <ArticoloItem :articolo="articolo" v-for="articolo in datiArticoli">
  </ArticoloItem>
</template>
