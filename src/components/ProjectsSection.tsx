import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';
import { getStoredPortfolioData, ProjectItem } from '../data/portfolioData';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] sm:h-[90vh] flex items-center justify-center sticky top-20 sm:top-24 md:top-28"
      style={{
        top: `calc(5rem + ${index * 24}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[36px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden"
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

        {/* Top Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-white/10">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-black text-[#D7E2EA] text-3xl sm:text-5xl md:text-6xl tracking-tighter">
              {project.number}
            </span>
            <div>
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-purple-400 block mb-1">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton label="Live Project" href={project.link} />
        </div>

        {/* Description brief */}
        <p className="text-xs sm:text-sm md:text-base text-neutral-300/80 font-light my-3 sm:my-4 line-clamp-2 max-w-4xl">
          {project.description}
        </p>

        {/* Bottom Row: 2-column image layout (40% left, 60% right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 flex-grow min-h-0">
          {/* Left Column (40% width ~ 5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4">
            <div className="w-full overflow-hidden rounded-[24px] sm:rounded-[36px] md:rounded-[44px] bg-neutral-900 border border-white/10">
              <img
                src={project.col1Img1}
                alt={`${project.name} detail 1`}
                loading="lazy"
                className="w-full object-cover h-[130px] sm:h-[160px] md:h-[180px] hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = './images/product-1.jpg';
                }}
              />
            </div>
            <div className="w-full overflow-hidden rounded-[24px] sm:rounded-[36px] md:rounded-[44px] bg-neutral-900 border border-white/10 flex-grow">
              <img
                src={project.col1Img2}
                alt={`${project.name} detail 2`}
                loading="lazy"
                className="w-full h-full object-cover min-h-[140px] max-h-[220px] hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = './images/product-2.jpg';
                }}
              />
            </div>
          </div>

          {/* Right Column (60% width ~ 7 cols) */}
          <div className="md:col-span-7 overflow-hidden rounded-[24px] sm:rounded-[36px] md:rounded-[44px] bg-neutral-900 border border-white/10">
            <img
              src={project.col2Img}
              alt={`${project.name} main showcase`}
              loading="lazy"
              className="w-full h-full object-cover min-h-[200px] max-h-[420px] hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src = './images/hero-banner.png';
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<ProjectItem[]>(
    () => getStoredPortfolioData().projects
  );

  useEffect(() => {
    const handleUpdate = () => {
      setProjects(getStoredPortfolioData().projects);
    };

    window.addEventListener('portfolio_data_updated', handleUpdate);
    return () => window.removeEventListener('portfolio_data_updated', handleUpdate);
  }, []);

  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 px-5 sm:px-8 md:px-10 pt-20 sm:pt-28 pb-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-24">
          <FadeIn delay={0}>
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-purple-400 mb-2 block">
              Featured Case Studies
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              Project
            </h2>
          </FadeIn>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="relative">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
