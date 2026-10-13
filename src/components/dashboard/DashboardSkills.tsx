import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Palette,
  Wrench,
  Bot,
  Heart,
  Users,
  Search,
  CheckCircle2,
  TrendingUp,
  Layers,
  Sparkles,
  Zap,
} from 'lucide-react';
import { PortfolioData, SkillCategory } from '../../data/portfolioData';

interface DashboardSkillsProps {
  data: PortfolioData;
}

export const DashboardSkills: React.FC<DashboardSkillsProps> = ({ data }) => {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, any> = {
    professional: TrendingUp,
    creative: Palette,
    tools: Wrench,
    ai_tech: Bot,
    soft_skills: Heart,
    management: Users,
  };

  const categoryColors: Record<string, { bg: string; text: string; bar: string }> = {
    professional: { bg: 'bg-blue-50 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400', bar: 'bg-blue-500' },
    creative: { bg: 'bg-rose-50 dark:bg-rose-900/30', text: 'text-rose-600 dark:text-rose-400', bar: 'bg-rose-500' },
    tools: { bg: 'bg-amber-50 dark:bg-amber-900/30', text: 'text-amber-600 dark:text-amber-400', bar: 'bg-amber-500' },
    ai_tech: { bg: 'bg-teal-50 dark:bg-teal-900/30', text: 'text-teal-600 dark:text-teal-400', bar: 'bg-teal-500' },
    soft_skills: { bg: 'bg-purple-50 dark:bg-purple-900/30', text: 'text-purple-600 dark:text-purple-400', bar: 'bg-purple-500' },
    management: { bg: 'bg-emerald-50 dark:bg-emerald-900/30', text: 'text-emerald-600 dark:text-emerald-400', bar: 'bg-emerald-500' },
  };

  const filteredCategories = data.skillsData.filter((cat) => {
    if (selectedCat !== 'all' && cat.id !== selectedCat) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* 1. Header & Data Analytics Intro */}
      <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-700/70 shadow-card flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-teal-600" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Bản Đồ Năng Lực & Kỹ Năng Chuyên Môn
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Đánh giá định lượng dựa trên hơn 10 năm thực chiến trong ngành Marketing và Quản trị CMO.
          </p>
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Tìm kiếm kỹ năng hoặc công cụ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:border-teal-500 transition-colors"
          />
        </div>
      </div>

      {/* 2. Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => setSelectedCat('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
            selectedCat === 'all'
              ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
          }`}
        >
          Tất Cả ({data.skillsData.reduce((acc, c) => acc + c.skills.length, 0)})
        </button>

        {data.skillsData.map((cat) => {
          const Icon = categoryIcons[cat.id] || Zap;
          const isSelected = selectedCat === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                isSelected
                  ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.name.split(' (')[0]}</span>
              <span className="text-[10px] opacity-70">({cat.skills.length})</span>
            </button>
          );
        })}
      </div>

      {/* 3. Skill Cards Grid by Group */}
      <div className="space-y-6">
        {filteredCategories.map((cat) => {
          const Icon = categoryIcons[cat.id] || Cpu;
          const colors = categoryColors[cat.id] || {
            bg: 'bg-slate-100',
            text: 'text-slate-700',
            bar: 'bg-slate-500',
          };

          const matchedSkills = cat.skills.filter((s) =>
            s.name.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (searchQuery && matchedSkills.length === 0) return null;

          return (
            <div
              key={cat.id}
              className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-700/70 shadow-card space-y-4"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700/60">
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {cat.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono font-bold text-slate-400">
                  {matchedSkills.length} Kỹ năng
                </span>
              </div>

              {/* Skills Progress Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                {matchedSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-700/40 border border-slate-100 dark:border-slate-700 space-y-2 hover:border-teal-300 dark:hover:border-teal-700 transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-300 border border-slate-200 dark:border-slate-600">
                          {skill.tag}
                        </span>
                        <span className="font-mono font-bold text-slate-700 dark:text-slate-300">
                          {skill.level}%
                        </span>
                      </div>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-600 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.05 }}
                        className={`h-full rounded-full ${colors.bar}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
