<template>
  <span class="icon-[mdi--comment-multiple] align-[auto]" :class="props.classes"></span>
</template>

<script setup lang="ts">
const props = defineProps({
  classes: { type: String, default: "" },
});
</script>
