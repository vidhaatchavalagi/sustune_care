import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft,
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Building2, 
  HeartHandshake, 
  CheckCircle2, 
  Send,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { OPERATIONAL_HUBS } from '../data/mockData';
import { IndianCity, ServiceDivision } from '../types';

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

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nriCountry, setNriCountry] = useState('USA');
  const [city, setCity] = useState<IndianCity>('Bengaluru');
  const [division, setDivision] = useState<ServiceDivision>('bundle');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const text = `Hi Sustune Care NRI Concierge,
I would like to schedule an NRI consultation.
Name: ${name || 'an NRI'}
Resident Country: ${nriCountry}
Target Indian City: ${city}
Division: ${division.toUpperCase()}
Phone: ${phone}
Email: ${email}
Notes: ${notes || 'Looking forward to speaking with a care director.'}`;

    return `https://wa.me/918007878863?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="relative bg-white text-slate-800 min-h-screen py-10 sm:py-16 overflow-hidden">
      
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

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-[#0073B7] text-xs font-black uppercase tracking-wider mb-3 border border-sky-200 shadow-xs">
            <Clock className="w-3.5 h-3.5" />
            <span>24/7 Global NRI Concierge Desk</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0D3B66] font-heading tracking-tight leading-tight">
            Schedule a Confidential <span className="text-[#0073B7]">Diaspora Consultation</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Our Care Directors align consultations to your local time zone across the USA, UK, UAE, Australia, and Canada. Zero pressure, complete institutional clarity.
          </p>
        </div>

        {/* Main Grid: Form + Office Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Form Column (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-10 bg-slate-50 border border-slate-200 shadow-[0_10px_35px_rgba(0,0,0,0.04)] relative overflow-hidden">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-20 h-20 bg-emerald-100 border border-emerald-300 rounded-2xl flex items-center justify-center mx-auto text-[#0A8754] shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-black text-[#0D3B66] font-heading">
                  Consultation Request Registered
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{name}</strong>. Our NRI Lead Steward for <strong className="text-[#0073B7]">{city}</strong> has received your brief. We will send you a calendar invite aligned with your <strong className="text-[#C99738]">{nriCountry}</strong> time zone within 4 hours.
                </p>

                <div className="pt-6 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    <span>Instant WhatsApp Handover</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-3 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-xs transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Division Selection */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                    Primary Area of Interest
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setDivision('bundle')}
                      className={`p-3.5 rounded-2xl text-xs font-extrabold border transition-all flex flex-col items-center gap-2 cursor-pointer ${
                        division === 'bundle'
                          ? 'border-[#C99738] bg-amber-50 text-[#8B601C] shadow-xs ring-1 ring-[#C99738]/30'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <ShieldCheck className={`w-5 h-5 ${division === 'bundle' ? 'text-[#C99738]' : 'text-slate-400'}`} />
                      <span>Dual-Shield (Both)</span>
                      <span className="text-[10px] text-emerald-700 font-black">Save 15%</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setDivision('aegis')}
                      className={`p-3.5 rounded-2xl text-xs font-extrabold border transition-all flex flex-col items-center gap-2 cursor-pointer ${
                        division === 'aegis'
                          ? 'border-[#0073B7] bg-sky-50 text-[#0073B7] shadow-xs ring-1 ring-[#0073B7]/30'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <Building2 className={`w-5 h-5 ${division === 'aegis' ? 'text-[#0073B7]' : 'text-slate-400'}`} />
                      <span>Aegis Property</span>
                      <span className="text-[10px] text-slate-400">Real Estate</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setDivision('sparsh')}
                      className={`p-3.5 rounded-2xl text-xs font-extrabold border transition-all flex flex-col items-center gap-2 cursor-pointer ${
                        division === 'sparsh'
                          ? 'border-[#0A8754] bg-emerald-50 text-[#0A8754] shadow-xs ring-1 ring-[#0A8754]/30'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <HeartHandshake className={`w-5 h-5 ${division === 'sparsh' ? 'text-[#0A8754]' : 'text-slate-400'}`} />
                      <span>Sparsh Elder Care</span>
                      <span className="text-[10px] text-slate-400">Hospital Partnered</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Dr. Rohan Sengupta"
                      className="w-full px-4 py-3 text-xs bg-white text-slate-800 border border-slate-300 rounded-xl focus:outline-none focus:border-[#0073B7] focus:ring-1 focus:ring-[#0073B7] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="rohan.sengupta@example.com"
                      className="w-full px-4 py-3 text-xs bg-white text-slate-800 border border-slate-300 rounded-xl focus:outline-none focus:border-[#0073B7] focus:ring-1 focus:ring-[#0073B7] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Where are you based? (NRI Country) *
                    </label>
                    <select
                      value={nriCountry}
                      onChange={(e) => setNriCountry(e.target.value)}
                      className="w-full px-4 py-3 text-xs bg-white text-slate-800 border border-slate-300 rounded-xl focus:outline-none focus:border-[#0073B7] cursor-pointer"
                    >
                      <option value="USA">United States (EST / CST / PST)</option>
                      <option value="UK">United Kingdom (GMT / BST)</option>
                      <option value="UAE">United Arab Emirates (GST)</option>
                      <option value="Australia">Australia (AEST / AWST)</option>
                      <option value="Canada">Canada (EST / PST)</option>
                      <option value="Singapore">Singapore / Hong Kong (SGT)</option>
                      <option value="Europe">Europe (CET)</option>
                      <option value="Other">Other Global Diaspora</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Target Indian City *
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value as IndianCity)}
                      className="w-full px-4 py-3 text-xs bg-white text-slate-800 border border-slate-300 rounded-xl focus:outline-none focus:border-[#0073B7] cursor-pointer"
                    >
                      <option value="Bengaluru">Bengaluru (Whitefield, Indiranagar, etc.)</option>
                      <option value="Hyderabad">Hyderabad (Jubilee Hills, Hitec City, etc.)</option>
                      <option value="Delhi NCR">Delhi NCR (Gurugram, Noida, etc.)</option>
                      <option value="Pune">Pune (Koregaon Park, Baner, etc.)</option>
                      <option value="Chennai">Chennai (OMR, Adyar, etc.)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    WhatsApp or Mobile (with country code) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (408) 555-0192 or +44 7911 123456"
                    className="w-full px-4 py-3 text-xs bg-white text-slate-800 border border-slate-300 rounded-xl focus:outline-none focus:border-[#0073B7] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Brief Overview of Your Family / Property Need
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. My parents live alone in Whitefield and need routine doctor escorts. I also have a 3BHK flat in Hitec City looking for tenant management."
                    className="w-full px-4 py-3 text-xs bg-white text-slate-800 border border-slate-300 rounded-xl focus:outline-none focus:border-[#0073B7] transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-xs sm:text-sm font-black text-white bg-gradient-to-r from-[#0073B7] via-[#0D3B66] to-[#082542] hover:brightness-110 shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirm Confidential Consultation Request</span>
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Instant WhatsApp + Office Hubs (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Connect Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-[#0073B7]">
                  Instant Communication
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-[#0A8754]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  Active Now
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect immediately with an NRI Care Director. We coordinate seamlessly across Eastern, Central, Pacific, GMT, GST, and AEST time zones.
              </p>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-[#C99738] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Toll-Free NRI Hotline</span>
                    <a href="tel:+918007878863" className="font-extrabold text-[#0D3B66] hover:text-[#C99738] transition-colors">
                      +91 800-SUSTUNE (+91 800-787-8863)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 flex items-center justify-center text-[#0073B7] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Direct Email</span>
                    <span className="font-extrabold text-[#0D3B66]">concierge@sustunecare.com</span>
                  </div>
                </div>

                <a
                  href="https://wa.me/918007878863?text=Hi%20Sustune%20Care%20Concierge%2C%20I%20am%20an%20NRI%20looking%20for%20assistance."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors shadow-xs"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white shrink-0">
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <span className="text-emerald-800 block text-[10px] font-bold">WhatsApp NRI Concierge</span>
                    <span className="font-extrabold text-emerald-900">+91 800 787 8863</span>
                  </div>
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1 text-xs">
                <div className="flex items-center gap-2 text-[#8B601C] font-bold">
                  <Clock className="w-4 h-4 text-[#C99738]" />
                  <span>Rapid SLA Guarantee</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  All diaspora inquiries receive a personalized consultation brief within 4 business hours.
                </p>
              </div>
            </div>

            {/* Hub Addresses Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-3.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-[#0073B7]" />
                <span>Corporate &amp; Field Offices in India</span>
              </div>
              <div className="space-y-3 text-xs text-slate-600">
                {OPERATIONAL_HUBS.slice(0, 3).map((h) => (
                  <div key={h.city} className="pb-3 border-b border-slate-200 last:border-b-0 last:pb-0">
                    <strong className="text-slate-900 block font-heading mb-0.5">{h.city} Hub:</strong>
                    <span className="text-slate-500 text-[11px] leading-relaxed">{h.officeAddress}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
