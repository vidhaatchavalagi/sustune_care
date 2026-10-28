
import React, { useState, useRef } from 'react';
import {
  Building2,
  HeartHandshake,
  ShieldCheck,
  Activity,
  CheckCircle2,
  Lock,
  Clock,
  Radio,
  Sparkles,
  TrendingUp,
  MapPin,
  Ambulance,
} from 'lucide-react';

interface HeroScene3DProps {
  onOpenConsultModal?: (division?: string) => void;
  onOpenVideoModal?: (videoSrc: string, title: string, subtitle?: string) => void;
}

export const HeroScene3D: React.FC<HeroScene3DProps> = ({
  onOpenConsultModal,
  onOpenVideoModal,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState<number>(6);
  const [rotateY, setRotateY] = useState<number>(-8);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const newRotateY = ((x - centerX) / centerX) * 12;
    const newRotateX = -((y - centerY) / centerY) * 12;

    setRotateX(newRotateX);
    setRotateY(newRotateY);
  };

  

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(4);
    setRotateY(-6);
  };
  
const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
  if (!containerRef.current || e.touches.length === 0) return;

  const rect = containerRef.current.getBoundingClientRect();
  const touch = e.touches[0];

  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  setRotateY(((x - centerX) / centerX) * 12);
  setRotateX(-((y - centerY) / centerY) * 12);
};

const handleTouchEnd = () => {
  setRotateX(4);
  setRotateY(-6);
};


  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full max-w-[560px] mx-auto h-[590px] sm:h-[540px] lg:h-[580px] perspective-1400 flex items-center justify-center select-none"
    >
      {/* Ambient background atmosphere glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] rounded-full bg-gradient-to-tr from-[#0073B7]/25 via-[#C99738]/20 to-[#0A8754]/15 blur-[60px] sm:blur-[100px] animate-pulse-glow" />
      </div>

      {/* 3D Dimensional Stage */}
      <div
        className="relative w-full h-full preserve-3d transition-transform duration-300 ease-out flex items-center justify-center"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
      >
        {/* Layer 0: Orbital Rings */}
        <div
          className="absolute w-[300px] sm:w-[460px] h-[300px] sm:h-[460px] rounded-full border border-dashed border-[#C99738]/30 pointer-events-none animate-rotate-slow"
          style={{ transform: 'translateZ(-60px)' }}
        />
        <div
          className="absolute w-[250px] sm:w-[370px] h-[250px] sm:h-[370px] rounded-full border border-[#0073B7]/25 pointer-events-none"
          style={{ transform: 'translateZ(-40px)' }}
        />
        <div
          className="absolute w-[190px] sm:w-[280px] h-[190px] sm:h-[280px] rounded-full border border-emerald-500/20 pointer-events-none"
          style={{ transform: 'translateZ(-20px)' }}
        />

        {/* Central Holographic Emblem */}
        <div
          className="absolute w-30 h-30 sm:w-30 sm:h-30 rounded-3xl bg-gradient-to-tr from-[#082542] via-[#0D3B66] to-[#051326] border-2 border-[#C99738]/60 shadow-[0_0_40px_rgba(201,151,56,0.35)] flex items-center justify-center p-3 preserve-3d group cursor-pointer active:scale-95 transition-transform duration-200"
          style={{ transform: 'translateZ(20px)' }}
          title="Sustune Care Dual-Shield Engine"
        >
          <img
            src="/brand/sustune_emblem_standalone.svg"
            alt="Sustune Care Core Emblem"
            className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform"
          />
          <div className="absolute -bottom-3 px-2 py-0.5 rounded-full bg-[#051326] border border-[#C99738]/50 text-[8px] sm:text-[9px] font-extrabold uppercase text-[#C99738] tracking-widest shadow-md whitespace-nowrap">
            Dual-Shield
          </div>
        </div>

        {/* Aegis Property Stewardship Card */}
        <div
          className="absolute top-15 left-1 w-[205px] sm:top-6 sm:right-7 sm:-left-10 sm:w-[280px] rounded-xl sm:rounded-3xl p-2.5 sm:p-4 bg-white/90 backdrop-blur-xl border border-sky-200/90 shadow-[0_15px_35px_rgba(0,115,183,0.18)] preserve-3d animate-float-slow cursor-pointer hover:border-[#0073B7] transition-all"
          style={{ transform: 'translateZ(70px)' }}
          onClick={() => onOpenConsultModal?.('aegis')}
        >
          <div className="flex items-center justify-between gap-1 mb-2">
            <div className="flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-full bg-sky-100/80 text-[#0073B7] text-[8px] sm:text-[10px] font-extrabold min-w-0">
              <Building2 className="w-3 h-3 shrink-0" />
              <span className="truncate">AEGIS PROPERTY</span>
            </div>
            <span className="flex items-center gap-1 text-[8px] sm:text-[10px] text-emerald-700 font-bold shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              Audited
            </span>
          </div>

          <h4 className="text-[11px] sm:text-sm font-extrabold text-[#0D3B66] font-heading leading-tight">
            Prestige High Fields 3BHK
          </h4>

          <p className="text-[9px] sm:text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
            <MapPin className="w-2.5 h-2.5 text-[#0073B7] shrink-0" />
            <span>Financial District, Hyderabad</span>
          </p>

          <div className="mt-2 sm:mt-2.5 pt-2 border-t border-slate-100 grid grid-cols-2 gap-1.5 sm:gap-2 text-[9px] sm:text-[10px]">
            <div className="bg-slate-50 p-1.5 rounded-lg border border-slate-200/60">
              <span className="text-[8px] sm:text-[9px] text-slate-500 block">Rent Escrow</span>
              <span className="font-extrabold text-slate-800">₹65,000/mo</span>
            </div>
            <div className="bg-sky-50/70 p-1.5 rounded-lg border border-sky-100">
              <span className="text-[8px] sm:text-[9px] text-[#0073B7] block">Audit Score</span>
              <span className="font-extrabold text-[#0073B7]">94% Grade A</span>
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between gap-1 text-[8px] sm:text-[9px] text-slate-500">
            <span className="flex items-center gap-1 text-slate-600 font-medium min-w-0">
              <Lock className="w-2.5 h-2.5 text-[#C99738] shrink-0" />
              <span>Biometric Lock Verified</span>
            </span>
            <span className="text-[#0073B7] font-bold shrink-0">Form 15CA ✓</span>
          </div>
        </div>

        {/* Sparsh Healthcare Card */}
        <div
          className="absolute bottom-15 right-1 w-[215px] sm:bottom-6 sm:right- sm:-right-11 sm:w-[290px] rounded-xl sm:rounded-3xl p-2.5 sm:p-4 bg-white/90 backdrop-blur-xl border border-emerald-200/90 shadow-[0_15px_35px_rgba(10,135,84,0.18)] preserve-3d animate-float-reverse cursor-pointer hover:border-[#0A8754] transition-all"
          style={{ transform: 'translateZ(90px)' }}
          onClick={() => onOpenConsultModal?.('sparsh')}
        >
          <div className="flex items-center justify-between gap-1 mb-2">
            <div className="flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-full bg-emerald-100/80 text-[#0A8754] text-[8px] sm:text-[10px] font-extrabold min-w-0">
              <HeartHandshake className="w-3 h-3 shrink-0" />
              <span className="truncate">SPARSH HEALTHCARE</span>
            </div>
            <span className="flex items-center gap-1 text-[8px] sm:text-[10px] text-[#0A8754] font-bold shrink-0">
              <Activity className="w-3 h-3 shrink-0" />
              Live
            </span>
          </div>

          <div className="flex items-center justify-between gap-1">
            <div className="min-w-0">
              <h4 className="text-[10px] sm:text-sm font-extrabold text-[#0D3B66] font-heading leading-tight">
                Resting Blood Pressure
              </h4>
              <p className="text-[8px] sm:text-[10px] text-slate-500">
                Telemetry Log: Today 08:30 AM
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-xs sm:text-sm font-extrabold text-emerald-700 font-heading">
                122 / 80
              </span>
              <span className="text-[8px] sm:text-[9px] text-slate-500 block">
                mmHg (Optimal)
              </span>
            </div>
          </div>

          <div className="mt-2 sm:mt-2.5 p-1.5 sm:p-2 rounded-xl bg-emerald-50/70 border border-emerald-200/50 flex items-center justify-between gap-1 text-[9px] sm:text-[10px]">
            <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
              <Ambulance className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span className="font-semibold text-slate-800">
                Apollo Hospitals OPD Escort
              </span>
            </div>
            <span className="px-1 py-0.5 rounded text-[7px] sm:text-[8px] font-extrabold bg-[#0A8754] text-white shrink-0">
              Sister Mary
            </span>
          </div>

          <div className="mt-2 flex items-center justify-between gap-1 text-[8px] sm:text-[9px] text-slate-500">
            <span className="text-[#0A8754] font-bold">
              SpO2: 99% • Pulse: 72
            </span>
            <span className="text-slate-600 font-semibold text-right">
              ICU Pre-Alert ✓
            </span>
          </div>
        </div>

        {/* Clinical Command SLA Badge */}
        <div
          className="absolute bottom-[160px] left-9 max-w-[155px] sm:bottom-37 sm:left-6 sm:max-w-none px-2 sm:px-3 py-1.5 rounded-xl bg-white/95 border border-sky-200 text-[#0D3B66] backdrop-blur-md shadow-xl flex items-center gap-1.5 sm:gap-2 preserve-3d"
          style={{ transform: 'translateZ(110px)' }}
        >
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <div className="text-left min-w-0">
            <span className="text-[8px] sm:text-[9px] text-slate-500 block uppercase font-bold tracking-wider">
              Clinical Command SLA
            </span>
            <span className="text-[10px] sm:text-xs font-extrabold font-heading text-[#0073B7] leading-tight block">
              &lt; 14 Mins SOS Dispatch
            </span>
          </div>
        </div>

        {/* Assets Protected Badge */}
        <div
          className="absolute top-[160px] right-3 max-w-[155px] sm:top-38 sm:right-6 sm:max-w-none px-2 sm:px-3 py-1.5 rounded-xl bg-white/95 border border-sky-200 text-[#0D3B66] backdrop-blur-md shadow-xl flex items-center gap-1.5 sm:gap-2 preserve-3d"
          style={{ transform: 'translateZ(105px)' }}
        >
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-sky-100 flex items-center justify-center text-[#0073B7] shrink-0">
            <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </div>
          <div className="text-left min-w-0">
            <span className="text-[7px] sm:text-[9px] text-slate-500 block uppercase font-bold tracking-wider">
              Assets Protected
            </span>
            <span className="text-[10px] sm:text-xs font-extrabold font-heading text-[#0073B7] leading-tight block">
              ₹180 Cr+ NRI Portfolio
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
