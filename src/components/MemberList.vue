<script setup lang="ts">
import { useMemberPanelStore } from "@/store/memberPanelStore";
import { getGroupedMembers } from "../data/members";
const showMemberPanel = true;

const memberPanelStore = useMemberPanelStore();


const colorMemberNameByRole = (role: string) => {
  switch (role) {
    case "Admin":
      return "text-red-400";
    case "Moderator":
      return "text-orange-400";
    case "Member":
      return "text-teal-400";
    default:
      return "text-gray-400";
  }
};
</script>

<template>
  <div
    v-show="memberPanelStore.isOpen"
    class="scrollbar flex min-h-0 w-60 flex-col gap-2 overflow-y-scroll bg-discord-dark-4 px-4">
    <div v-for="(member, gindex) in getGroupedMembers()" class="">
      <div class="mt-6 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
        {{ gindex }} – {{ member.length }}
      </div>
      <div
        v-for="(item, index) in member"
        class="flex items-center gap-4 py-2 text-gray-400">
        <div class="h-10 w-10 overflow-hidden rounded-full bg-gray-600">
          <img :src="item.avatar_url" alt="" />
        </div>
        <div :class="colorMemberNameByRole(gindex as string)">
          {{ item.name }}
          <div v-if="item.game_status?.length" class="text-xs text-gray-400">
            Playing <span class="font-semibold">{{ item.game_status }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
