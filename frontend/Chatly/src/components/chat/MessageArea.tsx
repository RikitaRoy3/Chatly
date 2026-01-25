
import { useEffect, useRef, useState } from "react";
import { useChatStore } from "@/stores/useChatStore.ts";
import { useAuthStore } from "@/stores/useAuthStore.ts";
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
