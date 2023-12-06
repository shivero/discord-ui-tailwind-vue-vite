<script setup lang="ts">
import ArrowDown from "./Icons/ArrowDown.vue";
</script>

<template>
  <div
    class="flex h-12 items-center justify-between rounded-tl-xl border-b-2 border-discord-dark-3 bg-discord-dark-2 px-6">
    <div class="font-bold text-slate-200">Accidentally</div>
    <div class="icon">
      <ArrowDown :size="20" class="inline-flex -translate-y-0.5 fill-slate-400" />
    </div>
  </div>
</template>
