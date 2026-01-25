import { useState } from "react";
import { useAuthStore } from "@/stores/useAuthStore.ts";
import { useChatStore } from "@/stores/useChatStore.ts";
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
