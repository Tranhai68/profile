import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { FooterSection } from './components/FooterSection';
import { AdminPanel } from './components/AdminPanel';

export const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#admin') {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const openAdmin = () => {
    window.location.hash = '#admin';
    setIsAdmin(true);
  };

  const closeAdmin = () => {
    window.history.pushState(null, '', window.location.pathname + window.location.search);
    setIsAdmin(false);
  };

  if (isAdmin) {
    return <AdminPanel onClose={closeAdmin} />;
  }

  return (
    <div
      className="min-h-screen w-full bg-[#0C0C0C] text-[#D7E2EA] font-kanit"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Skills Section */}
      <SkillsSection />

      {/* 5. Services Section */}
      <ServicesSection />

      {/* 6. Projects Section */}
      <ProjectsSection />

      {/* 7. Footer Section (Liên hệ trực tiếp, không còn form gửi tin nhắn) */}
      <FooterSection onOpenAdmin={openAdmin} />
    </div>
  );
};

export default App;
