<script setup lang="ts">
import User from "./User.vue";
import Avatar from "./Avatar.vue";
const t: number = 5;
console.log(t);

interface Message {
  user: string;
  type: string;
  timestamp: string;
  message: string;
  replyTo?: Message;
}
const messages: Array<Message> = [
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
    message:
      "Personally, I find the wireless feature of the Oculus Quest 2 a game-changer.",
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
  },
  {
    user: "User3",
    type: "",
    timestamp: "2023-11-21T14:05:00Z",
    message:
      "Consider the Pimax 8KX for its unparalleled resolution if you're a graphics enthusiast.",
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
    message:
      "Rumors about haptic feedback suits for full-body immersion are circulating.",
  },
  {
    user: "User3",
    type: "reply",
    replyTo: {
      user: "User2",
      type: "",
      timestamp: "2023-11-21T15:05:00Z",
      message:
        "Rumors about haptic feedback suits for full-body immersion are circulating.",
    },
    timestamp: "2023-11-21T15:25:00Z",
    message:
      "I've heard about neural interfaces in development for more direct interaction.",
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
    message:
      "Agreed. The convergence of tech and gaming is opening up incredible possibilities.",
  },
  {
    user: "User4",
    type: "",
    timestamp: "2023-11-21T15:33:00Z",
    message:
      "And it's not just gaming; VR is making waves in education and healthcare too.",
  },
  {
    user: "User1",
    type: "",
    timestamp: "2023-11-21T15:40:00Z",
    message: "Fascinating. I'll stay updated on these developments. Thanks, everyone!",
  },
];
</script>

<template>
  <div class="bg-discord-dark">
    <div class="flex h-[80%] flex-col gap-6 overflow-y-scroll">
      <div v-for="msg in messages">
        <div class="flex gap-4 px-4 py-2 hover:bg-discord-dark-2" v-if="msg.type === ''">
          <Avatar :size="11" />
          <div class="message text-slate-300">
            <User
              :username="msg.user"
              :timestamp="msg.timestamp"
              :isreply="msg.type === ''" />
            {{ msg.message }}
          </div>
        </div>
        <div
          class="border-l-2 border-yellow-600 bg-yellow-600 bg-opacity-20 px-4 py-2"
          v-else-if="msg.type === 'reply'">
          <div v-if="msg.replyTo" class="">
            <div class="flex items-center gap-2 px-16 pb-2">
              <Avatar :size="4" />
              <User :username="msg.replyTo.user" />
              <div
                class="w-80 overflow-x-hidden overflow-y-clip overflow-ellipsis whitespace-nowrap text-slate-400">
                {{ msg.replyTo.message }}
              </div>
            </div>
          </div>
          <div class="flex gap-4">
            <Avatar :size="11" />
            <div class="message text-slate-300">
              <User :username="msg.user" :timestamp="msg.timestamp" :isreply="false" />
              {{ msg.message }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
