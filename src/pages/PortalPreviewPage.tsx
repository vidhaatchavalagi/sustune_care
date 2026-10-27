import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  HeartHandshake, 
  ShieldCheck, 
  FileText, 
  Activity, 
  Download, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  Calendar, 
  Phone, 
  User, 
  Wrench, 
  Pill, 
  FileCheck, 
  ArrowUpRight, 
  TrendingUp,
  MapPin,
  Ambulance,
  Lock,
  Sparkles,
  ShieldAlert,
  Bell,
  ArrowLeft
} from 'lucide-react';
import { SAMPLE_VITALS, SAMPLE_DOCTOR_VISIT, SAMPLE_INSPECTION_REPORT } from '../data/mockData';

export const PortalPreviewPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'property' | 'health' | 'vault'>('property');
  const [sosActive, setSosActive] = useState(false);
  const [sosTimer, setSosTimer] = useState(12);

  // Simulated countdown for SOS
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (sosActive && sosTimer > 0) {
      interval = setInterval(() => {
        setSosTimer((prev) => (prev > 1 ? prev - 1 : 1));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [sosActive, sosTimer]);

  const triggerSosSimulation = () => {
    setSosActive(true);
    setSosTimer(12);
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10 lg:py-14 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#0073B7]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#C99738]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back to Home Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-[#0D3B66] bg-white hover:bg-[#0073B7] hover:text-white transition-all shadow-xs border border-slate-200 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>&larr; Back to Home</span>
          </Link>
        </div>

        {/* Top Portal Banner with luxury dark glass */}
        <div className="mb-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0D3B66] via-[#082542] to-[#041021] text-white border border-[#C99738]/50 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          {/* Subtle top light shimmer */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C99738] to-transparent opacity-80" />

          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#C99738]/20 border border-[#C99738]/50 flex items-center justify-center text-[#C99738] shadow-inner shrink-0">
              <Lock className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Dual-Shield Live Sandbox
                </span>
                <span className="text-xs text-slate-300 font-mono">Client ID: #SC-LON-4482</span>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black font-heading mt-1 text-white">
                Dr. Vikramaditya Reddy &mdash; Diaspora Portal
              </h1>
              <p className="text-xs text-slate-300 mt-0.5">
                Residence: London, United Kingdom &bull; Managed Hubs: Hyderabad &amp; Bengaluru
              </p>
            </div>
          </div>

          {/* Time Sync & SOS Trigger Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full md:w-auto">
            <div className="px-3.5 py-2.5 rounded-2xl bg-white/10 border border-white/15 text-xs text-slate-300 backdrop-blur-md">
              <div className="flex items-center gap-1.5 font-bold">
                <Clock className="w-3.5 h-3.5 text-[#C99738]" />
                <span>London: 04:30 AM BST</span>
              </div>
              <div className="text-[11px] text-amber-200/90 font-medium mt-0.5">
                India (IST): 09:00 AM (Field Stewards Active)
              </div>
            </div>

            <button
              onClick={triggerSosSimulation}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-black transition-all shadow-lg flex items-center gap-2 cursor-pointer ${
                sosActive
                  ? 'bg-rose-600 text-white animate-pulse'
                  : 'bg-rose-500/20 border border-rose-500/60 text-rose-200 hover:bg-rose-600 hover:text-white'
              }`}
            >
              <Ambulance className="w-4 h-4" />
              <span>{sosActive ? `Simulated SOS ETA: ${sosTimer}m` : 'Test Emergency SOS'}</span>
            </button>
          </div>
        </div>

        {/* SOS Alert Banner (if simulated) */}
        {sosActive && (
          <div className="mb-8 p-5 sm:p-6 rounded-3xl bg-rose-50 border-2 border-rose-400 text-rose-950 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-200 text-rose-700 flex items-center justify-center shrink-0 shadow-inner">
                <Ambulance className="w-6 h-6 animate-bounce" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-black font-heading text-rose-900">
                  [DEMO] Rapid Clinical Dispatch Initiated &bull; Apollo Jubilee Hills Pre-Alerted
                </h4>
                <p className="text-xs text-rose-800 mt-0.5 leading-relaxed">
                  ALS Paramedic team dispatched (Live ETA: {sosTimer} mins). Sparsh Care Companion Sister Mary notified and en-route. Overseas briefing line open.
                </p>
              </div>
            </div>
            <button
              onClick={() => setSosActive(false)}
              className="px-4 py-2 rounded-xl text-xs font-black text-rose-800 bg-rose-200 hover:bg-rose-300 transition-colors shrink-0 cursor-pointer shadow-xs"
            >
              Dismiss Demo Alert
            </button>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 mb-8 space-x-2 sm:space-x-4 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('property')}
            className={`pb-4 px-3 sm:px-6 text-xs sm:text-sm font-extrabold flex items-center gap-2 border-b-2 transition-all cursor-pointer shrink-0 ${
              activeTab === 'property'
                ? 'border-[#0073B7] text-[#0073B7]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Aegis Real Estate Portfolio (2)</span>
          </button>

          <button
            onClick={() => setActiveTab('health')}
            className={`pb-4 px-3 sm:px-6 text-xs sm:text-sm font-extrabold flex items-center gap-2 border-b-2 transition-all cursor-pointer shrink-0 ${
              activeTab === 'health'
                ? 'border-[#0A8754] text-[#0A8754]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <HeartHandshake className="w-4 h-4" />
            <span>Sparsh Parental Health Hub</span>
          </button>

          <button
            onClick={() => setActiveTab('vault')}
            className={`pb-4 px-3 sm:px-6 text-xs sm:text-sm font-extrabold flex items-center gap-2 border-b-2 transition-all cursor-pointer shrink-0 ${
              activeTab === 'vault'
                ? 'border-[#C99738] text-[#8B601C]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Repatriation &amp; Document Vault</span>
          </button>
        </div>

        {/* TAB 1: AEGIS PROPERTY DASHBOARD */}
        {activeTab === 'property' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Property Overview Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Main Active Asset */}
              <div className="lg:col-span-2 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.03)] space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-sky-100 text-[#0073B7]">
                      Prime Asset &bull; Hyderabad
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-heading mt-1.5">
                      Prestige High Fields &mdash; 3BHK Luxury Tower 4, Flat 1802
                    </h2>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#0073B7]" />
                      Financial District, Gachibowli, Hyderabad 500032
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-500 block">Monthly Rent</span>
                    <span className="text-xl sm:text-2xl font-black text-[#0D3B66] font-heading">
                      ₹75,000 / mo
                    </span>
                  </div>
                </div>

                {/* Tenant & Escrow Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-slate-700 uppercase">Tenant Profile</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-black bg-emerald-100 text-emerald-800">
                        KYC Verified
                      </span>
                    </div>
                    <div className="text-sm font-extrabold text-slate-900">Arun Mehta</div>
                    <div className="text-xs text-slate-500">Senior Director of Engineering, Microsoft IDC</div>
                    <div className="text-[11px] text-slate-600 flex items-center gap-1.5 pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>CIBIL Score: 815 &bull; Police Verification #HYD-8819</span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-slate-700 uppercase">Escrow Remittance</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-black bg-sky-100 text-[#0073B7]">
                        Auto-Wire Active
                      </span>
                    </div>
                    <div className="text-sm font-extrabold text-slate-900">Next Payout: Nov 5, 2026</div>
                    <div className="text-xs text-slate-500">Destination: ICICI Bank NRE A/C #****9812</div>
                    <div className="text-[11px] text-slate-600 flex items-center gap-1.5 pt-1">
                      <FileCheck className="w-3.5 h-3.5 text-[#0073B7]" />
                      <span>TDS Deducted &amp; Form 16A Auto-Generated</span>
                    </div>
                  </div>
                </div>

                {/* Latest Inspection & Maintenance */}
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-black text-emerald-900">
                        Q3 Forensic Inspection Report Available
                      </span>
                    </div>
                    <p className="text-xs text-emerald-800 mt-1">
                      Audited by Suresh Varma on Oct 18, 2026. Health Score: <strong>94/100</strong> (1 minor silicone gasket replacement approved).
                    </p>
                  </div>
                  <button className="px-4 py-2 rounded-xl text-xs font-extrabold text-white bg-[#0073B7] hover:bg-[#0D3B66] transition-colors shrink-0 flex items-center gap-1.5 shadow-sm cursor-pointer">
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF Report</span>
                  </button>
                </div>
              </div>

              {/* Maintenance Tickets & Summary */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.03)] space-y-4">
                <h3 className="text-base font-black text-slate-900 font-heading flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#0073B7]" />
                  <span>Active Maintenance Ledger</span>
                </h3>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-extrabold text-slate-800">Master Shower Diverter Gasket</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                        In Progress
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500">Preventive silicone calcification replacement.</p>
                    <div className="text-[11px] text-slate-700 font-bold pt-1">
                      Approved SLA Quote: ₹1,850 (Zero Contractor Markup)
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-extrabold text-slate-800">Pre-Monsoon Balcony Grouting</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                        Completed
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500">Fosroc epoxy sealant applied to external terrace tiles.</p>
                    <div className="text-[11px] text-slate-700 font-bold pt-1">
                      Audited Cost: ₹4,200 &bull; 100% Verified
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <button className="w-full py-2.5 rounded-xl text-xs font-bold text-[#0073B7] bg-sky-50 hover:bg-sky-100 transition-colors cursor-pointer">
                    + Raise New Property Stewardship Request
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: SPARSH PARENT HEALTH HUB */}
        {activeTab === 'health' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Parents Bio Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.03)] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-[#0A8754] shadow-xs shrink-0">
                  <HeartHandshake className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-[#0A8754]">
                      Care Status: Actively Monitored
                    </span>
                    <span className="text-xs text-slate-500 font-medium">Jubilee Hills, Hyderabad</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-heading mt-1">
                    Sundaram Reddy (78) &amp; Lakshmi Reddy (73)
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Assigned Clinical Care Companion: <strong>Sister Mary (RN, BLS Certified)</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="tel:+918007878863"
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0A8754] hover:bg-[#076740] transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Care Companion Desk</span>
                </a>
              </div>
            </div>

            {/* Live Biometric Telemetry */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-black text-slate-900 font-heading flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#0A8754]" />
                  <span>Biometric Telemetry &amp; Vital Signs</span>
                </h3>
                <span className="text-xs text-slate-500 font-medium">Auto-synced via Omron Bluetooth Monitor</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {SAMPLE_VITALS.map((vital) => (
                  <div key={vital.id} className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-[0_8px_25px_rgba(0,0,0,0.02)] space-y-2 hover:border-emerald-300 transition-all">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 font-bold">{vital.metric}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-black bg-emerald-100 text-emerald-800">
                        {vital.status}
                      </span>
                    </div>
                    <div className="text-2xl font-black text-slate-900 font-heading">
                      {vital.value}
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      {vital.notes}
                    </p>
                    <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-100 font-mono">
                      {vital.timestamp}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Doctor Consultation Log & Medication Organizer */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Doctor Consultation Transcript */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.03)] space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                  <h3 className="text-base font-black text-slate-900 font-heading flex items-center gap-2">
                    <User className="w-4 h-4 text-[#0073B7]" />
                    <span>Recent Doctor Consultation Log</span>
                  </h3>
                  <span className="text-xs text-slate-500">{SAMPLE_DOCTOR_VISIT.date}</span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div>
                    <strong className="text-slate-900 text-sm font-heading block">
                      {SAMPLE_DOCTOR_VISIT.doctorName}
                    </strong>
                    <span className="text-slate-500">{SAMPLE_DOCTOR_VISIT.specialty} &bull; {SAMPLE_DOCTOR_VISIT.hospital}</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-800 block mb-1">Clinical Assessment:</span>
                    <p className="text-slate-600 leading-relaxed">{SAMPLE_DOCTOR_VISIT.diagnosis}</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                    <span className="font-bold block mb-1">Care Companion Sister Mary Notes:</span>
                    <p className="text-xs leading-relaxed">{SAMPLE_DOCTOR_VISIT.companionNotes}</p>
                  </div>
                </div>

                <div className="pt-2 flex justify-between items-center text-xs text-slate-500">
                  <span>Next Follow-up: <strong>{SAMPLE_DOCTOR_VISIT.nextFollowUp}</strong></span>
                </div>
              </div>

              {/* Medication Organizer */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.03)] space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                  <h3 className="text-base font-black text-slate-900 font-heading flex items-center gap-2">
                    <Pill className="w-4 h-4 text-[#0A8754]" />
                    <span>Daily Prescription Dispensation Tracker</span>
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-100 text-emerald-800">
                    Sorted for Week 43
                  </span>
                </div>

                <div className="space-y-2.5">
                  {SAMPLE_DOCTOR_VISIT.prescriptions.map((med, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-bold text-slate-800">{med}</span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium">Verified by Nurse</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 text-xs text-[#0073B7]">
                  <strong>Doorstep Refill Status:</strong> Next monthly batch scheduled for delivery on Nov 2, 2026 via Apollo Pharmacy Partner.
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: REPATRIATION & DOCUMENT VAULT */}
        {activeTab === 'vault' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.03)] space-y-5">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 font-heading">
                  Encrypted NRI Tax &amp; Repatriation Compliance Vault
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Bank-grade 256-bit encrypted depository for all Indian legal, property tax, and medical files.
                </p>
              </div>

              <div className="divide-y divide-slate-100">
                <div className="py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <FileCheck className="w-5 h-5 text-[#0073B7]" />
                    <div>
                      <div className="text-sm font-bold text-slate-800">Form 15CB CA Certificate &mdash; FY 2025-26</div>
                      <div className="text-xs text-slate-500">Prepared by Chartered Accountant &bull; Certified for NRE Transfer</div>
                    </div>
                  </div>
                  <button className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#0073B7] bg-sky-50 hover:bg-sky-100 transition-colors flex items-center gap-1.5 cursor-pointer">
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>

                <div className="py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <FileText className="w-5 h-5 text-emerald-600" />
                    <div>
                      <div className="text-sm font-bold text-slate-800">GHMC Municipal Property Tax Receipt #GHMC-2026-9912</div>
                      <div className="text-xs text-slate-500">Paid in full with early bird 5% rebate applied</div>
                    </div>
                  </div>
                  <button className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#0073B7] bg-sky-50 hover:bg-sky-100 transition-colors flex items-center gap-1.5 cursor-pointer">
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>

                <div className="py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <FileCheck className="w-5 h-5 text-[#C99738]" />
                    <div>
                      <div className="text-sm font-bold text-slate-800">Biometric Registered Lease Agreement &mdash; Arun Mehta</div>
                      <div className="text-xs text-slate-500">Validity: 11 Months (Exp: August 2027) &bull; RERA Stamped</div>
                    </div>
                  </div>
                  <button className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#0073B7] bg-sky-50 hover:bg-sky-100 transition-colors flex items-center gap-1.5 cursor-pointer">
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>

                <div className="py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <Activity className="w-5 h-5 text-rose-500" />
                    <div>
                      <div className="text-sm font-bold text-slate-800">Apollo Hospital Pre-Authorization Emergency Card</div>
                      <div className="text-xs text-slate-500">Cardholder: Sundaram Reddy &bull; Pre-Alert Code: #AP-EMR-4410</div>
                    </div>
                  </div>
                  <button className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#0073B7] bg-sky-50 hover:bg-sky-100 transition-colors flex items-center gap-1.5 cursor-pointer">
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
