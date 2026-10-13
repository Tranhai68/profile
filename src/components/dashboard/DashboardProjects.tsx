import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderGit2,
  ExternalLink,
  Search,
  Sparkles,
  Layers,
  Eye,
  X,
  ArrowUpRight,
  TrendingUp,
} from 'lucide-react';
import { PortfolioData, ProjectItem } from '../../data/portfolioData';

interface DashboardProjectsProps {
  data: PortfolioData;
}

export const DashboardProjects: React.FC<DashboardProjectsProps> = ({ data }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'Tất Cả Dự Án' },
    { id: 'mega', label: 'Mega Campaign (500M+)' },
    { id: 'metric', label: 'Marketing Metric (x3)' },
    { id: 'show', label: 'Fashion Show 5 Châu' },
    { id: 'opening', label: 'Grand Opening Showroom' },
  ];

  const filteredProjects = data.projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'mega') return project.number === '01';
    if (selectedFilter === 'metric') return project.number === '02';
    if (selectedFilter === 'show') return project.number === '03';
    if (selectedFilter === 'opening') return project.number === '04';

    return true;
  });

  return (
    <div className="space-y-6">
      {/* 1. Header & Filters */}
      <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-700/70 shadow-card flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <FolderGit2 className="w-5 h-5 text-teal-600" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Dự Án Đã Thực Hiện (Featured Case Studies)
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Các chiến dịch và dự án quy mô lớn đã tạo nên dấu ấn bùng nổ truyền thông và đột phá doanh thu.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Tìm kiếm dự án..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:border-teal-500 transition-colors"
          />
        </div>
      </div>

      {/* 2. Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedFilter(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              selectedFilter === cat.id
                ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 3. Projects List — EXACT 40/60 Layout Preserved from Original Design */}
      <div className="space-y-8">
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-800/90 rounded-3xl p-5 sm:p-7 md:p-8 border border-slate-200/90 dark:border-slate-700/70 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top Bar of Project Card */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-slate-100 dark:border-slate-700/60">
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="font-black text-slate-300 dark:text-slate-600 text-4xl sm:text-5xl md:text-6xl tracking-tighter select-none font-mono">
                  {project.number}
                </span>
                <div>
                  <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-teal-600 dark:text-teal-400 block mb-0.5">
                    {project.category}
                  </span>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    {project.name}
                  </h4>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-200 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Case Study</span>
                </button>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-sm hover:shadow transition-all group"
                >
                  <span>Live Project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Description brief */}
            <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 font-normal my-4 leading-relaxed max-w-4xl">
              {project.description}
            </p>

            {/* Bottom Row: 2-column image layout (40% left, 60% right) — EXACT TO ORIGINAL */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 flex-grow min-h-0 pt-1">
              {/* Left Column (40% width ~ 5 cols) */}
              <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4">
                <div
                  onClick={() => setActiveModalProject(project)}
                  className="w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 cursor-pointer group"
                >
                  <img
                    src={project.col1Img1}
                    alt={`${project.name} detail 1`}
                    loading="lazy"
                    className="w-full object-cover h-[140px] sm:h-[180px] md:h-[200px] group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = './images/product-1.jpg';
                    }}
                  />
                </div>
                <div
                  onClick={() => setActiveModalProject(project)}
                  className="w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex-grow cursor-pointer group"
                >
                  <img
                    src={project.col1Img2}
                    alt={`${project.name} detail 2`}
                    loading="lazy"
                    className="w-full h-full object-cover min-h-[140px] max-h-[240px] group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = './images/product-2.jpg';
                    }}
                  />
                </div>
              </div>

              {/* Right Column (60% width ~ 7 cols) */}
              <div
                onClick={() => setActiveModalProject(project)}
                className="md:col-span-7 overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 cursor-pointer group"
              >
                <img
                  src={project.col2Img}
                  alt={`${project.name} main showcase`}
                  loading="lazy"
                  className="w-full h-full object-cover min-h-[220px] max-h-[460px] group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = './images/hero-banner.png';
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Interactive Case Study Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-700 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-4">
                <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block">
                  {activeModalProject.category}
                </span>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  {activeModalProject.name}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeModalProject.description}
                </p>

                {/* Gallery Images in Modal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <img
                    src={activeModalProject.col1Img1}
                    alt="Detail 1"
                    className="w-full h-48 sm:h-60 rounded-xl object-cover border border-slate-200 dark:border-slate-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = './images/product-1.jpg';
                    }}
                  />
                  <img
                    src={activeModalProject.col2Img}
                    alt="Detail 2"
                    className="w-full h-48 sm:h-60 rounded-xl object-cover border border-slate-200 dark:border-slate-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = './images/hero-banner.png';
                    }}
                  />
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">
                    CASE STUDY #{activeModalProject.number}
                  </span>
                  <a
                    href={activeModalProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-all shadow-sm"
                  >
                    <span>Truy cập tài liệu & link trực tiếp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
