<script lang="ts">
import { defineComponent } from "vue"
import { Autore } from "../types"
import axios from "axios"

export default defineComponent({
  data() {
    return {
      autore: null as Autore | null
    }
  },
  methods: {
    getAutore() {
      axios.get(`/api/autore/${this.$route.params.idAutore}`)
        .then(response => this.autore = response.data[0])
    }
  },
  mounted() {
    this.getAutore()
  }
})
</script>

<template>
    <template v-if="autore">
        <h2>{{autore.nome}}</h2>
        <article>
            <h3>{{autore.username}}</h3>
            <p>{{autore.argomenti}}</p>
        </article>
    </template>
</template>