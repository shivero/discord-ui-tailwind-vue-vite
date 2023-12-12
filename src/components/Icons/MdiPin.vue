<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    width="1em"
    :viewBox="viewBox">
    <path
      fill="inherit"
      d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2Z"></path>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  size: { type: Number, default: 24 },
});

const viewBox = computed(() => `0 0 ${props.size} ${props.size}`);
</script>