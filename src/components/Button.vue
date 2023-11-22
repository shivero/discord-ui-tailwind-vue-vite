<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <button
    class="h-10 rounded-sm bg-discord-dark-3 px-6 text-white hover:bg-discord-dark-2"
    type="button"
    @click="count++"
  >
    count is {{ count }}
  </button>
</template>
<style></style>
