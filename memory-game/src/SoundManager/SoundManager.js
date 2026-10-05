export class SoundManager {
  constructor() {
    this.storageKey = "memory-game-sound";
    this.enabled = this.loadSoundState();
    this.cardSound = new Audio("/sounds/card-flip.mp3");
    this.music = new Audio("/sounds/background.mp3");
    this.music.loop = true;
    this.music.volume = 0.2;
    this.cardSound.volume = 0.5;
  }

  loadSoundState() {
    const savedState = localStorage.getItem(this.storageKey);
    if (savedState === null) {
      return true;
    }
    return savedState === "true";
  }

  saveSoundState() {
    localStorage.setItem(this.storageKey, String(this.enabled));
  }

  playCardSound() {
    if (!this.enabled) return;
    this.cardSound.currentTime = 0;
    this.cardSound.play();
  }

  playMusic() {
    if (!this.enabled) return;
    this.music.play().catch(() => {});
  }

  stopMusic() {
    this.music.pause();
    this.music.currentTime = 0;
  }

  toggle() {
    this.enabled = !this.enabled;
    this.saveSoundState();
    if (this.enabled) {
      this.playMusic();
    } else {
      this.stopMusic();
    }
    return this.enabled;
  }
}
