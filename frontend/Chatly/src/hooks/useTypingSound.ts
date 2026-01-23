// 




import { useSoundStore } from "@/store/useSoundStore";

// typing audio
const typingSounds = [
  new Audio("/sounds/keystroke1.mp3"),
  new Audio("/sounds/keystroke2.mp3"),
  new Audio("/sounds/keystroke3.mp3"),
];

const sendSound = new Audio("/sounds/send.mp3");

export function useTypingSound() {
  const { isSoundOn } = useSoundStore();

  const playTypingSound = () => {
    if (!isSoundOn) return;

    const sound =
      typingSounds[Math.floor(Math.random() * typingSounds.length)];
    sound.currentTime = 0;
    sound.play().catch(() => {});
  };

  const playSendSound = () => {
    if (!isSoundOn) return;

    sendSound.currentTime = 0;
    sendSound.play().catch(() => {});
  };

  return { playTypingSound, playSendSound };
}
