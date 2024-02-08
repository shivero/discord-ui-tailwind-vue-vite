<template>
  <span class="icon-[mdi--magnify]" :class="props.classes"></span>
</template>

<script setup lang="ts">
const props = defineProps({
  classes: { type: String, default: "" },
});
</script>
