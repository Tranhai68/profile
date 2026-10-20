import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  User,
  Cpu,
  Briefcase,
  FolderGit2,
  Sparkles,
  GraduationCap,
  Wrench,
  Trophy,
  Send,
  Sun,
  Moon,
  Zap,
  Menu,
  X,
  FileText,
  Settings,
  Clock,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Shield,
  Layers,
} from 'lucide-react';
import { PortfolioData } from '../../data/portfolioData';
import { DashboardOverview } from './DashboardOverview';
import { DashboardAbout } from './DashboardAbout';
import { DashboardSkills } from './DashboardSkills';
import { DashboardExperience } from './DashboardExperience';
import { DashboardProjects } from './DashboardProjects';
import { DashboardCampaigns } from './DashboardCampaigns';
import { DashboardEducation } from './DashboardEducation';
import { DashboardServices } from './DashboardServices';
import { DashboardAchievements } from './DashboardAchievements';
import { DashboardContact } from './DashboardContact';

interface DashboardLayoutProps {
  data: PortfolioData;
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  onOpenAdmin: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onScrollToHero: () => void;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  data,
  activeTab,
  onSelectTab,
  onOpenAdmin,
  darkMode,
  onToggleDarkMode,
  onScrollToHero,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeString, setTimeString] = useState('');
  const [optimizeToast, setOptimizeToast] = useState(false);
  const [timeFilter, setTimeFilter] = useState('ALL');

  // Real-time clock update
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('vi-VN', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleOptimizeClick = () => {
    setOptimizeToast(true);
    setTimeout(() => setOptimizeToast(false), 3200);
  };

  const navItems = [
    { id: 'overview', label: 'Overview — Tổng quan', shortLabel: 'Overview', icon: LayoutDashboard, count: '6' },
    { id: 'about', label: 'About Me — Thông tin', shortLabel: 'About Me', icon: User, count: '10+' },
    { id: 'skills', label: 'Skills & Expertise — Kỹ năng', shortLabel: 'Skills', icon: Cpu, count: '28' },
    { id: 'experience', label: 'Work Experience — Kinh nghiệm', shortLabel: 'Experience', icon: Briefcase, count: '4' },
    { id: 'projects', label: 'Projects — Dự án lớn', shortLabel: 'Projects', icon: FolderGit2, count: '4' },
    { id: 'campaigns', label: 'Showcase — Chiến dịch tiêu biểu', shortLabel: 'Campaigns', icon: Sparkles, count: '14' },
    { id: 'education', label: 'Education — Học vấn', shortLabel: 'Education', icon: GraduationCap, count: '4' },
    { id: 'services', label: 'Services — Năng lực', shortLabel: 'Services', icon: Wrench, count: '6' },
    { id: 'achievements', label: 'Achievements — Thành tựu', shortLabel: 'Achievements', icon: Trophy, count: '6' },
    { id: 'contact', label: 'Contact — Liên hệ', shortLabel: 'Contact', icon: Send, count: '24/7' },
  ];

  return (
    <div className="min-h-screen bg-[#F4F6F9] dark:bg-[#0B0F17] text-slate-800 dark:text-slate-100 flex flex-col md:flex-row transition-colors duration-300">
      {/* 1. SIDEBAR — THANH ĐIỀU HƯỚNG BÊN TRÁI (Fixed / Sticky) */}
      <aside className="w-full md:w-64 lg:w-72 bg-white dark:bg-[#131B26] border-r border-slate-200/90 dark:border-slate-800/80 flex flex-col justify-between shrink-0 sticky top-0 md:h-screen z-30 shadow-xs">
        <div>
          {/* Top Brand / System Logo */}
          <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
            <div
              onClick={onScrollToHero}
              className="flex items-center gap-2.5 cursor-pointer group"
              title="Nhấn để cuộn lên Hero 3D"
            >
              <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-md shadow-teal-600/30 group-hover:scale-105 transition-transform">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-black tracking-tight text-slate-900 dark:text-white uppercase block leading-none">
                  {data.systemInfo?.osName || 'Trần Hải OS'}
                </span>
                <span className="text-[10px] font-mono text-teal-600 dark:text-teal-400 font-bold">
                  {data.systemInfo?.osVersion || 'CMO CONTROL v2.6'}
                </span>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Navigation Items List */}
          <nav
            className={`p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-190px)] ${
              mobileMenuOpen ? 'block' : 'hidden md:block'
            }`}
          >
            <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Menu Điều Hướng Hệ Thống
            </div>

            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                    isActive
                      ? 'bg-teal-600 text-white shadow-sm shadow-teal-600/25'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-teal-600 dark:text-teal-400'}`} />
                    <span className="truncate">{item.shortLabel}</span>
                  </div>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                      isActive
                        ? 'bg-white/20 text-white font-bold'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                    }`}
                  >
                    {item.count}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Sidebar: Admin CMS Button & Mini Profile */}
        <div className={`p-4 border-t border-slate-100 dark:border-slate-800/60 space-y-3 ${
          mobileMenuOpen ? 'block' : 'hidden md:block'
        }`}>
          {/* Admin CMS Button (Ensures "vẫn phải có admin để chỉnh sửa ảnh") */}
          <button
            onClick={onOpenAdmin}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-100 hover:bg-teal-50 dark:bg-slate-800 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-200 hover:text-teal-700 text-xs font-bold border border-slate-200 dark:border-slate-700 transition-all"
          >
            <Settings className="w-3.5 h-3.5 text-teal-600" />
            <span>Quản Trị Admin CMS (Ảnh/Nội Dung)</span>
          </button>

          {/* Mini Profile Card */}
          <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
            <img
              src={data.systemInfo?.profilePhoto || data.about?.photo || './images/personal-photo.jpg'}
              alt="Avatar"
              className="w-9 h-9 rounded-lg object-cover border border-white dark:border-slate-700 shrink-0"
              onError={(e) => {
                (e.target as HTMLImageElement).src = './images/profile.jpg';
              }}
            />
            <div className="min-w-0 flex-1">
              <span className="text-xs font-bold text-slate-900 dark:text-white truncate block">
                {data.systemInfo?.profileName || data.hero?.heading || 'Trần Hải'}
              </span>
              <span className="text-[10px] text-teal-600 dark:text-teal-400 font-semibold block truncate">
                {data.systemInfo?.profileTitle || data.hero?.roleTag || 'CMO / Marketing Director'}
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* 2. MAIN CONTENT — VÙNG HIỂN THỊ NỘI DUNG (Dashboard Control Panel) */}
      <main className="flex-1 min-w-0 flex flex-col">
        {/* Top Header Bar (Directly Inspired by Image 2's Top Bar) */}
        <header className="sticky top-0 z-20 bg-white/90 dark:bg-[#131B26]/90 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800/80 px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 shadow-xs">
          {/* Breadcrumb & Live Host Status */}
          <div className="flex items-center gap-2 sm:gap-3">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white capitalize">
              {navItems.find((n) => n.id === activeTab)?.label.split(' — ')[1] || 'Tổng Quan'}
            </h2>
            <span className="hidden sm:inline-block text-xs font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
              {data.systemInfo?.hostName || 'DESKTOP-TRANHAI-OS'}
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              NOW
            </span>
          </div>

          {/* Action Bar (Optimize 1-Touch, Time Filter, Theme, CV Download) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Optimize Button (Image 2 style: "Tối ưu 1 Chạm") */}
            <button
              onClick={handleOptimizeClick}
              className="flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold px-3 py-1.5 rounded-xl border border-emerald-200 dark:border-emerald-800 transition-all shadow-xs"
              title="Kích hoạt thuật toán tối ưu hiệu suất marketing"
            >
              <Zap className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
              <span>Tối ưu 1 Chạm</span>
            </button>

            {/* Time Filter Pills (Image 2 style: 1m, 5m, 15m, 1h, ALL) */}
            <div className="hidden lg:flex items-center p-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-bold text-slate-600 dark:text-slate-300">
              {['1m', '5m', '15m', '1h', 'ALL'].map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeFilter(tf)}
                  className={`px-2 py-1 rounded-md transition-all ${
                    timeFilter === tf
                      ? 'bg-white dark:bg-slate-700 text-teal-600 shadow-xs'
                      : 'hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>

            {/* Live Real-time Clock */}
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1.5 rounded-xl">
              <Clock className="w-3.5 h-3.5 text-teal-600" />
              <span>{timeString}</span>
            </div>

            {/* Dark / Light Mode Switch */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-teal-600 transition-colors"
              title={darkMode ? 'Chuyển sang Light Mode' : 'Chuyển sang Dark Mode'}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Quick CV Download */}
            <a
              href={data.hero?.cvUrl || './Tran-Hai-Executive-Portfolio.pdf'}
              download="Tran-Hai-Executive-Portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold px-3 py-1.5 rounded-xl transition-all shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Tải CV (PDF)</span>
            </a>
          </div>
        </header>

        {/* Optimization Toast Notification */}
        <AnimatePresence>
          {optimizeToast && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mx-4 sm:mx-8 mt-4 p-3.5 rounded-xl bg-emerald-600 text-white shadow-lg flex items-center justify-between text-xs font-bold z-30"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  ⚡ Đã kích hoạt tối ưu hóa: Bộ nhớ dữ liệu, KPIs và phễu chuyển đổi đạt 100% hiệu suất cao nhất!
                </span>
              </div>
              <button onClick={() => setOptimizeToast(false)}>
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content Body (Render Active Tab) */}
        <div className="p-4 sm:p-6 lg:p-8 flex-1 overflow-x-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {activeTab === 'overview' && (
                <DashboardOverview
                  data={data}
                  onNavigateTab={onSelectTab}
                  onOpenAdmin={onOpenAdmin}
                />
              )}
              {activeTab === 'about' && (
                <DashboardAbout data={data} onNavigateTab={onSelectTab} />
              )}
              {activeTab === 'skills' && <DashboardSkills data={data} />}
              {activeTab === 'experience' && (
                <DashboardExperience data={data} onNavigateTab={onSelectTab} />
              )}
              {activeTab === 'projects' && <DashboardProjects data={data} />}
              {activeTab === 'campaigns' && <DashboardCampaigns data={data} />}
              {activeTab === 'education' && <DashboardEducation data={data} />}
              {activeTab === 'services' && (
                <DashboardServices data={data} onNavigateTab={onSelectTab} />
              )}
              {activeTab === 'achievements' && <DashboardAchievements data={data} />}
              {activeTab === 'contact' && <DashboardContact data={data} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer info inside Dashboard */}
        <footer className="border-t border-slate-200/80 dark:border-slate-800/80 py-4 px-6 text-center text-xs text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            © 2026 Trần Hải. Tất cả quyền được bảo lưu • Marketing Manager & Strategic CMO
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onScrollToHero}
              className="text-teal-600 hover:underline font-semibold"
            >
              ↑ Lên đầu trang (Hero 3D)
            </button>
            <span>•</span>
            <button
              onClick={onOpenAdmin}
              className="text-slate-600 dark:text-slate-300 hover:text-teal-600 font-semibold"
            >
              ⚙️ Admin CMS
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
};
