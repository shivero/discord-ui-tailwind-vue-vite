<script setup lang="ts">
import ArrowDown from "./Icons/ArrowDown.vue";

const serverName: string = "Accidentally";
</script>

<template>
  <div class="flex h-12 items-center justify-between rounded-tl-xl bg-discord-dark-2 px-4 shadow-slight-bottom">
    <div class="font-bold text-slate-200">{{ serverName }}</div>
    <div class="flex items-center">
      <ArrowDown class="inline-flex -translate-y-0.5 text-slate-400" />
    </div>
  </div>
</template>
