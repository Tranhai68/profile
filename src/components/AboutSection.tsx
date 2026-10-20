import React, { useState, useEffect } from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { Sparkles, Briefcase, Shirt } from 'lucide-react';
import { getStoredPortfolioData, PortfolioData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [aboutData, setAboutData] = useState<PortfolioData['about']>(
    () => getStoredPortfolioData().about
  );

  useEffect(() => {
    const handleUpdate = () => {
      setAboutData(getStoredPortfolioData().about);
    };

    window.addEventListener('portfolio_data_updated', handleUpdate);
    return () => window.removeEventListener('portfolio_data_updated', handleUpdate);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-24 sm:py-32 bg-[#0C0C0C] overflow-hidden"
    >
      {/* 4 Decorative 3D Floating Icons in Corners */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[3%] left-[1%] sm:left-[2%] md:left-[3%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none z-10 opacity-60"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="3D Decorative Moon"
          className="w-full h-auto drop-shadow-2xl"
          loading="lazy"
        />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[3%] right-[1%] sm:right-[2%] md:right-[3%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none z-10 opacity-60"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="3D Decorative Lego"
          className="w-full h-auto drop-shadow-2xl"
          loading="lazy"
        />
      </FadeIn>

      {/* Main Content Container */}
      <div className="relative z-20 flex flex-col items-center max-w-5xl mx-auto text-center gap-10 sm:gap-14 md:gap-16 w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-purple-400 mb-2 block">
            About The Growth Leader
          </span>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Character-by-character animated paragraph */}
        <div className="max-w-[720px] mx-auto px-4">
          <AnimatedText
            text={aboutData.bio}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed"
          />
        </div>

        {/* Stats Grid */}
        <FadeIn delay={0.2} y={30} className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {aboutData.stats.map((stat, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40 hover:bg-white/[0.05]"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wider font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Professional Experience Section */}
        <div className="w-full pt-6 sm:pt-10 text-left">
          <FadeIn delay={0.25} y={30}>
            <div className="text-center mb-8 sm:mb-12">
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-purple-400 block mb-1">
                Career Track Record
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Kinh Nghiệm Quản Lý &amp; Thực Chiến
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {aboutData.experiences.map((exp, idx) => {
                const isBeauty = exp.category === 'beauty';
                return (
                  <div
                    key={idx}
                    className="group relative p-6 sm:p-7 rounded-[28px] bg-neutral-900/60 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-purple-500/50 hover:bg-neutral-900/90 shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Tag & Category Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border ${
                            isBeauty
                              ? 'bg-pink-500/10 text-pink-300 border-pink-500/30'
                              : 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                          }`}
                        >
                          {isBeauty ? (
                            <Sparkles className="w-3.5 h-3.5" />
                          ) : (
                            <Shirt className="w-3.5 h-3.5" />
                          )}
                          {exp.badge}
                        </span>
                        <div className="flex items-center gap-2">
                          {exp.period && (
                            <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-neutral-800 text-purple-300 border border-purple-500/20">
                              {exp.period}
                            </span>
                          )}
                          <span className="text-xs text-neutral-400 font-medium">
                            {exp.brand}
                          </span>
                        </div>
                      </div>

                      {/* Company Name */}
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5 group-hover:text-purple-300 transition-colors">
                        {exp.company}
                      </h4>

                      {/* Role title */}
                      <div className="text-sm sm:text-base font-semibold text-purple-400 mb-3 flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <span>{exp.role}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-neutral-300/80 font-light leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>

        {/* Action Button */}
        <FadeIn delay={0.35} y={20} className="pt-6 sm:pt-10">
          <ContactButton label="Let's Work Together" href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
};
