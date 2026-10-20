import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  Building,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  TrendingUp,
  Award,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { PortfolioData, ExperienceItem } from '../../data/portfolioData';

interface DashboardExperienceProps {
  data: PortfolioData;
  onNavigateTab: (tabId: string) => void;
}

export const DashboardExperience: React.FC<DashboardExperienceProps> = ({
  data,
  onNavigateTab,
}) => {
  // Pre-expand the first item by default
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  // Detailed career breakdown keyed by brand
  const experienceDetailsMap: Record<
    string,
    {
      defaultPeriod: string;
      responsibilities: string[];
      keyProjects: string[];
      verifiedResults: string[];
    }
  > = {
    guno: {
      defaultPeriod: '2026 — Hiện tại',
      responsibilities: [
        'Lãnh đạo toàn bộ phòng Marketing của thương hiệu thời trang Guno, quản lý đội ngũ 15+ nhân sự (Content, Media, Ads, Livestream).',
        'Trực tiếp đàm phán hợp đồng, lên ý tưởng thông điệp và đạo diễn chiến dịch hợp tác cùng nghệ sĩ hàng đầu (Ngọc Trinh, Quốc Trường).',
        'Phát triển hệ thống TikTok Shop & Livestream Commerce, đưa Guno trở thành thương hiệu thời trang dẫn đầu xu hướng Gen Z.',
        'Hoạch định kế hoạch ra mắt các bộ sưu tập theo mùa, kết hợp visual merchandising đồng bộ tại hệ thống cửa hàng.',
      ],
      keyProjects: ['Siêu chiến dịch Guno x Ngọc Trinh - Quốc Trường (500M+ Views)', 'Chiến dịch Streetwear Series 2026'],
      verifiedResults: ['Kỷ lục 500M+ lượt xem trên toàn bộ các nền tảng MXH', 'Doanh thu TikTok Shop và kênh online tăng trưởng bứt phá'],
    },
    montsand: {
      defaultPeriod: '2025 — 2026',
      responsibilities: [
        'Xây dựng chiến lược tăng trưởng khách hàng cho thương hiệu thời trang Montsand trên cả kênh bán lẻ offline và online.',
        'Tối ưu hóa tỷ lệ chuyển đổi cho hệ thống showroom, huấn luyện kỹ năng tư vấn cho đội ngũ nhân viên cửa hàng.',
        'Quản lý ngân sách Digital Ads (Facebook, Google) với mục tiêu tối ưu hóa ROAS và chi phí thu hút khách hàng mới (CAC).',
        'Chỉ đạo sản xuất hình ảnh lookbook và các chiến dịch kích cầu theo mùa mang lại dòng tiền nhanh.',
      ],
      keyProjects: ['Ra mắt BST Signature Montsand Outerwear', 'Chiến dịch Retail Performance Growth 2025 - 2026'],
      verifiedResults: ['Doanh thu chuỗi bán lẻ duy trì mức tăng trưởng ấn tượng', 'Mở rộng các điểm bán mới tại các trung tâm thương mại lớn'],
    },
    dezus: {
      defaultPeriod: '2022 — 2025',
      responsibilities: [
        'Xây dựng và tái cơ cấu toàn diện hệ thống Kinh Doanh & Marketing đa kênh cho thương hiệu thời trang nam/nữ DEZUS.',
        'Thiết lập mô hình Marketing Metric dựa trên dữ liệu P&L, tối ưu hóa chi phí quảng cáo và nhân sự.',
        'Tổng đạo diễn và tổ chức đại tiệc Fashion Show "5 Châu" quy tụ hàng trăm khách mời VIP và báo giới.',
        'Chỉ đạo chuỗi sự kiện khai trương các showroom lớn tại Đà Nẵng, Hà Nội, TP.HCM với sự tham gia của 5 nghệ sĩ nổi tiếng.',
      ],
      keyProjects: ['DEZUS Fashion Show 2025 | 5 Châu (20M+ Views)', 'Khai Trương Showroom Đà Nẵng (50M+ Views)', 'Chiến lược Metric x3 Doanh Thu 2025'],
      verifiedResults: ['Doanh thu DEZUS năm 2025 tăng gấp 3 lần so với năm trước', 'Hơn 70 triệu lượt tiếp cận tổng hợp qua các sự kiện khai trương và Runway'],
    },
    shynh: {
      defaultPeriod: '2019 — 2021',
      responsibilities: [
        'Định hướng toàn diện chiến lược tiếp thị, phân bổ ngân sách truyền thông cho chuỗi Viện Thẩm Mỹ công nghệ cao Shynh Premium.',
        'Xây dựng các chiến dịch tiếp cận và thu hút tệp khách hàng thượng lưu (High-Net-Worth Individuals - HNWI).',
        'Tối ưu hóa phễu tư vấn, nâng cao tỷ lệ chốt đơn các gói dịch vụ thẩm mỹ cao cấp tại các chi nhánh.',
        'Quản trị hình ảnh thương hiệu trên báo chí, truyền hình và phối hợp cùng các bác sĩ, chuyên gia thẩm mỹ đầu ngành.',
      ],
      keyProjects: ['Chiến dịch Nâng Tầm Nhan Sắc Quý Bà', 'Ra mắt Công Nghệ Thẩm Mỹ Độc Quyền Shynh Premium'],
      verifiedResults: ['Tăng 45% lượng khách hàng VIP đăng ký gói thẩm mỹ công nghệ cao', 'Xây dựng độ nhận diện thương hiệu hàng đầu trong phân khúc làm đẹp cao cấp'],
    },
  };

  const getDetailForExp = (exp: ExperienceItem, idx: number) => {
    const brandLower = (exp.brand || '').toLowerCase();
    const companyLower = (exp.company || '').toLowerCase();
    if (brandLower.includes('guno') || companyLower.includes('guno')) return experienceDetailsMap.guno;
    if (brandLower.includes('montsand') || companyLower.includes('montsand')) return experienceDetailsMap.montsand;
    if (brandLower.includes('dezus') || companyLower.includes('dezus')) return experienceDetailsMap.dezus;
    if (brandLower.includes('shynh') || companyLower.includes('shynh')) return experienceDetailsMap.shynh;
    const values = Object.values(experienceDetailsMap);
    return values[idx] || values[0];
  };

  return (
    <div className="space-y-6">
      {/* 1. Header */}
      <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-700/70 shadow-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-teal-600" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Hành Trình Sự Nghiệp (Career Timeline)
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Hơn 10 năm kinh nghiệm trong ngành Tiếp Thị, 6 năm đảm nhiệm cương vị Trưởng Phòng Marketing / CMO.
          </p>
        </div>

        <button
          onClick={() => onNavigateTab('projects')}
          className="text-xs font-bold text-teal-600 hover:text-teal-700 dark:text-teal-400 flex items-center gap-1.5"
        >
          <span>Xem các dự án tương ứng</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 2. Interactive Timeline Cards */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-teal-500/40 dark:border-teal-500/30 space-y-6 my-4">
        {data.about.experiences.map((exp, idx) => {
          const detail = getDetailForExp(exp, idx);
          const isExpanded = expandedIndex === idx;

          return (
            <div key={idx} className="relative group">
              {/* Timeline Marker Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-6 w-5 h-5 rounded-full border-4 border-white dark:border-slate-800 shadow-sm transition-all duration-300 ${
                  isExpanded ? 'bg-teal-600 ring-4 ring-teal-500/20' : 'bg-slate-300 dark:bg-slate-600'
                }`}
              />

              {/* Experience Card */}
              <div className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/90 dark:border-slate-700/70 shadow-card overflow-hidden transition-all hover:shadow-card-hover">
                {/* Header (Clickable to Toggle) */}
                <div
                  onClick={() => toggleExpand(idx)}
                  className="p-5 sm:p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                        {exp.period || detail.defaultPeriod}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                        {exp.badge}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white pt-1">
                      {exp.role}
                    </h4>

                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                      <Building className="w-3.5 h-3.5 text-teal-600" />
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span className="text-teal-600 font-bold">{exp.brand}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 hidden sm:inline">
                      {isExpanded ? 'Thu gọn' : 'Xem chi tiết'}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Brief Overview always visible */}
                <div className="px-5 sm:px-6 pb-4 -mt-2">
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Expandable Details Drawer */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-100 dark:border-slate-700/60 bg-slate-50/60 dark:bg-slate-750/30 px-5 sm:px-6 py-5 space-y-4"
                    >
                      {/* Responsibilities */}
                      <div>
                        <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                          Trách nhiệm & Hoạt động quản trị chính:
                        </h5>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          {detail.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Verified Results & Highlights */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                        <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                          <span className="text-[10px] uppercase font-bold text-teal-600 block mb-1">
                            Dự án quan trọng:
                          </span>
                          <div className="space-y-1 text-xs font-semibold text-slate-800 dark:text-slate-200">
                            {detail.keyProjects.map((kp, kpIdx) => (
                              <div key={kpIdx} className="flex items-center gap-1.5">
                                <Sparkles className="w-3 h-3 text-amber-500" />
                                <span>{kp}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                          <span className="text-[10px] uppercase font-bold text-emerald-600 block mb-1">
                            Kết quả & Thành tựu đạt được:
                          </span>
                          <div className="space-y-1 text-xs font-semibold text-slate-800 dark:text-slate-200">
                            {detail.verifiedResults.map((vr, vrIdx) => (
                              <div key={vrIdx} className="flex items-center gap-1.5">
                                <Award className="w-3 h-3 text-emerald-500" />
                                <span>{vr}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
