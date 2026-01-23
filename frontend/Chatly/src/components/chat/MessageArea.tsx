// // // // // // import { useEffect, useRef } from "react";
// // // // // // import { useChatStore } from "@/store/useChatStore";
// // // // // // import { useAuthStore } from "@/store/useAuthStore";
// // // // // // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// // // // // // import { ScrollArea } from "@/components/ui/scroll-area";
// // // // // // import { format } from "date-fns";
// // // // // // import { MessageCircle, Loader2, Sparkles } from "lucide-react";
// // // // // // import MessageInput from "./MessageInput";

// // // // // // const MessageArea = () => {

// // // // // //   interface Message {
// // // // // //     _id: string;
// // // // // //     senderId: string | { _id: string };
// // // // // //     receiverId: string | { _id: string };
// // // // // //     text?: string;
// // // // // //     image?: string;
// // // // // //     createdAt?: string;
// // // // // //   }


// // // // // //   const { selectedUser, messages, isLoadingMessages, fetchMessages } = useChatStore();
// // // // // //   const { user } = useAuthStore();
// // // // // //   const messagesEndRef = useRef<HTMLDivElement>(null);

// // // // // //   useEffect(() => {
// // // // // //     if (selectedUser) {
// // // // // //       fetchMessages(selectedUser._id);
// // // // // //     }
// // // // // //   }, [selectedUser, fetchMessages]);

// // // // // //   useEffect(() => {
// // // // // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // // // // //   }, [messages]);

// // // // // //   const getInitials = (name: string) => {
// // // // // //     return name
// // // // // //       .split(" ")
// // // // // //       .map((n) => n[0])
// // // // // //       .join("")
// // // // // //       .toUpperCase()
// // // // // //       .slice(0, 2);
// // // // // //   };

// // // // // //   if (!selectedUser) {
// // // // // //     return (
// // // // // //       <div className="flex-1 flex items-center justify-center glass-subtle">
// // // // // //         <div className="text-center animate-fade-in px-4">
// // // // // //           <div className="relative inline-block mb-6">
// // // // // //             <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-30 animate-pulse" />
// // // // // //             <div className="relative w-24 h-24 rounded-full glass-strong flex items-center justify-center float">
// // // // // //               <MessageCircle className="w-12 h-12 text-primary" />
// // // // // //             </div>
// // // // // //           </div>
// // // // // //           <h3 className="text-2xl font-bold mb-2">
// // // // // //             <span className="gradient-text">Welcome to ChatApp</span>
// // // // // //           </h3>
// // // // // //           <p className="text-muted-foreground max-w-sm">
// // // // // //             Select a conversation from the sidebar to start chatting
// // // // // //           </p>
// // // // // //           <div className="flex items-center justify-center gap-1 mt-4 text-primary">
// // // // // //             <Sparkles className="w-4 h-4 animate-pulse" />
// // // // // //             <span className="text-sm font-medium">Your messages are secure</span>
// // // // // //             <Sparkles className="w-4 h-4 animate-pulse" />
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="flex-1 flex flex-col glass-subtle">
// // // // // //       {/* Chat Header */}
// // // // // //       <div className="p-4 glass border-b border-border/50 flex items-center gap-3">
// // // // // //         <div className="relative">
// // // // // //           <Avatar className="w-11 h-11 ring-2 ring-background shadow-lg">
// // // // // //             <AvatarImage src={selectedUser.profilePic} alt={selectedUser.fullName} />
// // // // // //             <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-medium">
// // // // // //               {getInitials(selectedUser.fullName)}
// // // // // //             </AvatarFallback>
// // // // // //           </Avatar>
// // // // // //           <div className="absolute bottom-0 right-0 w-3 h-3 bg-online rounded-full ring-2 ring-background" />
// // // // // //         </div>
// // // // // //         <div>
// // // // // //           <h3 className="font-semibold text-foreground">{selectedUser.fullName}</h3>
// // // // // //           <p className="text-sm text-muted-foreground flex items-center gap-1">
// // // // // //             <span className="w-2 h-2 rounded-full bg-online" />
// // // // // //             Online
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Messages */}
// // // // // //       <ScrollArea className="flex-1 p-4 scrollbar-thin">
// // // // // //         {isLoadingMessages ? (
// // // // // //           <div className="flex items-center justify-center h-full">
// // // // // //             <div className="text-center">
// // // // // //               <Loader2 className="w-10 h-10 animate-spin text-primary mx-auto mb-3" />
// // // // // //               <p className="text-muted-foreground text-sm">Loading messages...</p>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         ) : messages.length === 0 ? (
// // // // // //           <div className="flex items-center justify-center h-full">
// // // // // //             <div className="text-center glass rounded-2xl p-8">
// // // // // //               <div className="w-16 h-16 rounded-full glass mx-auto mb-4 flex items-center justify-center">
// // // // // //                 <MessageCircle className="w-8 h-8 text-primary" />
// // // // // //               </div>
// // // // // //               <p className="font-medium text-foreground mb-1">No messages yet</p>
// // // // // //               <p className="text-sm text-muted-foreground">
// // // // // //                 Send a message to start the conversation
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         ) : (
// // // // // //           <div className="space-y-3">
// // // // // //             {messages.map((message, index) => {
// // // // // //               const isSent = typeof message.senderId === "string" ? message.senderId === user?._id : message.senderId?._id === user?._id;
// // // // // //               return (
// // // // // //                 <div
// // // // // //                   key={message._id}
// // // // // //                   className={`flex ${isSent ? "justify-end" : "justify-start"}`}
// // // // // //                   style={{
// // // // // //                     animationDelay: `${index * 30}ms`,
// // // // // //                     animation: 'fade-in 0.3s ease-out forwards',
// // // // // //                     opacity: 0
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   <div
// // // // // //                     className={`max-w-[75%] px-4 py-3 shadow-lg ${isSent
// // // // // //                       ? "message-sent"
// // // // // //                       : "message-received"
// // // // // //                       }`}
// // // // // //                   >
// // // // // //                     {message.image && (
// // // // // //                       <img
// // // // // //                         src={message.image}
// // // // // //                         alt="Shared image"
// // // // // //                         className="max-w-full rounded-xl mb-2"
// // // // // //                       />
// // // // // //                     )}
// // // // // //                     {message.text && (
// // // // // //                       <p className={`break-words ${isSent ? "text-primary-foreground" : "text-foreground"}`}>
// // // // // //                         {message.text}
// // // // // //                       </p>
// // // // // //                     )}
// // // // // //                     <p
// // // // // //                       className={`text-xs mt-1.5 ${isSent ? "text-primary-foreground/70" : "text-muted-foreground"
// // // // // //                         }`}
// // // // // //                     >
// // // // // //                       {/* {format(new Date(message.createdAt), "HH:mm")} */}
// // // // // //                       {message.createdAt
// // // // // //                         ? format(new Date(message.createdAt), "HH:mm")
// // // // // //                         : "Now"}

// // // // // //                     </p>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               );
// // // // // //             })}
// // // // // //             <div ref={messagesEndRef} />
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </ScrollArea>

// // // // // //       {/* Message Input */}
// // // // // //       <MessageInput />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default MessageArea;




// // // // // // import { useEffect, useRef } from "react";
// // // // // // import { useChatStore } from "@/store/useChatStore";
// // // // // // import { useAuthStore } from "@/store/useAuthStore";
// // // // // // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// // // // // // import { ScrollArea } from "@/components/ui/scroll-area";
// // // // // // import { format, isToday, isYesterday } from "date-fns";
// // // // // // import { MessageCircle, Loader2, Sparkles } from "lucide-react";
// // // // // // import MessageInput from "./MessageInput";

// // // // // // const MessageArea = () => {

// // // // // //   interface Message {
// // // // // //     _id: string;
// // // // // //     senderId: string | { _id: string };
// // // // // //     receiverId: string | { _id: string };
// // // // // //     text?: string;
// // // // // //     image?: string;
// // // // // //     createdAt?: string;
// // // // // //   }

// // // // // //   const { selectedUser, messages, isLoadingMessages, fetchMessages } = useChatStore();
// // // // // //   const { user } = useAuthStore();
// // // // // //   const messagesEndRef = useRef<HTMLDivElement>(null);

// // // // // //   useEffect(() => {
// // // // // //     if (selectedUser) {
// // // // // //       fetchMessages(selectedUser._id);
// // // // // //     }
// // // // // //   }, [selectedUser, fetchMessages]);

// // // // // //   useEffect(() => {
// // // // // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // // // // //   }, [messages]);

// // // // // //   /* -------------------- Helpers -------------------- */

// // // // // //   const getInitials = (name: string) =>
// // // // // //     name
// // // // // //       .split(" ")
// // // // // //       .map((n) => n[0])
// // // // // //       .join("")
// // // // // //       .toUpperCase()
// // // // // //       .slice(0, 2);

// // // // // //   const formatTime12Hour = (dateString?: string) => {
// // // // // //     if (!dateString) return "Now";
// // // // // //     return format(new Date(dateString), "hh:mm a");
// // // // // //   };

// // // // // //   const getDateLabel = (dateString?: string) => {
// // // // // //     if (!dateString) return "";
// // // // // //     const date = new Date(dateString);

// // // // // //     if (isToday(date)) return "Today";
// // // // // //     if (isYesterday(date)) return "Yesterday";

// // // // // //     return format(date, "dd MMM yyyy");
// // // // // //   };

// // // // // //   const isNewDateGroup = (current?: string, previous?: string) => {
// // // // // //     if (!current) return false;
// // // // // //     if (!previous) return true;

// // // // // //     const currDate = format(new Date(current), "yyyy-MM-dd");
// // // // // //     const prevDate = format(new Date(previous), "yyyy-MM-dd");

// // // // // //     return currDate !== prevDate;
// // // // // //   };

// // // // // //   /* -------------------- UI -------------------- */

// // // // // //   if (!selectedUser) {
// // // // // //     return (
// // // // // //       <div className="flex-1 flex items-center justify-center glass-subtle">
// // // // // //         <div className="text-center animate-fade-in px-4">
// // // // // //           <div className="relative inline-block mb-6">
// // // // // //             <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-30 animate-pulse" />
// // // // // //             <div className="relative w-24 h-24 rounded-full glass-strong flex items-center justify-center float">
// // // // // //               <MessageCircle className="w-12 h-12 text-primary" />
// // // // // //             </div>
// // // // // //           </div>
// // // // // //           <h3 className="text-2xl font-bold mb-2">
// // // // // //             <span className="gradient-text">Welcome to ChatApp</span>
// // // // // //           </h3>
// // // // // //           <p className="text-muted-foreground max-w-sm">
// // // // // //             Select a conversation from the sidebar to start chatting
// // // // // //           </p>
// // // // // //           <div className="flex items-center justify-center gap-1 mt-4 text-primary">
// // // // // //             <Sparkles className="w-4 h-4 animate-pulse" />
// // // // // //             <span className="text-sm font-medium">Your messages are secure</span>
// // // // // //             <Sparkles className="w-4 h-4 animate-pulse" />
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="flex-1 flex flex-col glass-subtle">
// // // // // //       {/* Chat Header */}
// // // // // //       <div className="p-4 glass border-b border-border/50 flex items-center gap-3">
// // // // // //         <Avatar className="w-11 h-11 ring-2 ring-background shadow-lg">
// // // // // //           <AvatarImage src={selectedUser.profilePic} />
// // // // // //           <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-medium">
// // // // // //             {getInitials(selectedUser.fullName)}
// // // // // //           </AvatarFallback>
// // // // // //         </Avatar>
// // // // // //         <div>
// // // // // //           <h3 className="font-semibold">{selectedUser.fullName}</h3>
// // // // // //           <p className="text-sm text-muted-foreground flex items-center gap-1">
// // // // // //             <span className="w-2 h-2 rounded-full bg-online" />
// // // // // //             Online
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Messages */}
// // // // // //       <ScrollArea className="flex-1 p-4 scrollbar-thin">
// // // // // //         {isLoadingMessages ? (
// // // // // //           <div className="flex items-center justify-center h-full">
// // // // // //             <Loader2 className="w-10 h-10 animate-spin text-primary" />
// // // // // //           </div>
// // // // // //         ) : (
// // // // // //           <div className="space-y-3">
// // // // // //             {messages.map((message: Message, index: number) => {
// // // // // //               const isSent =
// // // // // //                 typeof message.senderId === "string"
// // // // // //                   ? message.senderId === user?._id
// // // // // //                   : message.senderId?._id === user?._id;

// // // // // //               const showDateDivider = isNewDateGroup(
// // // // // //                 message.createdAt,
// // // // // //                 messages[index - 1]?.createdAt
// // // // // //               );

// // // // // //               return (
// // // // // //                 <div key={message._id}>
// // // // // //                   {/* Date Divider */}
// // // // // //                   {showDateDivider && (
// // // // // //                     <div className="flex justify-center my-4">
// // // // // //                       <span className="px-4 py-1 text-xs rounded-full glass text-muted-foreground">
// // // // // //                         {getDateLabel(message.createdAt)}
// // // // // //                       </span>
// // // // // //                     </div>
// // // // // //                   )}

// // // // // //                   {/* Message Bubble */}
// // // // // //                   <div className={`flex ${isSent ? "justify-end" : "justify-start"}`}>
// // // // // //                     <div
// // // // // //                       className={`max-w-[75%] px-4 py-3 shadow-lg ${
// // // // // //                         isSent ? "message-sent" : "message-received"
// // // // // //                       }`}
// // // // // //                     >
// // // // // //                       {message.image && (
// // // // // //                         <img
// // // // // //                           src={message.image}
// // // // // //                           alt="Shared"
// // // // // //                           className="rounded-xl mb-2"
// // // // // //                         />
// // // // // //                       )}
// // // // // //                       {message.text && (
// // // // // //                         <p className={isSent ? "text-primary-foreground" : ""}>
// // // // // //                           {message.text}
// // // // // //                         </p>
// // // // // //                       )}
// // // // // //                       <p
// // // // // //                         className={`text-xs mt-1 ${
// // // // // //                           isSent
// // // // // //                             ? "text-primary-foreground/70"
// // // // // //                             : "text-muted-foreground"
// // // // // //                         }`}
// // // // // //                       >
// // // // // //                         {formatTime12Hour(message.createdAt)}
// // // // // //                       </p>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               );
// // // // // //             })}
// // // // // //             <div ref={messagesEndRef} />
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </ScrollArea>

// // // // // //       <MessageInput />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default MessageArea;














// // // // // // import { useEffect, useRef } from "react";
// // // // // // import { useChatStore } from "@/store/useChatStore";
// // // // // // import { useAuthStore } from "@/store/useAuthStore";
// // // // // // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// // // // // // import { ScrollArea } from "@/components/ui/scroll-area";
// // // // // // import { format } from "date-fns";
// // // // // // import MessageInput from "./MessageInput";

// // // // // // const MessageArea = () => {
// // // // // //   const { selectedUser, messages, fetchMessages } = useChatStore();
// // // // // //   const { user, onlineUsers } = useAuthStore();
// // // // // //   const messagesEndRef = useRef<HTMLDivElement>(null);

// // // // // //   useEffect(() => {
// // // // // //     if (selectedUser) fetchMessages(selectedUser._id);
// // // // // //   }, [selectedUser, fetchMessages]);

// // // // // //   useEffect(() => {
// // // // // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // // // // //   }, [messages]);

// // // // // //   if (!selectedUser) return null;

// // // // // //   const isOnline = onlineUsers.includes(selectedUser._id);

// // // // // //   const getInitials = (name: string) =>
// // // // // //     name
// // // // // //       .split(" ")
// // // // // //       .map((n) => n[0])
// // // // // //       .join("")
// // // // // //       .toUpperCase()
// // // // // //       .slice(0, 2);

// // // // // //   return (
// // // // // //     <div className="flex-1 flex flex-col">
// // // // // //       {/* Header */}
// // // // // //       <div className="p-4 border-b flex items-center gap-3">
// // // // // //         <Avatar className="w-10 h-10">
// // // // // //           <AvatarImage src={selectedUser.profilePic} />
// // // // // //           <AvatarFallback>
// // // // // //             {getInitials(selectedUser.fullName)}
// // // // // //           </AvatarFallback>
// // // // // //         </Avatar>

// // // // // //         <div>
// // // // // //           <p className="font-medium">{selectedUser.fullName}</p>
// // // // // //           <p className="text-xs flex items-center gap-1">
// // // // // //             <span
// // // // // //               className={`w-2 h-2 rounded-full ${
// // // // // //                 isOnline ? "bg-green-500" : "bg-gray-400"
// // // // // //               }`}
// // // // // //             />
// // // // // //             {isOnline ? "Online" : "Offline"}
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Messages */}
// // // // // //       <ScrollArea className="flex-1 p-4">
// // // // // //         {messages.map((msg: any) => {
// // // // // //           const isSent =
// // // // // //             typeof msg.senderId === "string"
// // // // // //               ? msg.senderId === user?._id
// // // // // //               : msg.senderId?._id === user?._id;

// // // // // //           return (
// // // // // //             <div
// // // // // //               key={msg._id}
// // // // // //               className={`flex mb-2 ${
// // // // // //                 isSent ? "justify-end" : "justify-start"
// // // // // //               }`}
// // // // // //             >
// // // // // //               <div className="max-w-[70%] p-3 rounded-xl bg-muted">
// // // // // //                 {msg.text}
// // // // // //                 <p className="text-xs mt-1 text-muted-foreground">
// // // // // //                   {msg.createdAt
// // // // // //                     ? format(new Date(msg.createdAt), "hh:mm a")
// // // // // //                     : "Now"}
// // // // // //                 </p>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           );
// // // // // //         })}
// // // // // //         <div ref={messagesEndRef} />
// // // // // //       </ScrollArea>

// // // // // //       <MessageInput />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default MessageArea;



// // // // // // import { useEffect, useRef } from "react";
// // // // // // import { useChatStore } from "@/store/useChatStore";
// // // // // // import { useAuthStore } from "@/store/useAuthStore";
// // // // // // import { ScrollArea } from "@/components/ui/scroll-area";
// // // // // // import { format, isToday, isYesterday } from "date-fns";
// // // // // // import MessageInput from "./MessageInput";

// // // // // // const MessageArea = () => {
// // // // // //   const { selectedUser, messages, fetchMessages, receiveMessage } = useChatStore();
// // // // // //   const { user, socket } = useAuthStore();
// // // // // //   const endRef = useRef<HTMLDivElement>(null);

// // // // // //   useEffect(() => {
// // // // // //     if (selectedUser) fetchMessages(selectedUser._id);
// // // // // //   }, [selectedUser]);

// // // // // //   useEffect(() => {
// // // // // //     socket?.on("newMessage", receiveMessage);
// // // // // //     return () => {
// // // // // //       socket?.off("newMessage", receiveMessage);
// // // // // //     };
// // // // // //   }, [socket]);

// // // // // //   useEffect(() => {
// // // // // //     endRef.current?.scrollIntoView({ behavior: "smooth" });
// // // // // //   }, [messages]);

// // // // // //   let lastDate = "";

// // // // // //   return (
// // // // // //     <div className="flex-1 flex flex-col">
// // // // // //       <ScrollArea className="flex-1 p-4">
// // // // // //         {messages.map((msg) => {
// // // // // //           const msgDate = format(new Date(msg.createdAt), "yyyy-MM-dd");
// // // // // //           const showDate = msgDate !== lastDate;
// // // // // //           lastDate = msgDate;

// // // // // //           return (
// // // // // //             <div key={msg._id}>
// // // // // //               {showDate && (
// // // // // //                 <div className="text-center text-xs text-muted my-3">
// // // // // //                   {isToday(new Date(msg.createdAt))
// // // // // //                     ? "Today"
// // // // // //                     : isYesterday(new Date(msg.createdAt))
// // // // // //                     ? "Yesterday"
// // // // // //                     : format(new Date(msg.createdAt), "dd MMM yyyy")}
// // // // // //                 </div>
// // // // // //               )}

// // // // // //               <div
// // // // // //                 className={`mb-2 flex ${
// // // // // //                   msg.senderId === user?._id ? "justify-end" : "justify-start"
// // // // // //                 }`}
// // // // // //               >
// // // // // //                 <div className="bg-muted px-3 py-2 rounded-xl max-w-[70%]">
// // // // // //                   {msg.text}
// // // // // //                   <div className="text-[10px] text-right">
// // // // // //                     {format(new Date(msg.createdAt), "hh:mm a")}
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           );
// // // // // //         })}
// // // // // //         <div ref={endRef} />
// // // // // //       </ScrollArea>

// // // // // //       <MessageInput />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default MessageArea;












// // // // // import { useEffect, useRef } from "react";
// // // // // import { useChatStore } from "@/store/useChatStore";
// // // // // import { useAuthStore } from "@/store/useAuthStore";
// // // // // import { ScrollArea } from "@/components/ui/scroll-area";
// // // // // import { format, isToday, isYesterday } from "date-fns";
// // // // // import MessageInput from "./MessageInput";

// // // // // const MessageArea = () => {
// // // // //   const { selectedUser, messages, fetchMessages, receiveMessage } =
// // // // //     useChatStore();
// // // // //   const { user, socket } = useAuthStore();
// // // // //   const endRef = useRef<HTMLDivElement>(null);

// // // // //   /* fetch messages when user changes */
// // // // //   useEffect(() => {
// // // // //     if (selectedUser) {
// // // // //       fetchMessages(selectedUser._id);
// // // // //     }
// // // // //   }, [selectedUser, fetchMessages]);

// // // // //   /* socket listener */
// // // // //   useEffect(() => {
// // // // //     socket?.on("newMessage", receiveMessage);
// // // // //     return () => {
// // // // //       socket?.off("newMessage", receiveMessage);
// // // // //     };
// // // // //   }, [socket, receiveMessage]);

// // // // //   /* auto scroll */
// // // // //   useEffect(() => {
// // // // //     endRef.current?.scrollIntoView({ behavior: "smooth" });
// // // // //   }, [messages]);

// // // // //   let lastDate = "";

// // // // //   if (!selectedUser) return null;

// // // // //   return (
// // // // //     <div className="flex-1 flex flex-col">
// // // // //       <ScrollArea className="flex-1 p-4">
// // // // //         {messages.map((msg) => {
// // // // //           const msgDate = format(new Date(msg.createdAt), "yyyy-MM-dd");
// // // // //           const showDate = msgDate !== lastDate;
// // // // //           lastDate = msgDate;

// // // // //           const isSent = msg.senderId === user?._id;

// // // // //           return (
// // // // //             <div key={msg._id}>
// // // // //               {/* Date divider */}
// // // // //               {showDate && (
// // // // //                 <div className="my-4 text-center text-xs text-muted-foreground">
// // // // //                   {isToday(new Date(msg.createdAt))
// // // // //                     ? "Today"
// // // // //                     : isYesterday(new Date(msg.createdAt))
// // // // //                     ? "Yesterday"
// // // // //                     : format(new Date(msg.createdAt), "dd MMM yyyy")}
// // // // //                 </div>
// // // // //               )}

// // // // //               {/* Message bubble */}
// // // // //               <div
// // // // //                 className={`mb-2 flex ${
// // // // //                   isSent ? "justify-end" : "justify-start"
// // // // //                 }`}
// // // // //               >
// // // // //                 <div
// // // // //                   className={`px-3 py-2 rounded-xl max-w-[70%] ${
// // // // //                     isSent
// // // // //                       ? "bg-primary text-primary-foreground"
// // // // //                       : "bg-muted text-foreground"
// // // // //                   }`}
// // // // //                 >
// // // // //                   {msg.text && <p className="break-words">{msg.text}</p>}

// // // // //                   <div
// // // // //                     className={`text-[10px] mt-1 text-right ${
// // // // //                       isSent
// // // // //                         ? "text-primary-foreground/70"
// // // // //                         : "text-muted-foreground"
// // // // //                     }`}
// // // // //                   >
// // // // //                     {format(new Date(msg.createdAt), "hh:mm a")}
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           );
// // // // //         })}
// // // // //         <div ref={endRef} />
// // // // //       </ScrollArea>

// // // // //       <MessageInput />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default MessageArea;


// // // // import { useEffect, useRef } from "react";
// // // // import { useChatStore } from "@/store/useChatStore";
// // // // import { useAuthStore } from "@/store/useAuthStore";
// // // // import { ScrollArea } from "@/components/ui/scroll-area";
// // // // import { format, isToday, isYesterday } from "date-fns";
// // // // import MessageInput from "./MessageInput";
// // // // import ChatHeader from "./ChatHeader";

// // // // const MessageArea = () => {
// // // //   const { messages } = useChatStore();
// // // //   const { user } = useAuthStore();
// // // //   const endRef = useRef<HTMLDivElement>(null);

// // // //   useEffect(() => {
// // // //     endRef.current?.scrollIntoView({ behavior: "smooth" });
// // // //   }, [messages]);

// // // //   let lastDate = "";

// // // //   return (
// // // //     <div className="flex-1 flex flex-col overflow-hidden">
// // // //       <ScrollArea className="flex-1">
// // // //         {/* HEADER IS NOW INSIDE SCROLL */}
// // // //         <ChatHeader />

// // // //         <div className="p-4 space-y-2">
// // // //           {messages.map((msg) => {
// // // //             const msgDate = format(new Date(msg.createdAt), "yyyy-MM-dd");
// // // //             const showDate = msgDate !== lastDate;
// // // //             lastDate = msgDate;

// // // //             const isSent = msg.senderId === user?._id;

// // // //             return (
// // // //               <div key={msg._id}>
// // // //                 {showDate && (
// // // //                   <div className="my-4 text-center text-xs text-muted-foreground">
// // // //                     {isToday(new Date(msg.createdAt))
// // // //                       ? "Today"
// // // //                       : isYesterday(new Date(msg.createdAt))
// // // //                       ? "Yesterday"
// // // //                       : format(new Date(msg.createdAt), "dd MMM yyyy")}
// // // //                   </div>
// // // //                 )}

// // // //                 <div
// // // //                   className={`flex mb-2 ${
// // // //                     isSent ? "justify-end" : "justify-start"
// // // //                   }`}
// // // //                 >
// // // //                   <div
// // // //                     className={`px-3 py-2 rounded-xl max-w-[70%] ${
// // // //                       isSent
// // // //                         ? "bg-primary text-primary-foreground"
// // // //                         : "bg-muted text-foreground"
// // // //                     }`}
// // // //                   >
// // // //                     {msg.text}
// // // //                     <div className="text-[10px] mt-1 text-right opacity-70">
// // // //                       {format(new Date(msg.createdAt), "hh:mm a")}
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             );
// // // //           })}
// // // //           <div ref={endRef} />
// // // //         </div>
// // // //       </ScrollArea>

// // // //       <MessageInput />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default MessageArea;




// // // import { useEffect, useRef } from "react";
// // // import { useChatStore } from "@/store/useChatStore.ts";
// // // import { useAuthStore } from "@/store/useAuthStore.ts";
// // // import { ScrollArea } from "@/components/ui/scroll-area";
// // // import { format, isToday, isYesterday } from "date-fns";
// // // import MessageInput from "./MessageInput.tsx";
// // // import ChatHeader from "./ChatHeader.tsx";

// // // const MessageArea = () => {
// // //   const { selectedUser, messages } = useChatStore();
// // //   const { user } = useAuthStore();
// // //   const endRef = useRef<HTMLDivElement>(null);

// // //   useEffect(() => {
// // //     endRef.current?.scrollIntoView({ behavior: "smooth" });
// // //   }, [messages]);

// // //   if (!selectedUser) return null;

// // //   let lastDate = "";

// // //   return (
// // //     <div className="flex-1 flex flex-col overflow-hidden">
// // //       <ChatHeader />

// // //       <ScrollArea className="flex-1 p-4">
// // //         {messages.map((msg) => {
// // //           const msgDate = format(new Date(msg.createdAt), "yyyy-MM-dd");
// // //           const showDate = msgDate !== lastDate;
// // //           lastDate = msgDate;

// // //           const isSent = msg.senderId === user?._id;

// // //           return (
// // //             <div key={msg._id}>
// // //               {showDate && (
// // //                 <div className="my-4 text-center text-xs text-muted-foreground">
// // //                   {isToday(new Date(msg.createdAt))
// // //                     ? "Today"
// // //                     : isYesterday(new Date(msg.createdAt))
// // //                     ? "Yesterday"
// // //                     : format(new Date(msg.createdAt), "dd MMM yyyy")}
// // //                 </div>
// // //               )}

// // //               <div
// // //                 className={`flex mb-2 ${
// // //                   isSent ? "justify-end" : "justify-start"
// // //                 }`}
// // //               >
// // //                 <div
// // //                   className={`px-3 py-2 rounded-xl max-w-[70%] ${
// // //                     isSent
// // //                       ? "bg-primary text-primary-foreground"
// // //                       : "bg-muted"
// // //                   }`}
// // //                 >
// // //                   {msg.image && (
// // //                     <img
// // //                       src={msg.image}
// // //                       className="rounded-lg mb-2 max-w-full"
// // //                     />
// // //                   )}

// // //                   {msg.text && <p className="break-words">{msg.text}</p>}

// // //                   <div className="text-[10px] mt-1 text-right opacity-70">
// // //                     {format(new Date(msg.createdAt), "hh:mm a")}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           );
// // //         })}
// // //         <div ref={endRef} />
// // //       </ScrollArea>

// // //       <MessageInput />
// // //     </div>
// // //   );
// // // };

// // // export default MessageArea;


// // // import { useEffect, useRef, useState } from "react";
// // // import { useChatStore } from "@/store/useChatStore";
// // // import { useAuthStore } from "@/store/useAuthStore";
// // // import { ScrollArea } from "@/components/ui/scroll-area";
// // // import { format, isToday, isYesterday } from "date-fns";
// // // import MessageInput from "./MessageInput";
// // // import ChatHeader from "./ChatHeader";
// // // import { ChevronDown } from "lucide-react";

// // // const MessageArea = () => {
// // //   const { selectedUser, messages } = useChatStore();
// // //   const { user } = useAuthStore();

// // //   const scrollAreaRef = useRef<HTMLDivElement>(null);
// // //   const endRef = useRef<HTMLDivElement>(null);

// // //   const [showScrollBtn, setShowScrollBtn] = useState(false);

// // //   // auto scroll on new message
// // //   useEffect(() => {
// // //     endRef.current?.scrollIntoView({ behavior: "smooth" });
// // //   }, [messages]);

// // //   // attach scroll listener to Radix viewport
// // //   useEffect(() => {
// // //     const viewport =
// // //       scrollAreaRef.current?.querySelector(
// // //         "[data-radix-scroll-area-viewport]"
// // //       ) as HTMLDivElement | null;

// // //     if (!viewport) return;

// // //     const handleScroll = () => {
// // //       const atBottom =
// // //         viewport.scrollHeight -
// // //           viewport.scrollTop -
// // //           viewport.clientHeight <
// // //         40;

// // //       setShowScrollBtn(!atBottom);
// // //     };

// // //     viewport.addEventListener("scroll", handleScroll);
// // //     handleScroll(); // initial check

// // //     return () => {
// // //       viewport.removeEventListener("scroll", handleScroll);
// // //     };
// // //   }, [messages]);

// // //   const scrollToBottom = () => {
// // //     endRef.current?.scrollIntoView({ behavior: "smooth" });
// // //   };

// // //   if (!selectedUser) return null;

// // //   let lastDate = "";

// // //   return (
// // //     <div className="flex-1 flex flex-col overflow-hidden relative">
// // //       <ChatHeader />

// // //       <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
// // //         {messages.map((msg) => {
// // //           const msgDate = format(new Date(msg.createdAt), "yyyy-MM-dd");
// // //           const showDate = msgDate !== lastDate;
// // //           lastDate = msgDate;

// // //           const isSent = msg.senderId === user?._id;

// // //           return (
// // //             <div key={msg._id}>
// // //               {showDate && (
// // //                 <div className="my-4 text-center text-xs text-muted-foreground">
// // //                   {isToday(new Date(msg.createdAt))
// // //                     ? "Today"
// // //                     : isYesterday(new Date(msg.createdAt))
// // //                     ? "Yesterday"
// // //                     : format(new Date(msg.createdAt), "dd MMM yyyy")}
// // //                 </div>
// // //               )}

// // //               <div
// // //                 className={`flex mb-2 ${
// // //                   isSent ? "justify-end" : "justify-start"
// // //                 }`}
// // //               >
// // //                 <div
// // //                   className={`px-3 py-2 rounded-xl max-w-[70%] ${
// // //                     isSent
// // //                       ? "bg-primary text-primary-foreground"
// // //                       : "bg-muted"
// // //                   }`}
// // //                 >
// // //                   {msg.image && (
// // //                     <img
// // //                       src={msg.image}
// // //                       className="rounded-lg mb-2 max-w-full"
// // //                     />
// // //                   )}

// // //                   {msg.text && <p className="break-words">{msg.text}</p>}

// // //                   <div className="text-[10px] mt-1 text-right opacity-70">
// // //                     {format(new Date(msg.createdAt), "hh:mm a")}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           );
// // //         })}

// // //         <div ref={endRef} />
// // //       </ScrollArea>

// // //       {/* Scroll-to-bottom button */}
// // //       {showScrollBtn && (
// // //         <button
// // //           onClick={scrollToBottom}
// // //           className="absolute bottom-24 left-4 z-20 rounded-full p-2 bg-primary text-primary-foreground shadow-lg hover:scale-105 transition"
// // //         >
// // //           <ChevronDown size={20} />
// // //         </button>
// // //       )}

// // //       <MessageInput />
// // //     </div>
// // //   );
// // // };

// // // export default MessageArea;




// // import { useEffect, useRef, useState } from "react";
// // import { useChatStore } from "@/store/useChatStore.ts";
// // import { useAuthStore } from "@/store/useAuthStore.ts";
// // import { ScrollArea } from "@/components/ui/scroll-area";
// // import { format, isToday, isYesterday } from "date-fns";
// // import MessageInput from "./MessageInput.tsx";
// // import ChatHeader from "./ChatHeader.tsx";
// // import { ChevronDown } from "lucide-react";

// // const MessageArea = () => {
// //   const { selectedUser, messages } = useChatStore();
// //   const { user } = useAuthStore();

// //   const scrollAreaRef = useRef<HTMLDivElement>(null);
// //   const endRef = useRef<HTMLDivElement>(null);
// //   const [showScrollBtn, setShowScrollBtn] = useState(false);

// //   useEffect(() => {
// //     endRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [messages]);

// //   useEffect(() => {
// //     const viewport =
// //       scrollAreaRef.current?.querySelector(
// //         "[data-radix-scroll-area-viewport]"
// //       ) as HTMLDivElement | null;

// //     if (!viewport) return;

// //     const handleScroll = () => {
// //       const atBottom =
// //         viewport.scrollHeight - viewport.scrollTop - viewport.clientHeight < 40;
// //       setShowScrollBtn(!atBottom);
// //     };

// //     viewport.addEventListener("scroll", handleScroll);
// //     handleScroll();

// //     return () => {
// //       viewport.removeEventListener("scroll", handleScroll);
// //     };
// //   }, [messages]);

// //   const scrollToBottom = () => {
// //     endRef.current?.scrollIntoView({ behavior: "smooth" });
// //   };

// //   if (!selectedUser) return null;

// //   let lastDate = "";

// //   return (
// //     <div className="flex-1 flex flex-col overflow-hidden relative">
// //       <ChatHeader />

// //       <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
// //         {messages.map((msg) => {
// //           const msgDate = format(new Date(msg.createdAt), "yyyy-MM-dd");
// //           const showDate = msgDate !== lastDate;
// //           lastDate = msgDate;

// //           const isSent = msg.senderId === user?._id;

// //           return (
// //             <div key={msg._id}>
// //               {showDate && (
// //                 <div className="my-4 text-center text-xs text-muted-foreground">
// //                   {isToday(new Date(msg.createdAt))
// //                     ? "Today"
// //                     : isYesterday(new Date(msg.createdAt))
// //                     ? "Yesterday"
// //                     : format(new Date(msg.createdAt), "dd MMM yyyy")}
// //                 </div>
// //               )}

// //               <div className={`flex mb-2 ${isSent ? "justify-end" : "justify-start"}`}>
// //                 <div
// //                   className={`px-3 py-2 rounded-xl max-w-[70%] ${
// //                     isSent ? "bg-primary text-primary-foreground" : "bg-muted"
// //                   }`}
// //                 >
// //                   {msg.image && (
// //                     <img src={msg.image} className="rounded-lg mb-2 max-w-full" />
// //                   )}

// //                   {msg.emoji ? (
// //                     <p className="text-2xl">{msg.emoji}</p>
// //                   ) : (
// //                     msg.text && <p className="break-words">{msg.text}</p>
// //                   )}

// //                   <div className="text-[10px] mt-1 text-right opacity-70">
// //                     {format(new Date(msg.createdAt), "hh:mm a")}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           );
// //         })}

// //         <div ref={endRef} />
// //       </ScrollArea>

// //       {showScrollBtn && (
// //         <button
// //           onClick={scrollToBottom}
// //           className="absolute bottom-24 left-4 z-20 rounded-full p-2 bg-primary text-primary-foreground shadow-lg hover:scale-105 transition"
// //         >
// //           <ChevronDown size={20} />
// //         </button>
// //       )}

// //       <MessageInput />
// //     </div>
// //   );
// // };

// // export default MessageArea;







// import { useEffect, useRef, useState } from "react";
// import { useChatStore } from "@/store/useChatStore.ts";
// import { useAuthStore } from "@/store/useAuthStore.ts";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { format, isToday, isYesterday } from "date-fns";
// import MessageInput from "./MessageInput.tsx";
// import ChatHeader from "./ChatHeader.tsx";
// import { ChevronDown, X } from "lucide-react";

// const MessageArea = () => {
//   const { selectedUser, messages } = useChatStore();
//   const { user } = useAuthStore();

//   const scrollAreaRef = useRef<HTMLDivElement>(null);
//   const endRef = useRef<HTMLDivElement>(null);
//   const [showScrollBtn, setShowScrollBtn] = useState(false);

//   // ✅ NEW: modal state for image preview
//   const [modalImage, setModalImage] = useState<string | null>(null);

//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   useEffect(() => {
//     const viewport =
//       scrollAreaRef.current?.querySelector(
//         "[data-radix-scroll-area-viewport]"
//       ) as HTMLDivElement | null;

//     if (!viewport) return;

//     const handleScroll = () => {
//       const atBottom =
//         viewport.scrollHeight - viewport.scrollTop - viewport.clientHeight < 40;
//       setShowScrollBtn(!atBottom);
//     };

//     viewport.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => viewport.removeEventListener("scroll", handleScroll);
//   }, [messages]);

//   const scrollToBottom = () => endRef.current?.scrollIntoView({ behavior: "smooth" });

//   if (!selectedUser) return null;

//   let lastDate = "";

//   return (
//     <div className="flex-1 flex flex-col overflow-hidden relative">
//       <ChatHeader />

//       <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
//         {messages.map((msg) => {
//           const msgDate = format(new Date(msg.createdAt), "yyyy-MM-dd");
//           const showDate = msgDate !== lastDate;
//           lastDate = msgDate;

//           const isSent = msg.senderId === user?._id;

//           return (
//             <div key={msg._id}>
//               {showDate && (
//                 <div className="my-4 text-center text-xs text-muted-foreground">
//                   {isToday(new Date(msg.createdAt))
//                     ? "Today"
//                     : isYesterday(new Date(msg.createdAt))
//                     ? "Yesterday"
//                     : format(new Date(msg.createdAt), "dd MMM yyyy")}
//                 </div>
//               )}

//               <div className={`flex mb-2 ${isSent ? "justify-end" : "justify-start"}`}>
//                 <div
//                   className={`px-3 py-2 rounded-xl max-w-[70%] ${
//                     isSent ? "bg-primary text-primary-foreground" : "bg-muted"
//                   }`}
//                 >
//                   {/* ✅ IMAGE CLICKABLE */}
//                   {msg.image && (
//                     <img
//                       src={msg.image}
//                       className="rounded-lg mb-2 max-w-full cursor-pointer hover:scale-105 transition-transform"
//                       onClick={() => setModalImage(msg.image)}
//                     />
//                   )}

//                   {msg.emoji ? (
//                     <p className="text-2xl">{msg.emoji}</p>
//                   ) : (
//                     msg.text && <p className="break-words">{msg.text}</p>
//                   )}

//                   <div className="text-[10px] mt-1 text-right opacity-70">
//                     {format(new Date(msg.createdAt), "hh:mm a")}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}

//         <div ref={endRef} />
//       </ScrollArea>

//       {showScrollBtn && (
//         <button
//           onClick={scrollToBottom}
//           className="absolute bottom-24 left-4 z-20 rounded-full p-2 bg-primary text-primary-foreground shadow-lg hover:scale-105 transition"
//         >
//           <ChevronDown size={20} />
//         </button>
//       )}

//       <MessageInput />

//       {/* ✅ MODAL FOR IMAGE */}
//       {modalImage && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//           <div className="relative">
//             <img src={modalImage} className="max-h-[80vh] max-w-[90vw] rounded-lg" />
//             <button
//               onClick={() => setModalImage(null)}
//               className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
//             >
//               <X size={18} />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MessageArea;



import { useEffect, useRef, useState } from "react";
import { useChatStore } from "@/store/useChatStore.ts";
import { useAuthStore } from "@/store/useAuthStore.ts";
import { ScrollArea } from "@/components/ui/scroll-area";
import { format, isToday, isYesterday } from "date-fns";
import MessageInput from "./MessageInput.tsx";
import ChatHeader from "./ChatHeader.tsx";
import { ChevronDown, X } from "lucide-react";
import { Check, CheckCheck } from "lucide-react";


const MessageArea = () => {
  const { selectedUser, messages } = useChatStore();
  const { user } = useAuthStore();

  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const viewport =
      scrollAreaRef.current?.querySelector(
        "[data-radix-scroll-area-viewport]"
      ) as HTMLDivElement | null;

    if (!viewport) return;

    const handleScroll = () => {
      const atBottom =
        viewport.scrollHeight - viewport.scrollTop - viewport.clientHeight < 40;
      setShowScrollBtn(!atBottom);
    };

    viewport.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      viewport.removeEventListener("scroll", handleScroll);
    };
  }, [messages]);

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (!selectedUser) return null;

  let lastDate = "";

  return (
    <div className="flex-1 flex flex-col overflow-hidden relative">
      <ChatHeader />

      <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
        {messages.map((msg) => {
          const msgDate = format(new Date(msg.createdAt), "yyyy-MM-dd");
          const showDate = msgDate !== lastDate;
          lastDate = msgDate;

          const isSent = msg.senderId === user?._id;

          return (
            <div key={msg._id}>
              {showDate && (
                <div className="my-4 text-center text-xs text-muted-foreground">
                  {isToday(new Date(msg.createdAt))
                    ? "Today"
                    : isYesterday(new Date(msg.createdAt))
                    ? "Yesterday"
                    : format(new Date(msg.createdAt), "dd MMM yyyy")}
                </div>
              )}

              <div className={`flex mb-2 ${isSent ? "justify-end" : "justify-start"}`}>
                <div
                  className={`px-3 py-2 rounded-xl max-w-[70%] ${
                    isSent ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  {msg.image && (
                    <img
                      src={msg.image}
                      className="rounded-lg mb-2 max-w-[250px] max-h-[150px] cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => setModalImage(msg.image)}
                    />
                  )}

                  {msg.emoji ? (
                    <p className="text-2xl">{msg.emoji}</p>
                  ) : (
                    msg.text && <p className="break-words">{msg.text}</p>
                  )}

                  <div className="text-[10px] mt-1 text-right opacity-70">
                    {format(new Date(msg.createdAt), "hh:mm a")}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div ref={endRef} />
      </ScrollArea>

      {showScrollBtn && (
        <button
          onClick={scrollToBottom}
          className="absolute bottom-24 left-4 z-20 rounded-full p-2 bg-primary text-primary-foreground shadow-lg hover:scale-105 transition"
        >
          <ChevronDown size={20} />
        </button>
      )}

      <MessageInput />

      {/* Modal for clicked chat image */}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative">
            <img src={modalImage} className="max-h-[80vh] max-w-[90vw] rounded-lg" />
            <button
              onClick={() => setModalImage(null)}
              className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageArea;
