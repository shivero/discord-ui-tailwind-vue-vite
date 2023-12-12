<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    width="1em"
    :viewBox="viewBox">
    <path
      fill="inherit"
      d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6l2 2m-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"></path>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  size: { type: Number, default: 24 },
});

const viewBox = computed(() => `0 0 ${props.size} ${props.size}`);
</script>