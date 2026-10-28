import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  HeartHandshake, 
  Calculator, 
  LayoutDashboard, 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Star,
  Sparkles
} from 'lucide-react';
import { DualHero } from '../components/home/DualHero';
import { TESTIMONIALS, OPERATIONAL_HUBS } from '../data/mockData';
import { useCurrency } from '../context/CurrencyContext';

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

interface HomePageProps {
  onOpenConsultModal: (division?: string) => void;
  onOpenVideoModal: (videoSrc: string, title: string, subtitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenConsultModal,
  onOpenVideoModal,
}) => {
  const { currency, formatPrice } = useCurrency();

  return (
    <div className="bg-white">
      
      {/* 1. HERO SCREEN: Headline "Care for your peace of mind", Logo SustuneCare, 2 Visual Gateways, Unobstructed Video */}
      <DualHero
        onOpenConsultModal={onOpenConsultModal}
        onOpenVideoModal={onOpenVideoModal}
      />

      {/* 2. EXECUTIVE SUMMARY: High-level overview with direct clicks to separate pages */}
      <section className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-black text-[#0D3B66] uppercase tracking-wider block mb-1">
              Executive Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0D3B66] font-heading">
              SustuneCare at a Glance
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              A concise summary of our dual-shield infrastructure for global diaspora families.
            </p>
          </div>

          {/* 4 Summary Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            
            {/* Pillar 1: Sparsh Care */}
            <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#0A8754] flex items-center justify-center mb-3">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-[#0D3B66] font-heading mb-1">
                  Sparsh Healthcare
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Apollo &amp; Fortis ICU pre-alert SLA under 14 minutes, doctor clinic escorts, and vitals telemetry.
                </p>
              </div>
              <Link
                to="/sparsh"
                className="text-xs font-bold text-[#0A8754] hover:underline flex items-center gap-1 pt-2 border-t border-slate-100"
              >
                <span>Dedicated Sparsh Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Pillar 2: Aegis Property */}
            <div className="p-5 rounded-2xl bg-white border border-sky-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0073B7] flex items-center justify-center mb-3">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-[#0D3B66] font-heading mb-1">
                  Aegis Property
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Godrej &amp; Sobha benchmark asset stewardship: corporate tenant vetting, rent escrow by 5th, and 80-point audits.
                </p>
              </div>
              <Link
                to="/aegis"
                className="text-xs font-bold text-[#0073B7] hover:underline flex items-center gap-1 pt-2 border-t border-slate-100"
              >
                <span>Dedicated Aegis Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Pillar 3: Transparent Pricing */}
            <div className="p-5 rounded-2xl bg-white border border-amber-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#C99738] flex items-center justify-center mb-3">
                  <Calculator className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-[#0D3B66] font-heading mb-1">
                  Plans &amp; Savings
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Retainers in {currency}. Save 15% on dual-shield bundle with zero contractor markups.
                </p>
              </div>
              <Link
                to="/pricing"
                className="text-xs font-bold text-[#C99738] hover:underline flex items-center gap-1 pt-2 border-t border-slate-100"
              >
                <span>Open Pricing Calculator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Pillar 4: Client Portal */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#0D3B66] flex items-center justify-center mb-3">
                  <LayoutDashboard className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-[#0D3B66] font-heading mb-1">
                  Live Diaspora Portal
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  London/US time-zone sync, real-time parent vitals, digital rent ledgers, and 1-click SOS.
                </p>
              </div>
              <Link
                to="/portal-preview"
                className="text-xs font-bold text-[#0D3B66] hover:underline flex items-center gap-1 pt-2 border-t border-slate-100"
              >
                <span>Launch Portal Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 3. ACTIVE OPERATIONAL HUBS SUMMARY */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-black text-[#0073B7] uppercase tracking-wider block">
                On-Ground Coverage
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0D3B66] font-heading">
                5 Indian Metros with Active Stewards
              </h2>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0D3B66] hover:bg-[#0073B7] transition-colors"
            >
              <span>Contact 24/7 NRI Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {OPERATIONAL_HUBS.map((hub) => (
              <div
                key={hub.city}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center hover:border-[#0073B7] transition-all"
              >
                <div className="text-sm font-black text-[#0D3B66] font-heading">{hub.city}</div>
                <div className="text-[10px] text-emerald-700 font-bold mt-0.5">{hub.responseSla}</div>
                <div className="text-[11px] text-slate-500 mt-1">{hub.microMarkets[0]}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. VERIFIED DIASPORA VOICES */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-black text-[#C99738] uppercase tracking-wider block mb-1">
              Diaspora Endorsements
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#0D3B66] font-heading">
              Trusted Across Continents
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <div
                key={t.id}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#C99738] mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed italic mb-3">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 text-xs">
                  <span className="font-black text-[#0D3B66] block">{t.author}</span>
                  <span className="text-[11px] text-slate-500 block">{t.role}</span>
                  <span className="text-[10px] text-[#C99738] font-bold block mt-0.5">{t.location}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. READY TO RESTORE PEACE OF MIND */}
      <section className="py-10 bg-gradient-to-r from-[#0D3B66] via-[#082542] to-[#0D3B66] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <h2 className="text-2xl font-black font-heading">
            Restore Complete Peace of Mind Today
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Confidential diaspora consultations aligned to your time zone in the USA, UK, UAE, Australia, and Canada.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+918007878863"
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-[#0D3B66] bg-gradient-to-r from-[#F59E0B] via-[#C99738] to-[#F59E0B] hover:brightness-110 shadow-lg flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call 24/7 NRI Hotline</span>
            </a>
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
