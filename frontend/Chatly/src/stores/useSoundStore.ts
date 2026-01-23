// import { create } from "zustand";

// interface SoundState {
//   isSoundOn: boolean;
//   toggleSound: () => void;
// }

// export const useSoundStore = create<SoundState>((set) => ({
//   isSoundOn: true,
//   toggleSound: () =>
//     set((state) => ({ isSoundOn: !state.isSoundOn })),
// }));


import { create } from "zustand";

interface SoundState {
  isSoundOn: boolean;
  toggleSound: () => void;
}

export const useSoundStore = create<SoundState>((set, get) => ({
  isSoundOn: true,

  toggleSound: () => {
    // 🔊 play click sound on toggle
    try {
      const audio = new Audio("/sounds/mouse-click.mp3");
      audio.play().catch(() => {});
    } catch {}

    // toggle state
    set((state) => ({
      isSoundOn: !state.isSoundOn,
    }));
  },
}));
