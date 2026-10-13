import React, { useState, useEffect, useRef } from 'react';
import { Hero3DSection } from './components/Hero3DSection';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { AdminPanel } from './components/AdminPanel';
import { getStoredPortfolioData, PortfolioData } from './data/portfolioData';

export const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [data, setData] = useState<PortfolioData>(() => getStoredPortfolioData());
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('portfolio_theme') === 'dark';
  });

  const dashboardRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Sync Hash for Admin
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

  // Listen for data updates from AdminPanel
  useEffect(() => {
    const handleDataUpdate = () => {
      setData(getStoredPortfolioData());
    };
    window.addEventListener('portfolio_data_updated', handleDataUpdate);
    return () => window.removeEventListener('portfolio_data_updated', handleDataUpdate);
  }, []);

  // Theme toggle effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const openAdmin = () => {
    window.location.hash = '#admin';
    setIsAdmin(true);
  };

  const closeAdmin = () => {
    window.history.pushState(null, '', window.location.pathname + window.location.search);
    setIsAdmin(false);
  };

  const scrollToDashboard = () => {
    if (dashboardRef.current) {
      dashboardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isAdmin) {
    return <AdminPanel onClose={closeAdmin} />;
  }

  return (
    <div className="min-h-screen w-full flex flex-col font-sans transition-colors duration-300">
      {/* 1. Whimsical 3D Animation Hero Section (Inspired by motionsites.ai future-3d-portfolio) */}
      <div ref={heroRef} className="w-full">
        <Hero3DSection
          data={data}
          onExploreDashboard={scrollToDashboard}
          onOpenAdmin={openAdmin}
        />
      </div>

      {/* 2. Main Executive SaaS Dashboard & Control Panel (Inspired by Modern System Monitor) */}
      <div ref={dashboardRef} id="dashboard-system" className="w-full">
        <DashboardLayout
          data={data}
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          onOpenAdmin={openAdmin}
          darkMode={darkMode}
          onToggleDarkMode={toggleDarkMode}
          onScrollToHero={scrollToHero}
        />
      </div>
    </div>
  );
};

export default App;
