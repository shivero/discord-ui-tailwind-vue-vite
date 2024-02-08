<template>
  <span class="icon-[mdi--hashtag]" :class="props.classes"></span>
</template>

<script setup lang="ts">
const props = defineProps({
  classes: { type: String, default: "" },
});
</script>
