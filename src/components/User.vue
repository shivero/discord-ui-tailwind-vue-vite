<script setup lang="ts">
import formatRelative from 'date-fns/formatRelative';

defineProps(["username", "isreply", "timestamp"]);

const setUserColor = (username: string) => {
  switch (username) {
    case "User1":
      return "#d440ff";
    case "User2":
      return "#51b636";
    case "User3":
      return "#3498db";
    case "User4":
      return "#e74c3c";
    case "User5":
      return "#e12345";
  }
};
</script>

<template>
  <div
    class="font-semibold leading-none text-slate-500"
    :style="{ color: setUserColor(username) }">
    {{ username }}
    <span class="text-sm font-normal text-gray-400" v-if="isreply">{{
      formatRelative(new Date(timestamp), new Date())
    }}</span>
  </div>
</template>
