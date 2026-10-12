import React from 'react';
import { FadeIn } from './FadeIn';
import { Sparkles, BarChart3, Palette, Rocket, CheckCircle2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      icon: Sparkles,
      title: 'AI Tools & Superhuman Workflow',
      badge: 'Advanced AI Mastery',
      color: 'from-purple-500/20 to-pink-500/10',
      borderColor: 'group-hover:border-purple-500/50',
      description:
        'Thành thạo sâu sắc và ứng dụng thực chiến toàn bộ hệ sinh thái AI hiện đại nhất vào quản trị, sáng tạo nội dung, phân tích dữ liệu và tự động hóa quy trình Marketing.',
      tools: ['Claude 3.7 Sonnet', 'OpenAI Codex', 'Gemini Pro/Flash', 'Grok', 'ChatGPT', 'Midjourney', 'Stable Diffusion', 'ElevenLabs', 'Runway AI', 'Cursor/Dev Tools'],
    },
    {
      icon: BarChart3,
      title: 'Data Metrics & Analytics',
      badge: 'Data-Driven Growth',
      color: 'from-blue-500/20 to-cyan-500/10',
      borderColor: 'group-hover:border-blue-500/50',
      description:
        'Xây dựng hệ thống đo lường minh bạch, thiết lập chỉ số tài chính - marketing real-time (CAC, LTV, ROAS, CIR, MER) và tối ưu hóa chuyển đổi liên tục.',
      tools: ['Google Analytics 4 (GA4)', 'Looker Studio Dashboards', 'Metabase & SQL', 'BigQuery Pipeline', 'Conversion Tracking (GTM)', 'A/B Testing & CRO', 'Spreadsheet Modeling'],
    },
    {
      icon: Palette,
      title: 'Thiết Kế Đồ Họa & Visual Media',
      badge: 'Visual Creative',
      color: 'from-amber-500/20 to-orange-500/10',
      borderColor: 'group-hover:border-amber-500/50',
      description:
        'Thấu hiểu ngôn ngữ thị giác, trực tiếp thiết kế và chỉ đạo nghệ thuật cho các bộ nhận diện thương hiệu, ấn phẩm truyền thông và video viral đa nền tảng.',
      tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Premiere Pro', 'After Effects', 'Figma UI/UX', 'CapCut Studio', 'Canva Enterprise', 'Branding Guidelines'],
    },
    {
      icon: Rocket,
      title: 'Performance & Growth Marketing',
      badge: 'Revenue Scaling',
      color: 'from-emerald-500/20 to-teal-500/10',
      borderColor: 'group-hover:border-emerald-500/50',
      description:
        'Lập kế hoạch và tối ưu ngân sách quảng cáo quy mô lớn, xây dựng phễu đa tầng, tự động hóa quy trình nuôi dưỡng khách hàng và gia tăng tỷ lệ chốt đơn.',
      tools: ['Meta Ads Manager (Facebook/IG)', 'TikTok Ads & TikTok Shop', 'Google Ads (PMax/Search)', 'CRM & Automation Flow', 'KOLs/KOCs Booking Network', 'Omnichannel Retargeting'],
    },
  ];

  return (
    <section id="skills" className="relative w-full bg-[#0C0C0C] py-20 sm:py-28 px-5 sm:px-8 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          <FadeIn delay={0}>
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-purple-400 mb-2 block">
              Core Competencies &amp; Tech Stack
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight mb-4"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
            >
              Skills &amp; Mastery
            </h2>
            <p className="text-neutral-400 font-light max-w-2xl mx-auto text-sm sm:text-base">
              Sự kết hợp hoàn hảo giữa Tư duy chiến lược, Năng lực phân tích dữ liệu chuyên sâu, Gu thẩm mỹ sắc bén và Ứng dụng công nghệ AI tiên phong.
            </p>
          </FadeIn>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.1} y={30}>
                <div
                  className={`group relative h-full rounded-[32px] p-7 sm:p-9 bg-gradient-to-br ${cat.color} bg-neutral-900/60 border border-white/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 ${cat.borderColor} shadow-xl flex flex-col justify-between`}
                >
                  <div>
                    {/* Header with icon and badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3.5 rounded-2xl bg-white/10 text-white border border-white/15">
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <span className="px-3.5 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white/10 text-white border border-white/10">
                        {cat.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                      {cat.title}
                    </h3>
                    <p className="text-neutral-300/80 font-light text-sm sm:text-base leading-relaxed mb-6">
                      {cat.description}
                    </p>
                  </div>

                  {/* Tools Tags */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Công cụ &amp; Nền tảng thành thạo:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] transition-colors border border-white/10 text-xs sm:text-sm font-normal text-[#D7E2EA]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
