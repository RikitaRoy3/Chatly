// import { useEffect, useRef, useState } from "react";
// import { Navigate } from "react-router-dom";
// import { useAuthStore } from "@/store/useAuthStore";
// import { useTheme } from "@/hooks/useTheme";
// import { useCustomCursor } from "@/hooks/useCustomCursor";
// import ChatHeader from "@/components/chat/ChatHeader";
// import ChatSidebar from "@/components/chat/ChatSidebar";
// import MessageArea from "@/components/chat/MessageArea";
// import AnimatedBackground from "@/components/ui/AnimatedBackground";

// const Chat = () => {
//   const { user } = useAuthStore();
//   const { initTheme } = useTheme();
//   // useCustomCursor();

//   useEffect(() => {
//     return initTheme();
//   }, [initTheme]);

//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   return (
//     <div className="h-screen flex flex-col overflow-hidden">
//       <AnimatedBackground />
//       {/* <ChatHeader /> */}
//       <div className="flex-1 flex overflow-hidden">
//         {/* Sidebar - hidden on mobile */}
//         <div className="w-80 flex-shrink-0 hidden md:block">
//           <ChatSidebar />
//         </div>
//         {/* Main Chat Area */}
//         <MessageArea />
//       </div>
//     </div>
//   );
// };

// export default Chat;









import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";
import { useChatStore } from "@/store/useChatStore";
import { useTheme } from "@/hooks/useTheme";
// import { useCustomCursor } from "@/hooks/useCustomCursor";
import ChatSidebar from "@/components/chat/ChatSidebar";
import MessageArea from "@/components/chat/MessageArea";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const Chat = () => {
  const { user, socket } = useAuthStore();
  const { initSocketListeners } = useChatStore();
  const { initTheme } = useTheme();

  // useCustomCursor();

  useEffect(() => {
    return initTheme();
  }, [initTheme]);

  // 🔥 SOCKET → CHAT STORE BRIDGE (CRITICAL FIX)
  useEffect(() => {
    if (!user || !socket) return;

    initSocketListeners();
  }, [user, socket, initSocketListeners]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <AnimatedBackground />

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-80 flex-shrink-0 hidden md:block">
          <ChatSidebar />
        </div>

        {/* Main Chat Area */}
        <MessageArea />
      </div>
    </div>
  );
};

export default Chat;
