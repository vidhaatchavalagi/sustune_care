import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CurrencyProvider } from './context/CurrencyContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { VideoModal } from './components/common/VideoModal';
import { ConsultationModal } from './components/common/ConsultationModal';
import { ScrollToTop } from './components/common/ScrollToTop';
import { NriQuickDesk } from './components/common/NriQuickDesk';

import { HomePage } from './pages/HomePage';
import { AegisPage } from './pages/AegisPage';
import { SparshPage } from './pages/SparshPage';
import { PricingPage } from './pages/PricingPage';
import { PortalPreviewPage } from './pages/PortalPreviewPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [consultModalDivision, setConsultModalDivision] = useState<string>('bundle');

  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoModalData, setVideoModalData] = useState<{
    src: string;
    title: string;
    subtitle?: string;
  }>({
    src: '',
    title: '',
    subtitle: '',
  });

  const handleOpenConsultModal = (division: string = 'bundle') => {
    setConsultModalDivision(division);
    setConsultModalOpen(true);
  };

  const handleOpenVideoModal = (src: string, title: string, subtitle?: string) => {
    setVideoModalData({ src, title, subtitle });
    setVideoModalOpen(true);
  };

  return (
    <CurrencyProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-white text-slate-800">
          <Navbar onOpenConsultModal={handleOpenConsultModal} />

          <main className="flex-1">
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    onOpenConsultModal={handleOpenConsultModal}
                    onOpenVideoModal={handleOpenVideoModal}
                  />
                }
              />
              <Route
                path="/aegis"
                element={
                  <AegisPage
                    onOpenConsultModal={handleOpenConsultModal}
                    onOpenVideoModal={handleOpenVideoModal}
                  />
                }
              />
              <Route
                path="/sparsh"
                element={
                  <SparshPage
                    onOpenConsultModal={handleOpenConsultModal}
                    onOpenVideoModal={handleOpenVideoModal}
                  />
                }
              />
              <Route
                path="/pricing"
                element={
                  <PricingPage
                    onOpenConsultModal={handleOpenConsultModal}
                  />
                }
              />
              <Route
                path="/portal-preview"
                element={<PortalPreviewPage />}
              />
              <Route
                path="/contact"
                element={<ContactPage />}
              />
              <Route
                path="*"
                element={
                  <HomePage
                    onOpenConsultModal={handleOpenConsultModal}
                    onOpenVideoModal={handleOpenVideoModal}
                  />
                }
              />
            </Routes>
          </main>

          <Footer />

          {/* Global Video Cinema Modal */}
          <VideoModal
            isOpen={videoModalOpen}
            onClose={() => setVideoModalOpen(false)}
            videoSrc={videoModalData.src}
            title={videoModalData.title}
            subtitle={videoModalData.subtitle}
          />

          {/* Global Consultation Modal */}
          <ConsultationModal
            isOpen={consultModalOpen}
            onClose={() => setConsultModalOpen(false)}
            defaultInterest={consultModalDivision}
          />
          {/* Global Persistent NRI Quick Desk & SOS Assistance Widget */}
          <NriQuickDesk />
        </div>
      </BrowserRouter>
    </CurrencyProvider>
  );
}
