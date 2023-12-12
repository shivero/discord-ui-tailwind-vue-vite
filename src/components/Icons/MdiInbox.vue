<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    width="1em"
    :viewBox="viewBox">
    <path
      fill="inherit"
      d="M19 15h-4a3 3 0 0 1-3 3a3 3 0 0 1-3-3H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"></path>
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  size: { type: Number, default: 24 },
});

const viewBox = computed(() => `0 0 ${props.size} ${props.size}`);
</script>
