import { defineStore } from "pinia";
export const useChannelStore = defineStore('channel', {
    state: () => ({ channelName: '' }),
    getters: {},
    actions: {
        setChannel(prop: string) {
            this.channelName = prop;
        }
    }
})