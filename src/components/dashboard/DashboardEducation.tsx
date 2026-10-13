import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Calendar,
  BookOpen,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { PortfolioData } from '../../data/portfolioData';

interface DashboardEducationProps {
  data: PortfolioData;
}

export const DashboardEducation: React.FC<DashboardEducationProps> = ({ data }) => {
  return (
    <div className="space-y-6">
      {/* 1. Header */}
      <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-700/70 shadow-card">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-teal-600" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Học Vấn & Chứng Chỉ Chuyên Môn
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Nền tảng đào tạo chính quy kết hợp các chứng chỉ quản trị cấp cao và công nghệ tiếp thị hiện đại.
        </p>
      </div>

      {/* 2. Education Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.education.map((edu, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-700/70 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <span className="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-200 dark:border-teal-800">
                  {edu.badge}
                </span>
                <span className="text-xs font-mono font-bold text-slate-500">
                  {edu.year}
                </span>
              </div>

              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                {edu.degree}
              </h4>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400">
                <Award className="w-3.5 h-3.5 text-teal-600" />
                <span>{edu.school}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {edu.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                Nội dung nổi bật:
              </span>
              {edu.highlights.map((hl, hlIdx) => (
                <div key={hlIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
