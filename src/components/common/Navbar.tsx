import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Building2, 
  HeartHandshake, 
  LayoutDashboard,  
  Menu, 
  X, 
  Globe, 
  PhoneCall,
  Calculator,
  ArrowRight
} from 'lucide-react';
import { useCurrency } from '../../context/CurrencyContext';
import { Currency } from '../../types';

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

interface NavbarProps {
  onOpenConsultModal: (initialInterest?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();
  const location = useLocation();

  const currencies: Currency[] = ['USD', 'GBP', 'EUR', 'AED', 'CAD', 'AUD', 'INR'];

  const isActive = (path: string) => location.pathname === path;

  return (
    // Single Unified One-Line Header (no 2 lines)
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-[0_4px_25px_rgba(10,25,47,0.05)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Branding - Single unbroken word "SustuneCare" on light header */}
          <Link to="/" className="flex items-center gap-3 group shrink-0 py-1">
            <div className="relative w-12 h-12 flex items-center justify-center bg-white rounded-2xl shadow-[0_4px_16px_rgba(201,151,56,0.2)] border-2 border-[#C99738]/50 group-hover:border-[#C99738] group-hover:scale-105 transition-all p-1 overflow-hidden shrink-0">
              <img 
                src="/brand/sustune_emblem_standalone.svg" 
                alt="SustuneCare Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-[26px] font-black tracking-tight text-[#0D3B66] font-heading group-hover:text-[#0073B7] transition-colors leading-none">
                SustuneCare
              </span>
              <span className="text-[10px] tracking-wider text-slate-500 font-extrabold uppercase mt-1">
                Dual-Shield NRI Stewardship
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links ("Click, Click, Click" Separate Pages) */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 shrink-0">
            <Link
              to="/"
              className={`px-2.5 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-bold whitespace-nowrap transition-all ${
                isActive('/') 
                  ? 'text-[#0073B7] bg-sky-50 shadow-xs ring-1 ring-[#0073B7]/20' 
                  : 'text-slate-700 hover:text-[#0073B7] hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            <Link
              to="/sparsh"
              className={`px-2.5 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-bold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                isActive('/sparsh') 
                  ? 'text-[#0A8754] bg-emerald-50 shadow-xs ring-1 ring-[#0A8754]/20' 
                  : 'text-slate-700 hover:text-[#0A8754] hover:bg-emerald-50/50'
              }`}
            >
              <HeartHandshake className="w-4 h-4 text-[#0A8754] shrink-0" />
              <span>Sparsh</span>
            </Link>

            <Link
              to="/aegis"
              className={`px-2.5 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-bold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                isActive('/aegis') 
                  ? 'text-[#0073B7] bg-sky-50 shadow-xs ring-1 ring-[#0073B7]/20' 
                  : 'text-slate-700 hover:text-[#0073B7] hover:bg-sky-50/50'
              }`}
            >
              <Building2 className="w-4 h-4 text-[#0073B7] shrink-0" />
              <span>Aegis</span>
            </Link>

            <Link
              to="/pricing"
              className={`px-2.5 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-bold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                isActive('/pricing') 
                  ? 'text-[#C99738] bg-amber-50 shadow-xs ring-1 ring-[#C99738]/20' 
                  : 'text-slate-700 hover:text-[#C99738] hover:bg-amber-50/50'
              }`}
            >
              <Calculator className="w-4 h-4 text-[#C99738] shrink-0" />
              <span>Pricing</span>
            </Link>

            <Link
              to="/portal-preview"
              className={`px-2.5 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-bold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                isActive('/portal-preview') 
                  ? 'text-[#0D3B66] bg-slate-100 shadow-xs ring-1 ring-[#0D3B66]/20' 
                  : 'text-slate-700 hover:text-[#0D3B66] hover:bg-slate-50'
              }`}
            >
              <LayoutDashboard className="w-4 h-4 text-[#0D3B66] shrink-0" />
              <span className="whitespace-nowrap">Portal Demo</span>
            </Link>

            <Link
              to="/contact"
              className={`px-2.5 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-bold whitespace-nowrap transition-all ${
                isActive('/contact') 
                  ? 'text-[#0073B7] bg-sky-50 shadow-xs ring-1 ring-[#0073B7]/20' 
                  : 'text-slate-700 hover:text-[#0073B7] hover:bg-slate-50'
              }`}
            >
              <span className="whitespace-nowrap">24/7 NRI Desk</span>
            </Link>
          </nav>

          {/* Right Action Elements: Currency + 24/7 Hotline + Consult Button */}
          <div className="hidden lg:flex items-center space-x-2.5 shrink-0">
            {/* Currency Pill */}
            <div className="flex items-center gap-1 bg-slate-100 px-2.5 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700">
              <Globe className="w-3.5 h-3.5 text-[#C99738]" />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as Currency)}
                className="bg-transparent text-slate-800 font-extrabold text-xs focus:outline-none cursor-pointer"
                aria-label="Currency"
              >
                {currencies.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Hotline Link */}
            <a
              href="tel:+918007878863"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 hover:text-[#0D3B66] bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
              title="24/7 NRI Emergency Hotline"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C99738]" />
              <span className="hidden xl:inline">+91 800-SUSTUNE</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918007878863?text=Hi%20SustuneCare%2C%20I%20am%20an%20NRI%20looking%20for%20information."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100 transition-colors"
              title="WhatsApp Concierge"
            >
              <WhatsAppIcon className="w-4 h-4 fill-emerald-600 text-emerald-600" />
            </a>

            {/* Book Consultation Button */}
            <button
              onClick={() => onOpenConsultModal()}
              className="px-3 xl:px-4 py-2 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-[#0073B7] via-[#0D3B66] to-[#082542] hover:brightness-110 shadow-sm transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3 h-3 shrink-0" />
            </button>
          </div>

          {/* Mobile Right Bar: Currency + WhatsApp + Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-lg border border-slate-200 text-[11px] font-bold">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as Currency)}
                className="bg-transparent text-slate-800 font-extrabold text-[11px] focus:outline-none cursor-pointer"
                aria-label="Currency"
              >
                {currencies.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <a
              href="https://wa.me/918007878863"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 fill-emerald-600 text-emerald-600" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-xl text-sm font-bold ${
              isActive('/') ? 'text-[#0073B7] bg-sky-50' : 'text-slate-700'
            }`}
          >
            Home Summary
          </Link>

          <Link
            to="/sparsh"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold ${
              isActive('/sparsh') ? 'text-[#0A8754] bg-emerald-50' : 'text-slate-700'
            }`}
          >
            <HeartHandshake className="w-4 h-4 text-[#0A8754]" />
            <span>Sparsh (Elder Care) - Hospital Benchmark</span>
          </Link>

          <Link
            to="/aegis"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold ${
              isActive('/aegis') ? 'text-[#0073B7] bg-sky-50' : 'text-slate-700'
            }`}
          >
            <Building2 className="w-4 h-4 text-[#0073B7]" />
            <span>Aegis (Property) - Real Estate Benchmark</span>
          </Link>

          <Link
            to="/pricing"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold ${
              isActive('/pricing') ? 'text-[#C99738] bg-amber-50' : 'text-slate-700'
            }`}
          >
            <Calculator className="w-4 h-4 text-[#C99738]" />
            <span>Plans &amp; Pricing Calculator</span>
          </Link>

          <Link
            to="/portal-preview"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold ${
              isActive('/portal-preview') ? 'text-[#0D3B66] bg-slate-100' : 'text-slate-700'
            }`}
          >
            <LayoutDashboard className="w-4 h-4 text-[#C99738]" />
            <span>Live Client Portal Sandbox</span>
          </Link>

          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-xl text-sm font-bold ${
              isActive('/contact') ? 'text-[#0073B7] bg-sky-50' : 'text-slate-700'
            }`}
          >
            24/7 NRI Concierge Desk &amp; Contact
          </Link>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultModal();
              }}
              className="w-full py-3 rounded-xl text-center text-xs font-black text-white bg-gradient-to-r from-[#0073B7] to-[#0D3B66] shadow-md"
            >
              Book Virtual NRI Consultation
            </button>
            <a
              href="tel:+918007878863"
              className="w-full py-2.5 rounded-xl text-center text-xs font-bold text-slate-800 bg-slate-100 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C99738]" />
              <span>Emergency Hotline: +91 800-SUSTUNE</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
