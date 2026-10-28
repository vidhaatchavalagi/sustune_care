import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldAlert, 
  TriangleAlert, 
  CheckCircle2, 
  X, 
  PhoneCall 
} from 'lucide-react';

/**
 * Verified NRI Quick Desk Configuration
 * Configurable contact numbers and emergency SLA parameters.
 * Modify these if official telephony or dispatch partner configurations change.
 */
export const NRI_DESK_CONFIG = {
  // Configured WhatsApp concierge line (Verified project number: +91 800 787 8863)
  whatsappNumber: '918007878863',
  whatsappMessage: 'Hi Sustune Care, I am an NRI reaching out to the 24/7 Emergency Concierge Desk.',
  
  // Official hotline vanity display & working tel link
  hotlineDisplay: '+91 800–SUSTUNE',
  hotlineTelHref: 'tel:+918007878863',
  
  // Emergency Triage Hub Details
  targetHub: 'Bengaluru Central / Indiranagar',
  responseSla: '< 15 mins to residence',
  partnerHospitals: 'Manipal, Apollo, Fortis ICU',
};

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

export const NriQuickDesk: React.FC = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const [sosModalOpen, setSosModalOpen] = useState(false);
  const [sosSuccessState, setSosSuccessState] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLDivElement>(null);

  // Close panel on outside clicks
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        panelOpen &&
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        launcherRef.current &&
        !launcherRef.current.contains(e.target as Node)
      ) {
        setPanelOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [panelOpen]);

  // Handle ESC key to dismiss modal or panel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (sosModalOpen) {
          handleCloseSosModal();
        } else if (panelOpen) {
          setPanelOpen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sosModalOpen, panelOpen]);

  // Lock background scroll only when the demo modal is open
  useEffect(() => {
    if (sosModalOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [sosModalOpen]);

  const handleOpenSosModal = () => {
    setSosSuccessState(false);
    setSosModalOpen(true);
    // Keep panel closed to focus on modal dialog
    setPanelOpen(false);
  };

  const handleCloseSosModal = () => {
    setSosModalOpen(false);
    setSosSuccessState(false);
  };

  const whatsAppUrl = `https://wa.me/${NRI_DESK_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    NRI_DESK_CONFIG.whatsappMessage
  )}`;

  return (
    <>
      {/* ======================================================== */}
      {/* 1. FLOATING LAUNCHER & EXPANDED PANEL CONTAINER          */}
      {/* ======================================================== */}
      <div 
        ref={launcherRef}
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end pointer-events-auto"
      >
        {/* Expanded NRI Quick Desk Panel (Matching Reference Screenshot 2) */}
        {panelOpen && (
          <div
            ref={panelRef}
            role="region"
            aria-label="24/7 NRI Emergency Response Panel"
            className="mb-3 w-[330px] sm:w-[355px] max-w-[calc(100vw-2rem)] rounded-2xl bg-[#07162C] border border-[#C99738]/50 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] text-white animate-in fade-in slide-in-from-bottom-3 duration-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#581423] border border-rose-600/40 shrink-0 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                </span>
                <h3 className="text-[17px] font-bold text-white tracking-tight font-heading">
                  24/7 NRI Emergency Response
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setPanelOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800/60 transition-colors cursor-pointer"
                aria-label="Close NRI Quick Desk Panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Description */}
            <p className="text-[13px] text-slate-300 leading-snug mb-4">
              Immediate triage and field dispatch across Bengaluru, Hyderabad, and Delhi NCR.
            </p>

            {/* Three Full-Width Action Buttons */}
            <div className="space-y-2.5">
              {/* Button A: Red SOS Alert */}
              <button
                type="button"
                onClick={handleOpenSosModal}
                className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] active:scale-[0.98] transition-all cursor-pointer shadow-md"
              >
                <ShieldAlert className="w-4 h-4 text-white shrink-0" />
                <span>Trigger Sparsh SOS Alert (Demo)</span>
              </button>

              {/* Button B: Green WhatsApp Concierge */}
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#0F5132] hover:bg-[#0C4329] active:scale-[0.98] transition-all cursor-pointer shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
                <span>WhatsApp Care Concierge</span>
              </a>

              {/* Button C: Slate Hotline */}
              <a
                href={NRI_DESK_CONFIG.hotlineTelHref}
                className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#1E293B] hover:bg-[#28364B] active:scale-[0.98] transition-all cursor-pointer shadow-md border border-slate-700/60"
              >
                <PhoneCall className="w-4 h-4 text-[#EAB308] shrink-0" />
                <span>Call Hotline: {NRI_DESK_CONFIG.hotlineDisplay}</span>
              </a>
            </div>
          </div>
        )}

        
{/* Combined Gold & Navy NRI Quick Desk Launcher */}
<button
  type="button"
  onClick={() => setPanelOpen(!panelOpen)}
  className="group relative flex flex-col items-center justify-center
    w-[88px] h-[54px] sm:w-[100px] sm:h-[60px]
    rounded-full p-[3.5px] cursor-pointer
    transition-all duration-300 hover:scale-105 active:scale-95
    select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
  style={{
    background:
      'linear-gradient(145deg, #FFF0A3 0%, #E5B869 22%, #9B7023 50%, #FFDF79 78%, #785212 100%)',
    boxShadow:
      '0 8px 24px rgba(0,0,0,0.55), 0 0 18px rgba(229,184,105,0.3), inset 0 1px 2px rgba(255,255,255,0.8)',
  }}
  aria-label="Toggle 24/7 NRI Emergency Response Desk"
>
  {/* Inner Midnight Navy Pill */}
  <div
    className="relative w-full h-full rounded-full flex flex-col
      items-center justify-center gap-1 px-2 overflow-hidden"
    style={{
      background:
        'radial-gradient(ellipse at 50% 15%, #14325E 0%, #091933 55%, #030C1B 100%)',
      boxShadow:
        'inset 0 2px 5px rgba(255,255,255,0.16), inset 0 -3px 6px rgba(0,0,0,0.75)',
    }}
  >
    {/* Top Gloss */}
    <span
      className="absolute top-0 inset-x-3 h-1/2 rounded-t-full
        pointer-events-none opacity-20"
      style={{
        background:
          'linear-gradient(180deg, rgba(255,255,255,0.6), transparent)',
      }}
    />

    {/* Shield with Alternating Red and Green Glow */}
<div className="relative z-10 flex items-center justify-center">
  <svg
    className="nri-alternating-shield w-5 h-5 sm:w-6 sm:h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FFD452"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <line x1="12" y1="8" x2="12" y2="12" strokeWidth="2.4" />
    <circle cx="12" cy="16" r="0.7" fill="#FFD452" stroke="#FFD452" />
  </svg>
</div>

    {/* Centered Label */}
    <span
      className="relative z-10 text-[8px] sm:text-[9px]
        font-extrabold text-white tracking-tight leading-none
        text-center whitespace-nowrap"
      style={{
        textShadow: '0 1px 4px rgba(0,0,0,0.95)',
      }}
    >
      NRI Quick Desk
    </span>
  </div>
</button>
      </div>

      {/* ======================================================== */}
      {/* 2. SPARSH SOS PROTOCOL DEMO MODAL                        */}
      {/* (Matching Reference Screenshots 3 & 4)                   */}
      {/* ======================================================== */}
      {sosModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="sos-modal-title"
          onClick={(e) => {
            // Close when clicking directly on backdrop
            if (e.target === e.currentTarget) {
              handleCloseSosModal();
            }
          }}
        >
          <div 
            className="w-full max-w-[460px] rounded-2xl sm:rounded-3xl bg-[#08182F] border border-[#C99738]/60 p-6 sm:p-8 relative shadow-[0_25px_60px_rgba(0,0,0,0.8)] text-white my-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Icon Top Right */}
            <button
              type="button"
              onClick={handleCloseSosModal}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800/60 transition-colors cursor-pointer"
              aria-label="Close Sparsh SOS Protocol Demo"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Top Red Outlined Badge */}
            <div className="w-16 h-16 rounded-full border-2 border-[#EF4444] bg-[#2A0E18] flex items-center justify-center mx-auto mb-5 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
              <ShieldAlert className="w-8 h-8 text-[#EF4444]" />
            </div>

            {/* Modal Heading */}
            <h2 
              id="sos-modal-title"
              className="text-2xl sm:text-[26px] font-bold text-center text-white font-serif tracking-tight leading-tight"
            >
              Sparsh 24/7 Rapid SOS Protocol
            </h2>

            {/* Modal Subtitle */}
            <p className="text-center text-slate-300 text-xs sm:text-sm mt-2.5 mb-6 leading-relaxed">
              Simulate how Sustune triggers instant triage, hospital pre-alert, and dedicated paramedic dispatch.
            </p>

            {/* Conditional Content based on Simulation State */}
            {!sosSuccessState ? (
              /* State 1: Initial State (Reference Screenshot 3) */
              <div>
                {/* Details Card */}
                <div className="bg-[#0D223F] rounded-xl p-4 sm:p-5 border border-slate-700/50 space-y-3 text-xs sm:text-sm">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-slate-400">Target Hub:</span>
                    <span className="font-bold text-white text-right">
                      {NRI_DESK_CONFIG.targetHub}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-slate-400">Response SLA:</span>
                    <span className="font-bold text-[#00E676] text-right">
                      {NRI_DESK_CONFIG.responseSla}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-slate-400">Partner Hospitals:</span>
                    <span className="font-bold text-white text-right">
                      {NRI_DESK_CONFIG.partnerHospitals}
                    </span>
                  </div>
                </div>

                {/* Test Trigger Button */}
                <button
                  type="button"
                  onClick={() => setSosSuccessState(true)}
                  className="w-full mt-6 py-3.5 px-4 rounded-xl font-bold text-white text-sm sm:text-base bg-[#E50914] hover:bg-[#DC2626] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(229,9,20,0.35)] cursor-pointer"
                >
                  <TriangleAlert className="w-5 h-5 text-white shrink-0 stroke-[2.2]" />
                  <span>Test Live SOS Protocol (Demo)</span>
                </button>
              </div>
            ) : (
              /* State 2: Simulated Success State (Reference Screenshot 4) */
              <div className="animate-in fade-in duration-300">
                {/* Green-Bordered Protocol Success Card */}
                <div className="bg-[#062419] border border-[#10B981] rounded-xl p-5 space-y-3.5">
                  <div className="flex items-center gap-2 text-[#10B981]">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <h4 className="font-bold text-sm sm:text-base tracking-tight">
                      Protocol Initiated Successfully
                    </h4>
                  </div>

                  <ol className="text-xs sm:text-[13px] text-slate-200 space-y-2 leading-relaxed">
                    <li className="flex gap-1.5">
                      <span className="text-emerald-400 font-bold">1.</span>
                      <span>
                        <strong className="text-white font-semibold">Triage Physician</strong> alerted via secure telemetry.
                      </span>
                    </li>
                    <li className="flex gap-1.5">
                      <span className="text-emerald-400 font-bold">2.</span>
                      <span>
                        <strong className="text-white font-semibold">Care Companion (Sister Mercy)</strong> dispatched via rapid transit.
                      </span>
                    </li>
                    <li className="flex gap-1.5">
                      <span className="text-emerald-400 font-bold">3.</span>
                      <span>
                        <strong className="text-white font-semibold">Pre-authenticated ICU bed</strong> reserved at partner hospital.
                      </span>
                    </li>
                    <li className="flex gap-1.5">
                      <span className="text-emerald-400 font-bold">4.</span>
                      <span>
                        <strong className="text-white font-semibold">Live SMS &amp; WhatsApp Bridge</strong> opened with NRI Sponsor (USA).
                      </span>
                    </li>
                  </ol>
                </div>

                {/* Return Button */}
                <button
                  type="button"
                  onClick={handleCloseSosModal}
                  className="w-full mt-6 py-3.5 px-4 rounded-xl font-bold text-white text-sm sm:text-base bg-[#19376D] hover:bg-[#204588] border border-blue-700/40 active:scale-[0.99] transition-all flex items-center justify-center shadow-lg cursor-pointer"
                >
                  Close Demo &amp; Return
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
