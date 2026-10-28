import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle, 
  ShieldCheck, 
  HeartCrack, 
  Clock, 
  ArrowRight,
  ShieldAlert,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AnxietyMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'health' | 'property'>('health');

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-[#F8FAFC] via-slate-100/70 to-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-5 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-5 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-800 text-xs font-black uppercase tracking-wider mb-3.5 border border-rose-200/80 shadow-xs">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
            <span>The Diaspora Dilemma</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D3B66] font-heading tracking-tight leading-tight">
            The <span className="gold-gradient-text">Anxiety of Distance</span>, Resolved.
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed">
            Every NRI lives with a quiet undercurrent of guilt and worry. Sustune Care replaces guesswork and awkward favors from distant relatives with institutional responsibility and heartfelt care.
          </p>

          {/* Toggle Tabs */}
          <div className="mt-7 inline-flex p-1.5 bg-slate-200/80 rounded-2xl border border-slate-300/50 shadow-inner gap-1">
            <button
              onClick={() => setActiveTab('health')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                activeTab === 'health'
                  ? 'bg-white text-[#0D3B66] shadow-[0_4px_15px_rgba(0,0,0,0.06)]'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Parental Health Anxiety
            </button>
            <button
              onClick={() => setActiveTab('property')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                activeTab === 'property'
                  ? 'bg-white text-[#0D3B66] shadow-[0_4px_15px_rgba(0,0,0,0.06)]'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Property Stewardship Anxiety
            </button>
          </div>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Column 1: The Status Quo */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/95 border border-rose-200 shadow-[0_15px_35px_rgba(244,63,94,0.06)] relative overflow-hidden flex flex-col justify-between transition-all hover:border-rose-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-black tracking-wider uppercase text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                  The Status Quo
                </span>
                <span className="text-xs font-bold text-rose-600 flex items-center gap-1.5">
                  <HeartCrack className="w-4 h-4" />
                  <span>High Guilt &amp; Friction</span>
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-900 font-heading mb-5">
                Relying on Overburdened Relatives &amp; Brokers
              </h3>

              {activeTab === 'health' ? (
                <ul className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center shrink-0 mt-0.5 text-rose-600 font-black text-xs">
                      ✕
                    </div>
                    <div>
                      <strong className="text-slate-800">The 3:00 AM Panic Call:</strong> Waking up in London or California to missed calls, frantic about whether mom took her heart medicine or suffered a bathroom fall.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center shrink-0 mt-0.5 text-rose-600 font-black text-xs">
                      ✕
                    </div>
                    <div>
                      <strong className="text-slate-800">Parents Concealing Symptoms:</strong> &ldquo;Beta, we are completely fine!&rdquo; &mdash; Indian parents habitually downplay chest discomfort or vertigo to avoid worrying overseas children.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center shrink-0 mt-0.5 text-rose-600 font-black text-xs">
                      ✕
                    </div>
                    <div>
                      <strong className="text-slate-800">Awkward Favors from Cousins:</strong> Begging distant relatives to escort parents through chaotic 4-hour OPD queues in government or private hospitals.
                    </div>
                  </li>
                </ul>
              ) : (
                <ul className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center shrink-0 mt-0.5 text-rose-600 font-black text-xs">
                      ✕
                    </div>
                    <div>
                      <strong className="text-slate-800">Vanishing Local Brokers:</strong> Unregistered agents who take 1 month commission and completely disappear when plumbing leaks or tenants default on rent.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center shrink-0 mt-0.5 text-rose-600 font-black text-xs">
                      ✕
                    </div>
                    <div>
                      <strong className="text-slate-800">Unmonitored Property Degradation:</strong> Discovering ₹4,00,000 worth of unseen water seepage, termite damage, or illegal subletting only when visiting India 2 years later.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center shrink-0 mt-0.5 text-rose-600 font-black text-xs">
                      ✕
                    </div>
                    <div>
                      <strong className="text-slate-800">TDS &amp; Repatriation Headaches:</strong> Complex Indian tax forms (15CA/15CB) and delayed rental wire transfers lost in non-compliant banking channels.
                    </div>
                  </li>
                </ul>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-rose-100 text-xs text-rose-700 font-bold flex items-center gap-2">
              <Clock className="w-4 h-4 shrink-0 text-rose-500" />
              <span>Average NRI time lost in ad-hoc resolution: 14+ hours / month</span>
            </div>
          </div>

          {/* Column 2: The Sustune Standard */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0D3B66] via-[#092847] to-[#041021] text-white shadow-[0_20px_50px_rgba(0,115,183,0.25)] border border-[#C99738]/40 relative overflow-hidden flex flex-col justify-between">
            {/* Shimmer light bar across top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C99738] to-transparent opacity-80" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-black tracking-wider uppercase text-[#C99738] bg-[#C99738]/15 px-3 py-1 rounded-full border border-[#C99738]/40 shadow-xs">
                  The Sustune Protocol
                </span>
                <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Zero Anxiety Guaranteed</span>
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black font-heading mb-5 text-white">
                Corporate Governance, Bedside Empathy &amp; SLAs
              </h3>

              {activeTab === 'health' ? (
                <ul className="space-y-4 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/25 flex items-center justify-center shrink-0 mt-0.5 text-emerald-300 font-black text-xs border border-emerald-400/30">
                      ✓
                    </div>
                    <div>
                      <strong className="text-white">24/7 Rapid SOS &amp; Pre-Alerted ICUs:</strong> Paramedic dispatch within 14 minutes, with hospital pre-authorization at Apollo, Manipal or Fortis.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/25 flex items-center justify-center shrink-0 mt-0.5 text-emerald-300 font-black text-xs border border-emerald-400/30">
                      ✓
                    </div>
                    <div>
                      <strong className="text-white">Dedicated Clinical Companion:</strong> A certified healthcare escort accompanies parents to every doctor visit, asks your questions, and uploads doctor audio/notes to the portal.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/25 flex items-center justify-center shrink-0 mt-0.5 text-emerald-300 font-black text-xs border border-emerald-400/30">
                      ✓
                    </div>
                    <div>
                      <strong className="text-white">Routine Telemetry &amp; Joyful Visits:</strong> Bi-weekly vitals screening, doorstep medicine sorting, and heartwarming social visits with photo updates to keep you connected.
                    </div>
                  </li>
                </ul>
              ) : (
                <ul className="space-y-4 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0073B7]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#38BDF8] font-black text-xs border border-[#38BDF8]/30">
                      ✓
                    </div>
                    <div>
                      <strong className="text-white">Corporate Tenant KYC &amp; Verification:</strong> Deep employment verification, CIBIL credit scoring, and police verification prior to handing over keys.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0073B7]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#38BDF8] font-black text-xs border border-[#38BDF8]/30">
                      ✓
                    </div>
                    <div>
                      <strong className="text-white">Quarterly 80-Point Photo Audits:</strong> Forensic inspections with moisture detection meters, electrical earthing checks, and high-resolution video walk-throughs.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0073B7]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#38BDF8] font-black text-xs border border-[#38BDF8]/30">
                      ✓
                    </div>
                    <div>
                      <strong className="text-white">Escrow Payouts on 5th of Each Month:</strong> Automated rent collection via escrow accounts with guaranteed NRE/NRO remittance and pre-filed Form 15CA/CB support.
                    </div>
                  </li>
                </ul>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs">
              <span className="text-slate-300">
                Managed via private <strong className="text-white">Dual-Shield Portal</strong>
              </span>
              <Link
                to="/portal-preview"
                className="inline-flex items-center gap-1.5 font-bold text-[#C99738] hover:text-amber-200 transition-colors"
              >
                <span>View Live Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
