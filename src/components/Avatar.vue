<script setup lang="ts">
defineProps({ size: Number });
</script>

<template>
  <div :class="`h-${size} w-${size}`" class="rounded-full bg-slate-800">
    <img src="" />
  </div>
</template>
