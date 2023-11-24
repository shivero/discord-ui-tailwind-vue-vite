import { defineStore } from "pinia";
export const useChannelStore = defineStore('channel', {
    state: () => ({ channelName: '' }),
    getters: {
        channelUppercase: (state) => state.channelName.toUpperCase()
    },
    actions: {
        setChannel(prop: string) {
            this.channelName = prop;
        }
    }
})