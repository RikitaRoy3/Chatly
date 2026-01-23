import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import ChatSidebar from "./ChatSidebar";
import { useState } from "react";
import { useChatStore } from "@/store/useChatStore";

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);
  const { selectedUser } = useChatStore();

  // Close sidebar when user is selected
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden h-10 w-10 glass"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-80 glass">
        <ChatSidebar onSelectUser={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
