import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Layers,
  Zap,
  HardDrive,
  Activity,
  Workflow,
  PieChart,
  ArrowUpRight,
  TrendingUp,
  Award,
  Sparkles,
  Download,
  Send,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { PortfolioData } from '../../data/portfolioData';

interface DashboardOverviewProps {
  data: PortfolioData;
  onNavigateTab: (tabId: string) => void;
  onOpenAdmin: () => void;
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  data,
  onNavigateTab,
  onOpenAdmin,
}) => {
  const [optimized, setOptimized] = useState(false);

  const handleQuickOptimize = () => {
    setOptimized(true);
    setTimeout(() => setOptimized(false), 3000);
  };

  // Helper for generating horizontal dot matrix columns (like in Image 2)
  const renderDotMatrix = (
    colorClass: string,
    activePercent: number,
    cols: number = 24,
    rows: number = 3
  ) => {
    const activeCols = Math.round((activePercent / 100) * cols);

    return (
      <div
        className="w-full py-1.5 overflow-hidden"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gap: '3px',
          alignItems: 'center',
        }}
      >
        {Array.from({ length: cols }).map((_, c) => {
          const isColActive = c < activeCols;
          return (
            <div key={c} className="flex flex-col gap-[3px] items-center">
              {Array.from({ length: rows }).map((_, r) => (
                <span
                  key={r}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isColActive ? colorClass : 'bg-slate-200 dark:bg-slate-700/60'
                  }`}
                />
              ))}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* 1. Hardware Control Grid (6 Primary Telemetry Cards - Direct Clone of Image 2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {/* Card 1: CPU — Marketing Engine Core */}
        <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-700/70 shadow-card hover:shadow-card-hover transition-all relative overflow-hidden group">
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                {data.overviewMetrics?.coreExp?.title || 'Marketing Core'}
              </span>
            </div>
            <button
              onClick={() => onNavigateTab('skills')}
              className="text-slate-400 hover:text-blue-600 transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-baseline gap-1 my-2">
            <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {data.overviewMetrics?.coreExp?.value || '10+'}
            </span>
            <span className="text-lg font-bold text-slate-500">
              {data.overviewMetrics?.coreExp?.unit || 'Năm KN'}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs text-slate-500 dark:text-slate-400 pb-3 border-b border-slate-100 dark:border-slate-700/50">
            <div>
              <span className="block text-[10px] uppercase text-slate-400">
                {data.overviewMetrics?.coreExp?.subLabel || 'Quản Lý / CMO'}
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {data.overviewMetrics?.coreExp?.sub || '06 Năm'}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-slate-400">
                {data.overviewMetrics?.coreExp?.peakLabel || 'Hiệu Suất'}
              </span>
              <span className="font-semibold text-blue-600">
                {data.overviewMetrics?.coreExp?.peak || '98% Peak'}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-slate-400">
                {data.overviewMetrics?.coreExp?.domainLabel || 'Mảng Chính'}
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {data.overviewMetrics?.coreExp?.domain || 'Fashion/Beauty'}
              </span>
            </div>
          </div>

          <div className="mt-3">
            {renderDotMatrix(
              'bg-blue-500 shadow-[0_0_4px_rgba(59,130,246,0.6)]',
              data.overviewMetrics?.coreExp?.activePercent ?? 65,
              24,
              3
            )}
          </div>
        </div>

        {/* Card 2: Memory — Campaign Volume & Reach */}
        <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-700/70 shadow-card hover:shadow-card-hover transition-all relative overflow-hidden group">
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 block">
                  {data.overviewMetrics?.reach?.title || 'Campaign Reach'}
                </span>
                <span className="text-[10px] text-slate-400">
                  {data.overviewMetrics?.reach?.sub || 'Toàn bộ nền tảng MXH'}
                </span>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
              {data.overviewMetrics?.reach?.badge || '✓ Normal'}
            </span>
          </div>

          <div className="flex items-baseline gap-1 my-2">
            <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {data.overviewMetrics?.reach?.value || '500M+'}
            </span>
            <span className="text-lg font-bold text-emerald-600">
              {data.overviewMetrics?.reach?.unit || 'Views'}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs text-slate-500 dark:text-slate-400 pb-3 border-b border-slate-100 dark:border-slate-700/50">
            <div>
              <span className="block text-[10px] uppercase text-slate-400">
                {data.overviewMetrics?.reach?.videoLabel || 'Video Viral'}
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {data.overviewMetrics?.reach?.video || '340M+'}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-slate-400">
                {data.overviewMetrics?.reach?.pressLabel || 'Báo Chí PR'}
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {data.overviewMetrics?.reach?.press || '90M+'}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-slate-400">
                {data.overviewMetrics?.reach?.eventLabel || 'Khai Trương'}
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {data.overviewMetrics?.reach?.event || '70M+'}
              </span>
            </div>
          </div>

          <div className="mt-3">
            {renderDotMatrix(
              'bg-emerald-500 shadow-[0_0_4px_rgba(16,185,129,0.6)]',
              data.overviewMetrics?.reach?.activePercent ?? 75,
              24,
              3
            )}
          </div>
        </div>

        {/* Card 3: GPU — Revenue Multiplier */}
        <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-700/70 shadow-card hover:shadow-card-hover transition-all relative overflow-hidden group">
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-rose-50 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 dark:text-rose-400">
                <TrendingUp className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                {data.overviewMetrics?.revenue?.title || 'Revenue Benchmark'}
              </span>
            </div>
            <button
              onClick={() => onNavigateTab('projects')}
              className="text-slate-400 hover:text-rose-600 transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-baseline gap-1 my-2">
            <span className="text-3xl sm:text-4xl font-black text-rose-600 dark:text-rose-400 tracking-tight">
              {data.overviewMetrics?.revenue?.value || 'x3'}
            </span>
            <span className="text-lg font-bold text-slate-800 dark:text-slate-200">
              {data.overviewMetrics?.revenue?.unit || 'Doanh Thu 2025'}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs text-slate-500 dark:text-slate-400 pb-3 border-b border-slate-100 dark:border-slate-700/50">
            <div>
              <span className="block text-[10px] uppercase text-slate-400">
                {data.overviewMetrics?.revenue?.subLabel || 'Thương hiệu'}
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {data.overviewMetrics?.revenue?.sub || 'DEZUS Fashion'}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-slate-400">
                {data.overviewMetrics?.revenue?.roasLabel || 'ROAS Peak'}
              </span>
              <span className="font-semibold text-rose-600">
                {data.overviewMetrics?.revenue?.roas || '6.8x'}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-slate-400">
                {data.overviewMetrics?.revenue?.profitLabel || 'Net Profit'}
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {data.overviewMetrics?.revenue?.profit || '+180%'}
              </span>
            </div>
          </div>

          <div className="mt-3">
            {renderDotMatrix(
              'bg-rose-500 shadow-[0_0_4px_rgba(244,63,94,0.6)]',
              data.overviewMetrics?.revenue?.activePercent ?? 82,
              24,
              3
            )}
          </div>
        </div>

        {/* Card 4: Disk — Executed Projects */}
        <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-700/70 shadow-card hover:shadow-card-hover transition-all relative overflow-hidden group">
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <HardDrive className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 block">
                  {data.overviewMetrics?.projectsCount?.title || 'Projects Executed'}
                </span>
                <span className="text-[10px] text-slate-400">
                  {data.overviewMetrics?.projectsCount?.sub || 'Đã bàn giao & vận hành'}
                </span>
              </div>
            </div>
            <button
              onClick={() => onNavigateTab('projects')}
              className="text-slate-400 hover:text-amber-600 transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-baseline gap-1 my-2">
            <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {data.overviewMetrics?.projectsCount?.value || '50+'}
            </span>
            <span className="text-lg font-bold text-amber-600">
              {data.overviewMetrics?.projectsCount?.unit || 'Dự án lớn'}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs text-slate-500 dark:text-slate-400 pb-3 border-b border-slate-100 dark:border-slate-700/50">
            <div>
              <span className="block text-[10px] uppercase text-slate-400">
                {data.overviewMetrics?.projectsCount?.stat1Label || 'Thời Trang'}
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {data.overviewMetrics?.projectsCount?.stat1Val || '26 Dự án'}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-slate-400">
                {data.overviewMetrics?.projectsCount?.stat2Label || 'Beauty & Clinic'}
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {data.overviewMetrics?.projectsCount?.stat2Val || '14 Dự án'}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-slate-400">
                {data.overviewMetrics?.projectsCount?.stat3Label || 'Showroom'}
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {data.overviewMetrics?.projectsCount?.stat3Val || '10 Điểm'}
              </span>
            </div>
          </div>

          <div className="mt-3">
            {renderDotMatrix(
              'bg-amber-500 shadow-[0_0_4px_rgba(245,158,11,0.6)]',
              data.overviewMetrics?.projectsCount?.activePercent ?? 60,
              24,
              3
            )}
          </div>
        </div>

        {/* Card 5: Network — Omnichannel Throughput */}
        <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-700/70 shadow-card hover:shadow-card-hover transition-all relative overflow-hidden group">
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 block">
                  {data.overviewMetrics?.stream?.title || 'Omnichannel Stream'}
                </span>
                <span className="text-[10px] text-slate-400">
                  {data.overviewMetrics?.stream?.sub || 'Lưu lượng đa kênh'}
                </span>
              </div>
            </div>
            <button
              onClick={() => onNavigateTab('campaigns')}
              className="text-slate-400 hover:text-teal-600 transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-baseline gap-1 my-2">
            <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {data.overviewMetrics?.stream?.value || '24.3'}
            </span>
            <span className="text-lg font-bold text-teal-600">
              {data.overviewMetrics?.stream?.unit || 'M/Tháng'}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs text-slate-500 dark:text-slate-400 pb-3 border-b border-slate-100 dark:border-slate-700/50">
            <div>
              <span className="block text-[10px] uppercase text-slate-400">
                {data.overviewMetrics?.stream?.stat1Label || 'TikTok Shop'}
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {data.overviewMetrics?.stream?.stat1Val || '12.8M'}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-slate-400">
                {data.overviewMetrics?.stream?.stat2Label || 'Meta / Reels'}
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {data.overviewMetrics?.stream?.stat2Val || '7.2M'}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-slate-400">
                {data.overviewMetrics?.stream?.stat3Label || 'Showroom'}
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {data.overviewMetrics?.stream?.stat3Val || '4.3M'}
              </span>
            </div>
          </div>

          <div className="mt-3">
            {renderDotMatrix(
              'bg-teal-500 shadow-[0_0_4px_rgba(20,184,166,0.6)]',
              data.overviewMetrics?.stream?.activePercent ?? 70,
              24,
              3
            )}
          </div>
        </div>

        {/* Card 6: Processes — Operations & Leadership */}
        <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-700/70 shadow-card hover:shadow-card-hover transition-all relative overflow-hidden group">
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Workflow className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 block">
                  {data.overviewMetrics?.operations?.title || 'Vận Hành & Nhân Sự'}
                </span>
                <span className="text-[10px] text-slate-400">
                  {data.overviewMetrics?.operations?.sub || 'Nguồn lực sẵn sàng'}
                </span>
              </div>
            </div>
            <button
              onClick={() => onNavigateTab('about')}
              className="text-slate-400 hover:text-indigo-600 transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-baseline gap-1 my-2">
            <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {data.overviewMetrics?.operations?.value || '240+'}
            </span>
            <span className="text-lg font-bold text-slate-500">
              {data.overviewMetrics?.operations?.unit || 'Assets/Tháng'}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs text-slate-500 dark:text-slate-400 pb-3 border-b border-slate-100 dark:border-slate-700/50">
            <div>
              <span className="block text-[10px] uppercase text-slate-400">
                {data.overviewMetrics?.operations?.stat1Label || 'Nhân Sự Led'}
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {data.overviewMetrics?.operations?.stat1Val || '20+ Marketers'}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-slate-400">
                {data.overviewMetrics?.operations?.stat2Label || 'Agency Mạng Lưới'}
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {data.overviewMetrics?.operations?.stat2Val || '50+ Đối tác'}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-slate-400">
                {data.overviewMetrics?.operations?.stat3Label || 'Tự Động Hóa AI'}
              </span>
              <span className="font-semibold text-indigo-600">
                {data.overviewMetrics?.operations?.stat3Val || '70% Speed'}
              </span>
            </div>
          </div>

          <div className="mt-3">
            {renderDotMatrix(
              'bg-indigo-500 shadow-[0_0_4px_rgba(99,102,241,0.6)]',
              data.overviewMetrics?.operations?.activePercent ?? 88,
              24,
              3
            )}
          </div>
        </div>
      </div>

      {/* 2. Lower Deep-Analytics Widgets (Donut Breakdown, Launchpad, and Channel Efficiency) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
        {/* Widget 1: Competency Allocation (Donut Chart - Image 2 Style) */}
        <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-700/70 shadow-card">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700/50">
            <div className="flex items-center gap-2">
              <PieChart className="w-4 h-4 text-teal-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                {data.competencyDonut?.title || 'Phân Bổ Năng Lực Cốt Lõi'}
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">
              {data.competencyDonut?.badge || '100% Balanced'}
            </span>
          </div>

          <div className="flex items-center justify-center py-4">
            {/* SVG Circular Donut Chart */}
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                {/* Background Ring */}
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#E2E8F0" strokeWidth="12" />
                {(() => {
                  let cumulativeOffset = 0;
                  const totalCircumference = 238.7;
                  const donutItems = data.competencyDonut?.items || [
                    { name: 'Brand Strategy', percent: 35, color: '#008080' },
                    { name: 'Growth & Ads', percent: 30, color: '#F59E0B' },
                    { name: 'Omnichannel', percent: 20, color: '#3B82F6' },
                    { name: 'Creative & Events', percent: 15, color: '#EC4899' },
                  ];

                  return donutItems.map((item, idx) => {
                    const strokeDash = (item.percent / 100) * totalCircumference;
                    const offset = -cumulativeOffset;
                    cumulativeOffset += strokeDash;

                    return (
                      <circle
                        key={idx}
                        cx="50"
                        cy="50"
                        r="38"
                        fill="transparent"
                        stroke={item.color}
                        strokeWidth="12"
                        strokeDasharray={`${strokeDash} ${totalCircumference}`}
                        strokeDashoffset={offset}
                      />
                    );
                  });
                })()}
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-xl font-black text-slate-900 dark:text-white">
                  {data.competencyDonut?.centerTitle || 'CMO'}
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  {data.competencyDonut?.centerSub || 'Executive'}
                </span>
              </div>
            </div>

            {/* Legend */}
            <div className="ml-4 space-y-2 text-xs">
              {(data.competencyDonut?.items || [
                { name: 'Brand Strategy', percent: 35, color: '#008080' },
                { name: 'Growth & Ads', percent: 30, color: '#F59E0B' },
                { name: 'Omnichannel', percent: 20, color: '#3B82F6' },
                { name: 'Creative & Events', percent: 15, color: '#EC4899' },
              ]).map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="text-slate-600 dark:text-slate-300 font-medium truncate max-w-[100px]">{item.name}</span>
                  <span className="font-bold text-slate-900 dark:text-white ml-auto">{item.percent}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Widget 2: Featured Launchpad (Quick Project Access) */}
        <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-700/70 shadow-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700/50">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  {data.launchpadWidget?.title || 'Dự Án Tiêu Biểu Nhanh'}
                </span>
              </div>
              <button
                onClick={() => onNavigateTab('projects')}
                className="text-[11px] font-bold text-teal-600 hover:underline"
              >
                {data.launchpadWidget?.viewAllText || 'Xem tất cả'} ({data.projects.length}) →
              </button>
            </div>

            <div className="space-y-2.5 mt-3">
              {data.projects.slice(0, 3).map((p, idx) => (
                <div
                  key={idx}
                  onClick={() => onNavigateTab('projects')}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-600"
                >
                  <img
                    src={p.col1Img1}
                    alt={p.name}
                    className="w-11 h-11 rounded-lg object-cover border border-slate-200 dark:border-slate-600 shrink-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = './images/product-1.jpg';
                    }}
                  />
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-bold text-slate-900 dark:text-white truncate block">
                      {p.name}
                    </span>
                    <span className="text-[10px] text-teal-600 dark:text-teal-400 font-semibold block truncate">
                      {p.category}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {p.number}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">
              {data.launchpadWidget?.bottomNote || 'Xác thực số liệu minh bạch'}
            </span>
            <button
              onClick={() => onNavigateTab('achievements')}
              className="text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-teal-600 flex items-center gap-1"
            >
              <span>{data.launchpadWidget?.verifyButtonText || 'Thành tựu xác thực'}</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Widget 3: Channel Efficiency by ROI (CPU by App style from Image 2) */}
        <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-700/70 shadow-card">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700/50">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                {data.channelEfficiency?.title || 'Hiệu Suất Kênh Tiếp Thị (ROI)'}
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">
              {data.channelEfficiency?.subtitle || 'Benchmark 2025-2026'}
            </span>
          </div>

          <div className="space-y-3.5 mt-4 text-xs">
            {(data.channelEfficiency?.channels || [
              { name: 'TikTok Shop & Viral Short', percent: 42, color: 'teal' },
              { name: 'Meta Ads & Retargeting Phễu', percent: 28, color: 'blue' },
              { name: 'Fashion Show & Grand Opening', percent: 18, color: 'amber' },
              { name: 'Kênh14, PR & Celebrity Influence', percent: 12, color: 'purple' },
            ]).map((ch, idx) => {
              const bgColors: Record<string, string> = {
                teal: 'bg-teal-500',
                blue: 'bg-blue-500',
                amber: 'bg-amber-500',
                purple: 'bg-purple-500',
                rose: 'bg-rose-500',
                emerald: 'bg-emerald-500',
              };
              const textColors: Record<string, string> = {
                teal: 'text-teal-600',
                blue: 'text-blue-600',
                amber: 'text-amber-600',
                purple: 'text-purple-600',
                rose: 'text-rose-600',
                emerald: 'text-emerald-600',
              };

              return (
                <div key={idx}>
                  <div className="flex justify-between font-semibold mb-1">
                    <span className="text-slate-700 dark:text-slate-300 truncate max-w-[200px]">{ch.name}</span>
                    <span className={`font-mono ${textColors[ch.color] || 'text-teal-600'}`}>{ch.percent}% ROI Share</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${bgColors[ch.color] || 'bg-teal-500'}`}
                      style={{ width: `${ch.percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between text-xs">
            <span className="text-slate-500">Mô hình đo lường:</span>
            <span className="font-bold text-teal-600 bg-teal-50 dark:bg-teal-900/40 px-2 py-0.5 rounded">
              {data.channelEfficiency?.modelTag || 'Omnichannel Attribution'}
            </span>
          </div>
        </div>
      </div>

      {/* 3. Executive Action Banner (Download CV & Direct Contact) */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-teal-500/20">
        <div className="space-y-1.5 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{data.executiveBanner?.badge || 'Sẵn Sàng Hợp Tác • Quý 4/2026'}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight">
            {data.executiveBanner?.title || 'Bạn Đang Tìm Kiếm Giám Đốc Marketing (CMO) Hoặc Cố Vấn Tăng Trưởng?'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
            {data.executiveBanner?.description || 'Sẵn sàng mang đến những chiến dịch đột phá triệu view, tối ưu hóa ngân sách P&L và nhân bội doanh số bán lẻ thời trang & làm đẹp.'}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={data.executiveBanner?.cvUrl || data.hero.cvUrl || './Tran-Hai-Executive-Portfolio.pdf'}
            download="Tran-Hai-Executive-Portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 text-xs sm:text-sm font-bold px-5 py-3 rounded-xl shadow-md transition-all"
          >
            <Download className="w-4 h-4 text-teal-600" />
            <span>{data.executiveBanner?.cvButtonText || 'Tải CV Bản Đầy Đủ (PDF)'}</span>
          </a>

          <button
            onClick={() => onNavigateTab('contact')}
            className="flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl shadow-md hover:shadow-teal-500/30 transition-all"
          >
            <Send className="w-4 h-4" />
            <span>{data.executiveBanner?.contactButtonText || 'Liên Hệ Ngay'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
