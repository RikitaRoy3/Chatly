// import { useState, useRef } from "react";
// import { useAuthStore } from "@/store/useAuthStore";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Camera, Loader2, Sparkles } from "lucide-react";

// interface ProfileModalProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
// }

// const ProfileModal = ({ open, onOpenChange }: ProfileModalProps) => {
//   const { user, updateProfile, isUpdatingProfile } = useAuthStore();
//   const [fullName, setFullName] = useState(user?.fullName || "");
//   const [email, setEmail] = useState(user?.email || "");
//   const [password, setPassword] = useState("");
//   const [profilePic, setProfilePic] = useState<string | null>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const getInitials = (name: string) => {
//     return name
//       .split(" ")
//       .map((n) => n[0])
//       .join("")
//       .toUpperCase()
//       .slice(0, 2);
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     if (!file.type.startsWith("image/")) {
//       return;
//     }

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setProfilePic(reader.result as string);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const data: { fullName?: string; email?: string; password?: string; profilePic?: string } = {};
    
//     if (fullName !== user?.fullName) data.fullName = fullName;
//     if (email !== user?.email) data.email = email;
//     if (password) data.password = password;
//     if (profilePic) data.profilePic = profilePic;

//     if (Object.keys(data).length === 0) {
//       onOpenChange(false);
//       return;
//     }

//     const success = await updateProfile(data);
//     if (success) {
//       setPassword("");
//       setProfilePic(null);
//       onOpenChange(false);
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="sm:max-w-md glass-strong border-border/50">
//         <DialogHeader>
//           <DialogTitle className="flex items-center gap-2">
//             <Sparkles className="w-5 h-5 text-primary" />
//             <span className="gradient-text">Edit Profile</span>
//           </DialogTitle>
//         </DialogHeader>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Profile Picture */}
//           <div className="flex justify-center">
//             <div className="relative">
//               <div className="absolute inset-0 gradient-primary rounded-full blur-xl opacity-30" />
//               <Avatar className="w-28 h-28 ring-4 ring-primary/20 shadow-2xl relative">
//                 <AvatarImage src={profilePic || user?.profilePic} alt={user?.fullName} />
//                 <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-2xl font-bold">
//                   {getInitials(user?.fullName || "U")}
//                 </AvatarFallback>
//               </Avatar>
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 ref={fileInputRef}
//                 onChange={handleImageChange}
//               />
//               <button
//                 type="button"
//                 onClick={() => fileInputRef.current?.click()}
//                 className="absolute bottom-1 right-1 w-9 h-9 gradient-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform glow"
//               >
//                 <Camera className="w-4 h-4" />
//               </button>
//             </div>
//           </div>

//           {/* Full Name */}
//           <div className="space-y-2">
//             <Label htmlFor="fullName" className="text-sm font-medium">Full Name</Label>
//             <Input
//               id="fullName"
//               type="text"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               placeholder="Your full name"
//               className="h-11 glass border-border/50 focus:border-primary/50 input-glow transition-all duration-300"
//             />
//           </div>

//           {/* Email */}
//           <div className="space-y-2">
//             <Label htmlFor="email" className="text-sm font-medium">Email</Label>
//             <Input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Your email"
//               className="h-11 glass border-border/50 focus:border-primary/50 input-glow transition-all duration-300"
//             />
//           </div>

//           {/* Password */}
//           <div className="space-y-2">
//             <Label htmlFor="password" className="text-sm font-medium">New Password (optional)</Label>
//             <Input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Leave blank to keep current"
//               className="h-11 glass border-border/50 focus:border-primary/50 input-glow transition-all duration-300"
//             />
//           </div>

//           {/* Submit */}
//           <div className="flex gap-3 pt-2">
//             <Button
//               type="button"
//               variant="outline"
//               className="flex-1 h-11 glass border-border/50 hover:glow transition-all duration-300"
//               onClick={() => onOpenChange(false)}
//             >
//               Cancel
//             </Button>
//             <Button
//               type="submit"
//               className="flex-1 h-11 gradient-primary hover:opacity-90 glow transition-all duration-300"
//               disabled={isUpdatingProfile}
//             >
//               {isUpdatingProfile ? (
//                 <>
//                   <Loader2 className="w-4 h-4 animate-spin mr-2" />
//                   Saving...
//                 </>
//               ) : (
//                 "Save Changes"
//               )}
//             </Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default ProfileModal;



import { useState, useRef, useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Loader2, Sparkles } from "lucide-react";

interface ProfileModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProfileModal = ({ open, onOpenChange }: ProfileModalProps) => {
  const { user, updateProfile, isUpdatingProfile } = useAuthStore();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (user) {
      setFullName(user.fullName);
      setEmail(user.email);
    }
  }, [user]);

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePic(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data: any = {};

    if (fullName !== user?.fullName) data.fullName = fullName;
    if (email !== user?.email) data.email = email;
    if (password) data.password = password;
    if (profilePic) data.profilePic = profilePic;

    if (Object.keys(data).length === 0) {
      onOpenChange(false);
      return;
    }

    const success = await updateProfile(data);

    if (success) {
      setPassword("");
      setProfilePic(null);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md glass-strong border-border/50">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="gradient-text">Edit Profile</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture */}
          <div className="flex justify-center">
            <div className="relative">
              <Avatar className="w-28 h-28 ring-4 ring-primary/20 shadow-2xl">
                <AvatarImage
                  src={profilePic || user?.profilePic}
                  key={profilePic || user?.profilePic}
                />
                <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-2xl font-bold">
                  {getInitials(user?.fullName || "U")}
                </AvatarFallback>
              </Avatar>

              <input
                type="file"
                accept="image/*"
                hidden
                ref={fileInputRef}
                onChange={handleImageChange}
              />

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-1 right-1 w-9 h-9 gradient-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <Camera className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Full Name */}
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label>Email</Label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label>New Password</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Leave blank to keep current"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="flex-1 gradient-primary"
              disabled={isUpdatingProfile}
            >
              {isUpdatingProfile ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
