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
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ref } from "vue";
import ArrowDown from "./Icons/ArrowDown.vue";
import ArrowRight from "./Icons/ArrowRight.vue";
import { useMemberPanelStore } from "@/store/memberPanelStore";

const memberPanelStore = useMemberPanelStore();

const muteMenuOpen = ref(false);

const t: number = 1;

const notificationMenuItems = [
  { name: "Use Category Default", subtext: "@only mentions", active: true },
  { name: "All" },
  { name: "Mentions" },
  { name: "Nothing" },
];
const muteNotificationOptions = [
  { name: "For 15 minutes" },
  { name: "For 1 hour" },
  { name: "For 3 hours" },
  { name: "For 8 hours" },
  { name: "For 24 hours" },
  { name: "Until next week" },
  { name: "Until I turn it back on" },
];
</script>

<template>
  <div
    class="relative flex h-12 flex-shrink-0 items-center justify-between rounded-tr-xl bg-discord-dark px-4 text-slate-200 shadow-slight-bottom">
    <div class="flex items-center flex-nowrap">
      <TextChannelIcon
        class="inline-block fill-gray-500"
        v-if="channelStore.type === 'text'" />
      <VoiceChannelIcon
        class="inline-block fill-gray-500"
        v-else-if="channelStore.type === 'voice'" />
      <span class="ml-2 font-bold">{{ channelStore.name }}</span>
    </div>
    <div class="flex flex-row items-center gap-4  outline-dashed outline-1">
      <Popover v-slot="{ open }" class="relative">
        <PopoverButton class="flex items-center">
          <Tooltip intent="primary" size="medium" :tooltipText="localeEn.ui_threads.name">
            <MdiCommentMultiple class="inline-block text-gray-400 text-2xl" />
          </Tooltip>
        </PopoverButton>
        <PopoverPanel class="absolute right-0 top-8 z-10 w-80 rounded-lg">
          <PopoverBasic title="Threads" :open="open" :size="2" />
        </PopoverPanel>
      </Popover>
      <Menu class="relative" as="div">
        <MenuButton>
          <Tooltip
            intent="primary"
            size="medium"
            :tooltipText="localeEn.ui_notifcations.name">
            <MdiBell class="inline-block text-gray-400 text-2xl" />
          </Tooltip>
        </MenuButton>

        <MenuItems
          class="absolute right-0 top-10 flex w-min max-w-sm flex-col rounded-lg bg-zinc-900 px-2 py-2">
          <MenuItem class="mb-1">
            <span>
              <Menu as="div" class="relative" v-slot="{ open }">
                <MenuButton
                  class="flex h-8 w-full items-center justify-between rounded-sm p-2 text-sm text-gray-400 hover:bg-discord-blue hover:text-white"
                  :onmouseenter="() => (muteMenuOpen = true)">
                  Mute Channel <ArrowRight class="translate-x-2 text-gray-400 text-lg" />
                </MenuButton>
                <MenuItems
                  static
                  v-show="muteMenuOpen"
                  class="absolute left-8 right-0 top-0 flex w-max max-w-xs -translate-y-2 translate-x-full flex-col rounded-lg bg-zinc-900 px-2 py-2">
                  <MenuItem
                    v-for="item in muteNotificationOptions"
                    class="min-h-8 flex w-full flex-col rounded-sm p-2 text-sm text-gray-400 hover:cursor-pointer hover:bg-discord-blue hover:text-white"
                    v-slot="{ active }">
                    <div>
                      <div>{{ item.name }}</div>
                    </div>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </span>
          </MenuItem>
          <div class="mx-1 my-1 border border-zinc-600"></div>
          <MenuItem
            v-for="item in notificationMenuItems"
            class="group flex w-full rounded-sm p-2 text-sm leading-none text-gray-400 [min-height:9px] hover:cursor-pointer hover:bg-discord-blue hover:text-white"
            v-slot="{ active }"
            :onmouseenter="() => (muteMenuOpen = false)">
            <div class="flex flex-nowrap items-center justify-between">
              <div class="leading-tight">
                <div class="whitespace-nowrap">{{ item.name }}</div>
                <div class="font-bold">{{ item.subtext }}</div>
              </div>
              <div
                class="ml-4 box-content flex h-3 w-3 items-center justify-center rounded-full border-2 border-gray-400 group-hover:border-white">
                <div
                  :class="item.active ? 'bg-discord-blue group-hover:bg-white' : ''"
                  class="absolute m-auto rounded-full [height:8px] [width:8px]"></div>
              </div>
            </div>
          </MenuItem>
        </MenuItems>
      </Menu>
      <Tooltip intent="primary" size="medium" :tooltipText="localeEn.ui_pinned.name">
        <MdiPin class="inline-block text-gray-400 text-2xl" />
      </Tooltip>
      <Tooltip intent="primary" size="medium" :tooltipText="localeEn.ui_members.name">
        <MdiAccountMultiple class="inline-block text-gray-400 text-2xl cursor-pointer" @click="memberPanelStore.toggleMemberPanel" />
      </Tooltip>
      <div class="flex items-center">
        <input
          type="text"
          class="inline-flex h-6 flex-row items-center rounded-l-sm bg-discord-dark-3 px-2 pr-7 text-sm font-normal"
          placeholder="Search" />
        <div
          class="inline-flex h-6 -translate-x-5 items-center rounded-r-sm bg-discord-dark-3">
          <MdiMagnify class="shrink-0 text-gray-400 text-base" />
        </div>
        <div class="flex flex-row gap-4">
          <Tooltip intent="primary" size="medium" :tooltipText="localeEn.ui_inbox.name">
            <MdiInbox class="inline-block shrink-0 text-gray-400 text-2xl" />
          </Tooltip>
          <Tooltip intent="primary" size="medium" :tooltipText="localeEn.ui_help.name">
            <MdiHelpCircle class="inline-block shrink-0 text-gray-400 text-2xl" />
          </Tooltip>
        </div>
      </div>
    </div>
  </div>
</template>
