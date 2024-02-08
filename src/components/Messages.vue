<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import User from "./User.vue";
import Avatar from "./Avatar.vue";
import { useChannelStore } from "@/store/channelStore";
import ChannelHeader from "./ChannelHeader.vue";
import MemberList from "./MemberList.vue";
interface Message {
  user: string;
  type: string;
  timestamp: string;
  message: string;
  image?: boolean;
  image_url?: string;
  replyTo?: Message;
}

const channelStore = useChannelStore();

let messages: Array<Message> = [
  {
    user: "User1",
    type: "",
    timestamp: "2023-11-20T12:05:00Z",
    message: "Hey, has anyone tried the new VR headset from Sony?",
  },
  {
    user: "User2",
    type: "",
    timestamp: "2023-11-21T12:08:00Z",
    message: "Yeah, I got it last week. It's impressive.",
  },
  {
    user: "User3",
    type: "",
    timestamp: "2023-11-21T12:15:00Z",
    message: "I prefer the Oculus Rift for its game library.",
  },
  {
    user: "User4",
    type: "",
    timestamp: "2023-11-21T12:18:00Z",
    message: "Have you considered the latest Valve Index? Great specs.",
  },
  {
    user: "User1",
    type: "",
    timestamp: "2023-11-21T12:19:00Z",
    message: "Thanks, I'll check it out. Any other recommendations?",
  },
  {
    user: "User2",
    type: "",
    timestamp: "2023-11-21T12:19:30Z",
    message: "If you're into immersive experiences, also look into the HTC Vive Pro.",
  },
  {
    user: "User3",
    type: "",
    timestamp: "2023-11-21T12:21:00Z",
    message: "True, the Vive Pro has excellent tracking capabilities.",
  },
  {
    user: "User4",
    type: "",
    timestamp: "2023-11-21T12:25:00Z",
    message: "Personally, I find the wireless feature of the Oculus Quest 2 a game-changer.",
  },
  {
    user: "User1",
    type: "",
    timestamp: "2023-11-21T12:33:00Z",
    message: "Wireless does sound appealing. How's the game compatibility on Quest 2?",
  },
  {
    user: "User2",
    type: "",
    timestamp: "2023-11-21T13:05:00Z",
    message: "Quest 2 has a growing library. Many popular titles are available.",
    image: true,
    image_url: "https://picsum.photos/4200/2300",
  },
  {
    user: "User3",
    type: "",
    timestamp: "2023-11-21T14:05:00Z",
    message: "Consider the Pimax 8KX for its unparalleled resolution if you're a graphics enthusiast.",
  },
  {
    user: "User4",
    type: "",
    timestamp: "2023-11-21T15:01:00Z",
    message: "Pimax is great, but make sure your PC can handle the high requirements.",
  },
  {
    user: "User1",
    type: "",
    timestamp: "2023-11-21T15:02:00Z",
    message: "Thanks for the tips. Any thoughts on upcoming VR innovations?",
  },
  {
    user: "User2",
    type: "",
    timestamp: "2023-11-21T15:05:00Z",
    message: "Rumors about haptic feedback suits for full-body immersion are circulating.",
  },
  {
    user: "User3",
    type: "reply",
    replyTo: {
      user: "User2",
      type: "",
      timestamp: "2023-11-21T15:05:00Z",
      message: "Rumors about haptic feedback suits for full-body immersion are circulating.",
    },
    timestamp: "2023-11-21T15:25:00Z",
    message: "I've heard about neural interfaces in development for more direct interaction.",
  },
  {
    user: "User4",
    type: "",
    timestamp: "2023-11-21T15:25:30Z",
    message: "Keep an eye on Varjo for their advancements in human-eye resolution.",
  },
  {
    user: "User1",
    type: "",
    timestamp: "2023-11-21T15:28:00Z",
    message: "Exciting times for VR! Can't wait to see these innovations in action.",
  },
  {
    user: "User2",
    type: "",
    timestamp: "2023-11-21T15:29:00Z",
    message: "Absolutely! The future of virtual reality is bound to be mind-blowing.",
  },
  {
    user: "User3",
    type: "",
    timestamp: "2023-11-21T15:31:00Z",
    message: "Agreed. The convergence of tech and gaming is opening up incredible possibilities.",
  },
  {
    user: "User4",
    type: "",
    timestamp: "2023-11-21T15:33:00Z",
    message: "And it's not just gaming; VR is making waves in education and healthcare too.",
  },
  {
    user: "User1",
    type: "",
    timestamp: "2023-11-21T15:40:00Z",
    message: "Fascinating. I'll stay updated on these developments. Thanks, everyone!",
  },
];
let infoMessages: Array<Message> = [
  {
    user: "Admin1",
    type: "",
    timestamp: "2023-11-22T09:00:00Z",
    message: "New channel rules: Be respectful and on-topic. Report any issues to mods.",
  },
  {
    user: "Mod2",
    type: "",
    timestamp: "2023-11-22T09:30:00Z",
    message: "Reminder: Group event tomorrow at 7 PM. Don't miss out!",
  },
  {
    user: "User5",
    type: "",
    timestamp: "2023-11-22T10:05:00Z",
    message: "Any recommendations for productivity tools? I need something efficient.",
  },
  {
    user: "User6",
    type: "reply",
    replyTo: {
      user: "User5",
      type: "",
      timestamp: "2023-11-22T10:05:00Z",
      message: "Any recommendations for productivity tools? I need something efficient.",
    },
    timestamp: "2023-11-22T10:15:00Z",
    message: "Try Notion. It's versatile and great for collaborative work.",
  },
  {
    user: "User7",
    type: "",
    replyTo: {
      user: "User6",
      type: "reply",
      timestamp: "2023-11-22T10:15:00Z",
      message: "Try Notion. It's versatile and great for collaborative work.",
    },
    timestamp: "2023-11-22T10:30:00Z",
    message: "I prefer Trello for its simplicity in task management.",
  },
  {
    user: "User5",
    type: "",
    timestamp: "2023-11-22T11:00:00Z",
    message: "Thanks for the suggestions. Any upcoming group events?",
  },
  {
    user: "Mod2",
    type: "",
    timestamp: "2023-11-22T11:05:00Z",
    message: "Group meetup next week. Details to be shared soon. Stay tuned!",
  },
  {
    user: "Admin1",
    type: "",
    timestamp: "2023-11-22T11:10:00Z",
    message: "Reminder: Use appropriate channels for discussions. Keep it organized.",
  },
  {
    user: "User6",
    type: "",
    timestamp: "2023-11-22T11:20:00Z",
    message: "Looking for podcast recommendations. Any genre is fine!",
  },
  {
    user: "User7",
    type: "reply",
    replyTo: {
      user: "User6",
      type: "",
      timestamp: "2023-11-22T11:20:00Z",
      message: "Looking for podcast recommendations. Any genre is fine!",
    },
    timestamp: "2023-11-22T11:30:00Z",
    message: "Check out 'The Daily' for current affairs. It's concise and informative.",
  },
  {
    user: "Mod2",
    type: "",
    timestamp: "2023-11-22T11:35:00Z",
    message: "Remember, off-topic discussions can be taken to the designated channel.",
  },
];
let conversation: Ref<Array<Message>> = ref([]);
channelStore.$subscribe((_, store) => {
  if (store.name == "information") {
    conversation.value = infoMessages;
  } else {
    conversation.value = messages;
  }
});

const highlightStyle = "border-l-2 border-yellow-600 bg-yellow-600 bg-opacity-20";
</script>

<template>
  <div class="flex grow flex-col">
    <ChannelHeader />
    <div class="flex grow overflow-hidden">
      <div class="relative h-full flex-grow">
        <div class="scrollbar relative mr-2 flex h-full flex-col justify-start gap-6 overflow-y-auto">
          <div v-for="msg in conversation" :key="msg.message + msg.user" :data-type="msg.type" :class="msg.type === 'reply' ? highlightStyle : 'hover:bg-discord-dark-2'">
            <div v-if="msg.replyTo" class="relative flex items-center gap-2 px-20">
              <div class="absolute h-2 w-10 -translate-x-full translate-y-0.5 border-l-2 border-t-2 border-slate-500"></div>
              <Avatar class="ml-1 h-4 w-4" />
              <User :username="msg.replyTo.user" />
              <div class="w-80 overflow-x-hidden overflow-y-clip overflow-ellipsis whitespace-nowrap text-slate-400">
                {{ msg.replyTo.message }}
              </div>
            </div>
            <div class="flex gap-4 px-4 py-2">
              <Avatar class="h-11 w-11" />
              <div class="message text-slate-300">
                <User :username="msg.user" :timestamp="msg.timestamp" :isreply="msg.type === ''" />
                {{ msg.message }}
                <div v-if="msg.image" class="mt-2 box-border max-h-72 max-w-md justify-center overflow-hidden rounded-lg">
                  <img :src="msg.image_url" class="max-h-72 max-w-md object-contain" :alt="msg.image_url" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="conversation.length" class="absolute bottom-0 flex h-16 w-full flex-shrink-0 items-center bg-discord-dark p-4">
          <input :placeholder="'Message #' + channelStore.name" type="text" class="w-full rounded-xl bg-discord-input px-4 py-2" />
        </div>
      </div>
      <MemberList />
    </div>
  </div>
</template>
