import React, { useState } from 'react';
import { 
  Calculator, 
  Building2, 
  HeartHandshake, 
  ShieldCheck, 
  Check, 
   
  TrendingUp,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Coins
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
import { useCurrency } from '../../context/CurrencyContext';
import { IndianCity, ServiceDivision } from '../../types';

interface TcoEstimatorProps {
  onOpenConsultModal: (division?: string) => void;
}

export const TcoEstimator: React.FC<TcoEstimatorProps> = ({ onOpenConsultModal }) => {
  const { currency, formatPrice } = useCurrency();

  const [selectedCity, setSelectedCity] = useState<IndianCity>('Bengaluru');
  const [division, setDivision] = useState<ServiceDivision>('bundle');
  const [propertyType, setPropertyType] = useState<'2bhk' | '3bhk' | 'villa'>('3bhk');
  const [monthlyRentInr, setMonthlyRentInr] = useState<number>(65000);
  const [sparshTier, setSparshTier] = useState<'essential' | 'comprehensive' | 'concierge'>('comprehensive');

  const getAegisFeeUSD = () => {
    if (division === 'sparsh') return 0;
    const rentUSD = monthlyRentInr / 84.5;
    return Math.max(50, Math.round(rentUSD * 0.08));
  };

  const getSparshFeeUSD = () => {
    if (division === 'aegis') return 0;
    switch (sparshTier) {
      case 'essential':
        return 55;
      case 'comprehensive':
        return 118;
      case 'concierge':
        return 195;
      default:
        return 118;
    }
  };

  const aegisUSD = getAegisFeeUSD();
  const sparshUSD = getSparshFeeUSD();
  const rawTotalUSD = aegisUSD + sparshUSD;
  const discountUSD = division === 'bundle' ? Math.round(rawTotalUSD * 0.15) : 0;
  const netMonthlyUSD = rawTotalUSD - discountUSD;
  const annualSavingsUSD = Math.round(netMonthlyUSD * 2.8 * 12);

  const getWhatsAppQuoteLink = () => {
    const text = `Hi Sustune Care,
I used the Diaspora Care Estimator on the website.
Target Hub: ${selectedCity}
Selected Division: ${division.toUpperCase()}
Property Rent: ₹${monthlyRentInr.toLocaleString('en-IN')}/mo
Sparsh Plan: ${sparshTier.toUpperCase()}
Estimated Fee: ${formatPrice(netMonthlyUSD)}/month
I would like to discuss and lock in this rate.`;

    return `https://wa.me/918007878863?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="estimator" className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 scroll-mt-20 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-[#0073B7]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-5 w-96 h-96 bg-[#C99738]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C99738]/15 border border-[#C99738]/40 text-[#8B601C] text-xs font-black uppercase tracking-wider mb-3.5 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-[#C99738]" />
            <span>Interactive TCO &amp; ROI Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D3B66] font-heading tracking-tight leading-tight">
            Transparent Diaspora Care Estimator
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed">
            Estimate your monthly investment in INR or your local overseas currency ({currency}). Zero hidden broker markups, guaranteed institutional service contracts.
          </p>
        </div>

        {/* Calculator Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. City Hub Selection */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/95 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
              <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-3.5">
                1. Select Target Metropolitan Hub in India
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {(['Bengaluru', 'Hyderabad', 'Delhi NCR', 'Pune', 'Chennai'] as IndianCity[]).map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => setSelectedCity(city)}
                    className={`py-3 px-3.5 rounded-2xl text-xs font-bold border transition-all text-left flex items-center justify-between cursor-pointer ${
                      selectedCity === city
                        ? 'border-[#0073B7] bg-sky-50 text-[#0073B7] ring-2 ring-[#0073B7]/20 shadow-xs'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{city}</span>
                    {selectedCity === city && <Check className="w-4 h-4 text-[#0073B7] shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Scope of Stewardship */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/95 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
              <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-3.5">
                2. Select Scope of Stewardship
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setDivision('bundle')}
                  className={`p-3.5 rounded-2xl text-xs font-bold border transition-all text-left flex flex-col justify-between gap-2.5 cursor-pointer ${
                    division === 'bundle'
                      ? 'border-[#C99738] bg-[#FDF8EC] text-[#8B601C] ring-2 ring-[#C99738]/20 shadow-sm'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <ShieldCheck className="w-4 h-4 text-[#C99738]" />
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-[#C99738] text-white rounded-full shadow-xs">
                      15% Off
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-[#0D3B66]">Dual-Shield Bundle</div>
                    <div className="text-[11px] font-medium text-slate-500 mt-0.5">Property + Parental Care</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setDivision('aegis')}
                  className={`p-3.5 rounded-2xl text-xs font-bold border transition-all text-left flex flex-col justify-between gap-2.5 cursor-pointer ${
                    division === 'aegis'
                      ? 'border-[#0073B7] bg-sky-50 text-[#0073B7] ring-2 ring-[#0073B7]/20 shadow-sm'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Building2 className="w-4 h-4 text-[#0073B7]" />
                  <div>
                    <div className="text-sm font-extrabold text-[#0D3B66]">Aegis Property</div>
                    <div className="text-[11px] font-medium text-slate-500 mt-0.5">Rental, Escrow &amp; Audits</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setDivision('sparsh')}
                  className={`p-3.5 rounded-2xl text-xs font-bold border transition-all text-left flex flex-col justify-between gap-2.5 cursor-pointer ${
                    division === 'sparsh'
                      ? 'border-[#0A8754] bg-emerald-50 text-[#0A8754] ring-2 ring-[#0A8754]/20 shadow-sm'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <HeartHandshake className="w-4 h-4 text-[#0A8754]" />
                  <div>
                    <div className="text-sm font-extrabold text-[#0D3B66]">Sparsh Care</div>
                    <div className="text-[11px] font-medium text-slate-500 mt-0.5">24/7 SOS &amp; OPD Escorts</div>
                  </div>
                </button>
              </div>
            </div>

            {/* 3. Aegis Parameters */}
            {(division === 'bundle' || division === 'aegis') && (
              <div className="p-6 sm:p-7 rounded-3xl bg-white/95 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#0073B7]" />
                    <span>3. Property Type &amp; Expected Monthly Rent</span>
                  </label>
                  <span className="text-xs font-black text-[#0073B7] bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-200">
                    ₹{monthlyRentInr.toLocaleString('en-IN')} / mo
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setPropertyType('2bhk');
                      setMonthlyRentInr(35000);
                    }}
                    className={`py-2.5 px-2 text-xs font-bold rounded-xl border text-center transition-all cursor-pointer ${
                      propertyType === '2bhk'
                        ? 'border-[#0073B7] bg-sky-50 text-[#0073B7] shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    2BHK Apartment
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPropertyType('3bhk');
                      setMonthlyRentInr(65000);
                    }}
                    className={`py-2.5 px-2 text-xs font-bold rounded-xl border text-center transition-all cursor-pointer ${
                      propertyType === '3bhk'
                        ? 'border-[#0073B7] bg-sky-50 text-[#0073B7] shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    3-4BHK Luxury
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPropertyType('villa');
                      setMonthlyRentInr(150000);
                    }}
                    className={`py-2.5 px-2 text-xs font-bold rounded-xl border text-center transition-all cursor-pointer ${
                      propertyType === 'villa'
                        ? 'border-[#0073B7] bg-sky-50 text-[#0073B7] shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Gated Villa
                  </button>
                </div>

                <div>
                  <input
                    type="range"
                    min={25000}
                    max={250000}
                    step={5000}
                    value={monthlyRentInr}
                    onChange={(e) => setMonthlyRentInr(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0073B7]"
                    aria-label="Adjust monthly property rent"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 font-semibold pt-1">
                    <span>₹25,000 (~$295)</span>
                    <span>₹1,25,000 (~$1,480)</span>
                    <span>₹2,50,000+ (~$2,950)</span>
                  </div>
                </div>
              </div>
            )}

            {/* 4. Sparsh Parameters */}
            {(division === 'bundle' || division === 'sparsh') && (
              <div className="p-6 sm:p-7 rounded-3xl bg-white/95 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-4">
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-[#0A8754]" />
                  <span>4. Sparsh Parental Healthcare Tier</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setSparshTier('essential')}
                    className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                      sparshTier === 'essential'
                        ? 'border-[#0A8754] bg-emerald-50 text-[#0A8754] ring-2 ring-[#0A8754]/20 shadow-xs'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-extrabold text-[#0D3B66]">Essential SOS</div>
                    <div className="text-[11px] text-slate-500 mt-1">24/7 Ambulance + Monthly Vitals</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSparshTier('comprehensive')}
                    className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer relative ${
                      sparshTier === 'comprehensive'
                        ? 'border-[#0A8754] bg-emerald-50 text-[#0A8754] ring-2 ring-[#0A8754]/20 shadow-xs'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="absolute -top-2 right-2 px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-emerald-600 text-white shadow-xs">
                      Popular
                    </span>
                    <div className="text-xs font-extrabold text-[#0D3B66]">Comprehensive</div>
                    <div className="text-[11px] text-slate-500 mt-1">Doctor Escorts + Bi-Weekly Vitals</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSparshTier('concierge')}
                    className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                      sparshTier === 'concierge'
                        ? 'border-[#0A8754] bg-emerald-50 text-[#0A8754] ring-2 ring-[#0A8754]/20 shadow-xs'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-extrabold text-[#0D3B66]">Full Concierge</div>
                    <div className="text-[11px] text-slate-500 mt-1">Unlimited OPD + 3x Weekly Visits</div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Quote Column - Sticky Glass Deck */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0D3B66] via-[#092542] to-[#051326] text-white border border-[#C99738]/50 shadow-[0_20px_60px_rgba(0,0,0,0.35)] space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#C99738]">
                    Live Estimate Summary
                  </span>
                  <h3 className="text-lg font-black font-heading">
                    {selectedCity} Hub Plan
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-xl bg-[#082542] border border-[#C99738]/40 text-xs font-bold text-amber-200 shadow-inner">
                  {currency}
                </div>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                {(division === 'bundle' || division === 'aegis') && (
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Aegis Asset Stewardship</span>
                    <span className="font-extrabold text-white">{formatPrice(aegisUSD)} / mo</span>
                  </div>
                )}

                {(division === 'bundle' || division === 'sparsh') && (
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Sparsh Care ({sparshTier})</span>
                    <span className="font-extrabold text-white">{formatPrice(sparshUSD)} / mo</span>
                  </div>
                )}

                {division === 'bundle' && (
                  <div className="flex justify-between items-center text-emerald-300 font-bold pt-1">
                    <span>Dual-Shield Synergy Rebate (15%)</span>
                    <span>- {formatPrice(discountUSD)} / mo</span>
                  </div>
                )}

                <div className="pt-4 border-t border-white/10 flex justify-between items-baseline">
                  <div>
                    <span className="text-xs text-slate-300 font-medium">Total Net Monthly Fee</span>
                    <div className="text-2xl sm:text-3xl font-black text-white font-heading mt-0.5">
                      {formatPrice(netMonthlyUSD)}
                      <span className="text-xs font-normal text-slate-300"> / month</span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                  Billed quarterly or annually. Cancel or pause anytime with a 30-day notice. Full GST invoice provided.
                </p>
              </div>

              {/* Annual Savings Protection Metric */}
              <div className="p-4 rounded-2xl bg-white/5 border border-emerald-500/30 backdrop-blur-md space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  <TrendingUp className="w-4 h-4" />
                  <span>Estimated Annual Financial Protection:</span>
                </div>
                <div className="text-xl font-black text-white">
                  ~ {formatPrice(annualSavingsUSD)} / year
                </div>
                <p className="text-[10px] text-slate-300 leading-tight">
                  Calculated based on zero rent vacancy loss, avoided contractor inflation, preventive property maintenance, and eliminating distress international emergency flights.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => onOpenConsultModal(division)}
                  className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-black text-[#082542] bg-gradient-to-r from-[#F59E0B] to-[#C99738] hover:brightness-110 shadow-lg transition-all text-center cursor-pointer"
                >
                  Lock In This Plan &amp; Schedule Briefing
                </button>

                <a
                  href={getWhatsAppQuoteLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-900/60 transition-colors flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Share Quote via WhatsApp Desk</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
