import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  HeartHandshake, 
  ArrowRight,
  PhoneCall,
  ExternalLink,
  Maximize2,
  CheckCircle2,
  Shield,
  Sparkles
} from 'lucide-react';
import { useVideoMetadata } from '../../hooks/useVideoMetadata';

interface DualHeroProps {
  onOpenConsultModal: (division?: string) => void;
  onOpenVideoModal: (videoSrc: string, title: string, subtitle?: string) => void;
}

export const DualHero: React.FC<DualHeroProps> = ({
  onOpenVideoModal,
}) => {
  const launchVideoMeta = useVideoMetadata('/videos/sustune_launch.mp4');
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative hero-radial-bg pt-8 pb-12 lg:pt-14 lg:pb-16 border-b border-slate-200 overflow-hidden">
      
      {/* Ambient background light orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C99738]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-[-100px] w-[500px] h-[500px] bg-[#0073B7]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-[#0A8754]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Executive Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 border border-[#C99738]/40 shadow-xs backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-[#0A8754] animate-ping" />
            <span className="text-[11px] sm:text-xs font-black text-[#0D3B66] tracking-wide">
              SustuneCare &bull; Dual-Shield Executive Stewardship for Overseas NRIs
            </span>
          </div>
        </div>

        {/* Brand Headline Composition */}
        <div className="text-center max-w-4xl mx-auto mb-10 space-y-4">
          
          {/* Logo Branding - Single unbroken word "SustuneCare" */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-13 h-13 p-1.5 rounded-2xl bg-white border-2 border-[#C99738]/50 shadow-[0_6px_20px_rgba(201,151,56,0.2)] flex items-center justify-center shrink-0">
              <img
                src="/brand/sustune_emblem_standalone.svg"
                alt="SustuneCare Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-left">
              <span className="text-3xl sm:text-4xl font-black text-[#0D3B66] font-heading tracking-tight leading-none block">
                SustuneCare
              </span>
              <span className="text-[10px] sm:text-[11px] font-black text-[#C99738] uppercase tracking-widest block mt-0.5">
                Dual-Shield NRI Stewardship
              </span>
            </div>
          </div>

          {/* Exact Headline: "Care for your peace of mind" */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0D3B66] font-heading tracking-tight leading-[1.08]">
            Care for your <span className="gold-gradient-text">peace of mind</span>
          </h1>

          {/* Executive Summary Brief Text */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Eliminating distance anxiety for global diaspora families. Dedicated hospital-partnered care for your aging parents and institutional stewardship for your Indian real estate.
          </p>

          {/* Direct Navigation Links (No redundant Book Consultation button on the page) */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/sparsh"
              className="px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#0A8754] to-[#076740] hover:brightness-110 shadow-sm transition-all flex items-center gap-2 group"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Explore Sparsh (Elder Care)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/aegis"
              className="px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#0073B7] to-[#0D3B66] hover:brightness-110 shadow-sm transition-all flex items-center gap-2 group"
            >
              <Building2 className="w-4 h-4" />
              <span>Explore Aegis (Property)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:+918007878863"
              className="px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#0D3B66] bg-white border border-slate-300 hover:bg-slate-50 shadow-xs transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#C99738]" />
              <span>24/7 NRI Emergency</span>
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdCuTEI5h1hxB0yzlwRM-U_6RDU2JQ-FCXwimKynh4RM0IJzA/formResponse"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              <span>A Quick Survey</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C99738]" />
            </a>
          </div>

        </div>

        {/* =========================================================================
            TWO SUMMARY GATEWAYS: SPARSH & AEGIS
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-10">
          
          {/* Sparsh Elder Care Gateway Card */}
          <div className="rounded-3xl bg-white border-2 border-emerald-200/90 shadow-[0_15px_40px_rgba(10,135,84,0.1)] overflow-hidden flex flex-col justify-between group hover:border-[#0A8754] transition-all">
            <div className="relative h-48 sm:h-54 overflow-hidden bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
                alt="Compassionate healthcare companion with elderly Indian couple"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/20" />
              
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
                  Hospital-Grade Parental Care &amp; Bedside Warmth
                </h3>
              </div>
            </div>

            <div className="p-5 space-y-4 flex-1 flex flex-col justify-between bg-white">
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A8754] shrink-0 mt-0.5" />
                  <span>&lt; 14 Min Emergency ICU dispatch &amp; cashless hospital pre-clearance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A8754] shrink-0 mt-0.5" />
                  <span>Certified companion escorts to outpatient clinics (audio notes uploaded)</span>
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
                <span>Click: Open Dedicated Sparsh Page</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Aegis Property Management Gateway Card */}
          <div className="rounded-3xl bg-white border-2 border-sky-200/90 shadow-[0_15px_40px_rgba(0,115,183,0.1)] overflow-hidden flex flex-col justify-between group hover:border-[#0073B7] transition-all">
            <div className="relative h-48 sm:h-54 overflow-hidden bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
                alt="Luxury modern gated residential high-rise communities in Bengaluru and Hyderabad"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/20" />
              
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

            <div className="p-5 space-y-4 flex-1 flex flex-col justify-between bg-white">
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
                  <span>80-point sensor inspections (laser moisture detection) + zero markup repairs</span>
                </li>
              </ul>

              <Link
                to="/aegis"
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#0073B7] to-[#0D3B66] hover:brightness-110 shadow-md transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>Click: Open Dedicated Aegis Page</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* =========================================================================
            UNOBSTRUCTED VIDEO SHOWCASE
            ========================================================================= */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-950 p-4 sm:p-6 border border-slate-800 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3 text-white">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-black uppercase tracking-wider text-amber-200">
                SustuneCare Story Film &bull; Unobstructed 1080p
              </span>
            </div>
            <button
              onClick={() => onOpenVideoModal('/videos/sustune_launch.mp4', 'SustuneCare Total: The Diaspora Dilemma Solved', 'Official Launch Story')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>Expand Cinema Mode</span>
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-black aspect-video border border-slate-800">
            <video
              ref={videoRef}
              src="/videos/sustune_launch.mp4"
              playsInline
              loop
              controls
              className="w-full h-full object-contain"
            />
          </div>

          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
            <span>The Diaspora Dilemma Solved &bull; {launchVideoMeta.formattedDuration}</span>
            <span>Clean video presentation without text overlay</span>
          </div>
        </div>

      </div>
    </section>
  );
};
