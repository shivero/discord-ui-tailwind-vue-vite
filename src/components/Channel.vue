<template>
  <div :class="unreadClass" class="">
    <div
      class="mx-2 flex h-8 items-center gap-2 rounded-sm px-2 opacity-100 hover:cursor-pointer hover:bg-gray-700 hover:text-gray-400">
      <div v-if="props.channel.type == 'voice'">
        <div><VolumeChannelIcon class="fill-gray-500" /></div>
      </div>
      <div v-else-if="props.channel.type == 'text'">
        <div><TextChannelIcon class="fill-gray-500" /></div>
      </div>

      <div
        :class="props.channel.unread ? 'text-white' : 'tex-gray-500'"
        class="w-[80%] -translate-y-0.5 truncate font-semibold">
        {{ props.channel.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IChannel } from "./IChannel";
import VolumeChannelIcon from "./Icons/VolumeChannelIcon.vue";
import TextChannelIcon from "./Icons/TextChannelIcon.vue";
const props = defineProps<{ channel: IChannel }>();

let unreadClass =
  props.channel.unread &&
  `before:content-[" "] relative before:absolute before:-translate-y-1/2 before:top-1/2
 before:rounded-full before:bg-white before:h-4 before:w-2 before:block before:-translate-x-1
overflow-hidden before:overflow-auto`;
</script>
