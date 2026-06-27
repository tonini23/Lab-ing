<script lang="ts">
import { defineComponent } from "vue"
import { Autore } from "../types"
import axios from "axios"

export default defineComponent({
  data() {
    return {
      autore: null as Autore | null,
      articoliAutore: [] as any[]
    }
  },
  methods: {
    getAutore() {
      axios.get(`/api/autore/${this.$route.params.idAutore}`)
        .then(response => this.autore = response.data[0])
    },
    getArticoliAutore() {
      axios.get(`/api/articoli/autore/${this.$route.params.idAutore}`)
        .then(response => this.articoliAutore = response.data)
    }
  },
  mounted() {
    this.getAutore()
    this.getArticoliAutore()
  }
})
</script>

<template>
    <template v-if="autore">
        <h2>{{autore.nome}} - {{autore.username}}</h2>
        <article v-for="articolo in articoliAutore" :key="articolo.idarticolo">
            <img :src="'/img/' + articolo.imgarticolo" alt="immagine articolo" />
            <p>{{autore.nome}} {{articolo.dataarticolo.slice(0, 10)}}</p>
            <p>{{articolo.anteprimaarticolo}}</p>
        </article>
    </template>
</template>