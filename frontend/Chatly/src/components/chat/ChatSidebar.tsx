
import { useEffect, useMemo, useState } from "react";
import { useChatStore } from "@/stores/useChatStore.js";
import { useAuthStore } from "@/stores/useAuthStore.js";
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
import { useSoundStore } from "@/stores/useSoundStore.ts";

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
