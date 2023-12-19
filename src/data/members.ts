import { groupBy } from "@/utils/groupBy";

interface IMember {
    name: string;
    role: string;
    avatar_url: string;
    status: string;
    game_status?: string;
}
const members: Array<IMember> = [
    {
        "name": "John",
        "role": "Admin",
        "avatar_url": "src/assets/avatars/toon_1.png",
        "status": "online",
        "game_status": "Minecraft"
    },
    {
        "name": "Sarah",
        "role": "Moderator",
        "avatar_url": "src/assets/avatars/toon_2.png",
        "status": "offline",
        "game_status": ""
    },
    {
        "name": "Mike",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_3.png",
        "status": "online",
        "game_status": "Fortnite"
    },
    {
        "name": "Emily",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_4.png",
        "status": "idle",
        "game_status": ""
    },
    {
        "name": "Alex",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_5.png",
        "status": "online",
        "game_status": "Among Us"
    },
    {
        "name": "Chris",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_6.png",
        "status": "offline",
        "game_status": ""
    },
    {
        "name": "Jessica",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_7.png",
        "status": "online",
        "game_status": "League of Legends"
    },
    {
        "name": "David",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_8.png",
        "status": "idle",
        "game_status": ""
    },
    {
        "name": "Amy",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_9.png",
        "status": "online",
        "game_status": "Overwatch"
    },
    {
        "name": "Ryan",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_10.png",
        "status": "offline",
        "game_status": ""
    },
    {
        "name": "Grace",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_1.png",
        "status": "online",
        "game_status": "Call of Duty"
    },
    {
        "name": "Tom",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_2.png",
        "status": "idle",
        "game_status": ""
    },
    {
        "name": "Olivia",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_3.png",
        "status": "online",
        "game_status": "Apex Legends"
    },
    {
        "name": "Ben",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_4.png",
        "status": "offline",
        "game_status": ""
    },
    {
        "name": "Sophia",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_5.png",
        "status": "online",
        "game_status": "GTA V"
    },
    {
        "name": "Jake",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_6.png",
        "status": "idle",
        "game_status": ""
    },
    {
        "name": "Emma",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_7.png",
        "status": "online",
        "game_status": "World of Warcraft"
    },
    {
        "name": "Daniel",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_8.png",
        "status": "offline",
        "game_status": ""
    },
    {
        "name": "Lily",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_9.png",
        "status": "online",
        "game_status": "The Sims 4"
    },
    {
        "name": "Kevin",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_6.png",
        "status": "idle",
        "game_status": ""
    },
    {
        "name": "Hannah",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_1.png",
        "status": "online",
        "game_status": "Animal Crossing"
    },
    {
        "name": "Mark",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_2.png",
        "status": "offline",
        "game_status": ""
    },
    {
        "name": "Chloe",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_3.png",
        "status": "online",
        "game_status": "Rocket League"
    },
    {
        "name": "Jason",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_4.png",
        "status": "idle",
        "game_status": ""
    },
    {
        "name": "Ava",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_5.png",
        "status": "online",
        "game_status": "FIFA 21"
    },
    {
        "name": "Eric",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_6.png",
        "status": "offline",
        "game_status": ""
    },
    {
        "name": "Mia",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_7.png",
        "status": "online",
        "game_status": "Assassin's Creed Valhalla"
    },
    {
        "name": "Sam",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_8.png",
        "status": "idle",
        "game_status": ""
    },
    {
        "name": "Ella",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_9.png",
        "status": "online",
        "game_status": "Pokémon Sword and Shield"
    },
    {
        "name": "Josh",
        "role": "Member",
        "avatar_url": "src/assets/avatars/toon_6.png",
        "status": "offline",
        "game_status": ""
    }
];

const getGroupedMembers = () => {
    return groupBy(members,'role');
}
export { members, getGroupedMembers};