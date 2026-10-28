import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calculator, 
  Building2, 
  HeartHandshake, 
  ShieldCheck, 
  Check, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  ShieldAlert, 
  Coins, 
  HelpCircle,
  PhoneCall,
  Percent
} from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import { IndianCity, ServiceDivision } from '../types';

interface PricingPageProps {
  onOpenConsultModal: (division?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenConsultModal }) => {
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
  const bundleDiscountUSD = division === 'bundle' ? Math.round(rawTotalUSD * 0.15) : 0;
  const finalTotalUSD = rawTotalUSD - bundleDiscountUSD;

  // Fragmented costs
  const getFragmentedBrokerageUSD = () => (division === 'sparsh' ? 0 : Math.round((monthlyRentInr / 84.5) * 0.12));
  const getFragmentedEmergencyUSD = () => (division === 'aegis' ? 0 : 80);
  const getFragmentedMaintenanceUSD = () => (division === 'sparsh' ? 0 : 45);
  const getFragmentedDoctorEscortsUSD = () => (division === 'aegis' ? 0 : 60);

  const totalFragmentedUSD =
    getFragmentedBrokerageUSD() +
    getFragmentedEmergencyUSD() +
    getFragmentedMaintenanceUSD() +
    getFragmentedDoctorEscortsUSD();

  const netMonthlySavingsUSD = Math.max(0, totalFragmentedUSD - finalTotalUSD);

  return (
    <div className="bg-white min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back to Home Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-[#0D3B66] bg-slate-100/90 hover:bg-[#0073B7] hover:text-white transition-all shadow-xs border border-slate-200 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>&larr; Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-[#8B601C] text-xs font-black uppercase tracking-wider mb-3 border border-amber-200 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-[#C99738]" />
            <span>Institutional NRI Pricing &amp; Savings Estimator</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0D3B66] font-heading tracking-tight leading-tight">
            Transparent Stewardship Fees in <span className="text-[#0073B7]">{currency}</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Zero hidden broker commissions. Zero contractor markups. Calculate your exact monthly investment and see how SustuneCare saves you thousands over fragmented unorganized vendors.
          </p>
        </div>

        {/* Service Type Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 shadow-inner gap-1">
            <button
              onClick={() => setDivision('bundle')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                division === 'bundle'
                  ? 'bg-gradient-to-r from-[#0D3B66] to-[#0073B7] text-white shadow-md'
                  : 'text-slate-600 hover:text-[#0D3B66]'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-[#C99738]" />
              <span>Dual-Shield Bundle (Both)</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-black bg-[#C99738] text-white">
                15% Rebate
              </span>
            </button>

            <button
              onClick={() => setDivision('sparsh')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                division === 'sparsh'
                  ? 'bg-[#0A8754] text-white shadow-md'
                  : 'text-slate-600 hover:text-[#0A8754]'
              }`}
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Sparsh Elder Care Only</span>
            </button>

            <button
              onClick={() => setDivision('aegis')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                division === 'aegis'
                  ? 'bg-[#0073B7] text-white shadow-md'
                  : 'text-slate-600 hover:text-[#0073B7]'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Aegis Property Only</span>
            </button>
          </div>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Input Controls (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-[0_10px_35px_rgba(0,0,0,0.04)] space-y-6">
            <h3 className="text-lg font-black text-[#0D3B66] font-heading flex items-center justify-between">
              <span>Configure Your Asset &amp; Parental Profile</span>
              <span className="text-xs font-bold text-slate-500 font-sans">Step 1 of 2</span>
            </h3>

            {/* Target Metro */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Managed Indian Metro City
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {(['Bengaluru', 'Hyderabad', 'Delhi NCR', 'Pune', 'Chennai'] as IndianCity[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedCity(c)}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                      selectedCity === c
                        ? 'bg-[#0D3B66] text-white border-[#0D3B66] shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Property Parameters */}
            {(division === 'bundle' || division === 'aegis') && (
              <div className="pt-4 border-t border-slate-100 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-[#0073B7] flex items-center gap-1.5">
                    <Building2 className="w-4 h-4" />
                    <span>Aegis Property Parameters</span>
                  </span>
                  <span className="text-xs text-slate-500 font-medium">8% Gross Rent Escrow SLA</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Property Configuration
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { key: '2bhk', label: '2BHK Apartment', defRent: 40000 },
                      { key: '3bhk', label: '3BHK Luxury Flat', defRent: 65000 },
                      { key: 'villa', label: 'Gated Villa / Penthouse', defRent: 120000 },
                    ].map((p) => (
                      <button
                        key={p.key}
                        onClick={() => {
                          setPropertyType(p.key as any);
                          setMonthlyRentInr(p.defRent);
                        }}
                        className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                          propertyType === p.key
                            ? 'bg-sky-50 text-[#0073B7] border-[#0073B7] shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="font-semibold text-slate-700">Estimated Monthly Rental Realization</span>
                    <span className="font-black text-[#0D3B66] text-sm">
                      ₹{monthlyRentInr.toLocaleString('en-IN')} / mo (~{formatPrice(Math.round(monthlyRentInr / 84.5))})
                    </span>
                  </div>
                  <input
                    type="range"
                    min="25000"
                    max="250000"
                    step="5000"
                    value={monthlyRentInr}
                    onChange={(e) => setMonthlyRentInr(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0073B7]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>₹25,000</span>
                    <span>₹1,25,000</span>
                    <span>₹2,50,000+</span>
                  </div>
                </div>
              </div>
            )}

            {/* Sparsh Parental Parameters */}
            {(division === 'bundle' || division === 'sparsh') && (
              <div className="pt-4 border-t border-slate-100 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-[#0A8754] flex items-center gap-1.5">
                    <HeartHandshake className="w-4 h-4" />
                    <span>Sparsh Parental Care Tier</span>
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Apollo/Fortis Pre-Alert ICUs</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    {
                      tier: 'essential',
                      title: 'Essential Shield',
                      priceUSD: 55,
                      sub: '24/7 SOS & Emergency Hospital Dispatch',
                    },
                    {
                      tier: 'comprehensive',
                      title: 'Comprehensive',
                      priceUSD: 118,
                      sub: 'OPD Doctor Escorts + Vitals Telemetry',
                    },
                    {
                      tier: 'concierge',
                      title: 'Full Concierge',
                      priceUSD: 195,
                      sub: 'Weekly Companionship + Pharmacy Sorting',
                    },
                  ].map((t) => (
                    <button
                      key={t.tier}
                      onClick={() => setSparshTier(t.tier as any)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        sparshTier === t.tier
                          ? 'bg-emerald-50 border-[#0A8754] ring-1 ring-[#0A8754]/30 shadow-xs'
                          : 'bg-white border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-extrabold text-slate-900">{t.title}</span>
                        <span className="text-xs font-black text-[#0A8754]">{formatPrice(t.priceUSD)}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">{t.sub}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Real-Time Price Realization Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#0D3B66] via-[#082542] to-[#041021] text-white border border-[#C99738]/50 shadow-[0_20px_50px_rgba(13,59,102,0.3)]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#C99738]">
                    Estimated Retainer
                  </span>
                  <div className="text-3xl sm:text-4xl font-black font-heading mt-0.5 text-white">
                    {formatPrice(finalTotalUSD)}
                    <span className="text-xs font-normal text-slate-300"> / month</span>
                  </div>
                </div>
                {division === 'bundle' && (
                  <div className="text-right">
                    <span className="px-2 py-1 rounded-full text-[10px] font-black uppercase bg-[#C99738] text-white">
                      15% Synergy Discount
                    </span>
                    <div className="text-[11px] text-emerald-300 font-bold mt-1">
                      Save {formatPrice(bundleDiscountUSD)}/mo
                    </div>
                  </div>
                )}
              </div>

              {/* Itemized Cost Composition */}
              <div className="py-4 space-y-2.5 text-xs border-b border-white/10">
                {(division === 'bundle' || division === 'aegis') && (
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-sky-400" />
                      <span>Aegis Asset Stewardship (8% rent)</span>
                    </span>
                    <span className="font-bold text-white">{formatPrice(aegisUSD)}</span>
                  </div>
                )}

                {(division === 'bundle' || division === 'sparsh') && (
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Sparsh Healthcare ({sparshTier})</span>
                    </span>
                    <span className="font-bold text-white">{formatPrice(sparshUSD)}</span>
                  </div>
                )}

                {division === 'bundle' && (
                  <div className="flex justify-between items-center text-[#C99738] font-bold">
                    <span>Dual-Shield Synergy Rebate</span>
                    <span>-{formatPrice(bundleDiscountUSD)}</span>
                  </div>
                )}
              </div>

              {/* Total Cost of Ownership Comparison */}
              <div className="py-4 space-y-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                  Compared to Fragmented Vendors
                </span>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Fragmented Brokers &amp; Ad-hoc Visits:</span>
                    <span className="line-through">{formatPrice(totalFragmentedUSD)}/mo</span>
                  </div>
                  <div className="flex justify-between text-emerald-300 font-extrabold text-sm pt-1 border-t border-white/10">
                    <span>Your Net Diaspora Savings:</span>
                    <span>{formatPrice(netMonthlySavingsUSD)} / mo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 space-y-3">
              <Link
                to="/contact"
                className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-black text-[#0D3B66] bg-gradient-to-r from-[#F59E0B] via-[#C99738] to-[#F59E0B] hover:brightness-110 shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request Custom Retainer Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/918007878863?text=Hi%20SustuneCare%2C%20I%20would%20like%20to%20verify%20pricing%20for%20my%20parents%20and%20property."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-200 bg-white/10 hover:bg-white/15 transition-colors flex items-center justify-center gap-2"
              >
                <span>Discuss Custom Portfolio with Care Director</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
