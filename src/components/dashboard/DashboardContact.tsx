import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Download,
  Share2,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { PortfolioData } from '../../data/portfolioData';

interface DashboardContactProps {
  data: PortfolioData;
}

export const DashboardContact: React.FC<DashboardContactProps> = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    brand: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', brand: '', message: '' });
    }, 4000);
  };

  return (
    <div className="space-y-6">
      {/* 1. Header */}
      <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-700/70 shadow-card">
        <div className="flex items-center gap-2">
          <Send className="w-5 h-5 text-teal-600" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Trung Tâm Liên Hệ (Contact Center Console)
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Sẵn sàng trao đổi về cơ hội hợp tác chiến lược, vị trí Giám đốc Marketing (CMO) hoặc dự án cố vấn tăng trưởng.
        </p>
      </div>

      {/* 2. Main Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Direct Channels & Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Card: Direct Hotline */}
          <a
            href={`tel:${data.contact.phone}`}
            className="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/70 shadow-card hover:shadow-card-hover transition-all flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                Hotline / Điện Thoại
              </span>
              <span className="text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">
                {data.contact.phone}
              </span>
            </div>
          </a>

          {/* Card: Email */}
          <a
            href={`mailto:${data.contact.email}`}
            className="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/70 shadow-card hover:shadow-card-hover transition-all flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                Email Trực Tiếp
              </span>
              <span className="text-base font-bold text-slate-900 dark:text-white truncate block group-hover:text-blue-600 transition-colors">
                {data.contact.email}
              </span>
            </div>
          </a>

          {/* Card: Zalo */}
          <a
            href={data.contact.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/70 shadow-card hover:shadow-card-hover transition-all flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform font-bold text-base">
              Z
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                Zalo Chat Nhanh
              </span>
              <span className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">
                0868.258.686
              </span>
            </div>
          </a>

          {/* Social Channels Pill Box */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/70 shadow-card space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
              Mạng Xã Hội & Hồ Sơ Năng Lực
            </span>
            <div className="flex flex-wrap gap-2">
              <a
                href={data.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-700 hover:bg-teal-50 dark:hover:bg-teal-900/30 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-teal-600 transition-all border border-slate-200 dark:border-slate-600"
              >
                Facebook Profile ↗
              </a>
              <a
                href={data.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-700 hover:bg-teal-50 dark:hover:bg-teal-900/30 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-teal-600 transition-all border border-slate-200 dark:border-slate-600"
              >
                Instagram ↗
              </a>
              <a
                href={data.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-700 hover:bg-teal-50 dark:hover:bg-teal-900/30 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-teal-600 transition-all border border-slate-200 dark:border-slate-600"
              >
                Website GitHub ↗
              </a>
            </div>
          </div>

          {/* CV Download Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-teal-600 to-emerald-700 text-white shadow-lg space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-300" />
              <h4 className="text-base font-bold">Hồ Sơ Năng Lực Chi Tiết</h4>
            </div>
            <p className="text-xs text-teal-100 leading-relaxed">
              Tải CV định dạng PDF đầy đủ về bảng số liệu chi tiết, các chiến dịch 500M+ views và dự án x3 doanh thu.
            </p>
            <a
              href="https://drive.google.com/file/d/1Z_u10aD60H39eBvEGB8l0rV3Z57l87oT/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-teal-900 text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm hover:shadow transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Tải CV PDF (Direct Link)</span>
            </a>
          </div>
        </div>

        {/* Right Column: Direct Messaging Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-700/70 shadow-card">
            <div className="border-b border-slate-100 dark:border-slate-700/60 pb-4 mb-5">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Gửi Tin Nhắn / Yêu Cầu Trao Đổi Trực Tiếp
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Vui lòng để lại thông tin, tôi sẽ phản hồi trong vòng 24 giờ làm việc.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h5 className="text-base font-bold text-emerald-900 dark:text-emerald-200">
                  Cảm ơn bạn! Đã nhận được thông tin liên hệ.
                </h5>
                <p className="text-xs text-emerald-700 dark:text-emerald-300">
                  Tôi sẽ liên hệ lại qua điện thoại / Zalo trong thời gian sớm nhất.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="VD: Nguyễn Văn A"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Số điện thoại / Zalo *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="VD: 0987 654 321"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:border-teal-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Doanh nghiệp / Thương hiệu
                    </label>
                    <input
                      type="text"
                      placeholder="VD: Nhãn hàng thời trang / Thẩm mỹ viện"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:border-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Nội dung muốn trao đổi / Yêu cầu dự án
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Mô tả ngắn gọn về nhu cầu: Cố vấn chiến lược, vai trò CMO, hay triển khai chiến dịch viral..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:border-teal-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Gửi Thông Tin Trao Đổi</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
