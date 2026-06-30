import React from 'react';
import { motion } from 'motion/react';
import { Shield, Award, Landmark, CheckCircle } from 'lucide-react';

export default function About() {
  const badgeList = [
    "KINH NGHIỆM CƠ QUAN VŨ TRỤ",
    "TƯ VẤN HÀNG KHÔNG VŨ TRỤ",
    "CÔNG NGHỆ VỆ TINH"
  ];

  return (
    <div className="bg-[#050508] text-white min-h-screen">
      
      {/* HERO AREA */}
      <section className="pt-[140px] pb-20 px-6 text-center relative overflow-hidden">
        {/* Stellar gold background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-[800px] mx-auto relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[3rem] font-bold text-white tracking-tight"
          >
            Về Khoa
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white/60 mt-4 font-medium"
          >
            20 năm xây dựng công nghệ hàng không vũ trụ
          </motion.p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-20 px-6 max-w-[1000px] mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start relative z-10">
          
          {/* LEFT (Image Placeholder 40%) */}
          <motion.div 
            className="md:col-span-5 w-full aspect-[3/4] bg-white/[0.02] border-2 border-dashed border-[#D4AF37]/30 rounded-2xl flex flex-col items-center justify-center p-8 shadow-[0_0_60px_rgba(212,175,55,0.1)] relative group hover:border-[#D4AF37]/50 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Aesthetic orbital blueprint drawing in the placeholder */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1)_0%,transparent_80%)]" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 border border-[#D4AF37]/30 rounded-full flex items-center justify-center mb-6 bg-[#D4AF37]/5">
                <span className="text-3xl">🌌</span>
              </div>
              <p className="text-white/40 text-sm font-semibold tracking-wider uppercase mb-2">Ảnh Giới thiệu</p>
              <p className="text-white/20 text-xs text-center leading-relaxed px-4">
                Chân dung huấn luyện viên Nguyễn Phương Khoa tại phòng thí nghiệm động lực học hàng không vũ trụ
              </p>
              <div className="mt-8 flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/20" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT (Biography 60%) */}
          <motion.div 
            className="md:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-[2rem] font-semibold text-white tracking-tight mb-6">
              Tôi Xây Dựng Những Gì Thực Sự Bay Được
            </h2>
            
            <p className="text-white/70 text-lg leading-[1.8] mb-5 font-normal">
              Sau 20 năm trong ngành công nghệ hàng không vũ trụ — bao gồm 6 năm tại các cơ quan nghiên cứu không gian hàng đầu và các vị trí lãnh đạo tại những công ty tư vấn và công nghệ vũ trụ lớn — tôi đã chứng kiến điều gì thực sự tạo nên sự khác biệt giữa những dự án được đưa vào vận hành thực tế và những dự án mãi mãi chỉ nằm trên bản vẽ.
            </p>

            <p className="text-white/70 text-lg leading-[1.8] mb-8 font-normal">
              Tôi tạo ra Vũ Trụ Cùng Khoa để chia sẻ những mô hình thực sự hiệu quả. Không màu mè. Không phải những bản demo đồ chơi. Chỉ là những phương pháp đã được kiểm chứng qua thực chiến, thực sự được áp dụng trong các sứ mệnh không gian thật.
            </p>

            {/* Prestige Badges */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
              {badgeList.map((badge, index) => (
                <div
                  id={`badge-${index}`}
                  key={index}
                  className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold px-4 py-2 rounded-lg uppercase tracking-wider shadow-[0_2px_10px_rgba(212,175,55,0.05)]"
                >
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ADDITIONAL ACCREDITATIONS & CREDENTIALS */}
      <section className="py-16 bg-[#0a0a12]/50 border-t border-white/5 px-6">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#10101a] border border-[#D4AF37]/10 p-6 rounded-xl hover:border-[#D4AF37]/30 transition-all duration-300">
            <Landmark className="h-8 w-8 text-[#D4AF37] mb-4" />
            <h4 className="text-white font-bold text-lg mb-2">Thực Chiến Cao</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Các bài học là kinh nghiệm tích lũy từ những năm làm việc trực tiếp với các trạm mặt đất và vệ tinh siêu nhỏ thực tế.
            </p>
          </div>
          <div className="bg-[#10101a] border border-[#D4AF37]/10 p-6 rounded-xl hover:border-[#D4AF37]/30 transition-all duration-300">
            <Award className="h-8 w-8 text-[#D4AF37] mb-4" />
            <h4 className="text-white font-bold text-lg mb-2">Phương Pháp Tối Ưu</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Lược bỏ lý thuyết hàn lâm rườm rà, tập trung trực tiếp vào kiến trúc triển khai thực hành và sơ đồ vận hành chuẩn mực.
            </p>
          </div>
          <div className="bg-[#10101a] border border-[#D4AF37]/10 p-6 rounded-xl hover:border-[#D4AF37]/30 transition-all duration-300">
            <Shield className="h-8 w-8 text-[#D4AF37] mb-4" />
            <h4 className="text-white font-bold text-lg mb-2">Hỗ Trợ Toàn Diện</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Giải đáp tận tâm các vấn đề công nghệ hóc búa, hỗ trợ trực tiếp từ quy trình thiết kế đến khi hoàn thành hệ thống.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
