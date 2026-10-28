import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Building2, 
  ShieldCheck, 
  FileText, 
  Wrench, 
  Users, 
  Receipt, 
  CheckCircle2, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  ArrowRight, 
  Camera, 
  Droplets, 
  Zap, 
  FileCheck, 
  Clock, 
  Sparkles, 
  MapPin, 
  Lock, 
  DollarSign, 
  X,
  PhoneCall,
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
import { SAMPLE_INSPECTION_REPORT } from '../data/mockData';
import { useCurrency } from '../context/CurrencyContext';
import { useVideoMetadata } from '../hooks/useVideoMetadata';

interface AegisPageProps {
  onOpenConsultModal: (division?: string) => void;
  onOpenVideoModal: (videoSrc: string, title: string, subtitle?: string) => void;
}

interface AegisServiceItem {
  id: string;
  name: string;
  badge: string;
  icon: React.ElementType;
  shortBullets: string[];
  sla: string;
  realEstateBenchmark: string;
  details: {
    overview: string;
    protocols: string[];
    benchmarkStandards: string;
    whatNriReceives: string;
  };
}

export const AegisPage: React.FC<AegisPageProps> = ({
  onOpenConsultModal,
  onOpenVideoModal,
}) => {
  const { formatPrice } = useCurrency();
  const videoMeta = useVideoMetadata('/videos/aegis_overview.mp4');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Click-to-reveal services state
  const [activeServiceId, setActiveServiceId] = useState<string>('tenant-vetting');
  // Read More Modal state
  const [readMoreModalData, setReadMoreModalData] = useState<AegisServiceItem | null>(null);

  const services: AegisServiceItem[] = [
    {
      id: 'tenant-vetting',
      name: 'Corporate Tenant Scouting & Biometric Leases',
      badge: 'CIBIL > 750 Only',
      icon: Users,
      sla: 'Average 18-Day Placement SLA',
      realEstateBenchmark: 'Godrej Properties & Sobha Premier Executive Tenants',
      shortBullets: [
        'Exclusive corporate tenant scouting (Google, Microsoft, Amazon, Deloitte MNC expats)',
        'Mandatory 5-tier KYC: CIBIL credit score, HR validation, permanent address check',
        'Official police verification filed with the local police jurisdiction prior to move-in',
        'Lawyer-drafted biometric digital lease agreement with strong eviction covenants',
      ],
      details: {
        overview:
          'Unorganized brokers often place unvetted tenants who default on rent or refuse to vacate. Aegis enforces institutional corporate tenant vetting benchmarked against luxury developer standards (Godrej, My Home, Sobha), ensuring complete legal safeguards for NRI owners.',
        protocols: [
          'Direct employment confirmation with corporate HR (salary slips + company ID)',
          'Minimum CIBIL credit score threshold of 750+',
          'Aadhaar biometric authentication and local police station clearance documentation',
          'Registered 11-month lease with automatic annual 5% escalation and dispute jurisdiction clauses',
        ],
        benchmarkStandards: 'Benchmarked against Godrej Living and Sobha Asset Care executive corporate tenant agreements.',
        whatNriReceives: 'Tenant verification dossier, CIBIL credit report, police stamp acknowledgment, and digitally signed lease agreement PDF.',
      },
    },
    {
      id: 'rent-escrow',
      name: 'Automated Rent Escrow & Form 15CA/15CB Repatriation',
      badge: 'Disbursed by 5th of Month',
      icon: Receipt,
      sla: '100% On-Time Rent Guarantee',
      realEstateBenchmark: 'RERA-Compliant Escrow Banking Framework',
      shortBullets: [
        'Rent collected into RERA-compliant escrow trust account on the 1st of every month',
        'Net proceeds disbursed on the 5th directly to your NRO or NRE account in India',
        'Automated payment gateway with zero manual bank chasing or awkward tenant calls',
        'Annual Form 15CA & 15CB documentation prepared by Chartered Accountants for hassle-free repatriation',
      ],
      details: {
        overview:
          'Collecting rent across different time zones is stressful. With Aegis, your tenant pays into an institutional escrow. We automate reconciliation, deduct approved maintenance or society dues with receipts, and disburse on the 5th without delay.',
        protocols: [
          'Automated recurring mandates (e-NACH / UPI Autopay / wire transfer)',
          'Instant penalty triggers and legal notices if rent is delayed past the 3rd of the month',
          'FEMA compliant foreign remittance documentation prepared by partner CAs for repatriation to US/UK/UAE',
        ],
        benchmarkStandards: 'Institutional banking escrow mechanism matching tier-1 REIT and commercial property funds.',
        whatNriReceives: 'Monthly rental ledger statement, TDS withholding certificates, and CA-certified Form 15CA/15CB repatriation pack.',
      },
    },
    {
      id: 'forensic-audits',
      name: '80-Point Quarterly Forensic Audits & 4K Walkthroughs',
      badge: 'Sensor-Assisted Audits',
      icon: Camera,
      sla: 'Quarterly Laser & Moisture Audits',
      realEstateBenchmark: 'Quality Audits Benchmarked to Sobha Construction Standards',
      shortBullets: [
        '80-point sensor inspection covering structural dampness, electrical breakers, and concealed plumbing',
        'Infrared moisture detectors catch hairline wall seepage before it ruins expensive woodwork',
        'Timestamped 4K ultra-HD video walkthrough and 50+ high-res inspection photos',
        'Interactive digital report uploaded to client portal with repair severity index',
      ],
      details: {
        overview:
          'Hidden water seepage from monsoon rains or calcified plumbing valves can destroy hundreds of thousands in interior woodwork and granite finishes. Our field engineers conduct forensic quarterly audits to protect your asset value.',
        protocols: [
          'Infrared thermal scanning for wall dampness and pipe leakage behind tiles',
          'MCB electrical breaker trip timing tests and earth resistance calibration (< 2 ohms)',
          'Modular kitchen Blum hinge realignments and balcony drainage slope checks',
          'Pre-monsoon and post-monsoon comprehensive structural audits',
        ],
        benchmarkStandards: 'Inspection metrics inspired by Sobha Ltd’s legendary German engineering precision audits.',
        whatNriReceives: 'Interactive portal audit report with 50+ zoomable photos, 4K walkthrough video, and sensor score breakdown (0-100%).',
      },
    },
    {
      id: 'maintenance',
      name: 'Zero-Markup Turnkey Maintenance & Repairs',
      badge: 'Strict 0% Contractor Markup',
      icon: Wrench,
      sla: '24-Hour Emergency Response SLA',
      realEstateBenchmark: 'Godrej Living Facility Management Standards',
      shortBullets: [
        'In-house certified plumbers, electricians, carpenters, and waterproofing specialists',
        'Zero vendor markups—you pay the exact verified technician invoice, nothing more',
        'Minor repairs fixed immediately within pre-authorized emergency threshold',
        'Major repairs submitted with 2 itemized quotes for 1-click digital portal approval',
      ],
      details: {
        overview:
          'Local contractors notoriously overcharge absentee NRI owners. We provide transparent facility maintenance with strictly zero percentage markup. You see original invoices, technician work logs, and before-and-after photo evidence.',
        protocols: [
          'Pre-approved threshold (e.g., ₹5,000) for instant emergency plumbing/electrical fixes',
          'Competitive dual-quote bidding for deep painting, deep cleaning, or appliance replacement',
          'Verified original tax invoices uploaded directly to your portal ledger',
        ],
        benchmarkStandards: 'Standardized rate cards aligned with Godrej and My Home facility management contracts.',
        whatNriReceives: 'Before-and-after photo comparison, digital technician timesheet, and verified zero-markup vendor invoice.',
      },
    },
    {
      id: 'legal-liaisons',
      name: 'Khata Mutation, Property Tax & Society AGM Proxy',
      badge: 'Municipal & Legal Stewardship',
      icon: FileCheck,
      sla: 'Dedicated Government Liaison',
      realEstateBenchmark: 'Prestige & My Home Gated Society Representation',
      shortBullets: [
        'On-time property tax payments (BBMP, GHMC, MCGM, DTCP) with verified government challans',
        'Municipal Khata mutation, title verification, and Encumbrance Certificate (EC) updates',
        'Attendance at gated community Annual General Meetings (AGM) as your official proxy',
        'Direct coordination with Resident Welfare Associations (RWA) for parking and society dues',
      ],
      details: {
        overview:
          'Dealing with Indian municipal offices and resident welfare association politics from abroad is frustrating. Our legal and municipal stewards handle paperwork, attend society meetings, and ensure all property taxes remain spotless.',
        protocols: [
          'Annual Encumbrance Certificate (EC) retrieval from the Sub-Registrar office to ensure clean title',
          'Tracking BBMP/GHMC property tax rebate periods to secure 5% municipal discounts',
          'Voting representation at society AGM meetings following your written instructions',
        ],
        benchmarkStandards: 'Standard legal stewardship practiced by institutional real estate trusts.',
        whatNriReceives: 'Official municipal tax payment challans, updated EC certificates, and typed AGM society meeting minutes.',
      },
    },
  ];

  const currentService = services.find((s) => s.id === activeServiceId) || services[0];

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
            <span className="text-[#0073B7] font-bold">Real Estate Benchmarks:</span>
            <span className="hidden sm:inline">Godrej Properties &bull; My Home Group &bull; Sobha Ltd &bull; Prestige</span>
            <span className="sm:hidden">Godrej &bull; My Home &bull; Sobha</span>
          </div>
        </div>
      </div>

      {/* Hero Screen: More Pictures, Less Text, Real Estate Benchmark */}
      <section className="relative hero-radial-bg pt-8 pb-14 lg:pt-12 lg:pb-20 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Headline & Concise CTAs */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-[#0073B7] text-xs font-black uppercase tracking-wider border border-sky-200 shadow-xs">
                <Building2 className="w-4 h-4" />
                <span>Aegis Property Stewardship &bull; Real Estate Benchmark</span>
              </div>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#0D3B66] font-heading tracking-tight leading-[1.15]">
                Institutional Asset Management <br />
                <span className="text-[#0073B7]">For High-Yield Indian Real Estate</span> <br />
                <span className="text-slate-800">Owned by Global NRIs.</span>
              </h1>

              {/* Brief Text - Goal is to get visitor to call/enquire, not read a long document */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Benchmarked against premier developer management portals (<strong className="text-slate-900 font-bold">Godrej, My Home, Sobha</strong>). Corporate tenant vetting, rent escrow remittance by the 5th, 80-point quarterly forensic audits, and zero-markup turnkey maintenance in Bengaluru, Hyderabad &amp; Delhi NCR.
              </p>

              {/* Quick Action CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#disciplines-explore"
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#0073B7] to-[#0D3B66] hover:brightness-110 shadow-[0_8px_20px_rgba(0,115,183,0.3)] transition-all cursor-pointer flex items-center gap-2 group"
                >
                  <span>Explore Stewardship Disciplines</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:+918007878863"
                  className="px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#0D3B66] bg-white border border-[#0073B7]/40 hover:bg-sky-50 shadow-xs transition-colors flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#0073B7]" />
                  <span>Call Property Desk</span>
                </a>

                <a
                  href="https://wa.me/918007878863?text=Hi%20Aegis%20Team%2C%20I%20am%20an%20NRI%20looking%20for%20property%20stewardship%20in%20India."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100 transition-colors"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-emerald-600 text-emerald-600" />
                </a>
              </div>

              {/* Real Estate Trust Points */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-600 font-semibold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0073B7]" />
                  <span>Rent Disbursed by 5th</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0073B7]" />
                  <span>80-Point Sensor Audit</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0073B7]" />
                  <span>FEMA Form 15CA/15CB Escrow</span>
                </span>
              </div>

            </div>

            {/* Right Marketing Visual (Godrej/Sobha/My Home Benchmark Photo Composition) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,115,183,0.2)] border-2 border-sky-200/80 bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80"
                  alt="Luxury modern gated high-rise residential towers in Bengaluru and Hyderabad"
                  className="w-full h-[360px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Ambient photo gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#041021]/90 via-[#041021]/20 to-transparent pointer-events-none" />

                {/* Floating Real Estate Benchmark Badge */}
                <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-sky-300 shadow-md flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0073B7] animate-ping" />
                  <span className="text-[11px] font-black text-[#0D3B66]">Godrej &bull; My Home &bull; Sobha Communities</span>
                </div>

                {/* Floating Asset Score Chip */}
                <div className="absolute bottom-4 left-4 right-4 z-10 p-3.5 bg-white/95 backdrop-blur-md rounded-2xl border border-sky-300/80 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-[#0073B7]">
                      <Key className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#0D3B66]">Prestige High Fields &bull; Flat 1802</div>
                      <div className="text-[11px] text-slate-500">Corporate Tenant Placed &bull; 94% Audit Score</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded text-[10px] font-black bg-emerald-100 text-[#0A8754]">
                    Verified
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Premier Managed Micro-Markets Bar */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="text-xs font-black text-slate-500 uppercase tracking-wider">
              High-Yield Managed Micro-Markets &bull; Premier Gated Communities
            </span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-slate-700 font-bold text-xs sm:text-sm">
            {[
              'Bengaluru (Whitefield & Indiranagar)',
              'Hyderabad (Financial District & Hitec City)',
              'Delhi NCR (Golf Course Rd & DLF 5)',
              'Pune (Koregaon Park & Baner)',
              'Chennai (OMR & Boat Club)',
            ].map((m) => (
              <span key={m} className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#0073B7]" />
                <span>{m}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          REQUIREMENT 2: PRESENT SERVICES AS SHORT BULLET POINTS ON CLICK
          + INCLUDE "READ MORE" LINKS FOR DETAILS
          ========================================================================= */}
      <section id="disciplines-explore" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black text-[#0073B7] uppercase tracking-wider block mb-2">
              Click To Explore Each Discipline
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0D3B66] font-heading">
              The Five Disciplines of Aegis Stewardship
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Click any discipline below to view key bullet points, operational SLAs, and legal documentation.
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
                        ? 'bg-gradient-to-r from-sky-50 to-white border-[#0073B7] shadow-md ring-2 ring-[#0073B7]/20'
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-[#0073B7] text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-black uppercase tracking-wider text-[#0073B7]">
                          {s.badge}
                        </div>
                        <div className={`text-sm font-extrabold font-heading ${isSelected ? 'text-[#0D3B66]' : 'text-slate-800'}`}>
                          {s.name}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#0073B7] translate-x-1' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Right: Short Bullet Points on Click + "Read More" Detail Link */}
            <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.04)]">
              
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#0073B7] flex items-center justify-center">
                    <currentService.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#0073B7] bg-sky-100/80 px-2.5 py-0.5 rounded-full">
                      {currentService.badge}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-[#0D3B66] font-heading mt-1">
                      {currentService.name}
                    </h3>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-white border border-[#0073B7]/40 text-[#0073B7] shadow-xs">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{currentService.sla}</span>
                </span>
              </div>

              {/* Short Bullet Points Displayed on Click */}
              <div className="py-6 space-y-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Key Discipline Highlights:
                </span>
                <ul className="space-y-3">
                  {currentService.shortBullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                      <CheckCircle2 className="w-5 h-5 text-[#0073B7] shrink-0 mt-0.5" />
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
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#0073B7] hover:text-[#0D3B66] bg-sky-50 hover:bg-sky-100 px-4 py-2.5 rounded-xl transition-colors cursor-pointer border border-sky-200"
                >
                  <FileText className="w-4 h-4" />
                  <span>Read Full Audit Protocols &rarr;</span>
                </button>

                <a
                  href={`https://wa.me/918007878863?text=${encodeURIComponent('Hi Aegis Team, I would like to inquire about the ' + currentService.name + ' discipline for my property in India.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0073B7] to-[#0D3B66] hover:brightness-110 shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
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
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header above the video - Clean & compact */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-black uppercase tracking-wider mb-2 border border-sky-500/30">
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Aegis Forensic Demonstration Film</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-heading text-white">
              Aegis Property Stewardship in Action
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Unobstructed 1080p video demonstration showing 80-point sensor inspections, tenant key handovers, and escrow remittances in Hyderabad &amp; Bengaluru.
            </p>
          </div>

          {/* Unobstructed Video Container - 16:9 ratio, crystal clear, no giant banners on top */}
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)] border-2 border-sky-500/30 bg-black">
            
            <video
              ref={videoRef}
              src="/videos/aegis_overview.mp4"
              playsInline
              loop
              controls
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full aspect-video object-contain bg-black"
            />

            {/* Minimal top status badge (floating non-obstructive) */}
            <div className="absolute top-4 left-4 pointer-events-none">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-black/70 text-sky-300 border border-sky-400/30 backdrop-blur-md">
                Aegis Reel &bull; {videoMeta.formattedDuration}
              </span>
            </div>

            {/* Quick Cinema Modal Trigger */}
            <div className="absolute top-4 right-4 z-20">
              <button
                onClick={() => onOpenVideoModal('/videos/aegis_overview.mp4', 'Aegis Property Story', 'Forensic Asset Stewardship for NRI Landlords')}
                className="p-2.5 rounded-full bg-black/70 hover:bg-[#0073B7] text-white border border-white/20 transition-all cursor-pointer backdrop-blur-md"
                title="Watch in Cinema Mode"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Video Metadata & Real Estate Verification footer below video */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 max-w-4xl mx-auto text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Filmed on-location in Prestige &amp; Sobha Gated Communities</span>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="font-bold text-[#C99738] hover:text-amber-300 flex items-center gap-1 cursor-pointer"
              >
                <span>Contact Property Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Transparent Asset Fee Structure */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D3B66] font-heading">
              Predictable Institutional Asset Pricing
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Standard 8% rental escrow retainer with strict zero contractor markup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Vacant Asset Protection */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Vacant Asset Caretaker</h3>
                <p className="text-xs text-slate-500 mt-1">For locked apartments, villas, and vacant land in India.</p>
                <div className="my-5">
                  <div className="text-3xl font-black text-[#0D3B66]">{formatPrice(45)} <span className="text-xs font-normal text-slate-500">/ mo</span></div>
                  <div className="text-xs text-slate-400">Quarterly inspection retainer</div>
                </div>
                <ul className="space-y-2 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0073B7]" /> Monthly biometric physical check-ins</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0073B7]" /> Utility bill &amp; property tax clearing</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0073B7]" /> Key safe-keeping &amp; anti-encroachment</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="w-full py-2.5 rounded-xl text-xs font-bold text-[#0D3B66] bg-slate-100 hover:bg-slate-200 transition-colors text-center block"
              >
                Inquire Vacant Care
              </Link>
            </div>

            {/* Tenanted Shield (Featured) */}
            <div className="p-6 rounded-3xl bg-white border-2 border-[#0073B7] shadow-lg flex flex-col justify-between relative ring-2 ring-[#0073B7]/10">
              <span className="absolute -top-3 right-6 px-3 py-1 rounded-full text-[10px] font-black uppercase bg-[#0073B7] text-white shadow-xs">
                Most Popular
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Tenanted Asset Shield</h3>
                <p className="text-xs text-slate-500 mt-1">Complete hands-off tenancy and rental escrow stewardship.</p>
                <div className="my-5">
                  <div className="text-3xl font-black text-[#0073B7]">8% <span className="text-xs font-normal text-slate-500">of gross rent</span></div>
                  <div className="text-xs text-slate-400">Min {formatPrice(50)}/mo &bull; Disbursed by 5th</div>
                </div>
                <ul className="space-y-2 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0073B7]" /> CIBIL &gt; 750 corporate tenant scouting</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0073B7]" /> Automated escrow rent collection</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0073B7]" /> 80-point quarterly sensor audits &amp; videos</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0073B7] to-[#0D3B66] hover:brightness-110 shadow-md transition-all text-center block"
              >
                Inquire Tenanted Shield
              </Link>
            </div>

            {/* Multi-Asset Portfolio */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Multi-Asset Portfolio</h3>
                <p className="text-xs text-slate-500 mt-1">For NRIs with 2+ properties across multiple Indian cities.</p>
                <div className="my-5">
                  <div className="text-3xl font-black text-[#0D3B66]">Custom <span className="text-xs font-normal text-slate-500">Volume Rate</span></div>
                  <div className="text-xs text-slate-400">Dedicated Portfolio Asset Director</div>
                </div>
                <ul className="space-y-2 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0073B7]" /> Multi-city consolidated dashboard</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0073B7]" /> Annual FEMA Form 15CA/15CB package</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0073B7]" /> Priority turn-around on tenant transitions</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="w-full py-2.5 rounded-xl text-xs font-bold text-[#0D3B66] bg-slate-100 hover:bg-slate-200 transition-colors text-center block"
              >
                Inquire Portfolio
              </Link>
            </div>

          </div>

          <div className="mt-8 text-center">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0073B7] hover:underline"
            >
              <span>Calculate exact rental yield and net savings on our Full Pricing Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          READ MORE DETAIL MODAL (REAL ESTATE AUDIT CRITERIA & LEGAL PROTOCOLS)
          ========================================================================= */}
      {readMoreModalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-sky-50 via-white to-sky-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0073B7] flex items-center justify-center">
                  <readMoreModalData.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase text-[#0073B7] tracking-wider">
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
                <h4 className="font-extrabold text-slate-900 mb-1 text-sm">Discipline Overview &amp; Objective</h4>
                <p className="text-slate-600 leading-relaxed">{readMoreModalData.details.overview}</p>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200/80 space-y-2">
                <div className="font-black text-[#0073B7] uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Institutional Operational Protocols:</span>
                </div>
                <ul className="space-y-1.5 pl-1">
                  {readMoreModalData.details.protocols.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0073B7] mt-2 shrink-0" />
                      <span className="text-slate-700 font-medium">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-extrabold text-slate-900 mb-1 text-sm">Real Estate Developer Benchmark Standards</h4>
                <p className="text-slate-600 leading-relaxed">{readMoreModalData.details.benchmarkStandards}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200">
                <span className="font-bold text-slate-800 block mb-0.5">What the Overseas Landlord Receives:</span>
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
                href={`https://wa.me/918007878863?text=${encodeURIComponent('Hi Aegis Team, I would like to inquire about the audit protocols for: ' + readMoreModalData.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#0073B7] hover:bg-[#0D3B66] shadow-sm flex items-center gap-1.5"
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
