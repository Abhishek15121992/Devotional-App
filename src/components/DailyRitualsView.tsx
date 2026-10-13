import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  Volume2, 
  VolumeX, 
  Sun, 
  Moon, 
  Sunrise, 
  Sunset, 
  BookOpen, 
  Sparkles,
  Compass,
  FileCheck2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { DAILY_RITUALS, calculateRealtimePanchang, RitualStep } from '../data/ritualsData';
import { audioEngine } from '../utils/audioEngine';

export const DailyRitualsView: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [selectedPeriod, setSelectedPeriod] = useState<'all' | 'morning' | 'afternoon' | 'evening' | 'night'>('all');
  const [completedRituals, setCompletedRituals] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('sanatana_rituals_completed');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [activeSpeakingId, setActiveSpeakingId] = useState<string | null>(null);
  const [expandedSankalpa, setExpandedSankalpa] = useState<boolean>(false);

  // Sankalpa generator state
  const [seekerName, setSeekerName] = useState('');
  const [seekerGotra, setSeekerGotra] = useState('');
  const [seekerCity, setSeekerCity] = useState('');
  const [sankalpaGenerated, setSankalpaGenerated] = useState<string | null>(null);

  // Update clock every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 30000);
    return () => clearInterval(timer);
  }, []);

  const panchang = calculateRealtimePanchang(currentTime);

  const toggleComplete = (id: string) => {
    const updated = { ...completedRituals, [id]: !completedRituals[id] };
    setCompletedRituals(updated);
    try {
      localStorage.setItem('sanatana_rituals_completed', JSON.stringify(updated));
    } catch (e) {
      console.warn('Storage error', e);
    }
  };

  const resetAllProgress = () => {
    if (window.confirm('Reset all completed ritual marks for today?')) {
      setCompletedRituals({});
      localStorage.removeItem('sanatana_rituals_completed');
    }
  };

  const handleSpeakMantra = (id: string, text: string) => {
    if (activeSpeakingId === id) {
      audioEngine.stopMantra();
      setActiveSpeakingId(null);
    } else {
      setActiveSpeakingId(id);
      audioEngine.speakMantra(text, {
        rate: 0.82,
        onEnd: () => setActiveSpeakingId(null),
      });
    }
  };

  const filteredRituals = selectedPeriod === 'all' 
    ? DAILY_RITUALS 
    : DAILY_RITUALS.filter(r => r.period === selectedPeriod);

  const totalCount = DAILY_RITUALS.length;
  const completedCount = DAILY_RITUALS.filter(r => completedRituals[r.id]).length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const generateCustomSankalpa = (e: React.FormEvent) => {
    e.preventDefault();
    const name = seekerName.trim() || 'मम (My Name)';
    const gotra = seekerGotra.trim() || 'कश्यप / स्वगोत्र (Gotra)';
    const city = seekerCity.trim() || 'अस्मिन् स्थाने (This City)';

    const text = `ॐ विष्णुर्विष्णुर्विष्णुः श्रीमद्भगवतो महापुरुषस्य विष्णोराज्ञया प्रवर्तमानस्य अद्य ब्रह्मणो द्वितीयपरार्धे श्रीश्वेतवाराहकल्पे वैवस्वतमन्वन्तरे अष्टाविंशतितमे कलियुगे कलिप्रथमचरणे जम्बूद्वीपे भारतवर्षे आर्यावर्तैकदेशे ${city} नगरे/क्षेत्रे... 
अद्य ${panchang.solarDay} वासरे, ${panchang.tithi} तिथौ, ${panchang.nakshatra} नक्षत्रे, ${gotra} गोत्रोत्पन्नः ${name} नामधेयोऽहं मम कायिक-वाचिक-मानसिक-सकल-पाप-क्षयार्थं, धर्म-अर्थ-काम-मोक्ष-सिद्ध्यर्थं, श्रीपरमेश्वर-प्रीत्यर्थं प्रातः/सायं नित्य-कर्म यथा-शक्ति करिष्ये ॥`;

    setSankalpaGenerated(text);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Real-time Panchang Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-amber-50 shadow-xl border border-amber-900/40 p-6 md:p-8">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-amber-400 text-xs tracking-wider uppercase font-semibold">
              <Compass className="w-4 h-4" />
              <span>Real-Time Vedic Panchang & Muhurta</span>
              <span className="text-amber-500/50">·</span>
              <span>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            <h1 className="font-sacred text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-amber-100">
              {panchang.dateStr}
            </h1>
            <p className="text-stone-300 text-sm max-w-2xl">
              {panchang.auspiciousRitualNote}
            </p>
          </div>

          {/* Panchang Grid Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-amber-950/60 p-4 rounded-xl border border-amber-800/30 text-xs">
            <div>
              <span className="text-amber-400/80 font-medium block">Tithi (तिथि)</span>
              <span className="font-semibold text-amber-100 text-sm">{panchang.tithi}</span>
            </div>
            <div>
              <span className="text-amber-400/80 font-medium block">Nakshatra (नक्षत्र)</span>
              <span className="font-semibold text-amber-100 text-sm">{panchang.nakshatra}</span>
            </div>
            <div>
              <span className="text-amber-400/80 font-medium block">Abhijit Muhurat</span>
              <span className="font-semibold text-emerald-300 text-sm">{panchang.abhijitMuhurat}</span>
            </div>
            <div>
              <span className="text-amber-400/80 font-medium block">Rahu Kaal (Avoid)</span>
              <span className="font-semibold text-rose-300 text-sm">{panchang.rahuKaal}</span>
            </div>
          </div>
        </div>

        {/* Period Progress Bar */}
        <div className="mt-6 pt-6 border-t border-amber-800/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="text-sm">
              <span className="text-amber-300 font-medium">Today's Ritual Progress:</span>{' '}
              <span className="text-amber-100 font-bold">{completedCount} of {totalCount} completed ({progressPercent}%)</span>
            </div>
          </div>
          <div className="flex-1 max-w-md bg-stone-800/80 rounded-full h-2.5 overflow-hidden border border-amber-700/30">
            <div 
              className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          {completedCount > 0 && (
            <button 
              onClick={resetAllProgress}
              className="text-xs text-amber-400/80 hover:text-amber-200 transition-colors"
            >
              Reset Marks
            </button>
          )}
        </div>
      </div>

      {/* Sankalpa Generator Collapsible */}
      <div className="bg-amber-100/40 border border-amber-200/80 rounded-xl p-5 shadow-sm">
        <div 
          onClick={() => setExpandedSankalpa(!expandedSankalpa)}
          className="flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-amber-600 text-amber-50 rounded-lg">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-sacred font-bold text-amber-950 text-base">
                Daily Vedic Sankalpa Generator
              </h3>
              <p className="text-xs text-stone-600">
                Generate the exact scriptural Sanskrit vow for your daily puja with today's Panchang coordinates.
              </p>
            </div>
          </div>
          <button className="text-amber-800 hover:text-amber-950 p-1">
            {expandedSankalpa ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>

        {expandedSankalpa && (
          <div className="mt-4 pt-4 border-t border-amber-200/60 space-y-4">
            <form onSubmit={generateCustomSankalpa} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh / Priya"
                  value={seekerName}
                  onChange={(e) => setSeekerName(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Gotra (Lineage)</label>
                <input
                  type="text"
                  placeholder="e.g. Kashyapa, Bharadvaja, Shiva"
                  value={seekerGotra}
                  onChange={(e) => setSeekerGotra(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">City / Region</label>
                <input
                  type="text"
                  placeholder="e.g. Mumbai, New York, London"
                  value={seekerCity}
                  onChange={(e) => setSeekerCity(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
              <div className="sm:col-span-3 flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white rounded-lg text-xs font-medium transition-colors shadow-sm"
                >
                  Generate My Sankalpa
                </button>
              </div>
            </form>

            {sankalpaGenerated && (
              <div className="p-4 bg-white rounded-lg border border-amber-300/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-sacred text-xs font-bold text-amber-900 uppercase tracking-wider">
                    Your Personalized Vedic Sankalpa:
                  </span>
                  <button 
                    onClick={() => handleSpeakMantra('custom-sankalpa', sankalpaGenerated)}
                    className="flex items-center space-x-1 text-xs text-amber-700 hover:text-amber-900"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Recite Audio</span>
                  </button>
                </div>
                <p className="font-sanskrit text-sm leading-relaxed text-stone-900 whitespace-pre-line bg-amber-50/50 p-3 rounded border border-amber-100">
                  {sankalpaGenerated}
                </p>
                <p className="text-xs text-stone-500 italic">
                  Hold a spoonful of water, flower, and akshat in your right hand. Recite this text, and release gently into a plate.
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Period Filter Buttons */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-1.5 p-1 bg-stone-200/60 rounded-xl">
          {[
            { id: 'all', label: 'All Daily Rituals', icon: Sparkles },
            { id: 'morning', label: 'Morning (प्रातः)', icon: Sunrise },
            { id: 'afternoon', label: 'Midday (मध्याह्न)', icon: Sun },
            { id: 'evening', label: 'Evening (सन्ध्या)', icon: Sunset },
            { id: 'night', label: 'Night (शयन)', icon: Moon },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSel = selectedPeriod === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedPeriod(tab.id as any)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  isSel
                    ? 'bg-amber-900 text-white shadow-sm'
                    : 'text-stone-700 hover:text-stone-900 hover:bg-stone-300/40'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="text-xs text-stone-500">
          Showing {filteredRituals.length} sacred steps
        </div>
      </div>

      {/* Ritual Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredRituals.map((ritual) => {
          const isDone = Boolean(completedRituals[ritual.id]);
          const isSpeaking = activeSpeakingId === ritual.id;

          return (
            <div
              key={ritual.id}
              className={`rounded-2xl border transition-all duration-300 bg-white p-6 shadow-sm flex flex-col justify-between ${
                isDone 
                  ? 'border-emerald-300 bg-emerald-50/15' 
                  : 'border-amber-200/70 hover:border-amber-400'
              }`}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center space-x-2 text-xs text-stone-500 mb-1">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      <span>{ritual.timeWindow}</span>
                      <span aria-hidden="true">·</span>
                      <span className="capitalize">{ritual.category}</span>
                    </div>
                    <h3 className="font-sacred text-lg font-bold text-amber-950 flex items-center gap-2">
                      {ritual.title}
                    </h3>
                    <p className="font-sanskrit text-sm text-amber-800 font-medium">
                      {ritual.sanskritTitle}
                    </p>
                  </div>

                  {/* Completion Toggle Button */}
                  <button
                    onClick={() => toggleComplete(ritual.id)}
                    title={isDone ? 'Mark as Incomplete' : 'Mark as Completed'}
                    className={`p-2 rounded-xl border transition-all ${
                      isDone
                        ? 'bg-emerald-600 text-white border-emerald-700'
                        : 'bg-stone-50 text-stone-400 border-stone-200 hover:text-emerald-700 hover:border-emerald-300'
                    }`}
                  >
                    {isDone ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                  </button>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {ritual.shortDesc}
                </p>

                {/* Sanskrit Mantra Block */}
                <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-amber-900 tracking-wider uppercase">
                      Sanskrit Mantra (मन्त्र)
                    </span>
                    <button
                      onClick={() => handleSpeakMantra(ritual.id, ritual.sanskritMantra)}
                      className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors ${
                        isSpeaking
                          ? 'bg-amber-600 text-white border-amber-700 animate-pulse'
                          : 'bg-white text-stone-700 border-stone-200 hover:bg-amber-100 hover:text-amber-900'
                      }`}
                    >
                      {isSpeaking ? (
                        <>
                          <VolumeX className="w-3 h-3" />
                          <span>Stop</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3 h-3 text-amber-700" />
                          <span>Chant Audio</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="font-sanskrit text-base sm:text-lg leading-relaxed text-amber-950 whitespace-pre-line font-medium">
                    {ritual.sanskritMantra}
                  </p>
                  <p className="text-xs text-stone-600 italic font-serif leading-relaxed whitespace-pre-line pt-1 border-t border-amber-200/40">
                    {ritual.transliteration}
                  </p>
                </div>

                {/* Meaning & Guidance */}
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-semibold text-stone-800">English Meaning: </span>
                    <span className="text-stone-600 leading-relaxed">{ritual.englishMeaning}</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200/70">
                    <span className="font-semibold text-amber-900">How to Perform: </span>
                    <span className="text-stone-700 leading-relaxed">{ritual.actionGuidance}</span>
                  </div>
                </div>
              </div>

              {/* Footer Benefits */}
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span className="italic">{ritual.benefits}</span>
                <span className={`font-medium ${isDone ? 'text-emerald-700' : 'text-amber-700'}`}>
                  {isDone ? 'Completed Today' : 'Pending'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
