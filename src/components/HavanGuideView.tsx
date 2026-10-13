import React, { useState, useEffect } from 'react';
import { 
  Flame, 
  Sparkles, 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  ListChecks, 
  Clock, 
  Info,
  ShieldCheck,
  CheckCircle2,
  Sliders
} from 'lucide-react';
import { HAVAN_MODES, HavanMode, HavanStep } from '../data/havanData';
import { audioEngine } from '../utils/audioEngine';

// Generated image asset
import havanKundImg from '../assets/images/sacred_havan_kund_1790699938062.jpg';

export const HavanGuideView: React.FC = () => {
  const [selectedModeId, setSelectedModeId] = useState<'quick' | 'detailed'>('quick');
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isSamagriModalOpen, setIsSamagriModalOpen] = useState<boolean>(false);
  const [checkedSamagri, setCheckedSamagri] = useState<Record<string, boolean>>({});

  // Audio & Chanting state
  const [isChanting, setIsChanting] = useState<boolean>(false);
  const [chantSpeed, setChantSpeed] = useState<number>(0.85);

  // Ahuti Counter state
  const [currentAhutiCount, setCurrentAhutiCount] = useState<number>(0);
  const [customTargetCount, setCustomTargetCount] = useState<number | null>(null);
  const [ahutiCompletedCelebration, setAhutiCompletedCelebration] = useState<boolean>(false);

  const activeMode: HavanMode = HAVAN_MODES[selectedModeId];
  const currentStep: HavanStep = activeMode.steps[currentStepIndex] || activeMode.steps[0];

  const targetAhutis = customTargetCount !== null 
    ? customTargetCount 
    : (currentStep.ahutiTargetCount || 0);

  // Reset counters when step changes
  useEffect(() => {
    setCurrentAhutiCount(0);
    setCustomTargetCount(null);
    setAhutiCompletedCelebration(false);
    if (isChanting) {
      audioEngine.stopMantra();
      setIsChanting(false);
    }
  }, [currentStepIndex, selectedModeId]);

  // Keyboard shortcut: Spacebar to offer Ahuti if targetAhutis > 0
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && targetAhutis > 0 && targetAhutis !== currentAhutiCount) {
        // Prevent default page scroll on spacebar when counting ahutis
        const activeElement = document.activeElement;
        const isInputField = activeElement instanceof HTMLInputElement || activeElement instanceof HTMLTextAreaElement;
        if (!isInputField) {
          e.preventDefault();
          handleOfferAhuti();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [targetAhutis, currentAhutiCount]);

  const handleOfferAhuti = () => {
    const nextCount = currentAhutiCount + 1;
    setCurrentAhutiCount(nextCount);
    audioEngine.playAhutiChime();

    if (targetAhutis > 0 && nextCount >= targetAhutis) {
      setAhutiCompletedCelebration(true);
      audioEngine.playTempleBell(880, 4.0);
    }
  };

  const handleResetAhuti = () => {
    setCurrentAhutiCount(0);
    setAhutiCompletedCelebration(false);
  };

  const toggleChantAudio = () => {
    if (isChanting) {
      audioEngine.stopMantra();
      setIsChanting(false);
    } else {
      setIsChanting(true);
      const textToChant = currentStep.audioSnippetText || currentStep.sanskritMantra;
      audioEngine.speakMantra(textToChant, {
        rate: chantSpeed,
        onEnd: () => setIsChanting(false),
      });
    }
  };

  const toggleSamagriCheck = (item: string) => {
    setCheckedSamagri(prev => ({ ...prev, [item]: !prev[item] }));
  };

  const goToNextStep = () => {
    if (currentStepIndex < activeMode.steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const goToPrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Hero Banner with Generated Sacred Altar Imagery */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl border border-amber-900/30 bg-stone-900">
        <div className="absolute inset-0">
          <img 
            src={havanKundImg} 
            alt="Sacred Vedic Havan Kund" 
            className="w-full h-full object-cover opacity-35 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-transparent" />
        </div>

        <div className="relative z-10 p-6 sm:p-8 lg:p-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
              <span>Vedic Yajna & Homa Companion</span>
              <span className="text-amber-500/50">·</span>
              <span>Step-by-Step Chanting & Ahuti Tracker</span>
            </div>

            {/* Mode Selector Buttons */}
            <div className="flex items-center p-1 bg-stone-900/90 rounded-xl border border-amber-500/30 backdrop-blur-md">
              <button
                onClick={() => {
                  setSelectedModeId('quick');
                  setCurrentStepIndex(0);
                }}
                className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedModeId === 'quick'
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Laghu Havan (Quick · 10-15m)</span>
              </button>
              <button
                onClick={() => {
                  setSelectedModeId('detailed');
                  setCurrentStepIndex(0);
                }}
                className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedModeId === 'detailed'
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                <Flame className="w-3.5 h-3.5 text-amber-300" />
                <span>Vistrit Havan (Textbook Classical · 45-60m)</span>
              </button>
            </div>
          </div>

          <div className="space-y-1 max-w-3xl">
            <h1 className="font-sacred text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-amber-100">
              {activeMode.name}
            </h1>
            <p className="font-sanskrit text-base text-amber-400 font-medium">
              {activeMode.sanskritName}
            </p>
            <p className="text-sm text-stone-300 leading-relaxed pt-1">
              {activeMode.description}
            </p>
          </div>

          {/* Quick Info Strip */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-stone-300">
            <div className="flex items-center space-x-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Duration: <strong className="text-amber-200">{activeMode.timeRange}</strong></span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Info className="w-4 h-4 text-amber-400" />
              <span>Total Stages: <strong className="text-amber-200">{activeMode.steps.length} Steps</strong></span>
            </div>
            <button
              onClick={() => setIsSamagriModalOpen(!isSamagriModalOpen)}
              className="flex items-center space-x-1.5 px-3 py-1 bg-amber-600/30 hover:bg-amber-600/50 text-amber-200 rounded-lg border border-amber-500/40 transition-colors"
            >
              <ListChecks className="w-3.5 h-3.5 text-amber-400" />
              <span>{isSamagriModalOpen ? 'Hide Materials List' : 'View Samagri & Substitutes'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Materials / Samagri Collapsible Tray */}
      {isSamagriModalOpen && (
        <div className="bg-amber-50 rounded-2xl border border-amber-300/80 p-6 space-y-4 shadow-sm animate-fadeIn">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ListChecks className="w-5 h-5 text-amber-800" />
              <h3 className="font-sacred text-lg font-bold text-amber-950">
                Samagri & Household Preparation ({selectedModeId === 'quick' ? 'Simple Essentials' : 'Classical Requirements'})
              </h3>
            </div>
            <span className="text-xs text-stone-500">
              Check off items as you arrange them
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {activeMode.samagriList.map((item, idx) => {
              const isChecked = Boolean(checkedSamagri[item.item]);
              return (
                <div
                  key={idx}
                  onClick={() => toggleSamagriCheck(item.item)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start space-x-3 ${
                    isChecked
                      ? 'bg-emerald-50 border-emerald-300 text-stone-800'
                      : 'bg-white border-amber-200/80 hover:border-amber-400'
                  }`}
                >
                  <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${
                    isChecked ? 'bg-emerald-600 border-emerald-700 text-white' : 'border-stone-300 bg-white'
                  }`}>
                    {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <div className="text-xs">
                    <span className={`font-medium ${isChecked ? 'line-through text-stone-400' : 'text-stone-800'}`}>
                      {item.item}
                    </span>
                    {item.alternate && (
                      <p className="text-[11px] text-amber-800/80 mt-0.5">
                        <span className="font-semibold">Substitute:</span> {item.alternate}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Stepper Navigation Bar */}
      <div className="bg-white rounded-xl border border-stone-200/80 p-3 shadow-sm flex items-center justify-between gap-3 overflow-x-auto scrollbar-none">
        <button
          onClick={goToPrevStep}
          disabled={currentStepIndex === 0}
          className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
            currentStepIndex === 0
              ? 'opacity-40 cursor-not-allowed bg-stone-50 text-stone-400 border-stone-200'
              : 'bg-white text-stone-700 border-stone-300 hover:bg-amber-50 hover:text-amber-900'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Step</span>
        </button>

        {/* Step dots */}
        <div className="flex items-center space-x-1 overflow-x-auto py-1 px-2">
          {activeMode.steps.map((st, idx) => {
            const isCurrent = idx === currentStepIndex;
            const isPast = idx < currentStepIndex;
            return (
              <button
                key={idx}
                onClick={() => setCurrentStepIndex(idx)}
                title={`Step ${st.stepNumber}: ${st.title}`}
                className={`w-7 h-7 rounded-lg text-xs font-semibold flex items-center justify-center transition-all ${
                  isCurrent
                    ? 'bg-amber-800 text-white shadow-sm ring-2 ring-amber-500/50'
                    : isPast
                    ? 'bg-amber-100 text-amber-900 border border-amber-300/60'
                    : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                }`}
              >
                {st.stepNumber}
              </button>
            );
          })}
        </div>

        <button
          onClick={goToNextStep}
          disabled={currentStepIndex === activeMode.steps.length - 1}
          className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
            currentStepIndex === activeMode.steps.length - 1
              ? 'opacity-40 cursor-not-allowed bg-stone-50 text-stone-400 border-stone-200'
              : 'bg-amber-700 text-white border-amber-800 hover:bg-amber-800 shadow-sm'
          }`}
        >
          <span>Next Step</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Main Step Detail Card */}
      <div className="bg-white rounded-2xl border border-amber-200/80 shadow-md p-6 sm:p-8 space-y-6">
        {/* Step Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-amber-700 mb-1">
              <span>Step {currentStep.stepNumber} of {activeMode.steps.length}</span>
              <span aria-hidden="true">·</span>
              <Clock className="w-3.5 h-3.5" />
              <span>{currentStep.durationEst}</span>
              {currentStep.mudraOrGesture && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-orange-700 font-medium">{currentStep.mudraOrGesture}</span>
                </>
              )}
            </div>
            <h2 className="font-sacred text-xl sm:text-2xl font-bold text-amber-950">
              {currentStep.title}
            </h2>
            <p className="font-sanskrit text-base text-amber-800 font-medium">
              {currentStep.sanskritTitle}
            </p>
          </div>

          {/* Audio Chant Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleChantAudio}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-medium border transition-all shadow-sm ${
                isChanting
                  ? 'bg-amber-600 text-white border-amber-700 animate-pulse'
                  : 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100'
              }`}
            >
              {isChanting ? (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span>Pause Mantra Audio</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-amber-700" />
                  <span>Listen to Chant Pronunciation</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Short Summary & Required Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-amber-50/50 p-4 rounded-xl border border-amber-200/50 text-xs">
          <div className="md:col-span-2 space-y-1">
            <span className="font-semibold text-amber-950 uppercase tracking-wider block">Context & Objective</span>
            <p className="text-stone-700 leading-relaxed">{currentStep.shortDesc}</p>
          </div>
          <div className="space-y-1">
            <span className="font-semibold text-amber-950 uppercase tracking-wider block">Articles in Hand</span>
            <div className="flex flex-wrap gap-1">
              {currentStep.samagriNeeded.map((sam, i) => (
                <span key={i} className="text-amber-900 font-medium">
                  {sam}{i < currentStep.samagriNeeded.length - 1 ? ' ·' : ''}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sacred Sanskrit Mantra Box */}
        <div className="bg-amber-50/80 rounded-2xl border-2 border-amber-300/80 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-sacred text-xs font-bold text-amber-900 uppercase tracking-wider">
              Sacred Vedic Mantra (वैदिक मन्त्र)
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-[11px] text-stone-500">Audio Speed:</span>
              <button 
                onClick={() => setChantSpeed(0.75)} 
                className={`text-[11px] px-1.5 py-0.5 rounded ${chantSpeed === 0.75 ? 'bg-amber-700 text-white font-bold' : 'text-stone-600 hover:bg-stone-200'}`}
              >
                0.75x
              </button>
              <button 
                onClick={() => setChantSpeed(0.9)} 
                className={`text-[11px] px-1.5 py-0.5 rounded ${chantSpeed === 0.9 ? 'bg-amber-700 text-white font-bold' : 'text-stone-600 hover:bg-stone-200'}`}
              >
                1.0x
              </button>
            </div>
          </div>

          <div className="p-4 bg-white/90 rounded-xl border border-amber-200 shadow-inner">
            <p className="font-sanskrit text-lg sm:text-2xl leading-relaxed text-amber-950 font-medium whitespace-pre-line text-center">
              {currentStep.sanskritMantra}
            </p>
          </div>

          <div className="pt-2 text-center">
            <p className="text-xs sm:text-sm text-stone-700 italic font-serif leading-relaxed whitespace-pre-line">
              {currentStep.transliteration}
            </p>
          </div>
        </div>

        {/* Action Instruction & English Meaning */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
          <div className="bg-orange-50/60 p-4 rounded-xl border border-orange-200/80 space-y-2">
            <div className="flex items-center space-x-2 text-orange-950 font-bold uppercase tracking-wider text-xs">
              <Flame className="w-4 h-4 text-orange-600" />
              <span>Step-by-Step Action (विधि)</span>
            </div>
            <p className="text-stone-800 leading-relaxed">
              {currentStep.actionInstruction}
            </p>
            {currentStep.tips && (
              <p className="text-xs text-orange-900/80 italic pt-1 border-t border-orange-200/60">
                <span className="font-semibold">Vedic Tip:</span> {currentStep.tips}
              </p>
            )}
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-2">
            <div className="flex items-center space-x-2 text-stone-900 font-bold uppercase tracking-wider text-xs">
              <Info className="w-4 h-4 text-amber-700" />
              <span>Inner Meaning & Philosophy (भावार्थ)</span>
            </div>
            <p className="text-stone-700 leading-relaxed whitespace-pre-line">
              {currentStep.englishMeaning}
            </p>
          </div>
        </div>

        {/* Interactive Ahuti Counter Section (Visible when ahutiTargetCount > 0) */}
        {targetAhutis > 0 && (
          <div className="bg-gradient-to-br from-amber-900 via-amber-950 to-stone-900 rounded-2xl p-6 text-amber-50 shadow-lg border border-amber-700/40 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-orange-400" />
                  Integrated Ahuti Offering Counter
                </span>
                <h4 className="font-sacred text-base font-bold text-amber-100">
                  Offering Oblations into the Sacred Fire (स्वाहा)
                </h4>
              </div>

              {/* Preset Target Selector */}
              <div className="flex items-center space-x-1.5 bg-stone-900/80 p-1 rounded-lg border border-amber-700/50 text-xs">
                <span className="text-stone-400 text-[11px] px-1">Target:</span>
                {[3, 5, 11, 21, 51, 108].map((target) => (
                  <button
                    key={target}
                    onClick={() => {
                      setCustomTargetCount(target);
                      if (currentAhutiCount >= target) setAhutiCompletedCelebration(true);
                      else setAhutiCompletedCelebration(false);
                    }}
                    className={`px-2 py-0.5 rounded text-xs transition-colors ${
                      targetAhutis === target 
                        ? 'bg-amber-600 text-white font-bold' 
                        : 'text-stone-300 hover:bg-stone-800'
                    }`}
                  >
                    {target}
                  </button>
                ))}
              </div>
            </div>

            {/* Counter Display & Ahuti Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-stone-950/60 p-5 rounded-xl border border-amber-800/40">
              <div className="flex items-baseline space-x-3">
                <div className="text-center sm:text-left">
                  <div className="text-3xl sm:text-4xl font-sacred font-extrabold text-amber-300">
                    {currentAhutiCount} <span className="text-lg font-normal text-stone-400">/ {targetAhutis}</span>
                  </div>
                  <span className="text-xs text-stone-400">
                    {targetAhutis - currentAhutiCount > 0 
                      ? `${targetAhutis - currentAhutiCount} oblations remaining`
                      : 'All prescribed ahutis completed for this stage!'}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3 w-full sm:w-auto">
                <button
                  onClick={handleOfferAhuti}
                  className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-500 hover:to-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-950/50 transition-all hover:scale-105 active:scale-95 border border-amber-400/40"
                >
                  <Flame className="w-5 h-5 text-amber-200 animate-pulse" />
                  <span className="font-sacred text-base">Offer Ahuti (स्वाहा)</span>
                </button>

                <button
                  onClick={handleResetAhuti}
                  title="Reset counter"
                  className="p-3 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-xl border border-stone-700 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Spacebar helper */}
            <div className="text-center text-xs text-amber-300/70">
              💡 Tip: You can also tap the <kbd className="px-1.5 py-0.5 bg-stone-800 border border-stone-700 rounded text-amber-200 font-mono text-[10px]">Spacebar</kbd> on your keyboard to count each oblation seamlessly while holding the spoon.
            </div>

            {/* Celebration Badge */}
            {ahutiCompletedCelebration && (
              <div className="p-3 bg-emerald-950/80 border border-emerald-500/60 rounded-xl text-emerald-200 text-xs flex items-center space-x-2 animate-bounce">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>
                  <strong>Purna Ahuti Sidhi:</strong> Prescribed oblations for this step have been offered with devotion. You may proceed to the next step!
                </span>
              </div>
            )}
          </div>
        )}

        {/* Step Navigation Footer */}
        <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
          <button
            onClick={goToPrevStep}
            disabled={currentStepIndex === 0}
            className={`flex items-center space-x-2 text-xs font-semibold px-4 py-2 rounded-lg border transition-colors ${
              currentStepIndex === 0
                ? 'opacity-40 cursor-not-allowed text-stone-400 border-stone-200'
                : 'text-stone-700 border-stone-300 hover:bg-amber-50 hover:text-amber-900'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous: {currentStepIndex > 0 ? activeMode.steps[currentStepIndex - 1].title : ''}</span>
          </button>

          <span className="text-xs text-stone-500 hidden sm:inline">
            Step {currentStep.stepNumber} / {activeMode.steps.length}
          </span>

          <button
            onClick={goToNextStep}
            disabled={currentStepIndex === activeMode.steps.length - 1}
            className={`flex items-center space-x-2 text-xs font-semibold px-5 py-2.5 rounded-lg border transition-all ${
              currentStepIndex === activeMode.steps.length - 1
                ? 'opacity-40 cursor-not-allowed bg-stone-200 text-stone-500 border-stone-300'
                : 'bg-amber-800 text-white border-amber-900 hover:bg-amber-900 shadow-sm'
            }`}
          >
            <span>Next: {currentStepIndex < activeMode.steps.length - 1 ? activeMode.steps[currentStepIndex + 1].title : 'Complete'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
