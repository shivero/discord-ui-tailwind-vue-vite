<script setup lang="ts">
const props = defineProps({ status: String });
</script>

<template>
  <div class="" :title="props.status">
    <div v-if="props.status === 'online'">
      <div class="h-3 w-3 rounded-full bg-green-700"></div>
    </div>
    <div v-if="props.status === 'idle'">
      <div class="h-3 w-3 rounded-full bg-yellow-600">
        <div class="h-2 w-2 rounded-full bg-slate-600"></div>
      </div>
    </div>
  </div>
</template>
