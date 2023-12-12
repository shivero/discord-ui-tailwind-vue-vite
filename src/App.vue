<script setup lang="ts">
import Sidebar from "./components/Sidebar.vue";
import Messages from "./components/Messages.vue";
import Channels from "./components/Channels.vue";
import AppHeader from "./components/AppHeader.vue";
import ChannelHeader from './components/ChannelHeader.vue';
</script>

<template>
  <div class="h-screen bg-discord-dark-3">
    <div class="relative h-full w-full">
      <AppHeader />
      <div class="grid h-full grid-cols-[auto_auto_1fr] overflow-hidden">
        <Sidebar />
        <Channels />
        <Messages />
      </div>
      <!-- <HelloWorld msg="Vite + Vue" /> -->
      <!-- <Button /> -->
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
