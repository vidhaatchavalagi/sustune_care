import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  HeartHandshake, 
  ShieldCheck, 
  Calculator, 
  LayoutDashboard, 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Play, 
  Sparkles, 
  Star,
  Users,
  Activity,
  Award
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
import { DualHero } from '../components/home/DualHero';
import { TESTIMONIALS, OPERATIONAL_HUBS, HOSPITAL_PARTNERS } from '../data/mockData';
import { useCurrency } from '../context/CurrencyContext';

interface HomePageProps {
  onOpenConsultModal: (division?: string) => void;
  onOpenVideoModal: (videoSrc: string, title: string, subtitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenConsultModal,
  onOpenVideoModal,
}) => {
  const { currency, formatPrice } = useCurrency();
  const [activeBenchmarkTab, setActiveBenchmarkTab] = useState<'elder' | 'property'>('elder');

  return (
    <div className="bg-white">
      
      {/* 1. HERO SCREEN: More Pictures, Less Text, Unobstructed Video Teaser */}
      <DualHero
        onOpenConsultModal={onOpenConsultModal}
        onOpenVideoModal={onOpenVideoModal}
      />

      {/* 2. BENCHMARK GATEWAY: Apollo & Fortis (Elder Care) vs Godrej & Sobha (Property) */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-black text-[#0D3B66] uppercase tracking-wider block mb-2">
              Industry Reference Benchmarks
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0D3B66] font-heading">
              Built to the Highest Institutional Standards
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              We benchmarked hospital websites (<strong className="text-slate-800">Apollo, Fortis</strong>) for Elder Care and real estate portals (<strong className="text-slate-800">Godrej, Sobha, My Home</strong>) for Property Management.
            </p>

            {/* Click Switcher ("Click, Click, Click") */}
            <div className="mt-6 inline-flex p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm gap-1.5">
              <button
                onClick={() => setActiveBenchmarkTab('elder')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeBenchmarkTab === 'elder'
                    ? 'bg-[#0A8754] text-white shadow-md'
                    : 'text-slate-600 hover:text-[#0A8754]'
                }`}
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Elder Care Benchmark (Apollo / Fortis)</span>
              </button>

              <button
                onClick={() => setActiveBenchmarkTab('property')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeBenchmarkTab === 'property'
                    ? 'bg-[#0073B7] text-white shadow-md'
                    : 'text-slate-600 hover:text-[#0073B7]'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Property Benchmark (Godrej / Sobha)</span>
              </button>
            </div>
          </div>

          {/* Dynamic Benchmark Content */}
          {activeBenchmarkTab === 'elder' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto bg-white p-6 sm:p-10 rounded-3xl border border-emerald-200 shadow-[0_10px_35px_rgba(10,135,84,0.06)] animate-fadeIn">
              
              <div className="lg:col-span-6 space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-100 text-[#0A8754] inline-block">
                  Hospital Benchmark: Apollo, Fortis &amp; Manipal
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0D3B66] font-heading">
                  Clinical Rigor Meets Bedside Warmth
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Inspired by the clinical excellence of India&apos;s finest hospital networks. We eliminate panic with rapid ambulance dispatch, pre-cleared ICU admissions, and doctor clinic escorts.
                </p>

                <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0A8754] shrink-0" />
                    <span><strong>&lt; 14 Min Emergency SLA:</strong> Real-time life-support ambulance dispatch</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0A8754] shrink-0" />
                    <span><strong>Pre-Authorized ICU Beds:</strong> Direct admission with cashless authorization</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0A8754] shrink-0" />
                    <span><strong>Certified Doctor Escorts:</strong> Companion records physician advice &amp; audio notes</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Link
                    to="/sparsh"
                    className="px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#0A8754] to-[#076740] hover:brightness-110 shadow-md transition-all flex items-center gap-2"
                  >
                    <span>Click: Open Dedicated Elder Care (Sparsh) Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
                  alt="Compassionate healthcare nurse holding hands of senior patient"
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>

            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto bg-white p-6 sm:p-10 rounded-3xl border border-sky-200 shadow-[0_10px_35px_rgba(0,115,183,0.06)] animate-fadeIn">
              
              <div className="lg:col-span-6 space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-sky-100 text-[#0073B7] inline-block">
                  Real Estate Benchmark: Godrej, My Home &amp; Sobha
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0D3B66] font-heading">
                  Forensic Asset Protection &amp; Rental Escrows
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Inspired by institutional real estate stewardship. We protect your multi-crore Indian assets with verified MNC tenants, on-time escrow remittances, and German engineering-grade 80-point sensor audits.
                </p>

                <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0073B7] shrink-0" />
                    <span><strong>MNC Tenant Scouting:</strong> CIBIL &gt; 750, Google/Microsoft corporate expats</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0073B7] shrink-0" />
                    <span><strong>RERA Escrow Remittance:</strong> Rent in your NRE account by 5th with Form 15CA/CB</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0073B7] shrink-0" />
                    <span><strong>80-Point Sensor Audits:</strong> Laser moisture scanning &amp; 4K video walkthroughs</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Link
                    to="/aegis"
                    className="px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#0073B7] to-[#0D3B66] hover:brightness-110 shadow-md transition-all flex items-center gap-2"
                  >
                    <span>Click: Open Dedicated Property (Aegis) Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                  alt="Modern luxury apartment with balcony and city skyline"
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>

            </div>
          )}

        </div>
      </section>

      {/* 3. MULTI-PAGE CLICK HUBS: PRICING & PORTAL DEMO GATEWAYS ("Less Scrolling, More Clicking") */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-[#0D3B66] font-heading">
              Dedicated Portals &amp; Tools for NRI Families
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Separate views designed for complete transparency, live telemetry, and institutional pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Hub Card 1: Plans & Pricing */}
            <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-50 via-white to-amber-50/40 border-2 border-amber-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-[#C99738] mb-4">
                  <Calculator className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase text-[#8B601C]">Transparent Pricing</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-black bg-[#C99738] text-white">Multi-Currency</span>
                </div>
                <h3 className="text-xl font-black text-[#0D3B66] font-heading mt-1 mb-2">
                  Plans &amp; Savings Calculator
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Explore itemized retainers in {currency}. Calculate your exact monthly investment and see how our Dual-Shield bundle saves 15% with zero broker markups.
                </p>
                <div className="text-xs text-slate-500 space-y-1 mb-6">
                  <div>&bull; Sparsh Elder Care starting at {formatPrice(55)}/mo</div>
                  <div>&bull; Aegis Property Stewardship starting at 8% of rent</div>
                  <div>&bull; Bundle Synergy Discount: Automatic 15% off</div>
                </div>
              </div>

              <Link
                to="/pricing"
                className="w-full py-3 rounded-xl text-xs sm:text-sm font-bold text-[#0D3B66] bg-amber-100/80 hover:bg-[#C99738] hover:text-white transition-all flex items-center justify-center gap-2 border border-[#C99738]/40"
              >
                <span>Click: Open Pricing &amp; Savings Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Hub Card 2: Live Client Portal Demo */}
            <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0D3B66] via-[#082542] to-[#041021] text-white border border-[#C99738]/50 shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#C99738]/20 border border-[#C99738]/40 flex items-center justify-center text-[#C99738] mb-4">
                  <LayoutDashboard className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase text-emerald-300">Live Client Dashboard</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Interactive Demo</span>
                </div>
                <h3 className="text-xl font-black font-heading mt-1 mb-2 text-white">
                  Diaspora Client Portal Sandbox
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Experience the exact interface our overseas clients use: London/US time zone sync, real-time parent biometric vitals, 80-point audit reports, and simulated 1-click SOS.
                </p>
                <div className="text-xs text-slate-400 space-y-1 mb-6">
                  <div>&bull; Real-time vitals telemetry (BP, Glucose, SpO2)</div>
                  <div>&bull; Digital rent escrow ledgers &amp; Form 15CA/CB downloads</div>
                  <div>&bull; 24/7 SOS dispatch simulation with timer</div>
                </div>
              </div>

              <Link
                to="/portal-preview"
                className="w-full py-3 rounded-xl text-xs sm:text-sm font-bold text-[#0D3B66] bg-gradient-to-r from-[#F59E0B] to-[#C99738] hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span>Click: Launch Live Portal Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 4. ACTIVE OPERATIONAL METROS & 24/7 NRI DESK */}
      <section className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-black text-[#0073B7] uppercase tracking-wider block">
                5 Active Metro Hubs
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0D3B66] font-heading mt-0.5">
                On-Ground Field Stewards Across India
              </h2>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0D3B66] hover:bg-[#0073B7] transition-colors"
            >
              <span>Connect with Local Hub Concierge</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {OPERATIONAL_HUBS.map((hub) => (
              <div
                key={hub.city}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0073B7] transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-black text-[#0D3B66] font-heading">{hub.city}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <div className="text-[11px] text-slate-500 font-semibold mb-2">
                  Lead: {hub.leadSteward}
                </div>
                <div className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md inline-block">
                  {hub.responseSla}
                </div>
                <div className="text-[11px] text-slate-600 mt-3 pt-2 border-t border-slate-100">
                  {hub.microMarkets.slice(0, 2).join(', ')}...
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. BRIEF VERIFIED TESTIMONIALS (Credible quotes from Doctors & Executives) */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black text-[#C99738] uppercase tracking-wider block mb-1">
              Trusted by Diaspora Leaders
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0D3B66] font-heading">
              What Overseas Children &amp; Landlords Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#C99738] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80">
                  <div className="text-xs font-black text-[#0D3B66]">{t.author}</div>
                  <div className="text-[11px] text-slate-500">{t.role}</div>
                  <div className="text-[10px] text-[#C99738] font-bold mt-0.5">{t.location} &bull; {t.division}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. READY TO ACT BANNER */}
      <section className="py-12 bg-gradient-to-r from-[#0D3B66] via-[#082542] to-[#0D3B66] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black font-heading">
            Ready to Restore Complete Peace of Mind?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Schedule a confidential virtual consultation aligned with your local time zone in the USA, UK, UAE, Australia, or Canada.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onOpenConsultModal('bundle')}
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-[#0D3B66] bg-gradient-to-r from-[#F59E0B] via-[#C99738] to-[#F59E0B] hover:brightness-110 shadow-lg cursor-pointer"
            >
              Book Virtual NRI Consultation
            </button>
            <a
              href="https://wa.me/918007878863"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
