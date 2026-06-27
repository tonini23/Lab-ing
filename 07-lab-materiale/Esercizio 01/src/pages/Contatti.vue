<script lang="ts">
import { defineComponent } from "vue"
import { $fetch } from "../fetch"
import { Autore } from "../types"

export default defineComponent({
  data() {
    return {
      autori: [] as Autore[]
    }
  },
  methods: {
    getAutori: function(){
      $fetch("/api/autori").then(response => this.autori = response as Autore[])
    }
  },
  mounted(){
    this.getAutori()
  }
})
</script>

<template>
  <h2>Autori del Blog</h2>
  <section>
    <table>
      <thead>
        <tr>
          <th id="autore">Autore</th>
          <th id="email">Email</th>
          <th id="argomenti">Argomenti</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="autore in autori">
          <th>{{autore.nome}}</th>
          <td>{{autore.username}}</td>
          <td>{{autore.argomenti}}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
