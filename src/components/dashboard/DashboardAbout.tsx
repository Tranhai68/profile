import React from 'react';
import { motion } from 'framer-motion';
import {
  UserCheck,
  Award,
  Sparkles,
  Compass,
  Target,
  BrainCircuit,
  TrendingUp,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  HeartHandshake,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { PortfolioData } from '../../data/portfolioData';

interface DashboardAboutProps {
  data: PortfolioData;
  onNavigateTab: (tabId: string) => void;
}

export const DashboardAbout: React.FC<DashboardAboutProps> = ({
  data,
  onNavigateTab,
}) => {
  return (
    <div className="space-y-6">
      {/* 1. Header Profile Identity Banner */}
      <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-700/70 shadow-card flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
        {/* Avatar with Status Ring */}
        <div className="relative shrink-0">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl bg-slate-100 dark:bg-slate-800">
            <img
              src="./images/personal-photo.jpg"
              alt="Trần Hải"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src = './images/profile.jpg';
              }}
            />
          </div>
          {/* Live Online Badge */}
          <div className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow-md border border-slate-100 dark:border-slate-700 flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">
              Sẵn Sàng
            </span>
          </div>
        </div>

        {/* Identity Details */}
        <div className="flex-1 text-center md:text-left space-y-3">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-200 dark:border-teal-800">
              Head of Marketing • CMO
            </span>
            <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold border border-indigo-200 dark:border-indigo-800">
              10+ Năm Kinh Nghiệm MKT
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-xs font-bold border border-amber-200 dark:border-amber-800">
              Chuyên Sâu Fashion & Beauty
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Trần Hải
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {data.about.bio}
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-teal-600" />
              <span>TP. Hồ Chí Minh / Toàn Quốc</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-teal-600" />
              <span>{data.contact.email}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-teal-600" />
              <span>{data.contact.phone}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Key Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {data.about.stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-700/70 shadow-card text-center"
          >
            <div className="text-3xl sm:text-4xl font-black text-teal-600 dark:text-teal-400 tracking-tight">
              {stat.value}
            </div>
            <div className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* 3. Core Values & Working Philosophy (Tư duy làm việc & Giá trị cốt lõi) */}
      <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-700/70 shadow-card space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-700/60 pb-4">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-teal-600" />
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Tư Duy Làm Việc & Giá Trị Cốt Lõi
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Những nguyên tắc kim chỉ nam trong suốt 10 năm xây dựng thương hiệu và bứt phá doanh số.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Pillar 1 */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-700/40 border border-slate-100 dark:border-slate-700 flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Data-Driven & Tối Ưu Doanh Số Thực Tế (P&L)
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Mọi ý tưởng sáng tạo đều phải có đích đến là doanh thu và tăng trưởng lợi nhuận. Tôi không làm marketing dựa trên cảm tính mà dựa vào số liệu chuyển đổi, ROAS và giá trị vòng đời khách hàng (LTV).
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-700/40 border border-slate-100 dark:border-slate-700 flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/50 text-amber-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Sáng Tạo Đột Phá & Chiến Dịch Lan Tỏa (Viral Thinking)
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Nắm bắt nhạy bén thị hiếu khán giả đại chúng và giới mộ điệu. Khả năng kết nối nghệ sĩ hạng A (Ngọc Trinh, Quốc Trường) và tổ chức các Fashion Show triệu view để tạo ra hiệu ứng lan truyền tự nhiên.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-700/40 border border-slate-100 dark:border-slate-700 flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Tích Hợp Đa Kênh (Omnichannel Retail Synergy)
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Đồng bộ hóa trải nghiệm giữa chuỗi showroom vật lý và các kênh trực tuyến (TikTok Shop, Shopee, Facebook Ads). Giúp khách hàng di chuyển mượt mà giữa các điểm chạm và tối ưu hóa doanh thu cửa hàng.
              </p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-700/40 border border-slate-100 dark:border-slate-700 flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/50 text-purple-600 flex items-center justify-center shrink-0">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Ứng Dụng Công Nghệ & AI Tự Động Hóa
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Tiên phong áp dụng Generative AI (Midjourney, LLMs, Automation Pipelines) vào sản xuất nội dung hình ảnh/video hàng loạt. Tiết kiệm 70% thời gian triển khai mà vẫn giữ trọn vẹn chất lượng cao cấp.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Interests & Strategic Focus (Những lĩnh vực quan tâm & Định hướng phát triển) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-700/70 shadow-card">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-700/60">
            <Target className="w-5 h-5 text-teal-600" />
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Định Hướng & Mục Tiêu Phát Triển
            </h4>
          </div>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>Xây dựng các thương hiệu Thời Trang & Thẩm Mỹ Việt Nam vươn tầm khu vực Đông Nam Á.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>Kiến tạo hệ thống tiếp thị tự vận hành (Self-Operating Marketing Machine) cho doanh nghiệp vừa và lớn.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>Phát triển thế hệ Marketer kế cận có năng lực thực chiến cao, am hiểu sâu sắc dữ liệu và công nghệ AI.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-700/70 shadow-card">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-700/60">
            <HeartHandshake className="w-5 h-5 text-indigo-600" />
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Lĩnh Vực Đam Mê & Nghiên Cứu Chuyên Sâu
            </h4>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              'Thời Trang Cao Cấp (High Fashion)',
              'Thẩm Mỹ Viện Công Nghệ Cao (Aesthetic Clinic)',
              'Mỹ Phẩm & Dược Mỹ Phẩm (Skincare/Cosmetics)',
              'Livestream Commerce & TikTok Shop Ecosystem',
              'Sự Kiện Trải Nghiệm Khách Hàng (Experiential Events)',
              'Generative AI Video & Lookbook Automation',
              'Quản Trị Quan Hệ Khách Hàng VIP (Luxury CRM)',
            ].map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600"
              >
                ✦ {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
