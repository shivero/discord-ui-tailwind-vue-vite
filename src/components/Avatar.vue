<script setup lang="ts">
const props = defineProps({ size: Number });

const randomAvatarId = Math.floor(Math.random() * 5) + 1;
</script>

<template>
  <div
    class="shrink-0 rounded-full overflow-hidden bg-gray-600">
      <img :src="`src/assets/avatars/toon_${randomAvatarId}.png`" alt="" />
  </div>
</template>
