<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Button from "./components/Button.vue";
import Sidebar from "./components/Sidebar.vue";
import Messages from "./components/Messages.vue";
</script>

<template>
  <div class="bg-discord-dark-4">
    <div class="container mx-auto">
      <div class="grid grid-cols-[auto_auto_1fr]">
        <Sidebar />
        <div class="bg-discord-dark-1 w-64"></div>
        <Messages />
      </div>
      <HelloWorld msg="Vite + Vue" />
      <Button />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
