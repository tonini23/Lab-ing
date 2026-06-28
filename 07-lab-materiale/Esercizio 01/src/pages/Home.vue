<script lang="ts">
import { defineComponent } from "vue"
import { $fetch } from "../fetch"
import { Articolo } from "../types"
import ArticoloItem from "../components/ArticoloItem.vue"

export default defineComponent({
  components: {
    ArticoloItem
  },
  data() {
    return {
      datiArticoli: [] as Articolo[]
    }
  },
  methods: {
    getUltimiArticoli() {
      $fetch("/api/articoli/2").then(response => this.datiArticoli = response as Articolo[])
    }
  },
  mounted() {
    this.getUltimiArticoli()
  }
})
</script>

<template>
  <h2>Ultimi Articoli</h2>
  <ArticoloItem :articolo="articolo" v-for="articolo in datiArticoli" />
</template>
