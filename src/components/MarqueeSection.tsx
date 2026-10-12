import React, { useRef, useState, useEffect } from 'react';
import { getStoredPortfolioData, PortfolioData } from '../data/portfolioData';

export const MarqueeSection: React.FC = () => {
  const [marqueeData, setMarqueeData] = useState<PortfolioData['marquee']>(
    () => getStoredPortfolioData().marquee
  );
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleUpdate = () => {
      setMarqueeData(getStoredPortfolioData().marquee);
    };

    window.addEventListener('portfolio_data_updated', handleUpdate);
    return () => window.removeEventListener('portfolio_data_updated', handleUpdate);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const currentOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(currentOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Triple lists for continuous infinite scroll
  const tripledRow1 = [
    ...marqueeData.row1,
    ...marqueeData.row1,
    ...marqueeData.row1,
  ];
  const tripledRow2 = [
    ...marqueeData.row2,
    ...marqueeData.row2,
    ...marqueeData.row2,
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0C0C0C] pt-16 sm:pt-24 md:pt-32 pb-12 overflow-hidden w-full select-none"
    >
      {/* Section Sub-heading */}
      <div className="text-center mb-8 sm:mb-12 px-4">
        <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-purple-400 block mb-1">
          {marqueeData.sectionSub}
        </span>
        <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
          {marqueeData.sectionTitle}
        </h3>
      </div>

      <div className="flex flex-col gap-4 sm:gap-5">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          className="flex gap-4 sm:gap-5 will-change-transform"
          style={{
            transform: `translate3d(${offset - 200}px, 0, 0)`,
          }}
        >
          {tripledRow1.map((item, idx) => (
            <div
              key={`row1-${idx}`}
              className="group relative flex-shrink-0 w-[290px] sm:w-[350px] md:w-[410px] h-[190px] sm:h-[230px] md:h-[270px] rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-xl transition-all duration-300 hover:border-purple-500/50"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = './images/hero-banner.png';
                }}
              />
              {/* Glass Tag Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span className="text-[10px] sm:text-xs uppercase font-semibold tracking-wider text-purple-300 mb-1">
                  {item.tag}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          className="flex gap-4 sm:gap-5 will-change-transform"
          style={{
            transform: `translate3d(${-(offset - 200)}px, 0, 0)`,
          }}
        >
          {tripledRow2.map((item, idx) => (
            <div
              key={`row2-${idx}`}
              className="group relative flex-shrink-0 w-[290px] sm:w-[350px] md:w-[410px] h-[190px] sm:h-[230px] md:h-[270px] rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-xl transition-all duration-300 hover:border-blue-500/50"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = './images/profile.jpg';
                }}
              />
              {/* Glass Tag Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span className="text-[10px] sm:text-xs uppercase font-semibold tracking-wider text-blue-300 mb-1">
                  {item.tag}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
