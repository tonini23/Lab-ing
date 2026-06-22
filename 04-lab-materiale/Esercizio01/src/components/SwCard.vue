<script lang="ts">
import { defineComponent, PropType } from "vue"

interface Personaggio {
  nome: string;
  email: string;
  colorePreferito: string;
  coloreCapelli: string;
  coloreOcchi: string;
  genere: string;
  foto: string;
}

export default defineComponent({
  props: {
    personaggio: { type: Object as PropType<Personaggio>, required: true}
  }
})
</script>

<template>
  <div class="card">
    <img :src="personaggio.foto" :alt="personaggio.nome" />
    <div>
      <h2>{{ personaggio.nome }}</h2>
      <a :href="'mailto:' + personaggio.email">{{ personaggio.email }}</a>
      <table>
        <tbody>
          <tr>
            <td>Genere</td>
            <td>{{ personaggio.genere }}</td>
          </tr>
          <tr>
            <td>Colore occhi</td>
            <td>{{ personaggio.coloreOcchi }}</td>
          </tr>
          <tr>
            <td>Colore capelli</td>
            <td>{{ personaggio.coloreCapelli }}</td>
          </tr>
          <tr>
            <td>Colore preferito</td>
            <td class="color" :style="'background-color: ' + personaggio.colorePreferito"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  margin-bottom: 24px;
}

.card>div {
  padding: 16px;
}

img {
  margin-bottom: auto;
}

h2 {
  margin-top: 0;
}

table {
  margin-top: 12px;
}

.color {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}
</style>
