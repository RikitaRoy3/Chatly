// // // // // // // import { useState, useRef } from "react";
// // // // // // // import { useChatStore } from "@/store/useChatStore";
// // // // // // // import { useTypingSound } from "@/hooks/useTypingSound";
// // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // import { Input } from "@/components/ui/input";
// // // // // // // import { Send, Image, X, Loader2, Smile } from "lucide-react";

// // // // // // // const MessageInput = () => {
// // // // // // //   const [text, setText] = useState("");
// // // // // // //   const [imagePreview, setImagePreview] = useState<string | null>(null);
// // // // // // //   const fileInputRef = useRef<HTMLInputElement>(null);
// // // // // // //   const { selectedUser, sendMessage, isSendingMessage } = useChatStore();
// // // // // // //   const { playTypingSound, playSendSound } = useTypingSound();

// // // // // // //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // // // // //     const file = e.target.files?.[0];
// // // // // // //     if (!file) return;

// // // // // // //     if (!file.type.startsWith("image/")) {
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     const reader = new FileReader();
// // // // // // //     reader.onloadend = () => {
// // // // // // //       setImagePreview(reader.result as string);
// // // // // // //     };
// // // // // // //     reader.readAsDataURL(file);
// // // // // // //   };

// // // // // // //   const removeImage = () => {
// // // // // // //     setImagePreview(null);
// // // // // // //     if (fileInputRef.current) {
// // // // // // //       fileInputRef.current.value = "";
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // // // // //     setText(e.target.value);
// // // // // // //     playTypingSound();
// // // // // // //   };

// // // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // // //     e.preventDefault();
// // // // // // //     if (!selectedUser || (!text.trim() && !imagePreview)) return;

// // // // // // //     playSendSound();
    
// // // // // // //     const success = await sendMessage(selectedUser._id, {
// // // // // // //       text: text.trim() || undefined,
// // // // // // //       image: imagePreview || undefined,
// // // // // // //     });

// // // // // // //     if (success) {
// // // // // // //       setText("");
// // // // // // //       setImagePreview(null);
// // // // // // //       if (fileInputRef.current) {
// // // // // // //         fileInputRef.current.value = "";
// // // // // // //       }
// // // // // // //     }
// // // // // // //   };

// // // // // // //   if (!selectedUser) return null;

// // // // // // //   return (
// // // // // // //     <div className="p-4 glass border-t border-border/50">
// // // // // // //       {/* Image Preview */}
// // // // // // //       {imagePreview && (
// // // // // // //         <div className="mb-3 relative inline-block animate-fade-in">
// // // // // // //           <img
// // // // // // //             src={imagePreview}
// // // // // // //             alt="Preview"
// // // // // // //             className="max-h-32 rounded-xl border border-border/50 shadow-lg"
// // // // // // //           />
// // // // // // //           <button
// // // // // // //             onClick={removeImage}
// // // // // // //             className="absolute -top-2 -right-2 w-7 h-7 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
// // // // // // //           >
// // // // // // //             <X className="w-4 h-4" />
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       <form onSubmit={handleSubmit} className="flex items-center gap-2">
// // // // // // //         <input
// // // // // // //           type="file"
// // // // // // //           accept="image/*"
// // // // // // //           className="hidden"
// // // // // // //           ref={fileInputRef}
// // // // // // //           onChange={handleImageChange}
// // // // // // //         />

// // // // // // //         <Button
// // // // // // //           type="button"
// // // // // // //           variant="ghost"
// // // // // // //           size="icon"
// // // // // // //           onClick={() => fileInputRef.current?.click()}
// // // // // // //           className="flex-shrink-0 h-11 w-11 glass hover:glow transition-all duration-300"
// // // // // // //         >
// // // // // // //           <Image className="w-5 h-5" />
// // // // // // //         </Button>

// // // // // // //         <Button
// // // // // // //           type="button"
// // // // // // //           variant="ghost"
// // // // // // //           size="icon"
// // // // // // //           className="flex-shrink-0 h-11 w-11 glass hover:glow transition-all duration-300"
// // // // // // //         >
// // // // // // //           <Smile className="w-5 h-5" />
// // // // // // //         </Button>

// // // // // // //         <div className="flex-1 relative">
// // // // // // //           <Input
// // // // // // //             type="text"
// // // // // // //             placeholder="Type a message..."
// // // // // // //             value={text}
// // // // // // //             onChange={handleTextChange}
// // // // // // //             className="h-12 glass border-border/50 focus:border-primary/50 input-glow transition-all duration-300 pr-4 rounded-xl"
// // // // // // //             disabled={isSendingMessage}
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         <Button
// // // // // // //           type="submit"
// // // // // // //           size="icon"
// // // // // // //           disabled={isSendingMessage || (!text.trim() && !imagePreview)}
// // // // // // //           className="flex-shrink-0 h-12 w-12 rounded-xl gradient-primary hover:opacity-90 glow transition-all duration-300"
// // // // // // //         >
// // // // // // //           {isSendingMessage ? (
// // // // // // //             <Loader2 className="w-5 h-5 animate-spin" />
// // // // // // //           ) : (
// // // // // // //             <Send className="w-5 h-5" />
// // // // // // //           )}
// // // // // // //         </Button>
// // // // // // //       </form>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default MessageInput;





// // // // // // import { useState, useRef } from "react";
// // // // // // import { useChatStore } from "@/store/useChatStore";
// // // // // // import { useAuthStore } from "@/store/useAuthStore";
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import { Input } from "@/components/ui/input";
// // // // // // import { Send, Image, X, Loader2 } from "lucide-react";

// // // // // // const MessageInput = () => {
// // // // // //   const [text, setText] = useState("");
// // // // // //   const [imagePreview, setImagePreview] = useState<string | null>(null);
// // // // // //   const fileInputRef = useRef<HTMLInputElement>(null);

// // // // // //   const { selectedUser, sendMessage, isSendingMessage } = useChatStore();
// // // // // //   const socket = useAuthStore.getState().socket;

// // // // // //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // // // //     const file = e.target.files?.[0];
// // // // // //     if (!file || !file.type.startsWith("image/")) return;

// // // // // //     const reader = new FileReader();
// // // // // //     reader.onloadend = () => setImagePreview(reader.result as string);
// // // // // //     reader.readAsDataURL(file);
// // // // // //   };

// // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // //     e.preventDefault();
// // // // // //     if (!selectedUser || (!text.trim() && !imagePreview)) return;

// // // // // //     const success = await sendMessage(selectedUser._id, {
// // // // // //       text: text.trim() || undefined,
// // // // // //       image: imagePreview || undefined,
// // // // // //     });

// // // // // //     if (success) {
// // // // // //       socket?.emit("stopTyping", selectedUser._id);
// // // // // //       setText("");
// // // // // //       setImagePreview(null);
// // // // // //       if (fileInputRef.current) fileInputRef.current.value = "";
// // // // // //     }
// // // // // //   };

// // // // // //   if (!selectedUser) return null;

// // // // // //   return (
// // // // // //     <div className="p-4 border-t">
// // // // // //       {imagePreview && (
// // // // // //         <div className="mb-3 relative inline-block">
// // // // // //           <img src={imagePreview} className="max-h-32 rounded-lg" />
// // // // // //           <button
// // // // // //             onClick={() => setImagePreview(null)}
// // // // // //             className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6"
// // // // // //           >
// // // // // //             <X size={14} />
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       <form onSubmit={handleSubmit} className="flex gap-2">
// // // // // //         <input
// // // // // //           type="file"
// // // // // //           accept="image/*"
// // // // // //           hidden
// // // // // //           ref={fileInputRef}
// // // // // //           onChange={handleImageChange}
// // // // // //         />

// // // // // //         <Button type="button" onClick={() => fileInputRef.current?.click()}>
// // // // // //           <Image size={18} />
// // // // // //         </Button>

// // // // // //         <Input
// // // // // //           value={text}
// // // // // //           onChange={(e) => setText(e.target.value)}
// // // // // //           placeholder="Type a message"
// // // // // //           disabled={isSendingMessage}
// // // // // //         />

// // // // // //         <Button type="submit" disabled={isSendingMessage}>
// // // // // //           {isSendingMessage ? (
// // // // // //             <Loader2 className="animate-spin" />
// // // // // //           ) : (
// // // // // //             <Send size={18} />
// // // // // //           )}
// // // // // //         </Button>
// // // // // //       </form>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default MessageInput;





// // // // // import { useState, useRef } from "react";
// // // // // import { useChatStore } from "@/store/useChatStore";
// // // // // import { Button } from "@/components/ui/button";
// // // // // import { Input } from "@/components/ui/input";
// // // // // import { Send, Image, X } from "lucide-react";

// // // // // const MessageInput = () => {
// // // // //   const [text, setText] = useState("");
// // // // //   const [imageFile, setImageFile] = useState<File | null>(null);
// // // // //   const [imagePreview, setImagePreview] = useState<string | null>(null);
// // // // //   const fileInputRef = useRef<HTMLInputElement>(null);

// // // // //   const { selectedUser, sendMessage } = useChatStore();

// // // // //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // // //     const file = e.target.files?.[0];
// // // // //     if (!file || !file.type.startsWith("image/")) return;

// // // // //     setImageFile(file);
// // // // //     setImagePreview(URL.createObjectURL(file));
// // // // //   };

// // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // //     e.preventDefault();
// // // // //     if (!selectedUser || (!text.trim() && !imageFile)) return;

// // // // //     const formData = new FormData();
// // // // //     if (text.trim()) formData.append("text", text.trim());
// // // // //     if (imageFile) formData.append("image", imageFile);

// // // // //     await sendMessage(selectedUser._id, formData);

// // // // //     setText("");
// // // // //     setImageFile(null);
// // // // //     setImagePreview(null);
// // // // //     if (fileInputRef.current) fileInputRef.current.value = "";
// // // // //   };

// // // // //   if (!selectedUser) return null;

// // // // //   return (
// // // // //     <div className="p-4 border-t">
// // // // //       {imagePreview && (
// // // // //         <div className="mb-3 relative inline-block">
// // // // //           <img src={imagePreview} className="max-h-32 rounded-lg" />
// // // // //           <button
// // // // //             onClick={() => {
// // // // //               setImageFile(null);
// // // // //               setImagePreview(null);
// // // // //             }}
// // // // //             className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6"
// // // // //           >
// // // // //             <X size={14} />
// // // // //           </button>
// // // // //         </div>
// // // // //       )}

// // // // //       <form onSubmit={handleSubmit} className="flex gap-2">
// // // // //         <input
// // // // //           type="file"
// // // // //           accept="image/*"
// // // // //           hidden
// // // // //           ref={fileInputRef}
// // // // //           onChange={handleImageChange}
// // // // //         />

// // // // //         <Button type="button" onClick={() => fileInputRef.current?.click()}>
// // // // //           <Image size={18} />
// // // // //         </Button>

// // // // //         <Input
// // // // //           value={text}
// // // // //           onChange={(e) => setText(e.target.value)}
// // // // //           placeholder="Type a message"
// // // // //         />

// // // // //         <Button type="submit">
// // // // //           <Send size={18} />
// // // // //         </Button>
// // // // //       </form>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default MessageInput;





// // // // import { useState, useRef } from "react";
// // // // import { useChatStore } from "@/store/useChatStore.ts";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Input } from "@/components/ui/input";
// // // // import { Send, Image, X } from "lucide-react";

// // // // const MessageInput = () => {
// // // //   const [text, setText] = useState("");
// // // //   const [imagePreview, setImagePreview] = useState<string | null>(null);
// // // //   const [imageBase64, setImageBase64] = useState<string | null>(null);

// // // //   const fileInputRef = useRef<HTMLInputElement>(null);
// // // //   const { selectedUser, sendMessage } = useChatStore();

// // // //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // //     const file = e.target.files?.[0];
// // // //     if (!file || !file.type.startsWith("image/")) return;

// // // //     const reader = new FileReader();
// // // //     reader.onloadend = () => {
// // // //       setImageBase64(reader.result as string);
// // // //       setImagePreview(reader.result as string);
// // // //     };
// // // //     reader.readAsDataURL(file);
// // // //   };

// // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // //     e.preventDefault();
// // // //     if (!selectedUser) return;
// // // //     if (!text.trim() && !imageBase64) return;

// // // //     await sendMessage(selectedUser._id, {
// // // //       text: text.trim(),
// // // //       image: imageBase64,
// // // //     });

// // // //     setText("");
// // // //     setImageBase64(null);
// // // //     setImagePreview(null);
// // // //     if (fileInputRef.current) fileInputRef.current.value = "";
// // // //   };

// // // //   if (!selectedUser) return null;

// // // //   return (
// // // //     <div className="p-4 border-t">
// // // //       {imagePreview && (
// // // //         <div className="mb-3 relative inline-block">
// // // //           <img src={imagePreview} className="max-h-32 rounded-lg" />
// // // //           <button
// // // //             onClick={() => {
// // // //               setImageBase64(null);
// // // //               setImagePreview(null);
// // // //             }}
// // // //             className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
// // // //           >
// // // //             <X size={14} />
// // // //           </button>
// // // //         </div>
// // // //       )}

// // // //       <form onSubmit={handleSubmit} className="flex gap-2">
// // // //         <input
// // // //           type="file"
// // // //           accept="image/*"
// // // //           hidden
// // // //           ref={fileInputRef}
// // // //           onChange={handleImageChange}
// // // //         />

// // // //         <Button type="button" onClick={() => fileInputRef.current?.click()}>
// // // //           <Image size={18} />
// // // //         </Button>

// // // //         <Input
// // // //           value={text}
// // // //           onChange={(e) => setText(e.target.value)}
// // // //           placeholder="Type a message"
// // // //         />

// // // //         <Button type="submit">
// // // //           <Send size={18} />
// // // //         </Button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default MessageInput;











// // // // import { useState, useRef } from "react";
// // // // import { useChatStore } from "@/store/useChatStore.ts";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Input } from "@/components/ui/input";
// // // // import { Send, Image, X } from "lucide-react";

// // // // const MessageInput = () => {
// // // //   const [text, setText] = useState("");
// // // //   const [imagePreview, setImagePreview] = useState<string | null>(null);
// // // //   const [imageBase64, setImageBase64] = useState<string | null>(null);
// // // //   const [isSending, setIsSending] = useState(false);

// // // //   const fileInputRef = useRef<HTMLInputElement>(null);
// // // //   const { selectedUser, sendMessage } = useChatStore();

// // // //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // //     const file = e.target.files?.[0];
// // // //     if (!file || !file.type.startsWith("image/")) return;

// // // //     const reader = new FileReader();
// // // //     reader.onloadend = () => {
// // // //       setImageBase64(reader.result as string);
// // // //       setImagePreview(reader.result as string);
// // // //     };
// // // //     reader.readAsDataURL(file);
// // // //   };

// // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // //     e.preventDefault();

// // // //     if (isSending) return;
// // // //     if (!selectedUser) return;
// // // //     if (!text.trim() && !imageBase64) return;

// // // //     try {
// // // //       setIsSending(true);

// // // //       await sendMessage(selectedUser._id, {
// // // //         text: text.trim(),
// // // //         image: imageBase64,
// // // //       });

// // // //       setText("");
// // // //       setImageBase64(null);
// // // //       setImagePreview(null);
// // // //       if (fileInputRef.current) fileInputRef.current.value = "";
// // // //     } finally {
// // // //       setIsSending(false);
// // // //     }
// // // //   };

// // // //   if (!selectedUser) return null;

// // // //   return (
// // // //     <div className="p-4 border-t">
// // // //       {imagePreview && (
// // // //         <div className="mb-3 relative inline-block">
// // // //           <img src={imagePreview} className="max-h-32 rounded-lg" />
// // // //           <button
// // // //             type="button"
// // // //             onClick={() => {
// // // //               if (isSending) return;
// // // //               setImageBase64(null);
// // // //               setImagePreview(null);
// // // //             }}
// // // //             className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
// // // //           >
// // // //             <X size={14} />
// // // //           </button>
// // // //         </div>
// // // //       )}

// // // //       <form onSubmit={handleSubmit} className="flex gap-2">
// // // //         <input
// // // //           type="file"
// // // //           accept="image/*"
// // // //           hidden
// // // //           ref={fileInputRef}
// // // //           onChange={handleImageChange}
// // // //           disabled={isSending}
// // // //         />

// // // //         <Button
// // // //           type="button"
// // // //           onClick={() => fileInputRef.current?.click()}
// // // //           disabled={isSending}
// // // //         >
// // // //           <Image size={18} />
// // // //         </Button>

// // // //         <Input
// // // //           value={text}
// // // //           onChange={(e) => setText(e.target.value)}
// // // //           placeholder="Type a message"
// // // //           disabled={isSending}
// // // //         />

// // // //         <Button type="submit" disabled={isSending}>
// // // //           <Send size={18} />
// // // //         </Button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default MessageInput;




// // // // import { useEffect, useRef, useState } from "react";
// // // // import { useChatStore } from "@/store/useChatStore.ts";
// // // // import { useSoundStore } from "@/store/useSoundStore.ts";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Input } from "@/components/ui/input";
// // // // import { Send, Image, X } from "lucide-react";

// // // // const MessageInput = () => {
// // // //   const [text, setText] = useState("");
// // // //   const [imagePreview, setImagePreview] = useState<string | null>(null);
// // // //   const [imageBase64, setImageBase64] = useState<string | null>(null);
// // // //   const [isSending, setIsSending] = useState(false);

// // // //   const fileInputRef = useRef<HTMLInputElement>(null);
// // // //   const inputRef = useRef<HTMLInputElement>(null);
// // // //   const typingAudioRef = useRef<HTMLAudioElement | null>(null);

// // // //   const { selectedUser, sendMessage } = useChatStore();
// // // //   const { isSoundOn } = useSoundStore();

// // // //   /* 🔊 initialize typing sound once */
// // // //   useEffect(() => {
// // // //     typingAudioRef.current = new Audio("/sounds/keystroke1.mp3");
// // // //     typingAudioRef.current.volume = 0.4;
// // // //   }, []);

// // // //   /* 🎯 auto-focus input when user is selected */
// // // //   useEffect(() => {
// // // //     if (selectedUser) {
// // // //       requestAnimationFrame(() => {
// // // //         inputRef.current?.focus();
// // // //       });
// // // //     }
// // // //   }, [selectedUser]);

// // // //   const playTypingSound = () => {
// // // //     if (!isSoundOn || !typingAudioRef.current) return;

// // // //     typingAudioRef.current.currentTime = 0;
// // // //     typingAudioRef.current.play().catch(() => {});
// // // //   };

// // // //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // //     const file = e.target.files?.[0];
// // // //     if (!file || !file.type.startsWith("image/")) return;

// // // //     const reader = new FileReader();
// // // //     reader.onloadend = () => {
// // // //       setImageBase64(reader.result as string);
// // // //       setImagePreview(reader.result as string);
// // // //     };
// // // //     reader.readAsDataURL(file);
// // // //   };

// // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // //     e.preventDefault();

// // // //     if (isSending) return;
// // // //     if (!selectedUser) return;
// // // //     if (!text.trim() && !imageBase64) return;

// // // //     try {
// // // //       setIsSending(true);

// // // //       await sendMessage(selectedUser._id, {
// // // //         text: text.trim(),
// // // //         image: imageBase64,
// // // //       });

// // // //       setText("");
// // // //       setImageBase64(null);
// // // //       setImagePreview(null);
// // // //       if (fileInputRef.current) fileInputRef.current.value = "";
// // // //     } finally {
// // // //       setIsSending(false);
// // // //       inputRef.current?.focus();
// // // //     }
// // // //   };

// // // //   if (!selectedUser) return null;

// // // //   return (
// // // //     <div className="p-4 border-t">
// // // //       {imagePreview && (
// // // //         <div className="mb-3 relative inline-block">
// // // //           <img src={imagePreview} className="max-h-32 rounded-lg" />
// // // //           <button
// // // //             type="button"
// // // //             onClick={() => {
// // // //               if (isSending) return;
// // // //               setImageBase64(null);
// // // //               setImagePreview(null);
// // // //             }}
// // // //             className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
// // // //           >
// // // //             <X size={14} />
// // // //           </button>
// // // //         </div>
// // // //       )}

// // // //       <form onSubmit={handleSubmit} className="flex gap-2">
// // // //         <input
// // // //           type="file"
// // // //           accept="image/*"
// // // //           hidden
// // // //           ref={fileInputRef}
// // // //           onChange={handleImageChange}
// // // //           disabled={isSending}
// // // //         />

// // // //         <Button
// // // //           type="button"
// // // //           onClick={() => fileInputRef.current?.click()}
// // // //           disabled={isSending}
// // // //         >
// // // //           <Image size={18} />
// // // //         </Button>

// // // //         <Input
// // // //           ref={inputRef}
// // // //           value={text}
// // // //           onChange={(e) => {
// // // //             setText(e.target.value);
// // // //             playTypingSound();
// // // //           }}
// // // //           placeholder="Type a message"
// // // //           disabled={isSending}
// // // //         />

// // // //         <Button type="submit" disabled={isSending}>
// // // //           <Send size={18} />
// // // //         </Button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default MessageInput;






// // // import { useEffect, useRef, useState } from "react";
// // // import { useChatStore } from "@/store/useChatStore.ts";
// // // import { useSoundStore } from "@/store/useSoundStore.ts";
// // // import { Button } from "@/components/ui/button";
// // // import { Input } from "@/components/ui/input";
// // // import { Send, Image, X, Smile } from "lucide-react";
// // // import Picker, { EmojiClickData } from "emoji-picker-react"; // direct import



// // // // dynamically import emoji picker (no SSR issues)
// // // // const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });


// // // const MessageInput = () => {
// // //   const [text, setText] = useState("");
// // //   const [imagePreview, setImagePreview] = useState<string | null>(null);
// // //   const [imageBase64, setImageBase64] = useState<string | null>(null);
// // //   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
// // //   const [isSending, setIsSending] = useState(false);

// // //   const fileInputRef = useRef<HTMLInputElement>(null);
// // //   const inputRef = useRef<HTMLInputElement>(null);
// // //   const typingAudioRef = useRef<HTMLAudioElement | null>(null);

// // //   const { selectedUser, sendMessage } = useChatStore();
// // //   const { isSoundOn } = useSoundStore();

// // //   useEffect(() => {
// // //     typingAudioRef.current = new Audio("/sounds/keystroke1.mp3");
// // //     typingAudioRef.current.volume = 0.4;
// // //   }, []);

// // //   useEffect(() => {
// // //     if (selectedUser) {
// // //       requestAnimationFrame(() => {
// // //         inputRef.current?.focus();
// // //       });
// // //     }
// // //   }, [selectedUser]);

// // //   const playTypingSound = () => {
// // //     if (!isSoundOn || !typingAudioRef.current) return;
// // //     typingAudioRef.current.currentTime = 0;
// // //     typingAudioRef.current.play().catch(() => {});
// // //   };

// // //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // //     const file = e.target.files?.[0];
// // //     if (!file || !file.type.startsWith("image/")) return;

// // //     const reader = new FileReader();
// // //     reader.onloadend = () => {
// // //       setImageBase64(reader.result as string);
// // //       setImagePreview(reader.result as string);
// // //     };
// // //     reader.readAsDataURL(file);
// // //   };

// // //   // const handleEmojiClick = (emojiObject: any) => {
// // //   //   sendEmoji(emojiObject.emoji);
// // //   //   setShowEmojiPicker(false);
// // //   // };

// // // // const handleEmojiClick = (emojiData: EmojiClickData) => {
// // // //   sendEmoji(emojiData.emoji);
// // // //   setShowEmojiPicker(false);
// // // // };



// // // const handleEmojiClick = (emojiData: EmojiClickData) => {
// // //   sendEmoji(emojiData.emoji);
// // //   setShowEmojiPicker(false);
// // // };



// // //   const sendEmoji = async (emoji: string) => {
// // //     if (!selectedUser) return;

// // //     setIsSending(true);
// // //     try {
// // //       await sendMessage(selectedUser._id, { emoji });
// // //     } finally {
// // //       setIsSending(false);
// // //       inputRef.current?.focus();
// // //     }
// // //   };

// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     if (isSending) return;
// // //     if (!selectedUser) return;
// // //     if (!text.trim() && !imageBase64) return;

// // //     try {
// // //       setIsSending(true);
// // //       await sendMessage(selectedUser._id, {
// // //         text: text.trim(),
// // //         image: imageBase64,
// // //       });

// // //       setText("");
// // //       setImageBase64(null);
// // //       setImagePreview(null);
// // //       if (fileInputRef.current) fileInputRef.current.value = "";
// // //     } finally {
// // //       setIsSending(false);
// // //       inputRef.current?.focus();
// // //     }
// // //   };

// // //   if (!selectedUser) return null;

// // //   return (
// // //     <div className="p-4 border-t relative">
// // //       {imagePreview && (
// // //         <div className="mb-3 relative inline-block">
// // //           <img src={imagePreview} className="max-h-32 rounded-lg" />
// // //           <button
// // //             type="button"
// // //             onClick={() => {
// // //               if (isSending) return;
// // //               setImageBase64(null);
// // //               setImagePreview(null);
// // //             }}
// // //             className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
// // //           >
// // //             <X size={14} />
// // //           </button>
// // //         </div>
// // //       )}

// // //       <form onSubmit={handleSubmit} className="flex gap-2">
// // //         <input
// // //           type="file"
// // //           accept="image/*"
// // //           hidden
// // //           ref={fileInputRef}
// // //           onChange={handleImageChange}
// // //           disabled={isSending}
// // //         />

// // //         <Button
// // //           type="button"
// // //           onClick={() => fileInputRef.current?.click()}
// // //           disabled={isSending}
// // //         >
// // //           <Image size={18} />
// // //         </Button>

// // //         {/* Emoji Button */}
// // //         <div className="relative">
// // //           <Button
// // //             type="button"
// // //             onClick={() => setShowEmojiPicker(!showEmojiPicker)}
// // //             disabled={isSending}
// // //           >
// // //             <Smile size={18} />
// // //           </Button>
// // //           {showEmojiPicker && (
// // //             <div className="absolute bottom-10 left-0 z-50">
// // //               <Picker onEmojiClick={handleEmojiClick} />
// // //             </div>
// // //           )}
// // //         </div>

// // //         <Input
// // //           ref={inputRef}
// // //           value={text}
// // //           onChange={(e) => {
// // //             setText(e.target.value);
// // //             playTypingSound();
// // //           }}
// // //           placeholder="Type a message"
// // //           disabled={isSending}
// // //         />

// // //         <Button type="submit" disabled={isSending}>
// // //           <Send size={18} />
// // //         </Button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default MessageInput;








// // import { useEffect, useRef, useState } from "react";
// // import { useChatStore } from "@/store/useChatStore.ts";
// // import { useSoundStore } from "@/store/useSoundStore.ts";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Send, Image, X, Smile } from "lucide-react";
// // import Picker, { EmojiClickData } from "emoji-picker-react";

// // const MessageInput = () => {
// //   const [text, setText] = useState("");
// //   const [imagePreview, setImagePreview] = useState<string | null>(null);
// //   const [imageBase64, setImageBase64] = useState<string | null>(null);
// //   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
// //   const [isSending, setIsSending] = useState(false);

// //   const fileInputRef = useRef<HTMLInputElement>(null);
// //   const inputRef = useRef<HTMLInputElement>(null);
// //   const typingAudioRef = useRef<HTMLAudioElement | null>(null);

// //   const { selectedUser, sendMessage } = useChatStore();
// //   const { isSoundOn } = useSoundStore();

// //   useEffect(() => {
// //     typingAudioRef.current = new Audio("/sounds/keystroke1.mp3");
// //     typingAudioRef.current.volume = 0.4;
// //   }, []);

// //   useEffect(() => {
// //     if (selectedUser) inputRef.current?.focus();
// //   }, [selectedUser]);

// //   const playTypingSound = () => {
// //     if (!isSoundOn || !typingAudioRef.current) return;
// //     typingAudioRef.current.currentTime = 0;
// //     typingAudioRef.current.play().catch(() => {});
// //   };

// //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const file = e.target.files?.[0];
// //     if (!file || !file.type.startsWith("image/")) return;

// //     const reader = new FileReader();
// //     reader.onloadend = () => {
// //       setImageBase64(reader.result as string);
// //       setImagePreview(reader.result as string);
// //     };
// //     reader.readAsDataURL(file);
// //   };

// //   // ✅ FIXED: append emoji to input text instead of sending separately
// //   const handleEmojiClick = (emojiData: EmojiClickData) => {
// //     setText((prev) => prev + emojiData.emoji);
// //     setShowEmojiPicker(false);
// //     inputRef.current?.focus();
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (isSending) return;
// //     if (!selectedUser) return;
// //     if (!text.trim() && !imageBase64) return;

// //     try {
// //       setIsSending(true);
// //       await sendMessage(selectedUser._id, {
// //         text: text.trim(),
// //         image: imageBase64,
// //       });

// //       setText("");
// //       setImageBase64(null);
// //       setImagePreview(null);
// //       if (fileInputRef.current) fileInputRef.current.value = "";
// //     } finally {
// //       setIsSending(false);
// //       inputRef.current?.focus();
// //     }
// //   };

// //   if (!selectedUser) return null;

// //   return (
// //     <div className="p-4 border-t relative">
// //       {imagePreview && (
// //         <div className="mb-3 relative inline-block">
// //           <img src={imagePreview} className="max-h-32 rounded-lg" />
// //           <button
// //             type="button"
// //             onClick={() => {
// //               if (isSending) return;
// //               setImageBase64(null);
// //               setImagePreview(null);
// //             }}
// //             className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
// //           >
// //             <X size={14} />
// //           </button>
// //         </div>
// //       )}

// //       <form onSubmit={handleSubmit} className="flex gap-2">
// //         <input
// //           type="file"
// //           accept="image/*"
// //           hidden
// //           ref={fileInputRef}
// //           onChange={handleImageChange}
// //           disabled={isSending}
// //         />

// //         <Button
// //           type="button"
// //           onClick={() => fileInputRef.current?.click()}
// //           disabled={isSending}
// //         >
// //           <Image size={18} />
// //         </Button>

// //         {/* Emoji Button */}
// //         <div className="relative">
// //           <Button
// //             type="button"
// //             onClick={() => setShowEmojiPicker(!showEmojiPicker)}
// //             disabled={isSending}
// //           >
// //             <Smile size={18} />
// //           </Button>
// //           {showEmojiPicker && (
// //             <div className="absolute bottom-10 left-0 z-50">
// //               <Picker onEmojiClick={handleEmojiClick} />
// //             </div>
// //           )}
// //         </div>

// //         <Input
// //           ref={inputRef}
// //           value={text}
// //           onChange={(e) => {
// //             setText(e.target.value);
// //             playTypingSound();
// //           }}
// //           placeholder="Type a message"
// //           disabled={isSending}
// //         />

// //         <Button type="submit" disabled={isSending}>
// //           <Send size={18} />
// //         </Button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default MessageInput;






// import { useEffect, useRef, useState } from "react";
// import { useChatStore } from "@/store/useChatStore.ts";
// import { useSoundStore } from "@/store/useSoundStore.ts";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Send, Image, X, Smile } from "lucide-react";
// import Picker, { EmojiClickData } from "emoji-picker-react";

// const MessageInput = () => {
//   const [text, setText] = useState("");
//   const [imagePreview, setImagePreview] = useState<string | null>(null);
//   const [imageBase64, setImageBase64] = useState<string | null>(null);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [isSending, setIsSending] = useState(false);

//   // ✅ NEW: modal state for preview
//   const [modalImage, setModalImage] = useState<string | null>(null);

//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);
//   const typingAudioRef = useRef<HTMLAudioElement | null>(null);

//   const { selectedUser, sendMessage } = useChatStore();
//   const { isSoundOn } = useSoundStore();

//   useEffect(() => {
//     typingAudioRef.current = new Audio("/sounds/keystroke1.mp3");
//     typingAudioRef.current.volume = 0.4;
//   }, []);

//   useEffect(() => {
//     if (selectedUser) inputRef.current?.focus();
//   }, [selectedUser]);

//   const playTypingSound = () => {
//     if (!isSoundOn || !typingAudioRef.current) return;
//     typingAudioRef.current.currentTime = 0;
//     typingAudioRef.current.play().catch(() => {});
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file || !file.type.startsWith("image/")) return;

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImageBase64(reader.result as string);
//       setImagePreview(reader.result as string);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleEmojiClick = (emojiData: EmojiClickData) => {
//     setText((prev) => prev + emojiData.emoji);
//     setShowEmojiPicker(false);
//     inputRef.current?.focus();
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (isSending) return;
//     if (!selectedUser) return;
//     if (!text.trim() && !imageBase64) return;

//     try {
//       setIsSending(true);
//       await sendMessage(selectedUser._id, {
//         text: text.trim(),
//         image: imageBase64,
//       });

//       setText("");
//       setImageBase64(null);
//       setImagePreview(null);
//       if (fileInputRef.current) fileInputRef.current.value = "";
//     } finally {
//       setIsSending(false);
//       inputRef.current?.focus();
//     }
//   };

//   if (!selectedUser) return null;

//   return (
//     <div className="p-4 border-t relative">
//       {/* ✅ IMAGE PREVIEW CLICKABLE */}
//       {imagePreview && (
//         <div className="mb-3 relative inline-block">
//           <img
//             src={imagePreview}
//             className="max-h-32 rounded-lg cursor-pointer hover:scale-105 transition-transform"
//             onClick={() => setModalImage(imagePreview)}
//           />
//           <button
//             type="button"
//             onClick={() => {
//               if (isSending) return;
//               setImageBase64(null);
//               setImagePreview(null);
//             }}
//             className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
//           >
//             <X size={14} />
//           </button>
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="flex gap-2">
//         <input
//           type="file"
//           accept="image/*"
//           hidden
//           ref={fileInputRef}
//           onChange={handleImageChange}
//           disabled={isSending}
//         />

//         <Button
//           type="button"
//           onClick={() => fileInputRef.current?.click()}
//           disabled={isSending}
//         >
//           <Image size={18} />
//         </Button>

//         <div className="relative">
//           <Button
//             type="button"
//             onClick={() => setShowEmojiPicker(!showEmojiPicker)}
//             disabled={isSending}
//           >
//             <Smile size={18} />
//           </Button>
//           {showEmojiPicker && (
//             <div className="absolute bottom-10 left-0 z-50">
//               <Picker onEmojiClick={handleEmojiClick} />
//             </div>
//           )}
//         </div>

//         <Input
//           ref={inputRef}
//           value={text}
//           onChange={(e) => {
//             setText(e.target.value);
//             playTypingSound();
//           }}
//           placeholder="Type a message"
//           disabled={isSending}
//         />

//         <Button type="submit" disabled={isSending}>
//           <Send size={18} />
//         </Button>
//       </form>

//       {/* ✅ MODAL FOR IMAGE PREVIEW */}
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

// export default MessageInput;





import { useEffect, useRef, useState } from "react";
import { useChatStore } from "@/store/useChatStore.ts";
import { useSoundStore } from "@/store/useSoundStore.ts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Image, X, Smile } from "lucide-react";
import Picker, { EmojiClickData } from "emoji-picker-react";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const emojiPickerRef = useRef<HTMLDivElement>(null);
  const typingAudioRef = useRef<HTMLAudioElement | null>(null);

  const { selectedUser, sendMessage } = useChatStore();
  const { isSoundOn } = useSoundStore();

  useEffect(() => {
    typingAudioRef.current = new Audio("/sounds/keystroke1.mp3");
    typingAudioRef.current.volume = 0.2;
  }, []);

  useEffect(() => {
    if (selectedUser) inputRef.current?.focus();
  }, [selectedUser]);

  // Close emoji picker on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showEmojiPicker &&
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target as Node)
      ) {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showEmojiPicker]);

  const playTypingSound = () => {
    if (!isSoundOn || !typingAudioRef.current) return;
    typingAudioRef.current.currentTime = 0;
    typingAudioRef.current.play().catch(() => {});
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result as string);
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setText((prev) => prev + emojiData.emoji);
    setShowEmojiPicker(false);
    inputRef.current?.focus();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;
    if (!selectedUser) return;
    if (!text.trim() && !imageBase64) return;

    try {
      setIsSending(true);
      await sendMessage(selectedUser._id, {
        text: text.trim(),
        image: imageBase64,
      });

      setText("");
      setImageBase64(null);
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } finally {
      setIsSending(false);
      inputRef.current?.focus();
    }
  };

  if (!selectedUser) return null;

  return (
    <div className="p-4 border-t relative">
      {/* IMAGE PREVIEW CLICKABLE */}
      {imagePreview && (
        <div className="mb-3 relative inline-block">
          <img
            src={imagePreview}
            className="max-h-32 rounded-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setModalImage(imagePreview)}
          />
          <button
            type="button"
            onClick={() => {
              if (isSending) return;
              setImageBase64(null);
              setImagePreview(null);
            }}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
          >
            <X size={14} />
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="file"
          accept="image/*"
          hidden
          ref={fileInputRef}
          onChange={handleImageChange}
          disabled={isSending}
        />

        <Button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={isSending}
        >
          <Image size={18} />
        </Button>

        {/* EMOJI PICKER */}
        <div className="relative">
          <Button
            type="button"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            disabled={isSending}
          >
            <Smile size={18} />
          </Button>
          {showEmojiPicker && (
            <div ref={emojiPickerRef} className="absolute bottom-10 left-0 z-50">
              <Picker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>

        <Input
          ref={inputRef}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            playTypingSound();
          }}
          placeholder="Type a message"
          disabled={isSending}
        />

        <Button type="submit" disabled={isSending}>
          <Send size={18} />
        </Button>
      </form>

      {/* MODAL FOR IMAGE PREVIEW */}
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

export default MessageInput;
