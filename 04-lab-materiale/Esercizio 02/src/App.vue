<script lang="ts">
import { defineComponent } from "vue"
import AppMenu from "./components/AppMenu.vue"

export default defineComponent({
  components: {
    AppMenu
  }
})
</script>

<template>
  <div>
    <AppMenu />
    <RouterView />
  </div>
</template>

<style scoped>

div {
  max-width: 768px;
  margin: auto;
}

</style>
