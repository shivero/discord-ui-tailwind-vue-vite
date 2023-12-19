<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { groupBy } from "../utils/groupBy";
import { useChannelStore } from "@/store/channelStore";
import { IChannel } from "../data/IChannel";
import Channel from "@/components/Channel.vue";
import ArrowDown from "./Icons/ArrowDown.vue";
import ServerHeader from "./Serverheader.vue";
const channels: Array<IChannel> = [
  { name: "information", group: "information", type: "text", unread: false },
  { name: "📢announcements", group: "information", type: "text", unread: false },
  { name: "events", group: "information", type: "text", unread: false },
  { name: "get-roles", group: "information", type: "text", unread: false },
  { name: "links-guides", group: "information", type: "text", unread: false },
  { name: "news-feed", group: "information", type: "text", unread: false },
  { name: "lottery", group: "information", type: "text", unread: false },
  { name: "general", group: "fc channels", type: "text", unread: false },
  { name: "questions-help", group: "fc channels", type: "text", unread: false },
  { name: "suggestions", group: "fc channels", type: "text", unread: false },
  { name: "off-topic", group: "fc channels", type: "text", unread: true },
  { name: "other-games", group: "fc channels", type: "text", unread: false },
  {
    name: "new-patch-spoilers",
    group: "fc channels",
    type: "text",
    unread: false,
  },
  { name: "other-spoilers", group: "fc channels", type: "text", unread: false },
  { name: "🏠 housing", group: "fc channels", type: "text", unread: false },
  { name: "screenshots", group: "media", type: "text", unread: false },
  { name: "🐶 pets", group: "media", type: "text", unread: false },
  { name: "memes", group: "media", type: "text", unread: true },
  { name: "music", group: "media", type: "text", unread: false },
  { name: "videos", group: "media", type: "text", unread: false },
  { name: "strims", group: "media", type: "text", unread: false },
  { name: "pf-strats", group: "raiding", type: "text", unread: true },
  { name: "raid-discussions", group: "raiding", type: "text", unread: false },
  { name: "looking-for-group", group: "raiding", type: "text", unread: false },
  { name: "general", group: "fc voice", type: "text", unread: false },
  { name: "raiding", group: "fc voice", type: "voice", unread: false },
  {
    name: "way cooler than should be",
    group: "fc voice",
    type: "voice",
    unread: false,
  },
  { name: "self reflections", group: "fc voice", type: "voice", unread: false },
  { name: "bot-commands", group: "bots", type: "text", unread: false },
  { name: "bot-commands", group: "bots", type: "text", unread: false },
  { name: "bot-commands", group: "bots", type: "text", unread: false },
  { name: "bot-commands", group: "bots", type: "text", unread: false },
];

const channelStore = useChannelStore();
const groupsOpen = true;
let groupedChannels = groupBy(channels, "group");
</script>

<template>
  <div
    class="flex min-h-0 w-60 flex-shrink-0 flex-grow-0 basis-auto flex-col overflow-hidden rounded-tl-xl bg-discord-dark-4">
    <ServerHeader class="flex-shrink-0" />
    <div class="scrollbar scrollbar-small flex-shrink flex-grow overflow-y-auto">
      <div v-for="(group, index) in groupedChannels">
        <Disclosure as="div" :default-open="groupsOpen" v-slot="{ open }">
          <DisclosureButton
            class="mt-4 flex h-6 w-full items-center px-1 text-left text-white">
            <div class="flex items-center text-xs uppercase tracking-wide text-slate-400">
              <ArrowDown
                :size="16"
                class="inline-flex fill-slate-400"
                :class="!open && '-rotate-90'" />
              <span> {{ index }}</span>
            </div>
          </DisclosureButton>
          <DisclosurePanel class="flex flex-col gap-[2px] text-gray-500">
            <div v-for="channel in group">
              <Channel
                :channel="channel"
                @click="channelStore.setChannel({ ...channel })" />
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
    <div class="flex h-12 w-full flex-shrink-0 items-center bg-slate-900 px-4 text-white">
      Anything
    </div>
  </div>
</template>
