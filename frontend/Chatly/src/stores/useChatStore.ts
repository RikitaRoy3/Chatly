
import { create } from "zustand";
import { axiosInstance } from "@/lib/axios.js";
import { useAuthStore } from "@/stores/useAuthStore.js";
import { useSoundStore } from "@/stores/useSoundStore.js";




interface Message {
  _id: string;
  senderId: string;
  receiverId: string;
  text?: string;
  image?: string;
  emoji?: string;
  createdAt: string;
  status: "sent" | "delivered" | "seen";
}

interface ChatUser {
  _id: string;
  fullName: string;
  email: string;
  profilePic?: string;
}

interface ChatStore {
  chats: ChatUser[];
  messages: Message[];
  selectedUser: ChatUser | null;

  fetchChats: () => Promise<void>;
  fetchMessages: (userId: string) => Promise<void>;
  fetchUserById: (userId: string) => Promise<ChatUser | null>;
  sendMessage: (userId: string, data: any) => Promise<void>;
  setSelectedUser: (user: ChatUser | null) => void;
  initSocketListeners: () => void;
}

export const useChatStore = create<ChatStore>((set, get) => ({
  chats: [],
  messages: [],
  selectedUser: null,
  unreadCounts: {},


  fetchChats: async () => {
    const res = await axiosInstance.get("api/messages/chats");
    set({ chats: res.data });
  },

  fetchMessages: async (userId) => {
    const res = await axiosInstance.get(`api/messages/:${userId}`);
    set({ messages: res.data });
  },

  fetchUserById: async (userId) => {
    try {
      const res = await axiosInstance.get(
        `/api/messages/call/${userId}`
      );
      return res.data;
    } catch {
      return null;
    }
  },

  // sendMessage: async (userId, data) => {
  //   const res = await axiosInstance.post(
  //     `/api/messages/send/${userId}`,
  //     data
  //   );

  //   const message = res.data;
  //   set({ messages: [...get().messages, message] });

  //   const chats = get().chats;
  //   const index = chats.findIndex(c => c._id === userId);
  //   if (index !== -1) {
  //     const updated = [...chats];
  //     const [chat] = updated.splice(index, 1);
  //     updated.unshift(chat);
  //     set({ chats: updated });
  //   }
  // },



  sendMessage: async (userId, data) => {
  const res = await axiosInstance.post(
    `/api/messages/send/${userId}`,
    data
  );

  const message = res.data;

  // append message
  set({ messages: [...get().messages, message] });

  const chats = get().chats;
  const existingIndex = chats.findIndex(c => c._id === userId);

  // ✅ CASE 1: User already in chats → reorder
  if (existingIndex !== -1) {
    const updated = [...chats];
    const [chat] = updated.splice(existingIndex, 1);
    updated.unshift(chat);
    set({ chats: updated });
  }

  // ✅ CASE 2: First-time chat (searched user) → INSERT
  else {
    const selectedUser = get().selectedUser;
    if (selectedUser && selectedUser._id === userId) {
      set({ chats: [selectedUser, ...chats] });
    }
  }
},

  setSelectedUser: (user) => {
    set({ selectedUser: user });
    if (user) get().fetchMessages(user._id);
  },

  initSocketListeners: () => {
    const socket = useAuthStore.getState().socket;
    if (!socket) return;

    socket.off("newMessage");

    socket.on("newMessage", (message: Message) => {
      const { user } = useAuthStore.getState();
      const activeUser = get().selectedUser;

      if (message.senderId !== user?._id) {
        const { isSoundOn } = useSoundStore.getState();
        if (isSoundOn) {
          const audio = new Audio("/sounds/notification.mp3");
          audio.play().catch(() => {});
        }
      }

      if (
        message.senderId === activeUser?._id ||
        message.receiverId === activeUser?._id
      ) {
        set({ messages: [...get().messages, message] });
      }

      const otherUserId =
        message.senderId === user?._id
          ? message.receiverId
          : message.senderId;

      const chats = get().chats;
      const index = chats.findIndex(c => c._id === otherUserId);
      if (index !== -1) {
        const updated = [...chats];
        const [chat] = updated.splice(index, 1);
        updated.unshift(chat);
        set({ chats: updated });
      }
    });
  },
}));
