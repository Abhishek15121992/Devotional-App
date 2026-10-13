import React, { useState } from 'react';
import { 
  BookOpen, 
  Volume2, 
  VolumeX, 
  Send, 
  Sparkles, 
  HelpCircle, 
  Compass, 
  Quote, 
  ChevronRight,
  Filter
} from 'lucide-react';
import { SCRIPTURAL_TEACHINGS, Shloka } from '../data/scripturesData';
import { audioEngine } from '../utils/audioEngine';

export const ScripturesView: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>('All');
  const [selectedSource, setSelectedSource] = useState<string>('All');
  const [speakingShlokaId, setSpeakingShlokaId] = useState<string | null>(null);

  // Ask Shastras AI state
  const [userQuestion, setUserQuestion] = useState('');
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false);
  const [aiAnswer, setAiAnswer] = useState<{ question: string; answer: string; source: string } | null>(null);

  const dailyShloka = SCRIPTURAL_TEACHINGS[0]; // Gita 2.47

  const filteredShlokas = SCRIPTURAL_TEACHINGS.filter((item) => {
    const matchesTheme = selectedTheme === 'All' || item.theme === selectedTheme;
    const matchesSource = selectedSource === 'All' || item.source === selectedSource;
    return matchesTheme && matchesSource;
  });

  const handleToggleAudio = (id: string, text: string) => {
    if (speakingShlokaId === id) {
      audioEngine.stopMantra();
      setSpeakingShlokaId(null);
    } else {
      setSpeakingShlokaId(id);
      audioEngine.speakMantra(text, {
        rate: 0.85,
        onEnd: () => setSpeakingShlokaId(null),
      });
    }
  };

  const handleAskShastra = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuestion.trim()) return;

    setIsLoadingAnswer(true);
    try {
      const res = await fetch('/api/ask-shastra', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userQuestion }),
      });
      const data = await res.json();
      setAiAnswer({
        question: userQuestion,
        answer: data.answer || "May spiritual peace and clarity guide you. Om Shanti.",
        source: data.source || "Sanatana Dharma Wisdom"
      });
    } catch (err) {
      console.warn('Ask Shastra fetch error:', err);
      setAiAnswer({
        question: userQuestion,
        answer: `Namaste. Regarding your inquiry on "${userQuestion}": Sanatana Dharma teaches that conscious devotion (Shraddha) and pure intention (Bhava) hold supreme value. As Lord Krishna teaches in the Gita (9.26): even a simple offering made with a pure heart is cherished by the Divine. Consult traditional elders or sacred texts for local customs. Om Shanti.`,
        source: "Vedic Guidance"
      });
    } finally {
      setIsLoadingAnswer(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-xs font-semibold text-amber-700 uppercase tracking-wider">
          <BookOpen className="w-4 h-4 text-amber-600" />
          <span>Sanatana Shastra Wisdom & Teachings</span>
          <span className="text-amber-500/50">·</span>
          <span>Bhagavad Gita · Upanishads · Vedic Suktas</span>
        </div>
        <h1 className="font-sacred text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-amber-950">
          Scriptural Teachings & Real-Time Reflection
        </h1>
        <p className="text-sm text-stone-600 max-w-3xl leading-relaxed">
          Explore eternal verses preserved through oral and written parampara. Bridge profound Sanskrit wisdom with practical, actionable application in modern daily life.
        </p>
      </div>

      {/* Shloka of the Day Spotlight Card */}
      <div className="rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6 sm:p-8 shadow-md space-y-6 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-amber-200/30 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-200/70 pb-4">
          <div>
            <div className="flex items-center space-x-2 text-xs text-amber-800 font-semibold mb-1">
              <Quote className="w-4 h-4 text-amber-600" />
              <span>Today's Daily Contemplation</span>
              <span aria-hidden="true">·</span>
              <span>{dailyShloka.source} ({dailyShloka.chapterOrKanda})</span>
            </div>
            <h2 className="font-sacred text-xl sm:text-2xl font-bold text-amber-950">
              {dailyShloka.title}
            </h2>
          </div>

          <button
            onClick={() => handleToggleAudio(dailyShloka.id, dailyShloka.sanskrit)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-medium border transition-all ${
              speakingShlokaId === dailyShloka.id
                ? 'bg-amber-600 text-white border-amber-700 animate-pulse'
                : 'bg-white text-stone-700 border-amber-300 hover:bg-amber-100'
            }`}
          >
            {speakingShlokaId === dailyShloka.id ? (
              <>
                <VolumeX className="w-4 h-4" />
                <span>Stop Recitation</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-amber-700" />
                <span>Listen to Audio Chant</span>
              </>
            )}
          </button>
        </div>

        {/* Sanskrit & Transliteration */}
        <div className="p-6 bg-white/80 rounded-2xl border border-amber-200/80 shadow-inner text-center space-y-3">
          <p className="font-sanskrit text-xl sm:text-3xl leading-relaxed text-amber-950 font-semibold whitespace-pre-line">
            {dailyShloka.sanskrit}
          </p>
          <p className="text-xs sm:text-sm text-stone-600 italic font-serif leading-relaxed whitespace-pre-line pt-2 border-t border-amber-100">
            {dailyShloka.transliteration}
          </p>
        </div>

        {/* Word-by-word Breakdown */}
        <div className="space-y-2">
          <span className="font-sacred text-xs font-bold text-amber-900 uppercase tracking-wider block">
            Word-by-Word Sanskrit Analysis (पदच्छेद एवं अन्वय)
          </span>
          <div className="flex flex-wrap gap-2">
            {dailyShloka.wordMeaning.map((wm, i) => (
              <div key={i} className="text-xs bg-amber-100/70 border border-amber-200 px-2.5 py-1 rounded-lg">
                <strong className="font-sanskrit text-amber-950">{wm.word}:</strong>{' '}
                <span className="text-stone-700">{wm.meaning}</span>
              </div>
            ))}
          </div>
        </div>

        {/* English Translation & Application */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
          <div className="space-y-2">
            <span className="font-semibold text-stone-900 block">English Translation:</span>
            <p className="text-stone-700 leading-relaxed italic">"{dailyShloka.translation}"</p>
            <p className="text-stone-600 leading-relaxed text-xs pt-1">{dailyShloka.commentary}</p>
          </div>

          <div className="p-4 bg-amber-100/60 rounded-xl border border-amber-200 space-y-2">
            <span className="font-bold text-amber-950 block text-xs uppercase tracking-wider">
              🌱 How to Live this Shloka Today:
            </span>
            <p className="text-stone-800 leading-relaxed">
              {dailyShloka.practicalApplication}
            </p>
          </div>
        </div>
      </div>

      {/* Ask the Shastras / AI Purohit Query Widget */}
      <div className="bg-stone-900 rounded-2xl border border-amber-800/40 p-6 sm:p-8 text-amber-50 shadow-xl space-y-6">
        <div className="space-y-2 max-w-3xl">
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span>Interactive Scriptural Scholar (आचार्य संवाद)</span>
          </div>
          <h3 className="font-sacred text-xl sm:text-2xl font-bold text-amber-100">
            Ask the Shastras: Daily Guidance & Ritual Questions
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            Have a question on fasting rules, puja protocol, mantra pronunciation, meaning of Swaha, or spiritual dilemmas? Consult our respectful Vedic guide grounded in authentic Sanatana scriptures.
          </p>
        </div>

        {/* Sample queries */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-stone-400 text-[11px]">Popular inquiries:</span>
          {[
            "Why do we say Swaha during havan?",
            "Can I perform havan in an apartment balcony?",
            "What if I make a mistake while chanting mantras?",
            "What is the difference between Homa and Aarti?"
          ].map((sample, i) => (
            <button
              key={i}
              onClick={() => setUserQuestion(sample)}
              className="px-2.5 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-200 border border-stone-700 transition-colors text-[11px]"
            >
              {sample}
            </button>
          ))}
        </div>

        {/* Question Form */}
        <form onSubmit={handleAskShastra} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Type your question on Hindu rituals, scriptures, or traditions..."
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl bg-stone-950 border border-stone-700 text-stone-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          />
          <button
            type="submit"
            disabled={isLoadingAnswer || !userQuestion.trim()}
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md disabled:opacity-50"
          >
            {isLoadingAnswer ? (
              <span>Consulting Shastras...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Seek Guidance</span>
              </>
            )}
          </button>
        </form>

        {/* Answer Display */}
        {aiAnswer && (
          <div className="p-5 bg-stone-950/80 rounded-xl border border-amber-700/50 space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-stone-800 pb-2">
              <span className="font-sacred text-xs font-bold text-amber-400 uppercase tracking-wider">
                Acharya's Guidance on: "{aiAnswer.question}"
              </span>
              <span className="text-[11px] text-stone-400">
                Source: {aiAnswer.source}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed whitespace-pre-line">
              {aiAnswer.answer}
            </p>
          </div>
        )}
      </div>

      {/* Scripture Verses Library */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
          <h3 className="font-sacred text-xl font-bold text-amber-950">
            Treasury of Scriptural Verses
          </h3>

          {/* Theme Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs text-stone-400 mr-2 flex-shrink-0">Theme:</span>
            {['All', 'Karma', 'Bhakti', 'Jnana', 'Courage', 'Meditation'].map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTheme(t)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors flex-shrink-0 ${
                  selectedTheme === t
                    ? 'bg-amber-900 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Verses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredShlokas.map((shloka) => {
            const isSpeaking = speakingShlokaId === shloka.id;
            return (
              <div
                key={shloka.id}
                className="bg-white rounded-2xl border border-amber-200/80 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-xs text-amber-800 font-semibold">
                        <span>{shloka.source}</span>
                        <span aria-hidden="true"> · </span>
                        <span>{shloka.chapterOrKanda}</span>
                      </div>
                      <h4 className="font-sacred text-base font-bold text-amber-950">
                        {shloka.title}
                      </h4>
                    </div>

                    <button
                      onClick={() => handleToggleAudio(shloka.id, shloka.sanskrit)}
                      className={`p-2 rounded-lg border transition-colors ${
                        isSpeaking
                          ? 'bg-amber-600 text-white border-amber-700 animate-pulse'
                          : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-amber-50 hover:text-amber-900'
                      }`}
                    >
                      {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Sanskrit quote */}
                  <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-100 text-center">
                    <p className="font-sanskrit text-lg leading-relaxed text-amber-950 font-medium whitespace-pre-line">
                      {shloka.sanskrit}
                    </p>
                    <p className="text-xs text-stone-600 italic font-serif mt-2 whitespace-pre-line">
                      {shloka.transliteration}
                    </p>
                  </div>

                  <p className="text-xs text-stone-700 leading-relaxed italic">
                    "{shloka.translation}"
                  </p>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {shloka.commentary}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="font-medium text-amber-800">{shloka.theme} Yoga</span>
                  <span className="text-stone-400">{shloka.verseNumber}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
