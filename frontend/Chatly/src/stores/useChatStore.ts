// // // // import { create } from "zustand";
// // // // import { axiosInstance } from "@/lib/axios.ts";
// // // // import { toast } from "sonner";
// // // // import { useAuthStore } from "@/store/useAuthStore.ts";


// // // // interface User {
// // // //   _id: string;
// // // //   fullName: string;
// // // //   email: string;
// // // //   profilePic?: string;
// // // // }

// // // // // interface Message {
// // // // //   _id: string;
// // // // //   senderId: string;
// // // // //   receiverId: string;
// // // // //   text?: string;
// // // // //   image?: string;
// // // // //   createdAt: string;
// // // // // }

// // // // interface Message {
// // // //   _id: string;
// // // //   senderId: string | { _id: string };
// // // //   receiverId: string | { _id: string };
// // // //   text?: string;
// // // //   image?: string;
// // // //   createdAt?: string;
// // // // }


// // // // interface ChatStore {
// // // //   contacts: User[];
// // // //   chats: User[];
// // // //   messages: Message[];
// // // //   selectedUser: User | null;
// // // //   isLoadingContacts: boolean;
// // // //   isLoadingChats: boolean;
// // // //   isLoadingMessages: boolean;
// // // //   isSendingMessage: boolean;
// // // //   fetchContacts: () => Promise<void>;
// // // //   fetchChats: () => Promise<void>;
// // // //   fetchMessages: (userId: string) => Promise<void>;
// // // //   sendMessage: (userId: string, data: { text?: string; image?: string }) => Promise<boolean>;
// // // //   setSelectedUser: (user: User | null) => void;
// // // // }

// // // // export const useChatStore = create<ChatStore>((set, get) => ({
// // // //   contacts: [],
// // // //   chats: [],
// // // //   messages: [],
// // // //   selectedUser: null,
// // // //   isLoadingContacts: false,
// // // //   isLoadingChats: false,
// // // //   isLoadingMessages: false,
// // // //   isSendingMessage: false,

// // // //   fetchContacts: async () => {
// // // //     set({ isLoadingContacts: true });
// // // //     try {
// // // //       const res = await axiosInstance.get("/api/messages/contacts");
// // // //       set({ contacts: res.data });
// // // //     } catch (error: any) {
// // // //       toast.error(error.response?.data?.message || "Failed to fetch contacts");
// // // //     } finally {
// // // //       set({ isLoadingContacts: false });
// // // //     }
// // // //   },

// // // //   fetchChats: async () => {
// // // //     set({ isLoadingChats: true });
// // // //     try {
// // // //       const res = await axiosInstance.get("/api/messages/chats");
// // // //       set({ chats: res.data });
// // // //     } catch (error: any) {
// // // //       toast.error(error.response?.data?.message || "Failed to fetch chats");
// // // //     } finally {
// // // //       set({ isLoadingChats: false });
// // // //     }
// // // //   },

// // // //   fetchMessages: async (userId: string) => {
// // // //     set({ isLoadingMessages: true });
// // // //     try {
// // // //       const res = await axiosInstance.get(`/api/messages/${userId}`);
// // // //       set({ messages: res.data });
// // // //     } catch (error: any) {
// // // //       toast.error(error.response?.data?.message || "Failed to fetch messages");
// // // //     } finally {
// // // //       set({ isLoadingMessages: false });
// // // //     }
// // // //   },


// // // //   // sendMessage: async (userId: string, data: { text?: string; image?: string }) => {
// // // //   //   set({ isSendingMessage: true });
// // // //   //   try {
// // // //   //     const res = await axiosInstance.post(`/api/messages/send/${userId}`, data);
// // // //   //     set({ messages: [...get().messages, res.data] });
// // // //   //     return true;
// // // //   //   } catch (error: any) {
// // // //   //     toast.error(error.response?.data?.message || "Failed to send message");
// // // //   //     return false;
// // // //   //   } finally {
// // // //   //     set({ isSendingMessage: false });
// // // //   //   }
// // // //   // },


// // // // sendMessage: async (
// // // //   userId: string,
// // // //   data: { text?: string; image?: string }
// // // // ) => {
// // // //   const { messages } = get();
// // // //   const authUser = useAuthStore.getState().user;

// // // //   // safety check
// // // //   if (!authUser) {
// // // //     toast.error("User not authenticated");
// // // //     return false;
// // // //   }

// // // //   const tempId = `temp-${Date.now()}`;

// // // //   // 1️⃣ optimistic message (CORRECT senderId)
// // // //   const optimisticMessage = {
// // // //     _id: tempId,
// // // //     senderId: authUser._id,
// // // //     receiverId: userId,
// // // //     text: data.text,
// // // //     image: data.image,
// // // //     createdAt: new Date().toISOString(),
// // // //     isOptimistic: true,
// // // //   };

// // // //   // 2️⃣ instant UI update
// // // //   set({
// // // //     messages: [...messages, optimisticMessage],
// // // //     isSendingMessage: true,
// // // //   });

// // // //   try {
// // // //     // 3️⃣ backend call
// // // //     const res = await axiosInstance.post(
// // // //       `/api/messages/send/${userId}`,
// // // //       data
// // // //     );

// // // //     // 4️⃣ replace optimistic message with real one
// // // //     set({
// // // //       messages: get().messages.map((msg) =>
// // // //         msg._id === tempId ? res.data : msg
// // // //       ),
// // // //     });

// // // //     return true;
// // // //   } catch (error: any) {
// // // //     // 5️⃣ rollback optimistic message
// // // //     set({
// // // //       messages: get().messages.filter((msg) => msg._id !== tempId),
// // // //     });

// // // //     toast.error(error.response?.data?.message || "Failed to send message");
// // // //     return false;
// // // //   } finally {
// // // //     set({ isSendingMessage: false });
// // // //   }
// // // // },

  

// // // //   setSelectedUser: (user: User | null) => {
// // // //     set({ selectedUser: user, messages: [] });
// // // //   },
// // // // }));



// // // // import { create } from "zustand";
// // // // import { axiosInstance } from "@/lib/axios";
// // // // import { toast } from "sonner";
// // // // import { useAuthStore } from "@/store/useAuthStore";

// // // // interface User {
// // // //   _id: string;
// // // //   fullName: string;
// // // //   email: string;
// // // //   profilePic?: string;
// // // // }

// // // // interface Message {
// // // //   _id: string;
// // // //   senderId: string;
// // // //   receiverId: string;
// // // //   text?: string;
// // // //   image?: string;
// // // //   createdAt?: string;
// // // //   isOptimistic?: boolean;
// // // // }

// // // // interface ChatStore {
// // // //   contacts: User[];
// // // //   chats: User[];
// // // //   messages: Message[];
// // // //   selectedUser: User | null;
// // // //   isLoadingContacts: boolean;
// // // //   isLoadingChats: boolean;
// // // //   isLoadingMessages: boolean;
// // // //   isSendingMessage: boolean;
// // // //   fetchContacts: () => Promise<void>;
// // // //   fetchChats: () => Promise<void>;
// // // //   fetchMessages: (userId: string) => Promise<void>;
// // // //   sendMessage: (
// // // //     userId: string,
// // // //     data: { text?: string; image?: string }
// // // //   ) => Promise<boolean>;
// // // //   setSelectedUser: (user: User | null) => void;
// // // // }

// // // // export const useChatStore = create<ChatStore>((set, get) => ({
// // // //   contacts: [],
// // // //   chats: [],
// // // //   messages: [],
// // // //   selectedUser: null,

// // // //   isLoadingContacts: false,
// // // //   isLoadingChats: false,
// // // //   isLoadingMessages: false,
// // // //   isSendingMessage: false,

// // // //   fetchContacts: async () => {
// // // //     set({ isLoadingContacts: true });
// // // //     try {
// // // //       const res = await axiosInstance.get("/api/messages/contacts");
// // // //       set({ contacts: res.data });
// // // //     } catch (error: any) {
// // // //       toast.error(error.response?.data?.message || "Failed to fetch contacts");
// // // //     } finally {
// // // //       set({ isLoadingContacts: false });
// // // //     }
// // // //   },

// // // //   fetchChats: async () => {
// // // //     set({ isLoadingChats: true });
// // // //     try {
// // // //       const res = await axiosInstance.get("/api/messages/chats");
// // // //       set({ chats: res.data });
// // // //     } catch (error: any) {
// // // //       toast.error(error.response?.data?.message || "Failed to fetch chats");
// // // //     } finally {
// // // //       set({ isLoadingChats: false });
// // // //     }
// // // //   },

// // // //   fetchMessages: async (userId: string) => {
// // // //     set({ isLoadingMessages: true });
// // // //     try {
// // // //       const res = await axiosInstance.get(`/api/messages/${userId}`);
// // // //       set({ messages: res.data });
// // // //     } catch (error: any) {
// // // //       toast.error(error.response?.data?.message || "Failed to fetch messages");
// // // //     } finally {
// // // //       set({ isLoadingMessages: false });
// // // //     }
// // // //   },

// // // //   sendMessage: async (userId, data) => {
// // // //     const authUser = useAuthStore.getState().user;
// // // //     if (!authUser) {
// // // //       toast.error("User not authenticated");
// // // //       return false;
// // // //     }

// // // //     const tempId = `temp-${Date.now()}`;

// // // //     const optimisticMessage: Message = {
// // // //       _id: tempId,
// // // //       senderId: authUser._id,
// // // //       receiverId: userId,
// // // //       text: data.text,
// // // //       image: data.image,
// // // //       createdAt: new Date().toISOString(),
// // // //       isOptimistic: true,
// // // //     };

// // // //     set({
// // // //       messages: [...get().messages, optimisticMessage],
// // // //       isSendingMessage: true,
// // // //     });

// // // //     try {
// // // //       const res = await axiosInstance.post(
// // // //         `/api/messages/send/${userId}`,
// // // //         {
// // // //           text: data.text,
// // // //           image: data.image, // base64 string
// // // //         },
// // // //         {
// // // //           headers: {
// // // //             "Content-Type": "application/json",
// // // //           },
// // // //         }
// // // //       );

// // // //       set({
// // // //         messages: get().messages.map((msg) =>
// // // //           msg._id === tempId ? res.data : msg
// // // //         ),
// // // //       });

// // // //       return true;
// // // //     } catch (error: any) {
// // // //       set({
// // // //         messages: get().messages.filter((msg) => msg._id !== tempId),
// // // //       });

// // // //       toast.error(error.response?.data?.message || "Failed to send message");
// // // //       return false;
// // // //     } finally {
// // // //       set({ isSendingMessage: false });
// // // //     }
// // // //   },

// // // //   setSelectedUser: (user) => {
// // // //     set({ selectedUser: user, messages: [] });
// // // //   },
// // // // }));











// // // // import { create } from "zustand";
// // // // import { axiosInstance } from "@/lib/axios";
// // // // import { toast } from "sonner";
// // // // import { useAuthStore } from "@/store/useAuthStore";

// // // // interface User {
// // // //   _id: string;
// // // //   fullName: string;
// // // //   email: string;
// // // //   profilePic?: string;
// // // //   lastMessageAt?: string;
// // // // }

// // // // interface Message {
// // // //   _id: string;
// // // //   senderId: string;
// // // //   receiverId: string;
// // // //   text?: string;
// // // //   image?: string;
// // // //   createdAt?: string;
// // // //   isOptimistic?: boolean;
// // // // }

// // // // interface ChatStore {
// // // //   contacts: User[];
// // // //   chats: User[];
// // // //   messages: Message[];
// // // //   selectedUser: User | null;
// // // //   isLoadingContacts: boolean;
// // // //   isLoadingChats: boolean;
// // // //   isLoadingMessages: boolean;
// // // //   isSendingMessage: boolean;

// // // //   fetchContacts: () => Promise<void>;
// // // //   fetchChats: () => Promise<void>;
// // // //   fetchMessages: (userId: string) => Promise<void>;
// // // //   sendMessage: (
// // // //     userId: string,
// // // //     data: { text?: string; image?: string }
// // // //   ) => Promise<boolean>;
// // // //   setSelectedUser: (user: User | null) => void;
// // // //   subscribeToMessages: () => void;
// // // //   unsubscribeFromMessages: () => void;
// // // // }

// // // // export const useChatStore = create<ChatStore>((set, get) => ({
// // // //   contacts: [],
// // // //   chats: [],
// // // //   messages: [],
// // // //   selectedUser: null,

// // // //   isLoadingContacts: false,
// // // //   isLoadingChats: false,
// // // //   isLoadingMessages: false,
// // // //   isSendingMessage: false,

// // // //   fetchContacts: async () => {
// // // //     set({ isLoadingContacts: true });
// // // //     try {
// // // //       const res = await axiosInstance.get("/api/messages/contacts");
// // // //       set({ contacts: res.data });
// // // //     } catch {
// // // //       toast.error("Failed to fetch contacts");
// // // //     } finally {
// // // //       set({ isLoadingContacts: false });
// // // //     }
// // // //   },

// // // //   fetchChats: async () => {
// // // //     set({ isLoadingChats: true });
// // // //     try {
// // // //       const res = await axiosInstance.get("/api/messages/chats");

// // // //       const sorted = [...res.data].sort(
// // // //         (a, b) =>
// // // //           new Date(b.lastMessageAt || 0).getTime() -
// // // //           new Date(a.lastMessageAt || 0).getTime()
// // // //       );

// // // //       set({ chats: sorted });
// // // //     } catch {
// // // //       toast.error("Failed to fetch chats");
// // // //     } finally {
// // // //       set({ isLoadingChats: false });
// // // //     }
// // // //   },

// // // //   fetchMessages: async (userId) => {
// // // //     set({ isLoadingMessages: true });
// // // //     try {
// // // //       const res = await axiosInstance.get(`/api/messages/${userId}`);
// // // //       set({ messages: res.data });
// // // //     } catch {
// // // //       toast.error("Failed to fetch messages");
// // // //     } finally {
// // // //       set({ isLoadingMessages: false });
// // // //     }
// // // //   },

// // // //   sendMessage: async (userId, data) => {
// // // //     const authUser = useAuthStore.getState().user;
// // // //     const socket = useAuthStore.getState().socket;

// // // //     if (!authUser) return false;

// // // //     const tempId = `temp-${Date.now()}`;

// // // //     const optimisticMessage: Message = {
// // // //       _id: tempId,
// // // //       senderId: authUser._id,
// // // //       receiverId: userId,
// // // //       text: data.text,
// // // //       image: data.image,
// // // //       createdAt: new Date().toISOString(),
// // // //       isOptimistic: true,
// // // //     };

// // // //     set({
// // // //       messages: [...get().messages, optimisticMessage],
// // // //       isSendingMessage: true,
// // // //     });

// // // //     try {
// // // //       const res = await axiosInstance.post(
// // // //         `/api/messages/send/${userId}`,
// // // //         data
// // // //       );

// // // //       socket?.emit("sendMessage", res.data);

// // // //       set({
// // // //         messages: get().messages.map((m) =>
// // // //           m._id === tempId ? res.data : m
// // // //         ),
// // // //         chats: [
// // // //           {
// // // //             ...(get().chats.find((c) => c._id === userId) as User),
// // // //             lastMessageAt: res.data.createdAt,
// // // //           },
// // // //           ...get().chats.filter((c) => c._id !== userId),
// // // //         ],
// // // //       });

// // // //       return true;
// // // //     } catch {
// // // //       set({
// // // //         messages: get().messages.filter((m) => m._id !== tempId),
// // // //       });
// // // //       toast.error("Failed to send message");
// // // //       return false;
// // // //     } finally {
// // // //       set({ isSendingMessage: false });
// // // //     }
// // // //   },

// // // //   subscribeToMessages: () => {
// // // //     const socket = useAuthStore.getState().socket;
// // // //     if (!socket) return;

// // // //     socket.on("receiveMessage", (message: Message) => {
// // // //       const { selectedUser } = get();

// // // //       if (selectedUser?._id === message.senderId) {
// // // //         set({ messages: [...get().messages, message] });
// // // //       }

// // // //       set({
// // // //         chats: [
// // // //           {
// // // //             ...(get().chats.find(
// // // //               (c) =>
// // // //                 c._id === message.senderId ||
// // // //                 c._id === message.receiverId
// // // //             ) as User),
// // // //             lastMessageAt: message.createdAt,
// // // //           },
// // // //           ...get().chats.filter(
// // // //             (c) =>
// // // //               c._id !== message.senderId &&
// // // //               c._id !== message.receiverId
// // // //           ),
// // // //         ],
// // // //       });
// // // //     });
// // // //   },

// // // //   unsubscribeFromMessages: () => {
// // // //     const socket = useAuthStore.getState().socket;
// // // //     socket?.off("receiveMessage");
// // // //   },

// // // //   setSelectedUser: (user) => {
// // // //     set({ selectedUser: user, messages: [] });
// // // //   },
// // // // }));















// // // // import { create } from "zustand";
// // // // import { axiosInstance } from "@/lib/axios";
// // // // import { useAuthStore } from "@/store/useAuthStore";

// // // // interface Message {
// // // //   _id: string;
// // // //   senderId: string;
// // // //   receiverId: string;
// // // //   text?: string;
// // // //   image?: string;
// // // //   createdAt: string;
// // // // }

// // // // interface ChatStore {
// // // //   chats: any[];
// // // //   messages: Message[];
// // // //   selectedUser: any | null;

// // // //   fetchChats: () => Promise<void>;
// // // //   fetchMessages: (userId: string) => Promise<void>;
// // // //   sendMessage: (userId: string, data: any) => Promise<boolean>;
// // // //   receiveMessage: (message: Message) => void;
// // // //   setSelectedUser: (user: any) => void;
// // // // }

// // // // export const useChatStore = create<ChatStore>((set, get) => ({
// // // //   chats: [],
// // // //   messages: [],
// // // //   selectedUser: null,

// // // //   fetchChats: async () => {
// // // //     const res = await axiosInstance.get("/api/messages/chats");
// // // //     set({ chats: res.data });
// // // //   },

// // // //   fetchMessages: async (userId) => {
// // // //     const res = await axiosInstance.get(`/api/messages/${userId}`);
// // // //     set({ messages: res.data });
// // // //   },

// // // //   sendMessage: async (userId, data) => {
// // // //     const res = await axiosInstance.post(`/api/messages/send/${userId}`, data);
// // // //     set({ messages: [...get().messages, res.data] });
// // // //     return true;
// // // //   },

// // // //   receiveMessage: (message) => {
// // // //     const activeUser = get().selectedUser?._id;
// // // //     if (
// // // //       message.senderId === activeUser ||
// // // //       message.receiverId === activeUser
// // // //     ) {
// // // //       set({ messages: [...get().messages, message] });
// // // //     }
// // // //   },

// // // //   setSelectedUser: (user) => {
// // // //     set({ selectedUser: user, messages: [] });
// // // //   },
// // // // }));





// // // import { create } from "zustand";
// // // import { axiosInstance } from "@/lib/axios";
// // // import { useAuthStore } from "@/store/useAuthStore";

// // // interface Message {
// // //   _id: string;
// // //   senderId: string;
// // //   receiverId: string;
// // //   text?: string;
// // //   image?: string;
// // //   createdAt: string;
// // // }

// // // interface ChatUser {
// // //   _id: string;
// // //   fullName: string;
// // //   email: string;
// // //   profilePic?: string;
// // //   lastMessage?: {
// // //     text?: string;
// // //     senderId: string;
// // //     createdAt: string;
// // //   };
// // // }

// // // interface ChatStore {
// // //   chats: ChatUser[];
// // //   messages: Message[];
// // //   selectedUser: ChatUser | null;

// // //   fetchChats: () => Promise<void>;
// // //   fetchMessages: (userId: string) => Promise<void>;
// // //   sendMessage: (userId: string, data: any) => Promise<boolean>;
// // //   receiveMessage: (message: Message) => void;
// // //   setSelectedUser: (user: ChatUser | null) => void;
// // // }

// // // export const useChatStore = create<ChatStore>((set, get) => ({
// // //   chats: [],
// // //   messages: [],
// // //   selectedUser: null,

// // //   fetchChats: async () => {
// // //     const res = await axiosInstance.get("/api/messages/chats");
// // //     set({ chats: res.data });
// // //   },

// // //   fetchMessages: async (userId) => {
// // //     const res = await axiosInstance.get(`/api/messages/${userId}`);
// // //     set({ messages: res.data });
// // //   },

// // //   sendMessage: async (userId, data) => {
// // //     const authUser = useAuthStore.getState().user;
// // //     if (!authUser) return false;

// // //     const res = await axiosInstance.post(
// // //       `/api/messages/send/${userId}`,
// // //       data
// // //     );

// // //     // append message
// // //     set({ messages: [...get().messages, res.data] });

// // //     // move chat to top
// // //     set({
// // //       chats: [
// // //         {
// // //           ...(get().chats.find((c) => c._id === userId) as ChatUser),
// // //           lastMessage: {
// // //             text: res.data.text,
// // //             senderId: authUser._id,
// // //             createdAt: res.data.createdAt,
// // //           },
// // //         },
// // //         ...get().chats.filter((c) => c._id !== userId),
// // //       ],
// // //     });

// // //     return true;
// // //   },

// // //   receiveMessage: (message) => {
// // //     const authUser = useAuthStore.getState().user;
// // //     if (!authUser) return;

// // //     const activeUserId = get().selectedUser?._id;

// // //     // show message in open chat
// // //     if (
// // //       message.senderId === activeUserId ||
// // //       message.receiverId === activeUserId
// // //     ) {
// // //       set({ messages: [...get().messages, message] });
// // //     }

// // //     const partnerId =
// // //       message.senderId === authUser._id
// // //         ? message.receiverId
// // //         : message.senderId;

// // //     // move chat to top
// // //     set({
// // //       chats: [
// // //         {
// // //           ...(get().chats.find((c) => c._id === partnerId) as ChatUser),
// // //           lastMessage: {
// // //             text: message.text,
// // //             senderId: message.senderId,
// // //             createdAt: message.createdAt,
// // //           },
// // //         },
// // //         ...get().chats.filter((c) => c._id !== partnerId),
// // //       ],
// // //     });
// // //   },

// // //   setSelectedUser: (user) => {
// // //     set({ selectedUser: user, messages: [] });
// // //   },
// // // }));




// // import { create } from "zustand";
// // import { axiosInstance } from "@/lib/axios";
// // import { useAuthStore } from "@/store/useAuthStore.ts";

// // interface Message {
// //   _id: string;
// //   senderId: string;
// //   receiverId: string;
// //   text?: string;
// //   image?: string;
// //   createdAt: string;
// // }

// // interface ChatUser {
// //   _id: string;
// //   fullName: string;
// //   email: string;
// //   profilePic?: string;
// // }

// // interface ChatStore {
// //   chats: ChatUser[];
// //   messages: Message[];
// //   selectedUser: ChatUser | null;

// //   fetchChats: () => Promise<void>;
// //   fetchMessages: (userId: string) => Promise<void>;
// //   sendMessage: (userId: string, data: any) => Promise<void>;
// //   receiveMessage: (message: Message) => void;
// //   setSelectedUser: (user: ChatUser | null) => void;
// // }

// // export const useChatStore = create<ChatStore>((set, get) => ({
// //   chats: [],
// //   messages: [],
// //   selectedUser: null,

// //   fetchChats: async () => {
// //     const res = await axiosInstance.get("/api/messages/chats");
// //     set({ chats: res.data });
// //   },

// //   fetchMessages: async (userId) => {
// //     const res = await axiosInstance.get(`/api/messages/${userId}`);
// //     set({ messages: res.data });
// //   },

// //   sendMessage: async (userId, data) => {
// //     const res = await axiosInstance.post(
// //       `/api/messages/send/${userId}`,
// //       data
// //     );

// //     set({ messages: [...get().messages, res.data] });
// //   },

// //   receiveMessage: (message) => {
// //     const activeUser = get().selectedUser;
// //     if (
// //       message.senderId === activeUser?._id ||
// //       message.receiverId === activeUser?._id
// //     ) {
// //       set({ messages: [...get().messages, message] });
// //     }
// //   },

// //   setSelectedUser: (user) => {
// //     set({ selectedUser: user });
// //     if (user) {
// //       get().fetchMessages(user._id);
// //     }
// //   },
// // }));







// // import { create } from "zustand";
// // import { axiosInstance } from "@/lib/axios";
// // import { useAuthStore } from "@/store/useAuthStore";

// // interface Message {
// //   _id: string;
// //   senderId: string;
// //   receiverId: string;
// //   text?: string;
// //   image?: string;
// //   createdAt: string;
// // }

// // interface ChatUser {
// //   _id: string;
// //   fullName: string;
// //   email: string;
// //   profilePic?: string;
// // }

// // interface ChatStore {
// //   chats: ChatUser[];
// //   messages: Message[];
// //   selectedUser: ChatUser | null;

// //   fetchChats: () => Promise<void>;
// //   fetchMessages: (userId: string) => Promise<void>;
// //   sendMessage: (userId: string, data: any) => Promise<void>;
// //   setSelectedUser: (user: ChatUser | null) => void;
// //   initSocketListeners: () => void;
// // }

// // export const useChatStore = create<ChatStore>((set, get) => ({
// //   chats: [],
// //   messages: [],
// //   selectedUser: null,

// //   fetchChats: async () => {
// //     const res = await axiosInstance.get("/api/messages/chats");
// //     set({ chats: res.data });
// //   },

// //   fetchMessages: async (userId) => {
// //     const res = await axiosInstance.get(`/api/messages/${userId}`);
// //     set({ messages: res.data });
// //   },

// //   sendMessage: async (userId, data) => {
// //     const res = await axiosInstance.post(
// //       `/api/messages/send/${userId}`,
// //       data
// //     );

// //     const message = res.data;

// //     // append message
// //     set({ messages: [...get().messages, message] });

// //     // move chat to top immediately
// //     const chats = get().chats;
// //     const index = chats.findIndex(c => c._id === userId);
// //     if (index !== -1) {
// //       const updated = [...chats];
// //       const [chat] = updated.splice(index, 1);
// //       updated.unshift(chat);
// //       set({ chats: updated });
// //     }
// //   },

// //   setSelectedUser: (user) => {
// //     set({ selectedUser: user });
// //     if (user) get().fetchMessages(user._id);
// //   },

// //   initSocketListeners: () => {
// //     const socket = useAuthStore.getState().socket;
// //     if (!socket) return;

// //     socket.off("newMessage");

// //     socket.on("newMessage", (message: Message) => {
// //       const activeUser = get().selectedUser;

// //       // append message if related
// //       if (
// //         message.senderId === activeUser?._id ||
// //         message.receiverId === activeUser?._id
// //       ) {
// //         set({ messages: [...get().messages, message] });
// //       }

// //       // reorder sidebar instantly
// //       const otherUserId =
// //         message.senderId === useAuthStore.getState().user?._id
// //           ? message.receiverId
// //           : message.senderId;

// //       const chats = get().chats;
// //       const index = chats.findIndex(c => c._id === otherUserId);
// //       if (index !== -1) {
// //         const updated = [...chats];
// //         const [chat] = updated.splice(index, 1);
// //         updated.unshift(chat);
// //         set({ chats: updated });
// //       }
// //     });
// //   },
// // }));







// import { create } from "zustand";
// import { axiosInstance } from "@/lib/axios";
// import { useAuthStore } from "@/store/useAuthStore";
// import { useSoundStore } from "@/store/useSoundStore";

// interface Message {
//   _id: string;
//   senderId: string;
//   receiverId: string;
//   text?: string;
//   image?: string;
//   createdAt: string;
// }

// interface ChatUser {
//   _id: string;
//   fullName: string;
//   email: string;
//   profilePic?: string;
// }

// interface ChatStore {
//   chats: ChatUser[];
//   messages: Message[];
//   selectedUser: ChatUser | null;

//   fetchChats: () => Promise<void>;
//   fetchMessages: (userId: string) => Promise<void>;
//   sendMessage: (userId: string, data: any) => Promise<void>;
//   setSelectedUser: (user: ChatUser | null) => void;
//   initSocketListeners: () => void;
// }

// export const useChatStore = create<ChatStore>((set, get) => ({
//   chats: [],
//   messages: [],
//   selectedUser: null,

//   fetchChats: async () => {
//     const res = await axiosInstance.get("/api/messages/chats");
//     set({ chats: res.data });
//   },

//   fetchMessages: async (userId) => {
//     const res = await axiosInstance.get(`/api/messages/${userId}`);
//     set({ messages: res.data });
//   },

//   sendMessage: async (userId, data) => {
//     const res = await axiosInstance.post(
//       `/api/messages/send/${userId}`,
//       data
//     );

//     const message = res.data;

//     // append message
//     set({ messages: [...get().messages, message] });

//     // move chat to top immediately
//     const chats = get().chats;
//     const index = chats.findIndex(c => c._id === userId);
//     if (index !== -1) {
//       const updated = [...chats];
//       const [chat] = updated.splice(index, 1);
//       updated.unshift(chat);
//       set({ chats: updated });
//     }
//   },

//   setSelectedUser: (user) => {
//     set({ selectedUser: user });
//     if (user) get().fetchMessages(user._id);
//   },

//   initSocketListeners: () => {
//     const socket = useAuthStore.getState().socket;
//     if (!socket) return;

//     socket.off("newMessage");

//     socket.on("newMessage", (message: Message) => {
//       const { user } = useAuthStore.getState();
//       const activeUser = get().selectedUser;

//       // 🔔 play notification ONLY when receiving
//       if (message.senderId !== user?._id) {
//         const { isSoundOn } = useSoundStore.getState();
//         if (isSoundOn) {
//           const audio = new Audio("/sounds/notification.mp3");
//           audio.play().catch(() => {});
//         }
//       }

//       // append message if related to open chat
//       if (
//         message.senderId === activeUser?._id ||
//         message.receiverId === activeUser?._id
//       ) {
//         set({ messages: [...get().messages, message] });
//       }

//       // reorder sidebar instantly
//       const otherUserId =
//         message.senderId === user?._id
//           ? message.receiverId
//           : message.senderId;

//       const chats = get().chats;
//       const index = chats.findIndex(c => c._id === otherUserId);
//       if (index !== -1) {
//         const updated = [...chats];
//         const [chat] = updated.splice(index, 1);
//         updated.unshift(chat);
//         set({ chats: updated });
//       }
//     });
//   },
// }));






import { create } from "zustand";
import { axiosInstance } from "@/lib/axios.js";
import { useAuthStore } from "@/store/useAuthStore.js";
import { useSoundStore } from "@/store/useSoundStore.js";

// interface Message {
//   _id: string;
//   senderId: string;
//   receiverId: string;
//   text?: string;
//   image?: string;
//   createdAt: string;
// }



// interface Message {
//   _id: string;
//   senderId: string;
//   receiverId: string;
//   text?: string;
//   image?: string;
//   emoji?: string; // ✅ add this line
//   createdAt: string;
// }



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
    const res = await axiosInstance.get("/api/messages/chats");
    set({ chats: res.data });
  },

  fetchMessages: async (userId) => {
    const res = await axiosInstance.get(`/api/messages/${userId}`);
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
