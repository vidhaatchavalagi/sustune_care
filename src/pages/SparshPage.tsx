import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  HeartHandshake, 
  Ambulance, 
  UserCheck, 
  Activity, 
  Pill, 
  Smile, 
  ShieldCheck, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  CheckCircle2, 
  PhoneCall, 
  Clock, 
  Building, 
  ArrowRight, 
  ExternalLink, 
  FileText, 
  X, 
  Sparkles,
  Stethoscope,
  Heart
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
import { HOSPITAL_PARTNERS } from '../data/mockData';
import { useCurrency } from '../context/CurrencyContext';
import { useVideoMetadata } from '../hooks/useVideoMetadata';

interface SparshPageProps {
  onOpenConsultModal: (division?: string) => void;
  onOpenVideoModal: (videoSrc: string, title: string, subtitle?: string) => void;
}

interface SparshServiceItem {
  id: string;
  name: string;
  badge: string;
  icon: React.ElementType;
  shortBullets: string[];
  sla: string;
  hospitalBenchmark: string;
  details: {
    overview: string;
    protocols: string[];
    partnerRole: string;
    whatNriReceives: string;
  };
}

export const SparshPage: React.FC<SparshPageProps> = ({
  onOpenConsultModal,
  onOpenVideoModal,
}) => {
  const { formatPrice } = useCurrency();
  const videoMeta = useVideoMetadata('/videos/sparsh_overview.mp4');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Click-to-reveal services state
  const [activeServiceId, setActiveServiceId] = useState<string>('emergency');
  // Read More Modal state
  const [readMoreModalData, setReadMoreModalData] = useState<SparshServiceItem | null>(null);

  const services: SparshServiceItem[] = [
    {
      id: 'emergency',
      name: '24/7 Rapid SOS & Pre-Alerted ICU Admission',
      badge: 'Apollo & Fortis Protocol',
      icon: Ambulance,
      sla: '< 14 Minutes Dispatch SLA',
      hospitalBenchmark: 'Apollo Hospitals, Fortis, Manipal ICU Network',
      shortBullets: [
        'Dedicated 24/7 clinical emergency desk with real-time GPS telemetry',
        'Advanced Life Support (ALS) ambulance dispatch under 14 minutes',
        'Pre-authorized priority ICU/Ward admission (zero waiting at casualty)',
        'Immediate live WhatsApp & phone briefing to overseas NRI children',
      ],
      details: {
        overview:
          'Our emergency response framework bridges the harrowing panic of being thousands of miles away when an acute cardiac event, stroke, or nighttime fall strikes your elderly parents in India. We operate direct emergency hotlines linked to tertiary hospital command centers.',
        protocols: [
          'Dual-dispatch: ALS ambulance + dedicated Sparsh Care Steward dispatched simultaneously',
          'Triage authorization pre-logged with Apollo, Fortis, and Manipal emergency wings',
          'Cashless admission pre-clearance with pre-funded healthcare reserve',
          'Continuous vital sign telemetry streamed to client dashboard in London/NY/Dubai',
        ],
        partnerRole: 'Tertiary partners maintain dedicated emergency bays and direct ICU bed allocation for registered Sparsh elders.',
        whatNriReceives: 'Instant phone call from our on-site physician, live ambulance tracking link, and hospital admission receipt within 30 minutes.',
      },
    },
    {
      id: 'doctor-escorts',
      name: 'Certified Doctor & Outpatient Clinic Escorts',
      badge: 'Doctor-Led Care',
      icon: UserCheck,
      sla: 'Door-to-Door Sanitized Escort',
      hospitalBenchmark: 'Specialist OPDs at Apollo, Fortis, Max, Manipal',
      shortBullets: [
        'Doorstep pickup in air-conditioned executive vehicle with dedicated companion',
        'Assistance with registration, wheelchair mobility, and hospital paperwork',
        'Companion sits through physician consultation and asks NRI-submitted questions',
        'Doctor instructions transcribed and audio briefing uploaded to portal within 2 hours',
      ],
      details: {
        overview:
          'Navigating crowded multi-speciality Indian hospitals is physically exhausting and emotionally intimidating for aging parents living alone. Sparsh Care Stewards act as respectful family proxies who advocate for your parents at every step.',
        protocols: [
          'Pre-appointment coordination with senior MD consultants across cardiology, neurology, and orthopedics',
          'Complete transcription of prescription alterations, lab requests, and diet recommendations',
          'Safe return home, vital check-in, and verification that prescriptions are filled',
        ],
        partnerRole: 'Priority appointment slots and reserved waiting lounges across partnered hospital complexes.',
        whatNriReceives: 'Full audio summary, digital prescription PDF, and physician next-steps report in your private diaspora portal.',
      },
    },
    {
      id: 'vitals-telemetry',
      name: 'Biometric Vitals Telemetry & Home Diagnostics',
      badge: 'Continuous Monitoring',
      icon: Activity,
      sla: 'Bi-Weekly Clinical Vitals',
      hospitalBenchmark: 'NABH Certified Home Labs & Tele-Consultants',
      shortBullets: [
        'Bi-weekly nurse visits for blood pressure, fasting glucose, pulse, and SpO2 telemetry',
        'Home blood sample collection by certified phlebotomists (NABL accredited)',
        'Physician-reviewed longitudinal trends to catch silent decompensation early',
        'Automated alert thresholds sent to overseas family when readings deviate',
      ],
      details: {
        overview:
          'Preventive vigilance is the cornerstone of geriatric wellness. Instead of waiting for an emergency, our routine telemetry tracks chronic cardiovascular and metabolic indicators regularly, preventing preventable hospitalizations.',
        protocols: [
          'Standardized digital biometric monitors calibrated every 90 days',
          'Automatic sync to Dr. Vikramaditya and NRI portal dashboard',
          'Cardiologist advisory review if systolic BP swings > 20 mmHg',
        ],
        partnerRole: 'Direct electronic health record (EHR) sync with attending cardiologists at partner hospitals.',
        whatNriReceives: 'Weekly vitals trajectory graphs, lab report PDFs, and automated physician advisory notes.',
      },
    },
    {
      id: 'pharmacy',
      name: 'Doorstep Pharmacy & Segmented Pill Sorting',
      badge: '100% Authentic Meds',
      icon: Pill,
      sla: 'Zero-Counterfeit Direct Supply',
      hospitalBenchmark: 'Hospital-Chain Accredited Pharmacies',
      shortBullets: [
        '100% genuine medications sourced directly from verified hospital pharmacies',
        'Nurse organizes medicines into weekly morning, afternoon, and night dispensers',
        'Prescription renewal tracking so parents never run out of vital insulin or blood thinners',
        'Eliminates dangerous dosage mix-ups and medication hoarding',
      ],
      details: {
        overview:
          'Medication non-adherence is the single biggest cause of geriatric relapses in India. Counterfeit local pharmacies and confusing bottle labels often lead elders to miss critical doses. We completely eliminate this vulnerability.',
        protocols: [
          'Weekly sealed compartmentalized pill boxes prepared by registered nurses',
          'Batch number and expiry tracking for every tablet',
          'Direct delivery 5 days before existing supplies deplete',
        ],
        partnerRole: 'Medicines sourced from accredited hospital pharmacy chains with tamper-evident seals.',
        whatNriReceives: 'Monthly medication inventory report and automated prescription refill receipts.',
      },
    },
    {
      id: 'companionship',
      name: 'Warm Bedside Companionship & Dignified Elder Care',
      badge: 'Emotional Well-Being',
      icon: Smile,
      sla: 'Weekly Joy & Social Visits',
      hospitalBenchmark: 'Geriatric Psychology & Social Work Best Practices',
      shortBullets: [
        'Empathetic weekly companionship visits for conversation, reading, and evening garden walks',
        'Photo and video updates shared directly with overseas children after each visit',
        'Assistance with festive celebrations, temple visits, and bank/pension logistics',
        'Combats loneliness—the silent health crisis of Indian seniors living alone',
      ],
      details: {
        overview:
          'Beyond clinical medicines, aging parents crave heartfelt connection and human warmth. Our companions are carefully selected for their emotional empathy, patience, and cultural alignment, becoming trusted extended family.',
        protocols: [
          'Background-verified, psychologically screened care associates',
          'Structured activities: memory games, storytelling, music, and strolls',
          'Coordination with overseas children for surprise birthday celebrations and video calls',
        ],
        partnerRole: 'Developed in consultation with leading geriatric mental health counselors.',
        whatNriReceives: 'Candid photo highlights, visit notes, and emotional wellness score updates.',
      },
    },
  ];

  const currentService = services.find((s) => s.id === activeServiceId) || services[0];

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* Top Breadcrumb & Benchmark Anchor */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold text-[#0D3B66] bg-white hover:bg-[#0073B7] hover:text-white transition-all shadow-xs border border-slate-200 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>&larr; Back to Home</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <span className="text-[#0A8754] font-bold">Hospital Benchmarks:</span>
            <span className="hidden sm:inline">Apollo Hospitals &bull; Fortis Healthcare &bull; Manipal Hospitals</span>
            <span className="sm:hidden">Apollo &bull; Fortis</span>
          </div>
        </div>
      </div>

      {/* Hero Screen: More Pictures, Less Text, Hospital Benchmark */}
      <section className="relative hero-radial-bg pt-8 pb-14 lg:pt-12 lg:pb-20 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Headline & Concise CTAs */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#0A8754] text-xs font-black uppercase tracking-wider border border-emerald-200 shadow-xs">
                <HeartHandshake className="w-4 h-4" />
                <span>Sparsh Parental Healthcare &bull; Hospital Benchmark</span>
              </div>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#0D3B66] font-heading tracking-tight leading-[1.15]">
                Hospital-Grade Clinical Care <br />
                <span className="text-[#0A8754]">&amp; Loving Bedside Warmth</span> <br />
                <span className="text-slate-800">For Your Parents Living in India.</span>
              </h1>

              {/* Brief Text - Goal is to get visitor to call/enquire, not read a long document */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Benchmarked against premier tertiary hospital standards (<strong className="text-slate-900 font-bold">Apollo, Fortis, Manipal</strong>). Emergency ICU pre-alert under 14 minutes, certified doctor clinic escorts, and weekly companionship in Bengaluru, Hyderabad &amp; Delhi NCR.
              </p>

              {/* Quick Action CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#services-explore"
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#0A8754] to-[#076740] hover:brightness-110 shadow-[0_8px_20px_rgba(10,135,84,0.3)] transition-all cursor-pointer flex items-center gap-2 group"
                >
                  <span>Explore Clinical Disciplines</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:+918007878863"
                  className="px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#0D3B66] bg-white border border-[#0A8754]/40 hover:bg-emerald-50 shadow-xs transition-colors flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#0A8754]" />
                  <span>24/7 NRI Hotline</span>
                </a>

                <a
                  href="https://wa.me/918007878863?text=Hi%20Sparsh%20Team%2C%20I%20am%20an%20NRI%20inquiring%20about%20parental%20care%20in%20India."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100 transition-colors"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-emerald-600 text-emerald-600" />
                </a>
              </div>

              {/* Clinical Trust Points */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-600 font-semibold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0A8754]" />
                  <span>&lt; 14 Min Emergency ICU SLA</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0A8754]" />
                  <span>Certified MD &amp; Nurse Escorts</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0A8754]" />
                  <span>Cashless Hospital Admission</span>
                </span>
              </div>

            </div>

            {/* Right Marketing Visual (Hospital Benchmark Photo Composition) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(10,135,84,0.18)] border-2 border-emerald-200/80 bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=900&q=80"
                  alt="Compassionate healthcare companion with elderly Indian couple"
                  className="w-full h-[360px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Ambient photo gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#02180E]/90 via-[#02180E]/20 to-transparent pointer-events-none" />

                {/* Floating Hospital Benchmark Badge */}
                <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-300 shadow-md flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[11px] font-black text-[#0D3B66]">Apollo &amp; Fortis Partnered Network</span>
                </div>

                {/* Floating Telemetry Alert Chip */}
                <div className="absolute bottom-4 left-4 right-4 z-10 p-3.5 bg-white/95 backdrop-blur-md rounded-2xl border border-emerald-300/80 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-[#0A8754]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#0D3B66]">Sister Mary &bull; Senior Care Companion</div>
                      <div className="text-[11px] text-slate-500">Accompanying parents for Apollo Cardiology OPD</div>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded text-[10px] font-extrabold bg-emerald-100 text-[#0A8754]">
                    Active
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Hospital Network Credentials Bar */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="text-xs font-black text-slate-500 uppercase tracking-wider">
              Emergency ICU Network &bull; Partnered Hospital Chains
            </span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-slate-700 font-bold text-sm sm:text-base">
            {HOSPITAL_PARTNERS.map((h) => (
              <div 
                key={h.name} 
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-[#0A8754] transition-colors"
              >
                <Building className="w-4 h-4 text-[#0A8754]" />
                <span>{h.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          REQUIREMENT 2: PRESENT SERVICES AS SHORT BULLET POINTS ON CLICK
          + INCLUDE "READ MORE" LINKS FOR DETAILS
          ========================================================================= */}
      <section id="services-explore" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black text-[#0A8754] uppercase tracking-wider block mb-2">
              Click To Explore Each Service
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0D3B66] font-heading">
              Sparsh Clinical &amp; Companionship Disciplines
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Click any service below to view immediate bullet points, response SLAs, and detailed protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Interactive Service Tabs (Click to select) */}
            <div className="lg:col-span-5 space-y-2.5">
              {services.map((s) => {
                const IconComponent = s.icon;
                const isSelected = s.id === activeServiceId;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveServiceId(s.id)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-gradient-to-r from-emerald-50 to-white border-[#0A8754] shadow-md ring-2 ring-[#0A8754]/20'
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-[#0A8754] text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-black uppercase tracking-wider text-[#0A8754]">
                          {s.badge}
                        </div>
                        <div className={`text-sm font-extrabold font-heading ${isSelected ? 'text-[#0D3B66]' : 'text-slate-800'}`}>
                          {s.name}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#0A8754] translate-x-1' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Right: Short Bullet Points on Click + "Read More" Detail Link */}
            <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.04)]">
              
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#0A8754] flex items-center justify-center">
                    <currentService.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#0A8754] bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                      {currentService.badge}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-[#0D3B66] font-heading mt-1">
                      {currentService.name}
                    </h3>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-white border border-[#0A8754]/40 text-[#0A8754] shadow-xs">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{currentService.sla}</span>
                </span>
              </div>

              {/* Short Bullet Points Displayed on Click */}
              <div className="py-6 space-y-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Key Service Highlights:
                </span>
                <ul className="space-y-3">
                  {currentService.shortBullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                      <CheckCircle2 className="w-5 h-5 text-[#0A8754] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons: "Read More" link for details + Book Service */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setReadMoreModalData(currentService)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#0A8754] hover:text-[#076740] bg-emerald-50 hover:bg-emerald-100 px-4 py-2.5 rounded-xl transition-colors cursor-pointer border border-emerald-200"
                >
                  <FileText className="w-4 h-4" />
                  <span>Read Full Protocol Details &rarr;</span>
                </button>

                <a
                  href={`https://wa.me/918007878863?text=${encodeURIComponent('Hi Sparsh Team, I would like to inquire about the ' + currentService.name + ' service for my parents in India.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0A8754] to-[#076740] hover:brightness-110 shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          REQUIREMENT 2 & 3: INCLUDE 1 SHORT VIDEO (UNOBSTRUCTED PRESENTATION)
          Do not cover the moving video with large text blocks or heavy banners
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header above the video - Clean & compact */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-black uppercase tracking-wider mb-2 border border-emerald-500/30">
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Official Healthcare Story Film</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-heading text-white">
              Sparsh Healthcare in Action
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Unobstructed 1080p video demonstration showing emergency life-support dispatch, doctor clinic escorts, and caregiver warmth.
            </p>
          </div>

          {/* Unobstructed Video Container - 16:9 ratio, crystal clear, no giant banners on top */}
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)] border-2 border-emerald-500/30 bg-black">
            
            <video
              ref={videoRef}
              src="/videos/sparsh_overview.mp4"
              playsInline
              loop
              controls
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full aspect-video object-contain bg-black"
            />

            {/* Minimal top status badge (floating non-obstructive) */}
            <div className="absolute top-4 left-4 pointer-events-none">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-black/70 text-emerald-300 border border-emerald-400/30 backdrop-blur-md">
                Sparsh Reel &bull; {videoMeta.formattedDuration}
              </span>
            </div>

            {/* Quick Cinema Modal Trigger */}
            <div className="absolute top-4 right-4 z-20">
              <button
                onClick={() => onOpenVideoModal('/videos/sparsh_overview.mp4', 'Sparsh Healthcare Story', 'Clinical Precision & Sustainable Compassion')}
                className="p-2.5 rounded-full bg-black/70 hover:bg-[#0A8754] text-white border border-white/20 transition-all cursor-pointer backdrop-blur-md"
                title="Watch in Cinema Mode"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Video Metadata & Hospital Verification footer below video */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 max-w-4xl mx-auto text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Filmed on-location in Bengaluru &amp; Hyderabad Partner Clinics</span>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="font-bold text-[#C99738] hover:text-amber-300 flex items-center gap-1 cursor-pointer"
              >
                <span>Contact Sparsh Care Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Transparent Care Plans */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D3B66] font-heading">
              Select Your Parents&apos; Healthcare Concierge Plan
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Every plan includes 24/7 Apollo &amp; Fortis ICU pre-alert authorization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Essential */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Essential SOS Shield</h3>
                <p className="text-xs text-slate-500 mt-1">For independent parents who need 24/7 safety fallback.</p>
                <div className="my-5">
                  <div className="text-3xl font-black text-[#0D3B66]">{formatPrice(55)} <span className="text-xs font-normal text-slate-500">/ mo</span></div>
                  <div className="text-xs text-slate-400">Quarterly or annual retainer</div>
                </div>
                <ul className="space-y-2 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0A8754]" /> 24/7 Emergency clinical hotline</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0A8754]" /> &lt; 14 Min ALS Ambulance dispatch</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0A8754]" /> Pre-alerted ICU admission at Apollo/Fortis</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="w-full py-2.5 rounded-xl text-xs font-bold text-[#0D3B66] bg-slate-100 hover:bg-slate-200 transition-colors text-center block"
              >
                Inquire Essential Care
              </Link>
            </div>

            {/* Comprehensive (Featured) */}
            <div className="p-6 rounded-3xl bg-white border-2 border-[#0A8754] shadow-lg flex flex-col justify-between relative ring-2 ring-[#0A8754]/10">
              <span className="absolute -top-3 right-6 px-3 py-1 rounded-full text-[10px] font-black uppercase bg-[#0A8754] text-white shadow-xs">
                Most Popular
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Comprehensive Care</h3>
                <p className="text-xs text-slate-500 mt-1">Bi-weekly vitals telemetry + OPD clinic doctor escorts.</p>
                <div className="my-5">
                  <div className="text-3xl font-black text-[#0A8754]">{formatPrice(118)} <span className="text-xs font-normal text-slate-500">/ mo</span></div>
                  <div className="text-xs text-slate-400">All Essential benefits included</div>
                </div>
                <ul className="space-y-2 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0A8754]" /> Certified companion hospital escorts</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0A8754]" /> Bi-weekly vitals telemetry (BP, Glucose, SpO2)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0A8754]" /> Audio doctor notes uploaded to client portal</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0A8754] to-[#076740] hover:brightness-110 shadow-md transition-all text-center block"
              >
                Inquire Comprehensive Care
              </Link>
            </div>

            {/* Full Concierge */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Full Domiciliary Concierge</h3>
                <p className="text-xs text-slate-500 mt-1">Weekly companionship visits + doorstep pharmacy dispensing.</p>
                <div className="my-5">
                  <div className="text-3xl font-black text-[#0D3B66]">{formatPrice(195)} <span className="text-xs font-normal text-slate-500">/ mo</span></div>
                  <div className="text-xs text-slate-400">Complete dedicated stewardship</div>
                </div>
                <ul className="space-y-2 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0A8754]" /> Weekly warm companionship &amp; social walks</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0A8754]" /> Doorstep medicine sorting &amp; refills</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0A8754]" /> Dedicated Care Manager on 24/7 WhatsApp</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="w-full py-2.5 rounded-xl text-xs font-bold text-[#0D3B66] bg-slate-100 hover:bg-slate-200 transition-colors text-center block"
              >
                Inquire Concierge Care
              </Link>
            </div>

          </div>

          <div className="mt-8 text-center">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0073B7] hover:underline"
            >
              <span>Compare savings vs fragmented doctors and maids on our Full Pricing Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          READ MORE DETAIL MODAL (CLINICAL SLAS & PROTOCOLS)
          ========================================================================= */}
      {readMoreModalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-emerald-50 via-white to-emerald-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#0A8754] flex items-center justify-center">
                  <readMoreModalData.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase text-[#0A8754] tracking-wider">
                    {readMoreModalData.badge}
                  </span>
                  <h3 className="text-lg font-black text-[#0D3B66] font-heading">
                    {readMoreModalData.name}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setReadMoreModalData(null)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-slate-700">
              
              <div>
                <h4 className="font-extrabold text-slate-900 mb-1 text-sm">Service Overview &amp; Objective</h4>
                <p className="text-slate-600 leading-relaxed">{readMoreModalData.details.overview}</p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
                <div className="font-black text-[#0A8754] uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Clinical Protocols:</span>
                </div>
                <ul className="space-y-1.5 pl-1">
                  {readMoreModalData.details.protocols.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A8754] mt-2 shrink-0" />
                      <span className="text-slate-700 font-medium">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-extrabold text-slate-900 mb-1 text-sm">Hospital Network Role (Apollo, Fortis, Manipal)</h4>
                <p className="text-slate-600 leading-relaxed">{readMoreModalData.details.partnerRole}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200">
                <span className="font-bold text-slate-800 block mb-0.5">What the Overseas Child Receives:</span>
                <p className="text-slate-600">{readMoreModalData.details.whatNriReceives}</p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-3">
              <button
                onClick={() => setReadMoreModalData(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100"
              >
                Close Details
              </button>
              <a
                href={`https://wa.me/918007878863?text=${encodeURIComponent('Hi Sparsh Team, I would like to inquire about the clinical protocols for: ' + readMoreModalData.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#0A8754] hover:bg-[#076740] shadow-sm flex items-center gap-1.5"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
