import { defineStore } from "pinia";
export const useMemberPanelStore = defineStore('memberPanel', {
    state: (): { isOpen: boolean } => ({
        isOpen: false,
    }),
    getters: {},
    actions: {
        toggleMemberPanel() {
            this.isOpen = !this.isOpen;
        }
    }
});