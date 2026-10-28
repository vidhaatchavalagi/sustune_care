import React, { useState } from 'react';
import { MapPin, Clock, Shield, Building, Phone, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { OPERATIONAL_HUBS } from '../../data/mockData';
// Official crisp WhatsApp vector icon
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

interface HubsMapProps {
  onOpenConsultModal: (city?: string) => void;
}

export const HubsMap: React.FC<HubsMapProps> = ({ onOpenConsultModal }) => {
  const [selectedHub, setSelectedHub] = useState(OPERATIONAL_HUBS[0]);

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#0073B7]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0A8754]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-black uppercase tracking-wider mb-3.5 border border-emerald-200 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>On-Ground Physical Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D3B66] font-heading tracking-tight leading-tight">
            Direct Physical Field Teams in Top NRI Hometowns
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed">
            Zero third-party broker proxies. Sustune Care operates localized field desks with full-time Property Stewards, licensed electrical/plumbing technicians, and certified Clinical Care Companions.
          </p>
        </div>

        {/* City Hub Cards Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-8">
          {OPERATIONAL_HUBS.map((hub) => (
            <button
              key={hub.city}
              type="button"
              onClick={() => setSelectedHub(hub)}
              className={`p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                selectedHub.city === hub.city
                  ? 'border-[#0073B7] bg-sky-50/90 shadow-md ring-2 ring-[#0073B7]/25'
                  : 'border-slate-200/90 bg-slate-50/70 hover:bg-white text-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{hub.state}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="text-base sm:text-lg font-black text-[#0D3B66] font-heading">{hub.city}</div>
              <div className="text-xs text-[#0073B7] font-bold mt-1">{hub.responseSla}</div>
            </button>
          ))}
        </div>

        {/* Selected Hub Detailed Card */}
        <div className="p-7 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0D3B66] via-[#082542] to-[#041021] text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-[#C99738]/40 relative overflow-hidden">
          {/* Subtle light bar at the top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C99738] to-transparent opacity-80" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#C99738] text-[#082542] shadow-sm">
                  Active Field Hub
                </span>
                <span className="text-xs text-amber-200 font-bold">
                  {selectedHub.activeAssets} Assets Under Stewardship
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-white">
                {selectedHub.city} Regional Directorate
              </h3>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C99738] shrink-0 mt-0.5" />
                  <span>Physical Address: <strong className="text-white">{selectedHub.officeAddress}</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Lead City Steward: <strong className="text-white">{selectedHub.leadSteward}</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Emergency Dispatch SLA: <strong className="text-white">{selectedHub.responseSla}</strong></span>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-xs font-bold text-[#C99738] uppercase tracking-wider block mb-2.5">
                  Covered Micro-Markets &amp; Gated Communities:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedHub.microMarkets.map((market) => (
                    <span
                      key={market}
                      className="px-3 py-1 rounded-xl text-xs font-semibold bg-white/10 border border-white/15 text-slate-200 backdrop-blur-xs"
                    >
                      {market}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl p-6 sm:p-7 rounded-2xl border border-white/20 shadow-xl flex flex-col justify-between space-y-4">
              <div>
                <h4 className="text-base sm:text-lg font-black text-white font-heading mb-1.5">
                  Connect With {selectedHub.city} Field Steward
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Have a residential apartment in {selectedHub.city} or elderly parents living in {selectedHub.microMarkets[0]}? Request an immediate on-site assessment.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => onOpenConsultModal(selectedHub.city)}
                  className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-black text-[#082542] bg-[#C99738] hover:bg-[#F59E0B] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Request {selectedHub.city} Field Review</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <a
                  href={`https://wa.me/918007878863?text=Hi%20Sustune%20Care%2C%20I%20have%20an%20inquiry%20regarding%20${encodeURIComponent(selectedHub.city)}%20stewardship.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                  <span>Chat With {selectedHub.city} Concierge</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
