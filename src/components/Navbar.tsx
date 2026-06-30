import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageType } from '../types';

interface NavbarProps {
  activePage: PageType;
  onNavigate: (page: PageType, scrollToId?: string) => void;
}

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Khóa học', page: 'home' as PageType, scrollToId: 'courses' },
    { label: 'Giới thiệu', page: 'about' as PageType },
    { label: 'Đánh giá', page: 'home' as PageType, scrollToId: 'testimonials' },
    { label: 'Đăng nhập', page: 'login' as PageType },
  ];

  const handleNavClick = (page: PageType, scrollToId?: string) => {
    onNavigate(page, scrollToId);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 h-[72px] bg-[#050508]/80 backdrop-blur-xl border-b border-[#D4AF37]/10 flex items-center">
      <div className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        
        {/* LEFT - Logo */}
        <button 
          id="nav-logo"
          onClick={() => handleNavClick('home')} 
          className="flex items-center text-xl cursor-pointer select-none focus:outline-none"
        >
          <span className="font-bold text-[#D4AF37]">Vũ Trụ</span>
          <span className="font-normal text-white pl-0 ml-[5px]">cùng Khoa</span>
        </button>

        {/* MID - Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <button
              id={`nav-item-${index}`}
              key={index}
              onClick={() => handleNavClick(item.page, item.scrollToId)}
              className={`text-sm cursor-pointer transition-colors duration-300 focus:outline-none ${
                (activePage === item.page && !item.scrollToId)
                  ? 'text-[#D4AF37]'
                  : 'text-white/80 hover:text-[#D4AF37]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* RIGHT - CTA Button (Desktop) */}
        <div className="hidden md:block">
          <button
            id="nav-cta"
            onClick={() => handleNavClick('register')}
            className="cursor-pointer bg-[#D4AF37] text-[#050508] font-semibold px-6 py-3 rounded-lg hover:brightness-110 active:scale-95 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
          >
            Bắt Đầu Ngay
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            id="nav-mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white/80 hover:text-[#D4AF37] focus:outline-none p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-[#050508]/95 backdrop-blur-2xl border-b border-[#D4AF37]/10 flex flex-col p-6 gap-6 md:hidden transition-all duration-300 ease-in-out">
          {navItems.map((item, index) => (
            <button
              id={`nav-mobile-item-${index}`}
              key={index}
              onClick={() => handleNavClick(item.page, item.scrollToId)}
              className={`text-left text-base py-2 border-b border-white/5 transition-colors duration-300 ${
                (activePage === item.page && !item.scrollToId)
                  ? 'text-[#D4AF37]'
                  : 'text-white/80 hover:text-[#D4AF37]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            id="nav-mobile-cta"
            onClick={() => handleNavClick('register')}
            className="w-full bg-[#D4AF37] text-[#050508] font-semibold py-3 rounded-lg hover:brightness-110 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] focus:outline-none text-center"
          >
            Bắt Đầu Ngay
          </button>
        </div>
      )}
    </nav>
  );
}
