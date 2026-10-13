import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  Check, 
  Bell, 
  Flame,
  CircleDot
} from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface MantraPreset {
  id: string;
  name: string;
  sanskrit: string;
  transliteration: string;
  deity: string;
  meaning: string;
  targetCount: number;
}

const MANTRA_PRESETS: MantraPreset[] = [
  {
    id: 'gayatri',
    name: 'Gayatri Mantra',
    sanskrit: 'ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥',
    transliteration: 'Om Bhūr Bhuvaḥ Svaḥ Tat Savitur Vareṇyaṁ Bhargo Devasya Dhīmahi Dhiyo Yo Naḥ Pracodayāt ||',
    deity: 'Mother Gayatri / Savita',
    meaning: 'We meditate on the adorable light of the Sun Creator; may He illuminate and guide our intellect.',
    targetCount: 108
  },
  {
    id: 'mahamrityunjaya',
    name: 'Maha Mrityunjaya Mantra',
    sanskrit: 'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् । उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात् ॥',
    transliteration: 'Om Tryambakaṁ Yajāmahe Sugandhiṁ Puṣṭivardhanam | Urvārukam iva Bandhanān Mṛtyor Mukṣīya Māmṛtāt ||',
    deity: 'Lord Shiva (Tryambaka)',
    meaning: 'We worship the fragrant three-eyed Lord who nourishes all; liberate us from death and bondage into immortality.',
    targetCount: 108
  },
  {
    id: 'om-namah-shivaya',
    name: 'Shiva Panchakshara (Om Namah Shivaya)',
    sanskrit: 'ॐ नमः शिवाय ॥',
    transliteration: 'Om Namaḥ Śivāya ||',
    deity: 'Lord Shiva',
    meaning: 'I bow with supreme surrender to the Auspicious One, the Inner Self of all existence.',
    targetCount: 108
  },
  {
    id: 'hare-krishna',
    name: 'Maha Mantra (Hare Krishna)',
    sanskrit: 'हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे । हरे राम हरे राम राम राम हरे हरे ॥',
    transliteration: 'Hare Kṛṣṇa Hare Kṛṣṇa Kṛṣṇa Kṛṣṇa Hare Hare | Hare Rāma Hare Rāma Rāma Rāma Hare Hare ||',
    deity: 'Sri Radha-Krishna / Sri Sita-Rama',
    meaning: 'O divine feminine energy (Hare) and all-attractive Supreme (Krishna/Rama), please engage me in Your loving service.',
    targetCount: 108
  },
  {
    id: 'ganesha',
    name: 'Ganesha Moola Mantra',
    sanskrit: 'ॐ गं गणपतये नमः ॥',
    transliteration: 'Om Gaṁ Gaṇapataye Namaḥ ||',
    deity: 'Lord Ganesha',
    meaning: 'I bow to Lord Ganesha, the remover of all obstacles and giver of auspicious beginnings.',
    targetCount: 108
  },
  {
    id: 'lakshmi',
    name: 'Lakshmi Beeja Mantra',
    sanskrit: 'ॐ श्रीं ह्रीं क्लीं श्रीं सिद्धलक्ष्म्यै नमः ॥',
    transliteration: 'Om Śrīṁ Hrīṁ Klīṁ Śrīṁ Siddha-Lakṣmyai Namaḥ ||',
    deity: 'Goddess Mahalakshmi',
    meaning: 'Salutations to the Supreme Goddess Lakshmi, who bestows auspicious spiritual and material fulfillment.',
    targetCount: 108
  }
];

export const JapaMalaView: React.FC = () => {
  const [selectedMantra, setSelectedMantra] = useState<MantraPreset>(MANTRA_PRESETS[0]);
  const [beadCount, setBeadCount] = useState<number>(0);
  const [roundsCompleted, setRoundsCompleted] = useState<number>(0);
  const [targetBeads, setTargetBeads] = useState<number>(108);
  const [isChantingLoop, setIsChantingLoop] = useState<boolean>(false);
  const [chantIntervalMs, setChantIntervalMs] = useState<number>(3500);

  // Keypress handler: Spacebar counts a bead
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        const activeElement = document.activeElement;
        const isInputField = activeElement instanceof HTMLInputElement || activeElement instanceof HTMLTextAreaElement;
        if (!isInputField) {
          e.preventDefault();
          handleNextBead();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [beadCount, targetBeads, roundsCompleted]);

  // Audio Chant loop
  useEffect(() => {
    let loopTimer: any;
    if (isChantingLoop) {
      audioEngine.speakMantra(selectedMantra.sanskrit, {
        rate: 0.88,
        onEnd: () => {
          handleNextBead();
          if (isChantingLoop) {
            loopTimer = setTimeout(() => {
              // trigger next in loop
            }, 600);
          }
        }
      });
    } else {
      audioEngine.stopMantra();
    }

    return () => {
      if (loopTimer) clearTimeout(loopTimer);
    };
  }, [isChantingLoop, beadCount, selectedMantra]);

  const handleNextBead = () => {
    audioEngine.playBeadClick();
    const next = beadCount + 1;

    if (next >= targetBeads) {
      // Completed one mala round (108 beads)
      setBeadCount(0);
      setRoundsCompleted((prev) => prev + 1);
      audioEngine.playTempleBell(880, 4.0);
    } else {
      setBeadCount(next);
    }
  };

  const handleReset = () => {
    setBeadCount(0);
    setRoundsCompleted(0);
    setIsChantingLoop(false);
    audioEngine.stopMantra();
  };

  const progressPercent = Math.round((beadCount / targetBeads) * 100);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full border border-amber-200">
          <CircleDot className="w-3.5 h-3.5 text-amber-600" />
          <span>Vedic Japa Mala & Chanting Sanctuary</span>
        </div>
        <h1 className="font-sacred text-2xl sm:text-3xl font-bold tracking-tight text-amber-950">
          108 Beads Japa Mala (जप माला)
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          Quiet the fluctuations of the mind through rhythmic mantra repetition (Namasmarana). Count beads with spacebar or tap, accompanied by authentic Tanpura and chime feedback.
        </p>
      </div>

      {/* Preset Selector */}
      <div className="bg-white rounded-2xl border border-stone-200/80 p-4 shadow-sm space-y-3">
        <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
          Select Sacred Mantra:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {MANTRA_PRESETS.map((m) => (
            <button
              key={m.id}
              onClick={() => {
                setSelectedMantra(m);
                setBeadCount(0);
                setIsChantingLoop(false);
              }}
              className={`p-2.5 rounded-xl text-left border transition-all text-xs ${
                selectedMantra.id === m.id
                  ? 'bg-amber-900 text-white border-amber-950 shadow-sm font-semibold'
                  : 'bg-stone-50 hover:bg-amber-50 text-stone-700 border-stone-200'
              }`}
            >
              <span className="block truncate">{m.name}</span>
              <span className={`text-[10px] block opacity-75 ${selectedMantra.id === m.id ? 'text-amber-200' : 'text-stone-500'}`}>
                {m.deity}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Mantra Card */}
      <div className="bg-gradient-to-br from-amber-50 via-white to-amber-100/50 rounded-2xl border-2 border-amber-300 p-6 sm:p-8 text-center space-y-4 shadow-md">
        <div>
          <span className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
            {selectedMantra.deity} · {selectedMantra.name}
          </span>
          <p className="font-sanskrit text-xl sm:text-3xl leading-relaxed text-amber-950 font-bold mt-2">
            {selectedMantra.sanskrit}
          </p>
          <p className="text-xs sm:text-sm text-stone-600 italic font-serif mt-1">
            {selectedMantra.transliteration}
          </p>
        </div>

        <p className="text-xs text-stone-600 max-w-xl mx-auto italic">
          "{selectedMantra.meaning}"
        </p>
      </div>

      {/* Interactive Mala Ring Display */}
      <div className="bg-stone-900 rounded-3xl border border-amber-800/40 p-8 sm:p-12 text-amber-50 shadow-2xl flex flex-col items-center space-y-8">
        {/* Main Circular Counter */}
        <div className="relative flex items-center justify-center">
          {/* Subtle glowing ring */}
          <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full border-4 border-amber-500/20 flex items-center justify-center relative">
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                className="stroke-amber-500/10 stroke-[6px] fill-transparent"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                className="stroke-amber-500 stroke-[6px] fill-transparent transition-all duration-300 stroke-linecap-round"
                strokeDasharray="283%"
                strokeDashoffset={`${283 - (283 * progressPercent) / 100}%`}
              />
            </svg>

            {/* Inner Content */}
            <div className="text-center space-y-1 select-none">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block">
                Bead Count
              </span>
              <div className="text-5xl sm:text-6xl font-sacred font-extrabold text-amber-100">
                {beadCount}
              </div>
              <span className="text-xs text-stone-400 block">
                Target: {targetBeads} Beads
              </span>
              {roundsCompleted > 0 && (
                <span className="inline-block text-[11px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-600/40">
                  {roundsCompleted} Full Mala{roundsCompleted > 1 ? 's' : ''} Done
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Big Tap / Next Bead Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
          <button
            onClick={handleNextBead}
            className="w-full py-4 px-8 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-500 hover:to-orange-500 text-white rounded-2xl font-sacred text-lg font-bold shadow-lg shadow-orange-950/60 active:scale-95 transition-all flex items-center justify-center space-x-2 border border-amber-400/40 cursor-pointer"
          >
            <CircleDot className="w-5 h-5 text-amber-200" />
            <span>Chant & Advance Bead (Spacebar)</span>
          </button>

          <button
            onClick={handleReset}
            title="Reset mala counter"
            className="p-4 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-2xl border border-stone-700 transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        {/* Target Presets & Chanting Loop */}
        <div className="flex flex-wrap items-center justify-between gap-4 w-full max-w-md text-xs border-t border-stone-800 pt-6">
          <div className="flex items-center space-x-1.5">
            <span className="text-stone-400">Mala size:</span>
            {[27, 54, 108].map((num) => (
              <button
                key={num}
                onClick={() => {
                  setTargetBeads(num);
                  setBeadCount(0);
                }}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  targetBeads === num
                    ? 'bg-amber-600 text-white font-bold'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                {num}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsChantingLoop(!isChantingLoop)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border transition-all ${
              isChantingLoop
                ? 'bg-amber-600 text-white border-amber-500 animate-pulse'
                : 'bg-stone-800 text-stone-300 border-stone-700 hover:text-white'
            }`}
          >
            {isChantingLoop ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-amber-400" />}
            <span>{isChantingLoop ? 'Auto-Chant On' : 'Start Auto-Chant'}</span>
          </button>
        </div>

        <p className="text-xs text-stone-400 text-center italic">
          Tip: Combine with the Tanpura drone in the top bar for a sublime personal temple atmosphere.
        </p>
      </div>
    </div>
  );
};
