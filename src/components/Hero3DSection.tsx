import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowDown,
  Settings,
  FileText,
  Layers,
  TrendingUp,
  Cpu,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import { getStoredPortfolioData, PortfolioData } from '../data/portfolioData';

interface Hero3DSectionProps {
  onExploreDashboard: () => void;
  onOpenAdmin: () => void;
  data?: PortfolioData;
}

export const Hero3DSection: React.FC<Hero3DSectionProps> = ({
  onExploreDashboard,
  onOpenAdmin,
  data: propData,
}) => {
  const [internalData, setInternalData] = useState<PortfolioData>(() => getStoredPortfolioData());
  const data = propData || internalData;
  const [interactiveMode, setInteractiveMode] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleUpdate = () => {
      setInternalData(getStoredPortfolioData());
    };
    window.addEventListener('portfolio_data_updated', handleUpdate);
    return () => window.removeEventListener('portfolio_data_updated', handleUpdate);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveMode) return;
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 16; // -8 to +8 deg
    const y = ((clientY - top) / height - 0.5) * -16; // -8 to +8 deg
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[95vh] sm:min-h-screen flex flex-col items-center justify-between overflow-hidden px-4 sm:px-8 pt-6 pb-8 select-none bg-slate-900"
    >
      {/* 1. High-Fidelity 3D Rendered Background Scene (Matching Image 1) */}
      <div className="absolute inset-0 z-0">
        <img
          src={data.hero.bgImage || './images/future-3d-hero.jpg'}
          alt="Future 3D Portfolio Scene"
          className="w-full h-full object-cover object-center filter brightness-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = './images/future-3d-hero.jpg';
          }}
        />

        {/* Ambient Overlay for contrast and soft atmospheric depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-slate-950/20 pointer-events-none" />

        {/* Giant Watermark Typography Behind Device (1:1 with Image 1: 'PRODUCT UI/UX • BRANDING') */}
        <div className="absolute top-[40%] sm:top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
          <span
            className="text-[64px] sm:text-[100px] md:text-[140px] lg:text-[170px] font-black uppercase tracking-[0.14em] leading-none block whitespace-nowrap opacity-[0.28]"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.95)',
              color: 'transparent',
            }}
          >
            {data.hero.watermarkText || 'MARKETING • GROWTH • BRANDING • AI'}
          </span>
        </div>
      </div>

      {/* 2. Top Header Bar: Role Tag & Admin CMS Trigger */}
      <div className="relative z-10 w-full max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-2 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/80 shadow-xs">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider">
            {data.hero.roleTag || 'Marketing Manager • CMO'}
          </span>
        </div>

        <button
          onClick={onOpenAdmin}
          className="flex items-center gap-1.5 bg-white/70 hover:bg-white text-slate-800 px-3.5 py-1.5 rounded-full text-xs font-bold border border-white/80 shadow-sm transition-all hover:scale-105"
          title="Quản trị ảnh và nội dung"
        >
          <Settings className="w-3.5 h-3.5 text-teal-600" />
          <span>Admin CMS</span>
        </button>
      </div>

      {/* 3. Hero Typography Header (Hi, I'm Trần Hải) */}
      <div className="relative z-10 text-center max-w-3xl mt-1 sm:mt-2">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-base sm:text-xl font-normal text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] mb-0.5"
          style={{ fontFamily: 'Georgia, Cambria, serif', fontStyle: 'italic' }}
        >
          {data.hero.greetingPrefix || "Hi, I'm"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)] tracking-tight leading-none"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {data.hero.heading || 'Trần Hải'}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-2.5 text-xs sm:text-sm md:text-base font-semibold text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] max-w-2xl mx-auto leading-relaxed px-4"
        >
          {data.hero.subtext ||
            'A Marketing Manager / CMO experienced in driving 500M+ views, building viral campaigns, and scaling brand revenue.'}
        </motion.p>
      </div>

      {/* 4. Center Holographic Screen & Left Navigation (Matching 1:1 with Image 1) */}
      <div className="relative z-20 w-full max-w-6xl flex items-center justify-between my-auto perspective-1000">
        {/* Left Floating Menu (Exact to Image 1: Home, Works, About me, Resume, Interactive Mode) */}
        <div className="hidden lg:flex flex-col items-start gap-3.5 z-30 pl-2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-black text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] flex items-center gap-1.5"
            style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
          >
            {data.hero.menuHomeText || 'Home'}
          </button>
          <button
            onClick={onExploreDashboard}
            className="text-sm font-bold text-white/85 hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)] transition-colors"
          >
            {data.hero.menuWorksText || 'Works'}
          </button>
          <button
            onClick={onExploreDashboard}
            className="text-sm font-bold text-white/85 hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)] transition-colors"
          >
            {data.hero.menuAboutText || 'About me'}
          </button>
          <a
            href={data.hero.cvUrl || './Tran-Hai-Executive-Portfolio.pdf'}
            download="Tran-Hai-Executive-Portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-white/85 hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)] transition-colors"
          >
            {data.hero.menuResumeText || 'Resume'}
          </a>

          {/* Interactive Mode Toggle Pill (1:1 with Image 1) */}
          <div className="flex items-center gap-2 pt-2">
            <span className="text-xs font-bold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
              {data.hero.interactiveModeText || 'Interactive Mode'}
            </span>
            <button
              onClick={() => setInteractiveMode(!interactiveMode)}
              className={`w-11 h-6 rounded-full p-0.5 transition-colors shadow-md flex items-center ${
                interactiveMode ? 'bg-purple-600 justify-end' : 'bg-slate-400 justify-start'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-white shadow-xs flex items-center justify-center text-[9px] font-black text-purple-700">
                {interactiveMode ? 'ON' : 'OFF'}
              </span>
            </button>
          </div>
        </div>

        {/* Center Floating Glass Computer Display (Inside Holographic Beam) */}
        <motion.div
          animate={{
            rotateY: interactiveMode ? mousePos.x : 0,
            rotateX: interactiveMode ? mousePos.y : 0,
            y: [0, -6, 0],
          }}
          transition={{
            rotateY: { type: 'spring', stiffness: 85, damping: 15 },
            rotateX: { type: 'spring', stiffness: 85, damping: 15 },
            y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="relative mx-auto w-[330px] sm:w-[460px] md:w-[560px] lg:w-[620px] rounded-2xl sm:rounded-3xl p-4 sm:p-6 backdrop-blur-xl bg-white/45 border-2 border-white/70 shadow-[0_25px_60px_rgba(79,70,229,0.25),0_0_35px_rgba(45,212,191,0.3)] text-slate-900 preserve-3d"
        >
          {/* 4 Purple Corner Pins / Brackets (Signature Detail from Image 1!) */}
          <div className="absolute -top-2.5 -left-2.5 w-6 h-6 rounded-lg bg-gradient-to-br from-purple-400 to-indigo-600 shadow-md border-2 border-white" />
          <div className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-lg bg-gradient-to-br from-purple-400 to-indigo-600 shadow-md border-2 border-white" />
          <div className="absolute -bottom-2.5 -left-2.5 w-6 h-6 rounded-lg bg-gradient-to-br from-purple-400 to-indigo-600 shadow-md border-2 border-white" />
          <div className="absolute -bottom-2.5 -right-2.5 w-6 h-6 rounded-lg bg-gradient-to-br from-purple-400 to-indigo-600 shadow-md border-2 border-white" />

          {/* Left Vertical App Dock (Image 1 Style: Notion, Slack, Spotify, Figma, etc.) */}
          <div className="absolute -left-5 sm:-left-6 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-2 p-1.5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-lg">
            {/* App 1: Figma */}
            <div className="w-7 h-7 rounded-lg bg-rose-500 text-white flex items-center justify-center text-[10px] font-black shadow-xs">
              Fg
            </div>
            {/* App 2: Notion */}
            <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-[10px] font-black shadow-xs">
              N
            </div>
            {/* App 3: TikTok */}
            <div className="w-7 h-7 rounded-lg bg-black text-cyan-400 flex items-center justify-center text-[10px] font-black shadow-xs">
              TT
            </div>
            {/* App 4: Meta */}
            <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center text-[10px] font-black shadow-xs">
              M
            </div>
            {/* App 5: Slack */}
            <div className="w-7 h-7 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-[10px] font-black shadow-xs">
              Sl
            </div>
          </div>

          {/* Window Top Header Bar (🔴 🟡 🟢) */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/50">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-400 shadow-xs" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-xs" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-xs" />
            </div>

            <div className="text-[11px] font-mono tracking-wider font-bold text-slate-700 bg-white/60 px-2.5 py-0.5 rounded-md border border-white/80">
              {data.hero.systemVersion || 'TRANHAI-CORE // OS_v2.6'}
            </div>

            <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping" />
          </div>

          {/* Window Body: 2 Columns (Matching Image 1's Internal Layout!) */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            {/* Left 7 Cols: Greeting & Key Highlight Card */}
            <div className="sm:col-span-7 bg-white/80 rounded-2xl p-4 sm:p-5 border border-white/90 shadow-xs space-y-3">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-1.5">
                  {data.hero.windowTitle || 'Hello There, Visitor'}{' '}
                  <span className="animate-bounce inline-block">👋</span>
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5">
                  {data.hero.windowSub || 'Trưởng Phòng Marketing & CMO Thực Chiến'}
                </p>
              </div>

              {/* Metric Highlights */}
              <div className="grid grid-cols-2 gap-2 text-left">
                <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                  <span className="text-[9px] uppercase font-bold text-slate-400 block">
                    {data.hero.metric1Label || 'TOTAL VIEWS'}
                  </span>
                  <span className="text-sm sm:text-base font-black text-teal-700">
                    {data.hero.metric1Value || '500M+ Views'}
                  </span>
                </div>
                <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                  <span className="text-[9px] uppercase font-bold text-slate-400 block">
                    {data.hero.metric2Label || 'BENCHMARK'}
                  </span>
                  <span className="text-sm sm:text-base font-black text-indigo-700">
                    {data.hero.metric2Value || 'x3 Revenue'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-slate-700">
                  {data.hero.statusBadgeText || 'Sẵn sàng cho vai trò Quản lý / CMO'}
                </span>
              </div>
            </div>

            {/* Right 5 Cols: Tasks & Focus List (1:1 with Image 1's TODAY / UPCOMING box) */}
            <div className="sm:col-span-5 bg-white/60 rounded-2xl p-3.5 sm:p-4 border border-white/80 shadow-xs space-y-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  {data.hero.tasksTitle || 'TODAY • TRỌNG TÂM'}
                </span>
                <ul className="space-y-1 text-xs font-bold text-slate-800">
                  {(data.hero.windowTasks || [
                    'Brand Strategy & P&L',
                    'Viral 500M+ Views',
                    'Omnichannel Growth',
                  ]).slice(0, 3).map((task, tIdx) => (
                    <li key={tIdx} className="flex items-center gap-1.5 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                      <span className="truncate">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-slate-200/60">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  {data.hero.upcomingTitle || 'UPCOMING • DỰ ÁN'}
                </span>
                <ul className="space-y-1 text-xs font-semibold text-slate-700">
                  {(data.hero.upcomingTasks || [
                    'DEZUS Fashion Show 5 Châu',
                    'Guno x Ngọc Trinh - Quốc Trường',
                  ]).slice(0, 2).map((item, uIdx) => (
                    <li key={uIdx} className="flex items-center gap-1.5 truncate">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${uIdx === 0 ? 'bg-purple-500' : 'bg-amber-500'}`} />
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Window Footer Action */}
          <div className="mt-4 pt-3 border-t border-white/50 flex items-center justify-between">
            <span className="text-[11px] text-slate-600 font-bold truncate pr-2">
              {data.hero.locationText || '📍 TP. Hồ Chí Minh • Tư vấn chiến lược toàn quốc'}
            </span>

            <button
              onClick={onExploreDashboard}
              className="flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold px-3.5 py-1.5 rounded-xl shadow-sm hover:shadow transition-all shrink-0"
            >
              <span>{data.hero.ctaButtonText || 'Xem Control Panel'}</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* Right spacing balance */}
        <div className="hidden lg:block w-20" />
      </div>

      {/* 5. Bottom Quick Action Bar */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-white/30">
        <div className="flex items-center gap-2 text-xs font-bold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{data.hero.bottomNotice || 'Hệ thống Dashboard điều khiển 10 mục quản trị sẵn sàng bên dưới'}</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={data.hero.cvUrl || './Tran-Hai-Executive-Portfolio.pdf'}
            download="Tran-Hai-Executive-Portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-white/85 hover:bg-white text-slate-900 text-xs font-bold px-4 py-2 rounded-xl shadow-sm transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-teal-600" />
            <span>{data.hero.cvButtonText || 'Tải CV (PDF)'}</span>
          </a>

          <button
            onClick={onExploreDashboard}
            className="flex items-center gap-2 bg-slate-900/90 hover:bg-slate-900 text-white text-xs font-bold px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition-all group"
          >
            <span>{data.hero.exploreButtonText || 'Khám Phá System Dashboard'}</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform text-teal-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
