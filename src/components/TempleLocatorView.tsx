import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Compass, 
  Navigation, 
  Clock, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  X, 
  Check, 
  Info,
  Calendar,
  Layers
} from 'lucide-react';
import { 
  TEMPLES_DIRECTORY, 
  Temple, 
  calculateDistanceKm, 
  getTempleCurrentStatus 
} from '../data/templesData';

// Generated image asset
import templeDarshanImg from '../assets/images/sacred_temple_darshan_1790699952739.jpg';

export const TempleLocatorView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDeityFilter, setSelectedDeityFilter] = useState<string>('All');
  const [selectedRegionFilter, setSelectedRegionFilter] = useState<string>('All');
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState<boolean>(false);
  const [locationError, setLocationError] = useState<string | null>(null);

  const [activeTempleModal, setActiveTempleModal] = useState<Temple | null>(null);
  const [activeTabMode, setActiveTabMode] = useState<'directory' | 'etiquette'>('directory');

  // Handle HTML5 Geolocation
  const handleFindNearest = () => {
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser.');
      return;
    }
    setIsLocating(true);
    setLocationError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setIsLocating(false);
      },
      (error) => {
        console.warn('Geolocation error:', error);
        setIsLocating(false);
        setLocationError('Could not retrieve your location. You can still search by city or country.');
      },
      { timeout: 10000, enableHighAccuracy: false }
    );
  };

  // Filter temples
  const filteredTemples = TEMPLES_DIRECTORY.filter((temple) => {
    const matchesSearch = 
      temple.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      temple.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      temple.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      temple.deity.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDeity = selectedDeityFilter === 'All' || temple.primaryDeityCategory === selectedDeityFilter;
    const matchesRegion = selectedRegionFilter === 'All' || 
      (selectedRegionFilter === 'India' && temple.country === 'India') ||
      (selectedRegionFilter === 'International' && temple.country !== 'India');

    return matchesSearch && matchesDeity && matchesRegion;
  });

  // Sort by distance if user location is available
  const sortedTemples = [...filteredTemples].sort((a, b) => {
    if (userLocation) {
      const distA = calculateDistanceKm(userLocation.lat, userLocation.lng, a.lat, a.lng);
      const distB = calculateDistanceKm(userLocation.lat, userLocation.lng, b.lat, b.lng);
      return distA - distB;
    }
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Banner */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl border border-amber-900/30 bg-stone-900">
        <div className="absolute inset-0">
          <img 
            src={templeDarshanImg} 
            alt="Sacred Hindu Mandir" 
            className="w-full h-full object-cover opacity-35 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-transparent" />
        </div>

        <div className="relative z-10 p-6 sm:p-8 lg:p-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span>Sanatana Tirtha & Mandir Directory</span>
              <span className="text-amber-500/50">·</span>
              <span>Real-Time Darshan Timings & Agamas</span>
            </div>

            <div className="flex items-center p-1 bg-stone-900/90 rounded-xl border border-amber-500/30 backdrop-blur-md">
              <button
                onClick={() => setActiveTabMode('directory')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTabMode === 'directory'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                Temple Locator
              </button>
              <button
                onClick={() => setActiveTabMode('etiquette')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTabMode === 'etiquette'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                Darshan Etiquette (विधि)
              </button>
            </div>
          </div>

          <div className="space-y-1 max-w-3xl">
            <h1 className="font-sacred text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-amber-100">
              Mandir Locator & Live Darshan Guide
            </h1>
            <p className="text-sm text-stone-300 leading-relaxed">
              Explore sacred shrines, Jyotirlingas, Shakti Peethas, and global Hindu diaspora temples. View live sanctum opening times, scheduled aartis, dress codes, and directions.
            </p>
          </div>

          {/* Near Me Action */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={handleFindNearest}
              disabled={isLocating}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white rounded-xl text-xs font-semibold shadow-md transition-all active:scale-95"
            >
              <Navigation className={`w-3.5 h-3.5 ${isLocating ? 'animate-spin' : ''}`} />
              <span>{isLocating ? 'Detecting Location...' : 'Find Nearest Mandirs to Me'}</span>
            </button>

            {userLocation && (
              <span className="text-xs text-emerald-300 flex items-center space-x-1 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-500/40">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Location detected — Temples sorted by proximity</span>
              </span>
            )}

            {locationError && (
              <span className="text-xs text-rose-300 bg-rose-950/60 px-3 py-1.5 rounded-lg border border-rose-500/40">
                {locationError}
              </span>
            )}
          </div>
        </div>
      </div>

      {activeTabMode === 'directory' ? (
        <>
          {/* Search & Filters */}
          <div className="bg-white rounded-2xl border border-stone-200/80 p-4 sm:p-5 shadow-sm space-y-4">
            <div className="flex flex-col md:flex-row gap-3">
              {/* Search input */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search temple name, city, state, or deity (e.g., Kashi, Shiva, Somnath, London)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 bg-stone-50/50"
                />
              </div>

              {/* Region buttons */}
              <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl">
                {['All', 'India', 'International'].map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegionFilter(region)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                      selectedRegionFilter === region
                        ? 'bg-white text-stone-900 shadow-sm font-semibold'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>

            {/* Deity Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none border-t border-stone-100 pt-3">
              <span className="text-xs text-stone-400 mr-2 flex-shrink-0">Deity:</span>
              {['All', 'Shiva', 'Vishnu', 'Devi', 'Ganesha', 'Universal'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedDeityFilter(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium flex-shrink-0 transition-colors ${
                    selectedDeityFilter === cat
                      ? 'bg-amber-900 text-white shadow-sm'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {cat === 'All' ? 'All Deities' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Temple Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedTemples.map((temple) => {
              const status = getTempleCurrentStatus(temple);
              const distanceKm = userLocation 
                ? calculateDistanceKm(userLocation.lat, userLocation.lng, temple.lat, temple.lng)
                : null;

              return (
                <div
                  key={temple.id}
                  className="bg-white rounded-2xl border border-amber-200/70 hover:border-amber-400 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="p-5 space-y-3">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center space-x-2 text-xs text-stone-500 mb-1">
                          <MapPin className="w-3.5 h-3.5 text-amber-700" />
                          <span>{temple.city}, {temple.state}</span>
                          <span aria-hidden="true">·</span>
                          <span>{temple.country}</span>
                        </div>
                        <h3 className="font-sacred text-lg font-bold text-amber-950 leading-snug">
                          {temple.name}
                        </h3>
                        <p className="font-sanskrit text-xs text-amber-800 font-medium">
                          {temple.sanskritName}
                        </p>
                      </div>

                      {/* Distance Badge if located */}
                      {distanceKm !== null && (
                        <div className="text-right flex-shrink-0">
                          <span className="text-[11px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded border border-amber-200">
                            {distanceKm.toLocaleString()} km
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Deity & Tradition */}
                    <div className="text-xs text-stone-700 bg-amber-50/70 p-2.5 rounded-xl border border-amber-100">
                      <span className="font-semibold text-amber-900">Presiding Deity: </span>
                      <span>{temple.deity}</span>
                      <p className="text-[11px] text-stone-500 mt-0.5">{temple.tradition}</p>
                    </div>

                    {/* Live Darshan Status */}
                    <div className={`p-2.5 rounded-xl border text-xs space-y-1 ${
                      status.isOpen
                        ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                        : 'bg-stone-50 border-stone-200 text-stone-700'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-ping' : 'bg-stone-400'}`} />
                          {status.statusLabel}
                        </span>
                      </div>
                      {status.nextAarti && (
                        <p className="text-[11px] text-stone-600">
                          Next Seva: <strong className="text-stone-800">{status.nextAarti}</strong>
                        </p>
                      )}
                    </div>

                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {temple.description}
                    </p>
                  </div>

                  {/* Actions footer */}
                  <div className="px-5 py-3.5 bg-stone-50/80 border-t border-stone-100 flex items-center justify-between text-xs">
                    <button
                      onClick={() => setActiveTempleModal(temple)}
                      className="text-amber-800 hover:text-amber-950 font-semibold"
                    >
                      Darshan Timings & Sevas →
                    </button>

                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${temple.lat},${temple.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-stone-600 hover:text-stone-900 bg-white px-2.5 py-1 rounded-lg border border-stone-200 hover:bg-stone-100 transition-colors"
                    >
                      <Navigation className="w-3 h-3 text-amber-700" />
                      <span>Directions</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        /* Mandir Etiquette Guide Tab */
        <div className="bg-white rounded-2xl border border-amber-200/80 p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="border-b border-stone-200 pb-4">
            <h2 className="font-sacred text-2xl font-bold text-amber-950">
              Vedic Mandir Darshan Etiquette (देवालय दर्शन विधि)
            </h2>
            <p className="text-sm text-stone-600 mt-1">
              Ancient Agamic guidelines for maintaining sacred vibrational harmony when visiting a Hindu temple.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/60 space-y-2">
              <h4 className="font-sacred font-bold text-amber-950 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs">1</span>
                Padaraksha (Footwear & Purity)
              </h4>
              <p className="text-stone-700 leading-relaxed">
                Remove all footwear and leather items before crossing the temple threshold (Gopuram entrance). Wash feet and hands with clean water provided at the entrance to ground external dust and calm the nervous system.
              </p>
            </div>

            <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/60 space-y-2">
              <h4 className="font-sacred font-bold text-amber-950 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs">2</span>
                Pradakshina (Clockwise Circumambulation)
              </h4>
              <p className="text-stone-700 leading-relaxed">
                Always circumambulate the sanctum clockwise (keeping your right shoulder towards the deity). For Lord Shiva, observe the semi-pradakshina (Somadasootram) rule: do not cross the sacred water drainage outlet (Chanda-snan pipe); turn back and retrace.
              </p>
            </div>

            <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/60 space-y-2">
              <h4 className="font-sacred font-bold text-amber-950 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs">3</span>
                Prasada & Charanamrit Acceptance
              </h4>
              <p className="text-stone-700 leading-relaxed">
                Receive holy water (Tirtha) and sacred ash/chandan with your right hand supported respectfully by your left hand beneath the wrist. Never step across or discard prasad; partake with devotion.
              </p>
            </div>

            <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/60 space-y-2">
              <h4 className="font-sacred font-bold text-amber-950 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs">4</span>
                Silence & Meditation (Shanti)
              </h4>
              <p className="text-stone-700 leading-relaxed">
                Maintain noble silence (Mouna) in the Garbha Griha. Tradition recommends sitting quietly on the temple steps or Mandapam floor for a few moments after Darshan before leaving, absorbing the elevated energy field.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Temple Detail Modal */}
      {activeTempleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/70 p-4 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl border border-amber-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative">
            <button
              onClick={() => setActiveTempleModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <div className="flex items-center space-x-2 text-xs text-amber-700 font-semibold mb-1">
                <span>{activeTempleModal.city}, {activeTempleModal.state}, {activeTempleModal.country}</span>
              </div>
              <h2 className="font-sacred text-2xl font-bold text-amber-950">
                {activeTempleModal.name}
              </h2>
              <p className="font-sanskrit text-base text-amber-800 font-medium">
                {activeTempleModal.sanskritName}
              </p>
            </div>

            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200/80 space-y-1 text-xs">
              <span className="font-semibold text-amber-900 block">Spiritual Significance:</span>
              <p className="text-stone-700 leading-relaxed">{activeTempleModal.significance}</p>
            </div>

            {/* Timings & Aarti Schedule */}
            <div className="space-y-3">
              <h4 className="font-sacred text-sm font-bold text-amber-950 flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-700" />
                <span>Daily Darshan & Aarti Timings</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                  <span className="font-semibold text-stone-800 block">Morning Timings</span>
                  <span className="text-stone-600">{activeTempleModal.darshanTimings.morning}</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                  <span className="font-semibold text-stone-800 block">Evening Timings</span>
                  <span className="text-stone-600">{activeTempleModal.darshanTimings.evening}</span>
                </div>
              </div>

              {/* Special Aartis */}
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs space-y-2">
                <span className="font-semibold text-stone-800 block">Scheduled Sevas & Aartis:</span>
                <div className="grid grid-cols-2 gap-2">
                  {activeTempleModal.darshanTimings.specialAartis.map((aarti, i) => (
                    <div key={i} className="flex justify-between border-b border-stone-200/50 pb-1">
                      <span className="text-stone-700">{aarti.name}:</span>
                      <strong className="text-amber-900">{aarti.time}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dress code & Offerings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 bg-orange-50/70 rounded-xl border border-orange-200/70 space-y-1">
                <span className="font-semibold text-orange-950 block">Prescribed Dress Code</span>
                <p className="text-stone-700 leading-relaxed">{activeTempleModal.dressCode}</p>
              </div>

              <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200/70 space-y-1">
                <span className="font-semibold text-emerald-950 block">Recommended Offerings</span>
                <p className="text-stone-700 leading-relaxed">{activeTempleModal.recommendedOffering}</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              {activeTempleModal.websiteUrl ? (
                <a
                  href={activeTempleModal.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 text-xs text-amber-800 hover:text-amber-950 font-semibold"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Official Mandir Trust Website</span>
                </a>
              ) : <div />}

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${activeTempleModal.lat},${activeTempleModal.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white rounded-lg text-xs font-medium transition-colors shadow-sm flex items-center space-x-1.5"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Navigate on Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
