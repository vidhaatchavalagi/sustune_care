import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Building2, 
  HeartHandshake, 
  Play, 
  Pause,
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  PhoneCall,
  Clock,
  ExternalLink,
  Maximize2,
  Stethoscope,
  Key
} from 'lucide-react';
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
import { useVideoMetadata } from '../../hooks/useVideoMetadata';

interface DualHeroProps {
  onOpenConsultModal: (division?: string) => void;
  onOpenVideoModal: (videoSrc: string, title: string, subtitle?: string) => void;
}

export const DualHero: React.FC<DualHeroProps> = ({
  onOpenConsultModal,
  onOpenVideoModal,
}) => {
  const launchVideoMeta = useVideoMetadata('/videos/sustune_launch.mp4');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative hero-radial-bg pt-6 pb-12 lg:pt-10 lg:pb-16 border-b border-slate-200 overflow-hidden">
      
      {/* Ambient background light orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C99738]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-[-100px] w-[500px] h-[500px] bg-[#0073B7]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-[#0A8754]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow Announcement Pill */}
        <div className="flex justify-start sm:justify-center mb-5 lg:mb-7">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 border border-[#C99738]/40 shadow-xs backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-[#0A8754] animate-ping" />
            <span className="text-[11px] sm:text-xs font-black text-[#0D3B66] tracking-wide">
              Institutional NRI Dual-Shield &bull; USA &bull; UK &bull; UAE &bull; Australia &bull; Canada
            </span>
          </div>
        </div>

        {/* Brand Headline Composition: Large Logo + Punchy Brief Value Prop */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 space-y-4">
          
          {/* Large Original Full-Color Sustune Care Logo on Light Background */}
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 p-2 rounded-2xl bg-white border-2 border-[#C99738]/50 shadow-[0_8px_25px_rgba(201,151,56,0.22)] flex items-center justify-center shrink-0">
              <img
                src="/brand/sustune_emblem_standalone.svg"
                alt="Sustune Care Master Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0D3B66] font-heading tracking-tight">
                  SUSTUNE
                </span>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#C99738] font-heading tracking-tight">
                  CARE
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-black text-[#0073B7] uppercase tracking-widest block">
                Dual-Shield NRI Stewardship Framework
              </span>
            </div>
          </div>

          {/* Core Punchy Headline (Brief, Engaging) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0D3B66] font-heading tracking-tight leading-[1.12]">
            Care for your property. <br />
            <span className="text-[#0A8754]">Care for your parents.</span> <br />
            <span className="gold-gradient-text">Peace of mind for you.</span>
          </h1>

          {/* Brief Text - Goal is to get visitors interested enough to click/enquire */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Eliminating the <strong className="text-slate-900 font-bold">Anxiety of Distance</strong> for global Non-Resident Indians. Click below to explore our dedicated hospital-partnered elder care and real estate asset management divisions.
          </p>

          {/* Action CTAs: Book Virtual Consultation + 24/7 Hotline + Survey */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenConsultModal('bundle')}
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#0073B7] via-[#0D3B66] to-[#082542] hover:brightness-110 shadow-[0_8px_25px_rgba(0,115,183,0.3)] transition-all cursor-pointer flex items-center gap-2 group"
            >
              <span>Book Virtual NRI Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="tel:+918007878863"
              className="px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#0D3B66] bg-white border border-[#C99738]/50 hover:bg-amber-50 shadow-xs transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#C99738]" />
              <span>Call 24/7 NRI Emergency</span>
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdCuTEI5h1hxB0yzlwRM-U_6RDU2JQ-FCXwimKynh4RM0IJzA/formResponse"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              <span>A Quick Survey About You</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C99738]" />
            </a>
          </div>

        </div>

        {/* =========================================================================
            REQUIREMENT 1, 3 & 4: MORE PICTURES, LESS TEXT
            TWO PROMINENT VISUAL GATEWAYS (ELDER CARE & PROPERTY MANAGEMENT)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-10">
          
          {/* Card 1: Elder Care (Sparsh) - Apollo/Fortis Hospital Benchmark */}
          <div className="rounded-3xl bg-white border-2 border-emerald-200/90 shadow-[0_15px_40px_rgba(10,135,84,0.12)] overflow-hidden flex flex-col justify-between group hover:border-[#0A8754] transition-all">
            
            {/* Visual Photo starting from first screen */}
            <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
                alt="Compassionate healthcare companion with elderly Indian couple"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
              
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-200 shadow-xs flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-[#0A8754]" />
                <span className="text-[10px] font-black uppercase text-[#0A8754] tracking-wider">
                  Sparsh Elder Care
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-mono text-emerald-300 font-bold uppercase tracking-wider block">
                  Hospital Benchmark: Apollo &bull; Fortis &bull; Manipal
                </span>
                <h3 className="text-base sm:text-lg font-black font-heading leading-tight">
                  Hospital-Grade Geriatric Healthcare &amp; Bedside Warmth
                </h3>
              </div>
            </div>

            {/* Quick Bullets & Click Gateway */}
            <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between bg-white">
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A8754] shrink-0 mt-0.5" />
                  <span>&lt; 14 Min Emergency ICU dispatch &amp; cashless hospital pre-clearance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A8754] shrink-0 mt-0.5" />
                  <span>Certified companion escorts to outpatient clinics (audio summaries uploaded)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A8754] shrink-0 mt-0.5" />
                  <span>Doorstep pharmacy pill sorting &amp; weekly emotional companionship</span>
                </li>
              </ul>

              <Link
                to="/sparsh"
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#0A8754] to-[#076740] hover:brightness-110 shadow-md transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>Click: Open Elder Care (Sparsh) Page</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          {/* Card 2: Property Management (Aegis) - Godrej/Sobha Real Estate Benchmark */}
          <div className="rounded-3xl bg-white border-2 border-sky-200/90 shadow-[0_15px_40px_rgba(0,115,183,0.12)] overflow-hidden flex flex-col justify-between group hover:border-[#0073B7] transition-all">
            
            {/* Visual Photo starting from first screen */}
            <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
                alt="Luxury modern gated residential high-rise communities in Bengaluru and Hyderabad"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
              
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-sky-200 shadow-xs flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#0073B7]" />
                <span className="text-[10px] font-black uppercase text-[#0073B7] tracking-wider">
                  Aegis Property
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-mono text-sky-300 font-bold uppercase tracking-wider block">
                  Real Estate Benchmark: Godrej &bull; My Home &bull; Sobha
                </span>
                <h3 className="text-base sm:text-lg font-black font-heading leading-tight">
                  Forensic Real Estate Stewardship &amp; Guaranteed Escrows
                </h3>
              </div>
            </div>

            {/* Quick Bullets & Click Gateway */}
            <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between bg-white">
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0073B7] shrink-0 mt-0.5" />
                  <span>Corporate tenant vetting (Google, Microsoft, Amazon expats; CIBIL &gt; 750)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0073B7] shrink-0 mt-0.5" />
                  <span>Rent escrow collection with NRE disbursement by 5th + Form 15CA/15CB</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0073B7] shrink-0 mt-0.5" />
                  <span>80-point sensor inspections (laser dampness detection) + zero markup repairs</span>
                </li>
              </ul>

              <Link
                to="/aegis"
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#0073B7] to-[#0D3B66] hover:brightness-110 shadow-md transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>Click: Open Property (Aegis) Page</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>

        {/* =========================================================================
            REQUIREMENT 3: UNOBSTRUCTED VIDEO PRESENTATION
            Clean moving video player teaser right on first screen without giant blocking banners
            ========================================================================= */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-950 p-4 sm:p-6 border border-slate-800 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 text-white">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-black uppercase tracking-wider text-amber-200">
                Official Launch Film (Unobstructed HD)
              </span>
            </div>
            <button
              onClick={() => onOpenVideoModal('/videos/sustune_launch.mp4', 'Sustune Care Total: The Diaspora Dilemma Solved', 'Official Launch Film')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>Expand Cinema Mode</span>
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Video Player - Completely Unobstructed */}
          <div className="relative rounded-2xl overflow-hidden bg-black aspect-video border border-slate-800">
            <video
              ref={videoRef}
              src="/videos/sustune_launch.mp4"
              playsInline
              loop
              controls
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
            <span>The Diaspora Dilemma Solved &bull; {launchVideoMeta.formattedDuration}</span>
            <span>No text blocks covering moving video</span>
          </div>
        </div>

      </div>
    </section>
  );
};
