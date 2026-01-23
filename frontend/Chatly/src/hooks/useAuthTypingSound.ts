const typingSounds = [
  new Audio("/sounds/keystroke1.mp3"),
  new Audio("/sounds/keystroke2.mp3"),
  new Audio("/sounds/keystroke3.mp3"),
];


// set volume to 0.2 for all sounds
typingSounds.forEach((sound) => {
  sound.volume = 0.2;
});


export const useAuthTypingSound = () => {
  const playTypingSound = () => {
    const sound =
      typingSounds[Math.floor(Math.random() * typingSounds.length)];
    sound.currentTime = 0;
    sound.play().catch(() => {});
  };

  return { playTypingSound };
};
