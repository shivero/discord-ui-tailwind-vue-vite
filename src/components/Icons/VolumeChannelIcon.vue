<template>
  <span class="icon-[mdi--volume] align-middle" :class="props.classes"></span>
</template>

<script setup lang="ts">
const props = defineProps({
  classes: { type: String, default: "" },
});
</script>
