import { IChannel } from '@/data/IChannel';
import { defineStore } from "pinia";
export const useChannelStore = defineStore('channel', {
    state: ():IChannel => ({ name: '', type: '',  group: '', unread: false }),
    getters: {},
    actions: {
        setChannel(prop: IChannel) {
            this.name = prop.name;
            this.type = prop.type;
            this.group = prop.group;
            this.unread = prop.unread;
        }
    }
})