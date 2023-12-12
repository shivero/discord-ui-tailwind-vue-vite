<script setup lang="ts">
import { PopoverButton } from '@headlessui/vue';
const props = defineProps({
  title: String,
  size: Number,
  open: Boolean,
});
import MdiClose from "../Icons/MdiClose.vue";
import Button from '../Button.vue';
</script>

<template>
  <div class="w-full shadow-lg shadow-zinc-800 ">
    <div
      class="flex h-12 items-center justify-between rounded-t-lg bg-discord-dark-3 px-4">
      Threads
      <PopoverButton><MdiClose class="text-xl" /></PopoverButton>
    </div>
    <div class="bg-discord-dark px-4 rounded-b-lg border border-zinc-800">
      <div class="py-10 text-center">
        <div class="text-xl font-bold">There are no threads</div>
        <div class="text-sm text-slate-400">
          Stay focused on a conversation by turning it into a thread, a temporary text
          channel.
        </div>
        <div><Button intent="primary" size="medium">Create Thread</Button></div>
      </div>
    </div>
  </div>
</template>
