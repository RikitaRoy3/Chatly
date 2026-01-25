
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores/useAuthStore.ts";
import { useChatStore } from "@/stores/useChatStore.ts";
import { useTheme } from "@/hooks/useTheme.ts";
// import { useCustomCursor } from "@/hooks/useCustomCursor";
import ChatSidebar from "@/components/chat/ChatSidebar.tsx";
import MessageArea from "@/components/chat/MessageArea.tsx";
import AnimatedBackground from "@/components/ui/AnimatedBackground.tsx";

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
