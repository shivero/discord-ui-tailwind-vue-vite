<script setup lang="ts">
import Sidebar from "./components/Sidebar.vue";
import Messages from "./components/Messages.vue";
import Channels from "./components/Channels.vue";
import ChannelHeader from "./components/ChannelHeader.vue";
</script>

<template>
  <div
    class="discord-app relative h-full overflow-hidden bg-discord-dark-3">
    <div class="relative h-full w-full overflow-hidden">
      <div class="flex min-h-0 min-w-0 flex-auto overflow-hidden h-full">
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
