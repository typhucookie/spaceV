import React from 'react';
import { PageType } from '../types';

interface FooterProps {
  onNavigate: (page: PageType, scrollToId?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-12">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Left column - Logo */}
        <div className="flex justify-center md:justify-start">
          <button 
            id="footer-logo"
            onClick={() => onNavigate('home')} 
            className="flex items-center text-xl cursor-pointer select-none focus:outline-none"
          >
            <span className="font-bold text-[#D4AF37]">Vũ Trụ</span>
            <span className="font-normal text-white">cùng Khoa</span>
          </button>
        </div>

        {/* Center column - Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
          <button
            id="footer-nav-courses"
            onClick={() => onNavigate('home', 'courses')}
            className="hover:text-white transition-colors duration-300 focus:outline-none"
          >
            Khóa học
          </button>
          <button
            id="footer-nav-about"
            onClick={() => onNavigate('about')}
            className="hover:text-white transition-colors duration-300 focus:outline-none"
          >
            Giới thiệu
          </button>
          <a
            id="footer-nav-youtube"
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D4AF37] transition-colors duration-300 focus:outline-none"
          >
            YouTube
          </a>
          <button
            id="footer-nav-contact"
            onClick={() => onNavigate('contact')}
            className="hover:text-white transition-colors duration-300 focus:outline-none"
          >
            Liên hệ
          </button>
          <button
            id="footer-nav-privacy"
            onClick={() => {}}
            className="hover:text-white transition-colors duration-300 focus:outline-none"
          >
            Chính sách Bảo mật
          </button>
          <button
            id="footer-nav-terms"
            onClick={() => {}}
            className="hover:text-white transition-colors duration-300 focus:outline-none"
          >
            Điều khoản
          </button>
        </div>

        {/* Right column - Copyright */}
        <div className="text-center md:text-right text-sm text-white/40">
          © 2025 Vũ Trụ Cùng Khoa. Bảo lưu mọi quyền.
        </div>
      </div>
    </footer>
  );
}
