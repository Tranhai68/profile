import React from 'react';
import { FadeIn } from './FadeIn';
import { Mail, Phone, MessageSquare, ArrowUp, Settings, ExternalLink } from 'lucide-react';

interface FooterSectionProps {
  onOpenAdmin?: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenAdmin }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative w-full bg-[#080808] border-t border-white/10 pt-20 pb-12 px-6 sm:px-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <FadeIn delay={0}>
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-purple-400 mb-2 block">
              Let&apos;s Connect
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight mb-5"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 90px)' }}
            >
              Get In Touch
            </h2>
            <p className="text-neutral-300 font-light text-base sm:text-lg leading-relaxed">
              Sẵn sàng đồng hành cùng doanh nghiệp xây dựng chiến lược tăng trưởng đột phá, tối ưu hóa doanh thu và triển khai các chiến dịch truyền thông triệu view.
            </p>
          </FadeIn>
        </div>

        {/* Contact Cards Grid */}
        <FadeIn delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
            {/* Email Card */}
            <a
              href="mailto:tranhai68.home@gmail.com"
              className="flex flex-col items-center text-center p-7 rounded-3xl bg-neutral-900/60 border border-white/10 hover:border-purple-500/60 hover:bg-neutral-900/90 transition-all duration-300 shadow-xl group"
            >
              <div className="p-4 rounded-2xl bg-purple-500/20 text-purple-300 mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400 mb-1">
                Email
              </div>
              <div className="text-white font-medium text-sm sm:text-base group-hover:text-purple-300 transition-colors break-all">
                tranhai68.home@gmail.com
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:0868258686"
              className="flex flex-col items-center text-center p-7 rounded-3xl bg-neutral-900/60 border border-white/10 hover:border-blue-500/60 hover:bg-neutral-900/90 transition-all duration-300 shadow-xl group"
            >
              <div className="p-4 rounded-2xl bg-blue-500/20 text-blue-300 mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400 mb-1">
                Hotline / Phone
              </div>
              <div className="text-white font-medium text-sm sm:text-base group-hover:text-blue-300 transition-colors">
                +84 868 258 686
              </div>
            </a>

            {/* Zalo Card */}
            <a
              href="https://zalo.me/0868258686"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-7 rounded-3xl bg-neutral-900/60 border border-white/10 hover:border-teal-500/60 hover:bg-neutral-900/90 transition-all duration-300 shadow-xl group"
            >
              <div className="p-4 rounded-2xl bg-teal-500/20 text-teal-300 mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400 mb-1">
                Zalo Direct Chat
              </div>
              <div className="text-white font-medium text-sm sm:text-base group-hover:text-teal-300 transition-colors flex items-center gap-1.5">
                <span>0868.258.686</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </div>
            </a>
          </div>
        </FadeIn>

        {/* Social channels */}
        <FadeIn delay={0.25}>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
            <a
              href="https://www.facebook.com/tranhai68.rell"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium hover:bg-white/10 hover:text-white transition-all flex items-center gap-2"
            >
              <span>Facebook Profile</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
            <a
              href="https://www.instagram.com/tranhai68.rell"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium hover:bg-white/10 hover:text-white transition-all flex items-center gap-2"
            >
              <span>Instagram Profile</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
            <a
              href="https://tranhai68.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium hover:bg-white/10 hover:text-white transition-all flex items-center gap-2"
            >
              <span>GitHub Pages</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </FadeIn>

        {/* Bottom Bar: Copyright, Admin Button, Scroll to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            &copy; 2026 Trần Hải (Trần Văn Hải). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            {/* Admin trigger button */}
            <a
              href="#admin"
              onClick={(e) => {
                e.preventDefault();
                if (onOpenAdmin) onOpenAdmin();
                else window.location.hash = '#admin';
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-purple-600/30 border border-white/10 hover:border-purple-500/50 text-neutral-300 hover:text-white transition-all cursor-pointer"
            >
              <Settings className="w-3.5 h-3.5 text-purple-400" />
              <span>Admin Panel</span>
            </a>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span>Lên đầu trang</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
