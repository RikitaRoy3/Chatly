import { useEffect, useRef, useState } from "react";
import { useChatStore } from "@/stores/useChatStore.ts";
import { useSoundStore } from "@/stores/useSoundStore.ts";
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
