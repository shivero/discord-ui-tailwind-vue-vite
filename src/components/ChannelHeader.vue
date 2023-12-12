<script setup lang="ts">
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverGroup,
  PopoverOverlay,
} from "@headlessui/vue";
import { useChannelStore } from "@/store/channelStore";
import TextChannelIcon from "./Icons/TextChannelIcon.vue";
import VoiceChannelIcon from "./Icons/VolumeChannelIcon.vue";
import MdiCommentMultiple from "./Icons/MdiCommentMultiple.vue";
import MdiBell from "./Icons/MdiBell.vue";
import MdiPin from "./Icons/MdiPin.vue";
import MdiAccountMultiple from "./Icons/MdiAccountMultiple.vue";
import MdiMagnify from "./Icons/MdiMagnify.vue";
import MdiInbox from "./Icons/MdiInbox.vue";
import MdiHelpCircle from "./Icons/MdiHelpCircle.vue";
import PopoverBasic from "./Popover/PopoverBasic.vue";
import Tooltip from "./Tooltip/Tooltip.vue";
const channelStore = useChannelStore();
import { localeEn } from "../translations/locale-en";
</script>

<template>
  <div
    class="relative flex h-12 items-center justify-between rounded-tr-xl bg-discord-dark px-4 text-slate-200 shadow-slight-bottom">
    <div>
      <TextChannelIcon
        class="inline-block fill-gray-500"
        v-if="channelStore.type === 'text'" />
      <VoiceChannelIcon
        class="inline-block fill-gray-500"
        v-else-if="channelStore.type === 'voice'" />
      <span class="ml-2 font-bold">{{ channelStore.name }}</span>
    </div>
    <div class="flex flex-row items-center gap-4">
      <Popover v-slot="{ open }" class="relative">
        <PopoverButton>
          <Tooltip intent="primary" size="medium" :tooltipText="localeEn.ui_threads.name">
            <MdiCommentMultiple class="inline-block fill-gray-400 text-2xl" />
          </Tooltip>
        </PopoverButton>
        <PopoverPanel class="absolute right-0 top-8 z-10 w-80 rounded-lg">
          <PopoverBasic title="Threads" :open="open" :size="2" />
        </PopoverPanel>
      </Popover>
      <Tooltip
        intent="primary"
        size="medium"
        :tooltipText="localeEn.ui_notiifcations.name">
        <MdiBell class="inline-block fill-gray-400 text-2xl" />
      </Tooltip>
      <Tooltip intent="primary" size="medium" :tooltipText="localeEn.ui_pinned.name">
        <MdiPin class="inline-block fill-gray-400 text-2xl" />
      </Tooltip>
      <Tooltip intent="primary" size="medium" :tooltipText="localeEn.ui_members.name">
        <MdiAccountMultiple class="inline-block fill-gray-400 text-2xl" />
      </Tooltip>
      <div class="flex items-center">
        <input
          type="text"
          class="inline-flex h-6 flex-row items-center rounded-l-sm bg-discord-dark-3 px-2 pr-7 text-sm font-normal"
          placeholder="Search" />
        <div
          class="inline-flex h-6 -translate-x-5 items-center rounded-r-sm bg-discord-dark-3">
          <MdiMagnify class="shrink-0 fill-gray-400 text-base" />
        </div>
        <div class="flex flex-row gap-4">
          <Tooltip intent="primary" size="medium" :tooltipText="localeEn.ui_inbox.name">
            <MdiInbox class="inline-block shrink-0 fill-gray-400 text-2xl" />
          </Tooltip>
          <Tooltip intent="primary" size="medium" :tooltipText="localeEn.ui_help.name">
            <MdiHelpCircle class="inline-block shrink-0 fill-gray-400 text-2xl" />
          </Tooltip>
        </div>
      </div>
    </div>
  </div>
</template>
