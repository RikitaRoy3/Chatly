// // import { useState } from "react";
// // import { useAuthStore } from "@/store/useAuthStore";
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// // import { Button } from "@/components/ui/button";
// // import {
// //   DropdownMenu,
// //   DropdownMenuContent,
// //   DropdownMenuItem,
// //   DropdownMenuSeparator,
// //   DropdownMenuTrigger,
// // } from "@/components/ui/dropdown-menu";
// // import { ThemeToggle } from "@/components/ui/ThemeToggle";
// // import MobileSidebar from "./MobileSidebar";
// // import ProfileModal from "./ProfileModal";
// // import { MessageCircle, Settings, LogOut, User, Sparkles } from "lucide-react";

// // const ChatHeader = () => {
// //   const { user, logout } = useAuthStore();
// //   const [profileOpen, setProfileOpen] = useState(false);

// //   const getInitials = (name: string) => {
// //     return name
// //       .split(" ")
// //       .map((n) => n[0])
// //       .join("")
// //       .toUpperCase()
// //       .slice(0, 2);
// //   };

// //   return (
// //     <>
// //       <header className="h-16 glass-strong px-4 flex items-center justify-between border-b border-border/50 relative z-40">
// //         <div className="flex items-center gap-3">
// //           <MobileSidebar />
// //           <div className="relative">
// //             <div className="absolute inset-0 gradient-primary rounded-full blur-lg opacity-30" />
// //             <div className="relative w-10 h-10 rounded-full glass flex items-center justify-center">
// //               <MessageCircle className="w-5 h-5 text-primary" />
// //             </div>
// //           </div>
// //           <div className="flex items-center gap-2">
// //             <h1 className="text-xl font-bold">
// //               <span className="gradient-text">Chatify</span>
// //             </h1>
// //             <Sparkles className="w-4 h-4 text-accent animate-pulse" />
// //           </div>
// //         </div>

// //         <div className="flex items-center gap-2">
// //           <ThemeToggle />
          
// //           <DropdownMenu>
// //             <DropdownMenuTrigger asChild>
// //               <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0 glass hover:glow transition-all duration-300">
// //                 <Avatar className="h-10 w-10 ring-2 ring-primary/20">
// //                   <AvatarImage src={user?.profilePic} alt={user?.fullName} />
// //                   <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-medium">
// //                     {getInitials(user?.fullName || "U")}
// //                   </AvatarFallback>
// //                 </Avatar>
// //               </Button>
// //             </DropdownMenuTrigger>
// //             <DropdownMenuContent align="end" className="w-56 glass-strong">
// //               <div className="px-3 py-3">
// //                 <p className="font-semibold text-foreground">{user?.fullName}</p>
// //                 <p className="text-sm text-muted-foreground">{user?.email}</p>
// //               </div>
// //               <DropdownMenuSeparator className="bg-border/50" />
// //               <DropdownMenuItem onClick={() => setProfileOpen(true)} className="cursor-pointer">
// //                 <User className="w-4 h-4 mr-2" />
// //                 Edit Profile
// //               </DropdownMenuItem>
// //               <DropdownMenuItem onClick={() => setProfileOpen(true)} className="cursor-pointer">
// //                 <Settings className="w-4 h-4 mr-2" />
// //                 Settings
// //               </DropdownMenuItem>
// //               <DropdownMenuSeparator className="bg-border/50" />
// //               <DropdownMenuItem onClick={logout} className="text-destructive focus:text-destructive cursor-pointer">
// //                 <LogOut className="w-4 h-4 mr-2" />
// //                 Log out
// //               </DropdownMenuItem>
// //             </DropdownMenuContent>
// //           </DropdownMenu>
// //         </div>
// //       </header>

// //       <ProfileModal open={profileOpen} onOpenChange={setProfileOpen} />
// //     </>
// //   );
// // };

// // export default ChatHeader;







// import { useState } from "react";
// import { useAuthStore } from "@/store/useAuthStore";
// import { useChatStore } from "@/store/useChatStore";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { ThemeToggle } from "@/components/ui/ThemeToggle";
// import MobileSidebar from "./MobileSidebar";
// import ProfileModal from "./ProfileModal";
// import { MessageCircle, LogOut, User } from "lucide-react";

// const ChatHeader = () => {
//   const { user, logout, onlineUsers } = useAuthStore();
//   const { selectedUser } = useChatStore();
//   const [profileOpen, setProfileOpen] = useState(false);

//   const isSelectedUserOnline =
//     selectedUser && onlineUsers.includes(selectedUser._id);

//   const getInitials = (name: string) =>
//     name
//       .split(" ")
//       .map((n) => n[0])
//       .join("")
//       .toUpperCase()
//       .slice(0, 2);

//   return (
//     <>
//       <header className="h-16 px-4 flex items-center justify-between border-b">
//         <div className="flex items-center gap-3">
//           <MobileSidebar />
//           <MessageCircle className="w-6 h-6 text-primary" />

//           {selectedUser && (
//             <div className="flex items-center gap-2">
//               <Avatar className="w-8 h-8">
//                 <AvatarImage src={selectedUser.profilePic} />
//                 <AvatarFallback>
//                   {getInitials(selectedUser.fullName)}
//                 </AvatarFallback>
//               </Avatar>

//               <div>
//                 <p className="font-medium">{selectedUser.fullName}</p>
//                 <p className="text-xs flex items-center gap-1">
//                   <span
//                     className={`w-2 h-2 rounded-full ${
//                       isSelectedUserOnline ? "bg-green-500" : "bg-gray-400"
//                     }`}
//                   />
//                   {isSelectedUserOnline ? "Online" : "Offline"}
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="flex items-center gap-2">
//           <ThemeToggle />

//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="p-0">
//                 <Avatar className="w-9 h-9">
//                   <AvatarImage src={user?.profilePic} />
//                   <AvatarFallback>
//                     {getInitials(user?.fullName || "U")}
//                   </AvatarFallback>
//                 </Avatar>
//               </Button>
//             </DropdownMenuTrigger>

//             <DropdownMenuContent align="end">
//               <DropdownMenuItem onClick={() => setProfileOpen(true)}>
//                 <User className="w-4 h-4 mr-2" /> Profile
//               </DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem onClick={logout} className="text-destructive">
//                 <LogOut className="w-4 h-4 mr-2" /> Logout
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </header>

//       <ProfileModal open={profileOpen} onOpenChange={setProfileOpen} />
//     </>
//   );
// };

// export default ChatHeader;


import { useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useChatStore } from "@/store/useChatStore";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import MobileSidebar from "./MobileSidebar";
import ProfileModal from "./ProfileModal";
import { MessageCircle, LogOut, User } from "lucide-react";

const ChatHeader = () => {
  const { user, logout, onlineUsers } = useAuthStore();
  const { selectedUser } = useChatStore();
  const [profileOpen, setProfileOpen] = useState(false);

  const isOnline =
    selectedUser && onlineUsers.includes(selectedUser._id);

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  if (!selectedUser) return null;

  return (
    <>
      <div
        className="
          sticky top-0 z-40
          h-24 px-6
          flex items-center justify-between
          backdrop-blur-xl
          bg-background/40
          border-b border-border/30
        "
      >
        <div className="flex items-center gap-4">
          <MobileSidebar />
          <MessageCircle className="w-6 h-6 text-primary" />

          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={selectedUser.profilePic} />
              <AvatarFallback>
                {getInitials(selectedUser.fullName)}
              </AvatarFallback>
            </Avatar>

            <div>
              <p className="font-semibold leading-tight">
                {selectedUser.fullName}
              </p>
              <p className="text-xs flex items-center gap-1 text-muted-foreground">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isOnline ? "bg-green-500" : "bg-gray-400"
                  }`}
                />
                {isOnline ? "Online" : "Offline"}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="p-0">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={user?.profilePic} />
                  <AvatarFallback>
                    {getInitials(user?.fullName || "U")}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setProfileOpen(true)}>
                <User className="w-4 h-4 mr-2" /> Profile
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={logout}
                className="text-destructive"
              >
                <LogOut className="w-4 h-4 mr-2" /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <ProfileModal open={profileOpen} onOpenChange={setProfileOpen} />
    </>
  );
};

export default ChatHeader;
