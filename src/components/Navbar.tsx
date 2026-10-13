import React, { useState } from 'react';
import { Volume2, VolumeX, Bell, Wind, Sparkles } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface NavbarProps {
  activeTab: 'rituals' | 'havan' | 'temples' | 'scriptures' | 'japa';
  setActiveTab: (tab: 'rituals' | 'havan' | 'temples' | 'scriptures' | 'japa') => void;
  isTanpuraActive: boolean;
  setIsTanpuraActive: (active: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  isTanpuraActive,
  setIsTanpuraActive,
}) => {
  const [bellRinging, setBellRinging] = useState(false);
  const [shankhBlowing, setShankhBlowing] = useState(false);

  const handleRingBell = () => {
    setBellRinging(true);
    audioEngine.playTempleBell(880, 3.2);
    setTimeout(() => setBellRinging(false), 800);
  };

  const handleBlowShankh = () => {
    setShankhBlowing(true);
    audioEngine.playConchSound();
    setTimeout(() => setShankhBlowing(false), 1200);
  };

  const handleToggleTanpura = () => {
    const newState = audioEngine.toggleTanpura(138.59, 0.22);
    setIsTanpuraActive(newState);
  };

  const navItems: { id: 'rituals' | 'havan' | 'temples' | 'scriptures' | 'japa'; label: string; sanskrit: string }[] = [
    { id: 'rituals', label: 'Daily Rituals & Panchang', sanskrit: 'नित्य कर्म' },
    { id: 'havan', label: 'Puja & Havan Guide', sanskrit: 'हवन विधान' },
    { id: 'temples', label: 'Mandir & Darshan', sanskrit: 'देवालय दर्शन' },
    { id: 'scriptures', label: 'Scriptures & Teachings', sanskrit: 'शास्त्र विवेक' },
    { id: 'japa', label: 'Japa Mala & Chants', sanskrit: 'जप माला' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-amber-900/15 bg-amber-50/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identity */}
          <div 
            onClick={() => setActiveTab('rituals')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-600 via-orange-600 to-amber-800 text-amber-50 shadow-md group-hover:scale-105 transition-transform duration-300">
              <span className="font-sanskrit text-2xl font-bold select-none">ॐ</span>
              <div className="absolute inset-0 rounded-xl border border-amber-300/40 pointer-events-none" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-sacred text-xl sm:text-2xl font-bold tracking-tight text-amber-950">
                  Sanatana Marg
                </span>
                <span className="font-sanskrit text-xs text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded border border-amber-200/60 hidden sm:inline-block">
                  सन्मार्गः
                </span>
              </div>
              <p className="text-xs text-stone-600 tracking-wide hidden sm:block">
                Daily Rituals · Vedic Havan Companion · Mandir Finder · Shastras
              </p>
            </div>
          </div>

          {/* Audio Toolstrip */}
          <div className="flex items-center space-x-1.5 sm:space-x-2.5">
            {/* Tanpura Drone Toggle */}
            <button
              onClick={handleToggleTanpura}
              title={isTanpuraActive ? 'Stop Tanpura Drone' : 'Start Meditative Tanpura Drone'}
              className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all border ${
                isTanpuraActive
                  ? 'bg-amber-600 text-white border-amber-700 shadow-sm shadow-amber-600/30'
                  : 'bg-white text-stone-700 border-stone-200 hover:bg-amber-100/50 hover:text-amber-900'
              }`}
            >
              {isTanpuraActive ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                  <span className="hidden md:inline">Tanpura: On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-stone-400" />
                  <span className="hidden md:inline">Tanpura Drone</span>
                </>
              )}
            </button>

            {/* Sacred Bell (Ghanta) */}
            <button
              onClick={handleRingBell}
              title="Ring Temple Bell (घण्टा)"
              className={`p-2 rounded-lg border text-stone-700 bg-white border-stone-200 hover:bg-amber-100/60 hover:text-amber-900 transition-all ${
                bellRinging ? 'scale-110 bg-amber-200 border-amber-400' : ''
              }`}
            >
              <Bell className={`w-4 h-4 ${bellRinging ? 'text-amber-800 rotate-12 transition-transform' : ''}`} />
            </button>

            {/* Sacred Conch (Shankh) */}
            <button
              onClick={handleBlowShankh}
              title="Blow Holy Conch (शङ्ख)"
              className={`p-2 rounded-lg border text-stone-700 bg-white border-stone-200 hover:bg-amber-100/60 hover:text-amber-900 transition-all ${
                shankhBlowing ? 'scale-110 bg-amber-200 border-amber-400' : ''
              }`}
            >
              <Wind className={`w-4 h-4 ${shankhBlowing ? 'text-orange-700 scale-110 transition-transform' : ''}`} />
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <nav className="flex space-x-1 overflow-x-auto pb-2 scrollbar-none border-t border-amber-900/10 pt-1.5">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex-shrink-0 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all flex items-center space-x-1.5 ${
                  isActive
                    ? 'bg-amber-900 text-amber-50 shadow-sm'
                    : 'text-stone-700 hover:text-amber-950 hover:bg-amber-200/40'
                }`}
              >
                <span>{item.label}</span>
                <span className={`font-sanskrit text-xs hidden lg:inline opacity-75 ${isActive ? 'text-amber-200' : 'text-stone-500'}`}>
                  ({item.sanskrit})
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
