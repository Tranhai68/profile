import React from 'react';
import { motion } from 'framer-motion';
import {
  Wrench,
  Target,
  Flame,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Bot,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { PortfolioData } from '../../data/portfolioData';

interface DashboardServicesProps {
  data: PortfolioData;
  onNavigateTab: (tabId: string) => void;
}

export const DashboardServices: React.FC<DashboardServicesProps> = ({
  data,
  onNavigateTab,
}) => {
  const iconMap: Record<string, any> = {
    Target,
    Flame,
    Sparkles,
    TrendingUp,
    ShieldCheck,
    Bot,
  };

  return (
    <div className="space-y-6">
      {/* 1. Header */}
      <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-700/70 shadow-card">
        <div className="flex items-center gap-2">
          <Wrench className="w-5 h-5 text-teal-600" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Năng Lực Cung Cấp & Lĩnh Vực Chuyên Môn
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Các gói giải pháp tư vấn cấp cao và thực thi tiếp thị chìa khóa trao tay cho thương hiệu thời trang, làm đẹp và bán lẻ.
        </p>
      </div>

      {/* 2. Services Grid (6 Core Offerings) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.servicesList.map((svc, idx) => {
          const Icon = iconMap[svc.icon] || Sparkles;

          return (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-700/70 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-2xl font-black text-slate-200 dark:text-slate-700">
                    {svc.number}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">
                  {svc.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {svc.shortDesc}
                </p>
              </div>

              {/* Deliverables */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 space-y-2">
                <span className="text-[10px] uppercase font-bold text-teal-600 dark:text-teal-400 block">
                  Hạng mục bàn giao chính:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {svc.deliverables.map((deliv, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA button */}
              <button
                onClick={() => onNavigateTab('contact')}
                className="w-full mt-2 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/60 hover:bg-teal-600 hover:text-white text-slate-700 dark:text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
              >
                <span>Tư vấn giải pháp này</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
