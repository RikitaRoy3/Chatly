// // import { useEffect } from "react";
// // import { useChatStore } from "@/store/useChatStore";
// // import { useAuthStore } from "@/store/useAuthStore";
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// // import { Button } from "@/components/ui/button";
// // import { ScrollArea } from "@/components/ui/scroll-area";
// // import {Users,RefreshCw,Loader2,Sparkles,Volume2,VolumeX,} from "lucide-react";
// // import { useSoundStore } from "@/store/useSoundStore.js";

// // interface ChatSidebarProps {
// //   onSelectUser?: () => void;
// // }


// // const ChatSidebar = ({ onSelectUser }: ChatSidebarProps) => {
// //   const {
// //     chats,
// //     contacts,
// //     selectedUser,
// //     isLoadingChats,
// //     isLoadingContacts,
// //     fetchChats,
// //     fetchContacts,
// //     setSelectedUser,
// //   } = useChatStore();

// //   const { user } = useAuthStore();
// //   const { isSoundOn, toggleSound } = useSoundStore();

// //   useEffect(() => {
// //     fetchChats();
// //     fetchContacts();
// //   }, [fetchChats, fetchContacts]);

// //   const getInitials = (name: string) =>
// //     name
// //       .split(" ")
// //       .map((n) => n[0])
// //       .join("")
// //       .toUpperCase()
// //       .slice(0, 2);

// //   const handleRefresh = () => {
// //     fetchChats();
// //     fetchContacts();
// //   };

// //   const handleSelectUser = (chatUser: typeof chats[0]) => {
// //     setSelectedUser(chatUser);
// //     onSelectUser?.();
// //   };

// //   const allUsers = [...chats];
// //   contacts.forEach((contact) => {
// //     if (!allUsers.find((c) => c._id === contact._id) && contact._id !== user?._id) {
// //       allUsers.push(contact);
// //     }
// //   });

// //   const isLoading = isLoadingChats || isLoadingContacts;

// //   return (
// //     <div className="h-full flex flex-col glass-subtle border-r border-border/50">
// //       {/* Header */}
// //       <div className="p-4 border-b border-border/50">
// //         <div className="flex items-center justify-between">
// //           <div className="flex items-center gap-2">
// //             <div className="p-2 rounded-lg bg-primary/10">
// //               <Users className="w-4 h-4 text-primary" />
// //             </div>
// //             <h2 className="font-semibold text-foreground">Your Contacts</h2>

// //             <Button
// //               variant="ghost"
// //               size="icon"
// //               onClick={toggleSound}
// //               className="h-8 w-8"
// //             >
// //               {isSoundOn ? (
// //                 <Volume2 className="w-4 h-4 text-primary" />
// //               ) : (
// //                 <VolumeX className="w-4 h-4 text-muted-foreground" />
// //               )}
// //             </Button>
// //           </div>

// //           <Button
// //             variant="ghost"
// //             size="icon"
// //             onClick={handleRefresh}
// //             disabled={isLoading}
// //             className="h-8 w-8"
// //           >
// //             {isLoading ? (
// //               <Loader2 className="w-4 h-4 animate-spin" />
// //             ) : (
// //               <RefreshCw className="w-4 h-4" />
// //             )}
// //           </Button>
// //         </div>
// //       </div>

// //       {/* User List */}
// //       <ScrollArea className="flex-1 scrollbar-thin">
// //         <div className="p-2 space-y-2">
// //           {allUsers.length === 0 && !isLoading ? (
// //             <div className="text-center py-12 px-4">
// //               <div className="w-16 h-16 mx-auto mb-4 rounded-full glass flex items-center justify-center">
// //                 <Sparkles className="w-8 h-8 text-primary animate-pulse" />
// //               </div>
// //               <p className="text-sm font-medium text-foreground mb-1">
// //                 No conversations yet
// //               </p>
// //               <p className="text-xs text-muted-foreground">
// //                 Start chatting with someone!
// //               </p>
// //             </div>
// //           ) : (
// //             allUsers.map((chatUser, index) => (
// //               <button
// //                 key={chatUser._id}
// //                 onClick={() => handleSelectUser(chatUser)}
// //                 className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300
// //                   border border-border/20 shadow-sm hover:shadow-md hover:scale-[1.02]
// //                   ${
// //                     selectedUser?._id === chatUser._id
// //                       ? "sidebar-item-active border-primary shadow-lg"
// //                       : "bg-background"
// //                   }`}
// //                 style={{
// //                   animationDelay: `${index * 50}ms`,
// //                   animation: "fade-in 0.3s ease-out forwards",
// //                   opacity: 0,
// //                 }}
// //               >
// //                 <div className="relative">
// //                   <Avatar className="w-12 h-12 ring-2 ring-background shadow-lg">
// //                     <AvatarImage
// //                       src={chatUser.profilePic}
// //                       alt={chatUser.fullName}
// //                     />
// //                     <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-medium">
// //                       {getInitials(chatUser.fullName)}
// //                     </AvatarFallback>
// //                   </Avatar>
// //                   <div className="absolute bottom-0 right-0 w-3 h-3 bg-online rounded-full ring-2 ring-background" />
// //                 </div>

// //                 <div className="flex-1 text-left min-w-0">
// //                   <p className="font-medium text-foreground truncate">
// //                     {chatUser.fullName}
// //                   </p>
// //                 </div>
// //               </button>
// //             ))
// //           )}
// //         </div>
// //       </ScrollArea>
// //     </div>
// //   );
// // };

// // export default ChatSidebar;






// // import { useEffect, useMemo } from "react";
// // import { useChatStore } from "@/store/useChatStore";
// // import { useAuthStore } from "@/store/useAuthStore";
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// // import { Button } from "@/components/ui/button";
// // import { ScrollArea } from "@/components/ui/scroll-area";
// // import {
// //   Users,
// //   RefreshCw,
// //   Loader2,
// //   Sparkles,
// //   Volume2,
// //   VolumeX,
// // } from "lucide-react";
// // import { useSoundStore } from "@/store/useSoundStore";

// // interface ChatSidebarProps {
// //   onSelectUser?: () => void;
// // }

// // const ChatSidebar = ({ onSelectUser }: ChatSidebarProps) => {
// //   const {
// //     chats,
// //     contacts,
// //     selectedUser,
// //     isLoadingChats,
// //     isLoadingContacts,
// //     fetchChats,
// //     fetchContacts,
// //     setSelectedUser,
// //   } = useChatStore();

// //   const { user, onlineUsers } = useAuthStore();
// //   const { isSoundOn, toggleSound } = useSoundStore();

// //   useEffect(() => {
// //     fetchChats();
// //     fetchContacts();
// //   }, [fetchChats, fetchContacts]);

// //   const getInitials = (name: string) =>
// //     name
// //       .split(" ")
// //       .map((n) => n[0])
// //       .join("")
// //       .toUpperCase()
// //       .slice(0, 2);

// //   const handleSelectUser = (chatUser: any) => {
// //     setSelectedUser(chatUser);
// //     onSelectUser?.();
// //   };

// //   const isUserOnline = (userId: string) =>
// //     onlineUsers.includes(userId);

// //   const allUsers = useMemo(() => {
// //     const combined = [...chats];

// //     contacts.forEach((contact) => {
// //       if (
// //         !combined.find((c) => c._id === contact._id) &&
// //         contact._id !== user?._id
// //       ) {
// //         combined.push(contact);
// //       }
// //     });

// //     return combined.sort((a, b) => {
// //       const aOnline = isUserOnline(a._id);
// //       const bOnline = isUserOnline(b._id);
// //       return Number(bOnline) - Number(aOnline);
// //     });
// //   }, [chats, contacts, onlineUsers, user?._id]);

// //   const isLoading = isLoadingChats || isLoadingContacts;

// //   return (
// //     <div className="h-full flex flex-col glass-subtle border-r border-border/50">
// //       {/* Header */}
// //       <div className="p-4 border-b border-border/50">
// //         <div className="flex items-center justify-between">
// //           <div className="flex items-center gap-2">
// //             <div className="p-2 rounded-lg bg-primary/10">
// //               <Users className="w-4 h-4 text-primary" />
// //             </div>
// //             <h2 className="font-semibold">Your Contacts</h2>

// //             <Button variant="ghost" size="icon" onClick={toggleSound}>
// //               {isSoundOn ? (
// //                 <Volume2 className="w-4 h-4 text-primary" />
// //               ) : (
// //                 <VolumeX className="w-4 h-4 text-muted-foreground" />
// //               )}
// //             </Button>
// //           </div>

// //           <Button
// //             variant="ghost"
// //             size="icon"
// //             onClick={() => {
// //               fetchChats();
// //               fetchContacts();
// //             }}
// //             disabled={isLoading}
// //           >
// //             {isLoading ? (
// //               <Loader2 className="w-4 h-4 animate-spin" />
// //             ) : (
// //               <RefreshCw className="w-4 h-4" />
// //             )}
// //           </Button>
// //         </div>
// //       </div>

// //       {/* User List */}
// //       <ScrollArea className="flex-1">
// //         <div className="p-2 space-y-2">
// //           {allUsers.length === 0 && !isLoading ? (
// //             <div className="text-center py-12">
// //               <Sparkles className="w-8 h-8 mx-auto text-primary animate-pulse" />
// //               <p className="text-sm mt-2">No conversations yet</p>
// //             </div>
// //           ) : (
// //             allUsers.map((chatUser) => {
// //               const online = isUserOnline(chatUser._id);

// //               return (
// //                 <button
// //                   key={chatUser._id}
// //                   onClick={() => handleSelectUser(chatUser)}
// //                   className={`w-full flex items-center gap-3 p-3 rounded-xl border transition
// //                     ${
// //                       selectedUser?._id === chatUser._id
// //                         ? "border-primary bg-primary/5"
// //                         : "border-border"
// //                     }`}
// //                 >
// //                   <div className="relative">
// //                     <Avatar className="w-12 h-12">
// //                       <AvatarImage src={chatUser.profilePic} />
// //                       <AvatarFallback>
// //                         {getInitials(chatUser.fullName)}
// //                       </AvatarFallback>
// //                     </Avatar>
// //                     <span
// //                       className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ring-2 ring-background ${
// //                         online ? "bg-green-500" : "bg-gray-400"
// //                       }`}
// //                     />
// //                   </div>

// //                   <p className="font-medium truncate">
// //                     {chatUser.fullName}
// //                   </p>
// //                 </button>
// //               );
// //             })
// //           )}
// //         </div>
// //       </ScrollArea>
// //     </div>
// //   );
// // };

// // export default ChatSidebar;




// // import { useEffect, useMemo } from "react";
// // import { useChatStore } from "@/store/useChatStore";
// // import { useAuthStore } from "@/store/useAuthStore";
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// // import { Button } from "@/components/ui/button";
// // import { ScrollArea } from "@/components/ui/scroll-area";
// // import {
// //   Users,
// //   RefreshCw,
// //   Sparkles,
// //   Volume2,
// //   VolumeX,
// // } from "lucide-react";
// // import { useSoundStore } from "@/store/useSoundStore";

// // interface ChatSidebarProps {
// //   onSelectUser?: () => void;
// // }

// // const ChatSidebar = ({ onSelectUser }: ChatSidebarProps) => {
// //   const {
// //     chats,
// //     selectedUser,
// //     fetchChats,
// //     setSelectedUser,
// //   } = useChatStore();

// //   const { onlineUsers } = useAuthStore();
// //   const { isSoundOn, toggleSound } = useSoundStore();

// //   useEffect(() => {
// //     fetchChats();
// //   }, [fetchChats]);

// //   const getInitials = (name: string) =>
// //     name
// //       .split(" ")
// //       .map((n) => n[0])
// //       .join("")
// //       .toUpperCase()
// //       .slice(0, 2);

// //   const handleSelectUser = (chatUser: any) => {
// //     setSelectedUser(chatUser);
// //     onSelectUser?.();
// //   };

// //   const isUserOnline = (userId: string) =>
// //     onlineUsers.includes(userId);

// //   /**
// //    * CRITICAL:
// //    * ❌ No sorting by online/offline
// //    * ❌ No reordering on socket events
// //    * ✅ Backend order is preserved (last message order)
// //    */
// //   const orderedChats = useMemo(() => {
// //     return [...chats];
// //   }, [chats]);

// //   return (
// //     <div className="h-full flex flex-col glass-subtle border-r border-border/50">
// //       {/* Header */}
// //       <div className="p-4 border-b border-border/50">
// //         <div className="flex items-center justify-between">
// //           <div className="flex items-center gap-2">
// //             <div className="p-2 rounded-lg bg-primary/10">
// //               <Users className="w-4 h-4 text-primary" />
// //             </div>
// //             <h2 className="font-semibold">Chats</h2>

// //             <Button variant="ghost" size="icon" onClick={toggleSound}>
// //               {isSoundOn ? (
// //                 <Volume2 className="w-4 h-4 text-primary" />
// //               ) : (
// //                 <VolumeX className="w-4 h-4 text-muted-foreground" />
// //               )}
// //             </Button>
// //           </div>

// //           <Button
// //             variant="ghost"
// //             size="icon"
// //             onClick={fetchChats}
// //           >
// //             <RefreshCw className="w-4 h-4" />
// //           </Button>
// //         </div>
// //       </div>

// //       {/* Chat List */}
// //       <ScrollArea className="flex-1">
// //         <div className="p-2 space-y-2">
// //           {orderedChats.length === 0 ? (
// //             <div className="text-center py-12">
// //               <Sparkles className="w-8 h-8 mx-auto text-primary animate-pulse" />
// //               <p className="text-sm mt-2">No conversations yet</p>
// //             </div>
// //           ) : (
// //             orderedChats.map((chatUser: any) => {
// //               const online = isUserOnline(chatUser._id);

// //               return (
// //                 <button
// //                   key={chatUser._id}
// //                   onClick={() => handleSelectUser(chatUser)}
// //                   className={`w-full flex items-center gap-3 p-3 rounded-xl border transition
// //                     ${
// //                       selectedUser?._id === chatUser._id
// //                         ? "border-primary bg-primary/5"
// //                         : "border-border"
// //                     }`}
// //                 >
// //                   <div className="relative">
// //                     <Avatar className="w-12 h-12">
// //                       <AvatarImage src={chatUser.profilePic} />
// //                       <AvatarFallback>
// //                         {getInitials(chatUser.fullName)}
// //                       </AvatarFallback>
// //                     </Avatar>

// //                     <span
// //                       className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ring-2 ring-background ${
// //                         online ? "bg-green-500" : "bg-gray-400"
// //                       }`}
// //                     />
// //                   </div>

// //                   <p className="font-medium truncate">
// //                     {chatUser.fullName}
// //                   </p>
// //                 </button>
// //               );
// //             })
// //           )}
// //         </div>
// //       </ScrollArea>
// //     </div>
// //   );
// // };

// // export default ChatSidebar;








// import { useEffect, useMemo } from "react";
// import { useChatStore } from "@/store/useChatStore";
// import { useAuthStore } from "@/store/useAuthStore";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import {
//   Users,
//   Sparkles,
//   Volume2,
//   VolumeX,
// } from "lucide-react";
// import { useSoundStore } from "@/store/useSoundStore";

// interface ChatSidebarProps {
//   onSelectUser?: () => void;
// }

// const ChatSidebar = ({ onSelectUser }: ChatSidebarProps) => {
//   const {
//     chats,
//     selectedUser,
//     fetchChats,
//     setSelectedUser,
//   } = useChatStore();

//   const { onlineUsers } = useAuthStore();
//   const { isSoundOn, toggleSound } = useSoundStore();

//   useEffect(() => {
//     fetchChats();
//   }, [fetchChats]);

//   const getInitials = (name: string) =>
//     name
//       .split(" ")
//       .map((n) => n[0])
//       .join("")
//       .toUpperCase()
//       .slice(0, 2);

//   const handleSelectUser = (chatUser: any) => {
//     setSelectedUser(chatUser);
//     onSelectUser?.();
//   };

//   const isUserOnline = (userId: string) =>
//     onlineUsers.includes(userId);

//   /**
//    * IMPORTANT:
//    * ✅ Order comes from backend + live reorder via socket/store
//    * ❌ No manual sorting here
//    */
//   const orderedChats = useMemo(() => {
//     return [...chats];
//   }, [chats]);

//   return (
//     <div className="h-full flex flex-col glass-subtle border-r border-border/50">
//       {/* Header */}
//       <div className="p-4 border-b border-border/50">
//         <div className="flex items-center gap-2">
//           <div className="p-2 rounded-lg bg-primary/10">
//             <Users className="w-4 h-4 text-primary" />
//           </div>

//           <h2 className="font-semibold">Chats</h2>

//           <Button variant="ghost" size="icon" onClick={toggleSound}>
//             {isSoundOn ? (
//               <Volume2 className="w-4 h-4 text-primary" />
//             ) : (
//               <VolumeX className="w-4 h-4 text-muted-foreground" />
//             )}
//           </Button>
//         </div>
//       </div>

//       {/* Chat List */}
//       <ScrollArea className="flex-1">
//         <div className="p-2 space-y-2">
//           {orderedChats.length === 0 ? (
//             <div className="text-center py-12">
//               <Sparkles className="w-8 h-8 mx-auto text-primary animate-pulse" />
//               <p className="text-sm mt-2">No conversations yet</p>
//             </div>
//           ) : (
//             orderedChats.map((chatUser: any) => {
//               const online = isUserOnline(chatUser._id);

//               return (
//                 <button
//                   key={chatUser._id}
//                   onClick={() => handleSelectUser(chatUser)}
//                   className={`w-full flex items-center gap-3 p-3 rounded-xl border transition
//                     ${
//                       selectedUser?._id === chatUser._id
//                         ? "border-primary bg-primary/5"
//                         : "border-border"
//                     }`}
//                 >
//                   <div className="relative">
//                     <Avatar className="w-12 h-12">
//                       <AvatarImage src={chatUser.profilePic} />
//                       <AvatarFallback>
//                         {getInitials(chatUser.fullName)}
//                       </AvatarFallback>
//                     </Avatar>

//                     <span
//                       className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ring-2 ring-background ${
//                         online ? "bg-green-500" : "bg-gray-400"
//                       }`}
//                     />
//                   </div>

//                   <p className="font-medium truncate">
//                     {chatUser.fullName}
//                   </p>
//                 </button>
//               );
//             })
//           )}
//         </div>
//       </ScrollArea>
//     </div>
//   );
// };

// export default ChatSidebar;









import { useEffect, useMemo, useState } from "react";
import { useChatStore } from "@/store/useChatStore.js";
import { useAuthStore } from "@/store/useAuthStore.js";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Users,
  Sparkles,
  Volume2,
  VolumeX,
  Search,
  X,
} from "lucide-react";
import { useSoundStore } from "@/store/useSoundStore";

interface ChatSidebarProps {
  onSelectUser?: () => void;
}

const ChatSidebar = ({ onSelectUser }: ChatSidebarProps) => {
  const {
    chats,
    selectedUser,
    fetchChats,
    setSelectedUser,
    fetchUserById,
  } = useChatStore();

  const { onlineUsers } = useAuthStore();
  const { isSoundOn, toggleSound } = useSoundStore();

  const [showSearch, setShowSearch] = useState(false);
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    fetchChats();
  }, [fetchChats]);

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  const handleSelectUser = (chatUser: any) => {
    setSelectedUser(chatUser);
    onSelectUser?.();
  };

  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchId.trim()) return;

    const user = await fetchUserById(searchId.trim());
    if (user) {
      setSelectedUser(user);
      onSelectUser?.();
      setShowSearch(false);
      setSearchId("");
    }
  };

  const isUserOnline = (userId: string) =>
    onlineUsers.includes(userId);

  const orderedChats = useMemo(() => {
    return [...chats];
  }, [chats]);

  return (
    <div className="h-full flex flex-col glass-subtle border-r border-border/50">
      {/* Header */}
      <div className="p-4 border-b border-border/50">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-primary/10">
            <Users className="w-4 h-4 text-primary" />
          </div>

          {!showSearch ? (
            <>
              <h2 className="font-semibold flex-1">Chats</h2>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSearch(true)}
              >
                <Search className="w-4 h-4" />
              </Button>

              <Button variant="ghost" size="icon" onClick={toggleSound}>
                {isSoundOn ? (
                  <Volume2 className="w-4 h-4 text-primary" />
                ) : (
                  <VolumeX className="w-4 h-4 text-muted-foreground" />
                )}
              </Button>
            </>
          ) : (
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center gap-2 flex-1"
            >
              <input
                autoFocus
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="Enter user ObjectId"
                className="flex-1 px-3 py-1.5 rounded-md border bg-background text-sm"
              />

              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => {
                  setShowSearch(false);
                  setSearchId("");
                }}
              >
                <X className="w-4 h-4" />
              </Button>
            </form>
          )}
        </div>
      </div>

      {/* Chat List */}
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-2">
          {orderedChats.length === 0 ? (
            <div className="text-center py-12">
              <Sparkles className="w-8 h-8 mx-auto text-primary animate-pulse" />
              <p className="text-sm mt-2">No conversations yet</p>
            </div>
          ) : (
            orderedChats.map((chatUser: any) => {
              const online = isUserOnline(chatUser._id);

              return (
                <button
                  key={chatUser._id}
                  onClick={() => handleSelectUser(chatUser)}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl border transition
                    ${
                      selectedUser?._id === chatUser._id
                        ? "border-primary bg-primary/5"
                        : "border-border"
                    }`}
                >
                  <div className="relative">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={chatUser.profilePic} />
                      <AvatarFallback>
                        {getInitials(chatUser.fullName)}
                      </AvatarFallback>
                    </Avatar>

                    <span
                      className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ring-2 ring-background ${
                        online ? "bg-green-500" : "bg-gray-400"
                      }`}
                    />
                  </div>

                  <p className="font-medium truncate">
                    {chatUser.fullName}
                  </p>
                </button>
              );
            })
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChatSidebar;
