import React from 'react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full flex items-center justify-between px-6 sm:px-8 md:px-10 pt-6 md:pt-8 z-30 relative"
    >
      <a href="#" className="font-extrabold tracking-tighter text-xl sm:text-2xl text-white">
        TRAN<span className="text-purple-400">HAI</span>
      </a>

      <div className="flex items-center gap-4 sm:gap-8 md:gap-12">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-[1.25rem] transition-opacity duration-200 hover:opacity-70"
          >
            {item.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};
