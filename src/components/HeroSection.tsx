import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { ContactButton } from './ContactButton';
import { getStoredPortfolioData, PortfolioData } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const [data, setData] = useState<PortfolioData['hero']>(() => getStoredPortfolioData().hero);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleUpdate = () => {
      setData(getStoredPortfolioData().hero);
    };

    window.addEventListener('portfolio_data_updated', handleUpdate);
    return () => window.removeEventListener('portfolio_data_updated', handleUpdate);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0C0C0C] select-none">
      {/* 1. Fullscreen Background Image with Parallax & Gradient Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Parallax Container */}
        <div
          className="w-full h-full will-change-transform transition-transform duration-500 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * -20}px, ${mousePos.y * -15}px, 0) scale(1.06)`,
          }}
        >
          <img
            src={data.bgImage}
            alt="Trần Hải - Marketing Manager / CMO"
            className="w-full h-full object-cover object-top filter brightness-[0.72] contrast-[1.1]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = './images/hero-banner.png';
            }}
          />
        </div>

        {/* Top Vignette for Navbar legibility */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#0C0C0C]/90 via-[#0C0C0C]/50 to-transparent" />

        {/* Middle Ambient Shading for text contrast */}
        <div className="absolute inset-0 bg-[#0C0C0C]/35" />

        {/* Bottom Gradient Fade to Black */}
        <div className="absolute inset-x-0 bottom-0 h-72 sm:h-96 md:h-[480px] bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/90 to-transparent" />
      </div>

      {/* 2. Top Navbar */}
      <div className="relative z-30">
        <Navbar />
      </div>

      {/* 3. Hero Heading */}
      <div className="relative z-20 w-full overflow-hidden text-center mt-auto mb-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center justify-center"
        >
          <span className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] uppercase text-purple-300/90 mb-2 drop-shadow-md">
            {data.roleTag}
          </span>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
            style={{ fontSize: 'clamp(3.8rem, 16vw, 240px)' }}
          >
            {data.heading}
          </h1>
        </motion.div>
      </div>

      {/* 4. Bottom Bar */}
      <div className="relative z-20 w-full flex justify-between items-end px-6 sm:px-8 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[170px] sm:max-w-[240px] md:max-w-[340px] drop-shadow-lg"
          style={{ fontSize: 'clamp(0.75rem, 1.3vw, 1.25rem)' }}
        >
          {data.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ContactButton label="Contact Me" href="#contact" />
        </motion.div>
      </div>
    </section>
  );
};
