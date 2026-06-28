<script lang="ts">

import { defineComponent, PropType } from "vue"
import { Articolo } from "../types"

export default defineComponent({
  props: {
    articolo: {
      type: Object as PropType<Articolo>,
      required: true
    }
  }
})

</script>

<template>
  <article>
    <img :src="'/img/' + articolo.imgarticolo" alt="" />
    <h3>{{articolo.titoloarticolo}}</h3>
    <p>{{articolo.nome}} - {{articolo.dataarticolo.slice(0, 10)}}</p>
    <p>{{articolo.anteprimaarticolo}}</p>
    <RouterLink :to="'/articolo/' + articolo.idarticolo">Leggi tutto</RouterLink>
  </article>
</template>