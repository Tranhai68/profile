import React from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  Award,
  Sparkles,
  ExternalLink,
  TrendingUp,
  CheckCircle2,
  Calendar,
  Layers,
} from 'lucide-react';
import { PortfolioData } from '../../data/portfolioData';

interface DashboardAchievementsProps {
  data: PortfolioData;
}

export const DashboardAchievements: React.FC<DashboardAchievementsProps> = ({ data }) => {
  return (
    <div className="space-y-6">
      {/* 1. Header */}
      <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-700/70 shadow-card">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-500" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Thành Tựu & Dấu Ấn Nghề Nghiệp (Verifiable Milestones)
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Các chỉ số tăng trưởng thực tế, kỷ lục truyền thông và sự ghi nhận từ báo giới chính thống.
        </p>
      </div>

      {/* 2. Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.achievements.map((ach) => (
          <div
            key={ach.id}
            className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-700/70 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-[10px] font-bold border border-amber-200 dark:border-amber-800">
                  {ach.verifiedBadge}
                </span>
                <span className="text-xs font-mono text-slate-400 font-bold">
                  {ach.date}
                </span>
              </div>

              <div className="text-2xl sm:text-3xl font-black text-teal-600 dark:text-teal-400 tracking-tight">
                {ach.metric}
              </div>

              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                {ach.title}
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {ach.description}
              </p>
            </div>

            {ach.link && (
              <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60">
                <a
                  href={ach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline"
                >
                  <span>Xem tài liệu / Bằng chứng xác thực</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
