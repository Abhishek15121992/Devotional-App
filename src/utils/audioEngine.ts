// Web Audio API & Speech Synthesis for Sanatana Marg

class SacredAudioEngine {
  private ctx: AudioContext | null = null;
  private isTanpuraPlaying: boolean = false;
  private tanpuraInterval: number | null = null;
  private tanpuraGain: GainNode | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play an authentic Indian Temple Bell (Ghanta) sound
  playTempleBell(pitch: number = 880, duration: number = 3.5) {
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const masterGain = this.ctx.createGain();
      masterGain.gain.setValueAtTime(0.6, now);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
      masterGain.connect(this.ctx.destination);

      // Bell harmonics ratios: fundamental, minor third, fifth, octave, high overtone
      const ratios = [1.0, 1.19, 1.5, 2.0, 2.76, 5.4];
      const gains = [0.5, 0.35, 0.25, 0.2, 0.12, 0.05];

      ratios.forEach((ratio, i) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();

        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(pitch * ratio, now);

        // Slightly detune to give metallic shimmer
        osc.detune.setValueAtTime((i - 2) * 4, now);

        oscGain.gain.setValueAtTime(gains[i], now);
        oscGain.gain.exponentialRampToValueAtTime(0.0001, now + duration * (1 / (1 + i * 0.2)));

        osc.connect(oscGain);
        oscGain.connect(masterGain);

        osc.start(now);
        osc.stop(now + duration);
      });
    } catch (e) {
      console.warn('Audio Bell error:', e);
    }
  }

  // Play sacred Shankh (Conch) invocation tone
  playConchSound() {
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const duration = 2.8;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sawtooth';
      // Conch fundamental pitch ~ 220Hz (A3) with slight pitch rise and breathy swell
      osc.frequency.setValueAtTime(205, now);
      osc.frequency.exponentialRampToValueAtTime(235, now + 0.6);
      osc.frequency.linearRampToValueAtTime(215, now + duration);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(440, now);
      filter.Q.setValueAtTime(4, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.4, now + 0.5);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {
      console.warn('Conch sound error:', e);
    }
  }

  // Sound feedback for offering Ahuti (Swaha)
  playAhutiChime() {
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(1046.5, now + 0.4); // C6

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.8);
    } catch (e) {
      console.warn('Ahuti sound error:', e);
    }
  }

  // Soft wood bead click for Japa Mala counter
  playBeadClick() {
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.exponentialRampToValueAtTime(150, now + 0.08);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch (e) {
      console.warn('Bead click error:', e);
    }
  }

  // Continuous Vedic Tanpura Meditative Drone
  startTanpura(baseFreq: number = 138.59 /* C#3 */, volume: number = 0.25) {
    if (this.isTanpuraPlaying) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      this.isTanpuraPlaying = true;
      const ctx = this.ctx;

      this.tanpuraGain = ctx.createGain();
      this.tanpuraGain.gain.setValueAtTime(volume, ctx.currentTime);
      this.tanpuraGain.connect(ctx.destination);

      // 4 Tanpura strings plucked sequentially: Pa (1.5x), Sa (2x), Sa (2x), Kharaj Sa (1x)
      const stringRatios = [1.5, 2.0, 2.0, 1.0];
      let currentString = 0;

      const pluckString = (ratio: number) => {
        if (!this.isTanpuraPlaying || !this.ctx || !this.tanpuraGain) return;
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const stringGain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(baseFreq * ratio, t);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, t);
        filter.frequency.exponentialRampToValueAtTime(250, t + 2.5);

        stringGain.gain.setValueAtTime(0.001, t);
        stringGain.gain.linearRampToValueAtTime(0.35, t + 0.08);
        stringGain.gain.exponentialRampToValueAtTime(0.001, t + 3.2);

        osc.connect(filter);
        filter.connect(stringGain);
        stringGain.connect(this.tanpuraGain);

        osc.start(t);
        osc.stop(t + 3.5);
      };

      // Start initial plucks
      pluckString(stringRatios[0]);

      // Cycle every 850ms between strings
      this.tanpuraInterval = window.setInterval(() => {
        currentString = (currentString + 1) % stringRatios.length;
        pluckString(stringRatios[currentString]);
      }, 950);
    } catch (e) {
      console.warn('Tanpura start error:', e);
    }
  }

  stopTanpura() {
    this.isTanpuraPlaying = false;
    if (this.tanpuraInterval !== null) {
      clearInterval(this.tanpuraInterval);
      this.tanpuraInterval = null;
    }
    if (this.tanpuraGain && this.ctx) {
      this.tanpuraGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);
      setTimeout(() => {
        if (this.tanpuraGain) {
          this.tanpuraGain.disconnect();
          this.tanpuraGain = null;
        }
      }, 550);
    }
  }

  toggleTanpura(baseFreq?: number, volume?: number): boolean {
    if (this.isTanpuraPlaying) {
      this.stopTanpura();
      return false;
    } else {
      this.startTanpura(baseFreq, volume);
      return true;
    }
  }

  getTanpuraStatus(): boolean {
    return this.isTanpuraPlaying;
  }

  // Pronounce or chant mantra using SpeechSynthesis with proper cadence
  speakMantra(
    text: string,
    options: {
      rate?: number;
      pitch?: number;
      onEnd?: () => void;
      onBoundary?: (charIndex: number) => void;
    } = {}
  ) {
    if (!('speechSynthesis' in window)) {
      if (options.onEnd) options.onEnd();
      return;
    }

    window.speechSynthesis.cancel();

    // Clean brackets or notes
    const cleanText = text
      .replace(/\(.*?\)/g, '')
      .replace(/\[.*?\]/g, '')
      .replace(/\|/g, ' ')
      .replace(/॥/g, ' ')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = options.rate || 0.85; // slightly measured for chanting
    utterance.pitch = options.pitch || 0.95;

    // Try finding Hindi or Indian English voice for authentic Sanskrit inflection
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(
      (v) => v.lang.includes('hi') || v.lang.includes('sa') || v.lang.includes('en-IN')
    );
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onend = () => {
      this.currentUtterance = null;
      if (options.onEnd) options.onEnd();
    };

    utterance.onerror = () => {
      this.currentUtterance = null;
      if (options.onEnd) options.onEnd();
    };

    if (options.onBoundary) {
      utterance.onboundary = (e) => {
        if (options.onBoundary) options.onBoundary(e.charIndex);
      };
    }

    this.currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  stopMantra() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.currentUtterance = null;
    }
  }

  isSpeaking(): boolean {
    return 'speechSynthesis' in window && window.speechSynthesis.speaking;
  }
}

export const audioEngine = new SacredAudioEngine();
