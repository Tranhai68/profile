import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Grid,
  Film,
  Search,
  ExternalLink,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { PortfolioData, ProjectTile } from '../../data/portfolioData';

interface DashboardCampaignsProps {
  data: PortfolioData;
}

export const DashboardCampaigns: React.FC<DashboardCampaignsProps> = ({ data }) => {
  const [viewMode, setViewMode] = useState<'marquee' | 'grid'>('marquee');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allTiles: ProjectTile[] = [
    ...(data.marquee?.row1 || []),
    ...(data.marquee?.row2 || []),
  ];

  const filteredTiles = allTiles.filter((tile) => {
    return (
      tile.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tile.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="space-y-6">
      {/* 1. Header & View Switcher */}
      <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-700/70 shadow-card flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-teal-600" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {data.marquee.sectionTitle || 'Các Chiến Dịch & Sản Phẩm Tiêu Biểu'}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {data.marquee.sectionSub || 'Real Projects • Fashion & Beauty Portfolio Showcase'}
          </p>
        </div>

        {/* View Mode Switcher & Search */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          {viewMode === 'grid' && (
            <input
              type="text"
              placeholder="Lọc theo tên / tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:border-teal-500"
            />
          )}

          <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600">
            <button
              onClick={() => setViewMode('marquee')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'marquee'
                  ? 'bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Marquee Flow</span>
            </button>

            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'grid'
                  ? 'bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Lưới Gallery</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Marquee Flow View (Original High-Motion Marquee) */}
      {viewMode === 'marquee' && (
        <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-700/70 shadow-card space-y-6 overflow-hidden">
          {/* Row 1 (Moving Left) */}
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused] w-max">
              {[...(data.marquee.row1 || []), ...(data.marquee.row1 || [])].map((item, idx) => (
                <div
                  key={idx}
                  className="w-56 sm:w-64 h-72 sm:h-80 rounded-2xl overflow-hidden relative group shrink-0 border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 shadow-sm"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = './images/product-1.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent p-4 flex flex-col justify-end">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300">
                      {item.tag}
                    </span>
                    <h5 className="text-sm font-bold text-white leading-snug">
                      {item.title}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 (Moving Right) */}
          <div className="relative w-full overflow-hidden pt-2">
            <div
              className="flex gap-4 animate-marquee-reverse hover:[animation-play-state:paused] w-max"
              style={{
                animationDirection: 'reverse',
              }}
            >
              {[...(data.marquee.row2 || []), ...(data.marquee.row2 || [])].map((item, idx) => (
                <div
                  key={idx}
                  className="w-56 sm:w-64 h-72 sm:h-80 rounded-2xl overflow-hidden relative group shrink-0 border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 shadow-sm"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = './images/product-2.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent p-4 flex flex-col justify-end">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300">
                      {item.tag}
                    </span>
                    <h5 className="text-sm font-bold text-white leading-snug">
                      {item.title}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-2 text-xs text-slate-400 font-medium">
            💡 Rê chuột vào từng ảnh để tạm dừng và xem chi tiết sản phẩm / chiến dịch
          </div>
        </div>
      )}

      {/* 3. High-Density Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredTiles.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-card hover:shadow-card-hover transition-all group flex flex-col"
            >
              <div className="h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-900 relative">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = './images/product-1.jpg';
                  }}
                />
                <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-sm text-teal-300 text-[10px] font-bold">
                  {item.tag}
                </span>
              </div>
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white line-clamp-2">
                  {item.title}
                </h5>
                <span className="text-[10px] text-slate-400 mt-2 block font-mono">
                  ASSET #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
