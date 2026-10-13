/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { DailyRitualsView } from './components/DailyRitualsView';
import { HavanGuideView } from './components/HavanGuideView';
import { TempleLocatorView } from './components/TempleLocatorView';
import { ScripturesView } from './components/ScripturesView';
import { JapaMalaView } from './components/JapaMalaView';
import { Sparkles, Heart } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'rituals' | 'havan' | 'temples' | 'scriptures' | 'japa'>('rituals');
  const [isTanpuraActive, setIsTanpuraActive] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#faf7f2] text-stone-900 flex flex-col font-sans selection:bg-amber-600 selection:text-white">
      {/* Sticky Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isTanpuraActive={isTanpuraActive}
        setIsTanpuraActive={setIsTanpuraActive}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {activeTab === 'rituals' && <DailyRitualsView />}
        {activeTab === 'havan' && <HavanGuideView />}
        {activeTab === 'temples' && <TempleLocatorView />}
        {activeTab === 'scriptures' && <ScripturesView />}
        {activeTab === 'japa' && <JapaMalaView />}
      </main>

      {/* Vedic Peace & Footer */}
      <footer className="border-t border-amber-900/15 bg-amber-950 text-amber-100 py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="font-sanskrit text-2xl text-amber-400 block font-bold">
              ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ।<br />
              सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत् ॥
            </span>
            <p className="text-xs text-amber-200/80 italic font-serif">
              "May all beings everywhere be happy and free from illness; may all behold what is auspicious; may none suffer."
            </p>
          </div>

          <div className="pt-6 border-t border-amber-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-300/70">
            <div className="flex items-center space-x-2">
              <span className="font-sacred font-bold text-amber-100">Sanatana Marg</span>
              <span>· Daily Rituals, Havan Guide & Temple Companion</span>
            </div>

            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setActiveTab('rituals')}
                className="hover:text-amber-100 transition-colors"
              >
                Panchang
              </button>
              <button 
                onClick={() => setActiveTab('havan')}
                className="hover:text-amber-100 transition-colors"
              >
                Quick Havan
              </button>
              <button 
                onClick={() => setActiveTab('temples')}
                className="hover:text-amber-100 transition-colors"
              >
                Darshan Timings
              </button>
              <button 
                onClick={() => setActiveTab('scriptures')}
                className="hover:text-amber-100 transition-colors"
              >
                Gita & Shastras
              </button>
              <button 
                onClick={() => setActiveTab('japa')}
                className="hover:text-amber-100 transition-colors"
              >
                108 Japa
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
