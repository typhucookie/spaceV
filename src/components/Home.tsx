import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Quote, ArrowRight, Star, Compass, Play, Globe, Rocket, ShieldCheck } from 'lucide-react';
import { PageType, Course, Testimonial } from '../types';
import { COURSES, TESTIMONIALS } from '../data';

interface HomeProps {
  onNavigate: (page: PageType, scrollToId?: string) => void;
  scrollTargetId?: string;
  onClearScrollTarget: () => void;
}

export default function Home({ onNavigate, scrollTargetId, onClearScrollTarget }: HomeProps) {
  const coursesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollTargetId) {
      if (scrollTargetId === 'courses' && coursesRef.current) {
        coursesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (scrollTargetId === 'testimonials' && testimonialsRef.current) {
        testimonialsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      onClearScrollTarget();
    }
  }, [scrollTargetId, onClearScrollTarget]);

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="bg-[#050508] min-h-screen text-white overflow-hidden">
      
      {/* SECTION 2 – HERO */}
      <section className="min-h-screen flex items-center justify-center relative pt-[72px] pb-16 px-6 overflow-hidden">
        {/* Deep space ambient glow effects */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full filter blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#3B82F6]/5 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* LEFT COLUMN - CONTENT (55%) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start text-left"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Pill Badge */}
            <motion.div 
              id="hero-badge"
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/50 bg-[#D4AF37]/10 mb-6 backdrop-blur-md"
            >
              <Star className="h-3 w-3 fill-[#D4AF37]" />
              HUẤN LUYỆN VŨ TRỤ CHUYÊN SÂU
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              id="hero-headline"
              variants={itemVariants}
              className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-tight leading-[1.1] mb-6"
            >
              Chinh Phục <span className="text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">Vũ Trụ</span>, Một Cách Thực Chiến
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              id="hero-subheadline"
              variants={itemVariants}
              className="text-base lg:text-xl text-white/60 leading-relaxed max-w-[540px] mb-6"
            >
              20 năm trong ngành công nghệ hàng không vũ trụ. 6 năm tại các cơ quan nghiên cứu không gian hàng đầu. Tôi không dạy lý thuyết suông — tôi dạy những gì thực sự được đưa vào các sứ mệnh thật.
            </motion.p>

            {/* Stats Line */}
            <motion.p 
              id="hero-stats"
              variants={itemVariants}
              className="text-sm text-white/50 mb-8 flex flex-wrap items-center gap-2"
            >
              <span>6.700+ người đăng ký YouTube</span>
              <span className="text-[#D4AF37] font-bold">•</span>
              <span>20+ năm kinh nghiệm</span>
              <span className="text-[#D4AF37] font-bold">•</span>
              <span>Huấn luyện cho các sứ mệnh thực tế</span>
            </motion.p>

            {/* Button Group */}
            <motion.div 
              id="hero-buttons"
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => {
                  if (coursesRef.current) {
                    coursesRef.current.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="cursor-pointer bg-[#D4AF37] text-[#050508] font-bold px-8 py-4 rounded-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] active:scale-95 transition-all duration-300 text-center"
              >
                Khám Phá Khóa Học
              </button>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center justify-center gap-2 border border-[#D4AF37] text-[#D4AF37] font-bold px-8 py-4 rounded-lg hover:bg-[#D4AF37]/10 active:scale-95 transition-all duration-300 text-center"
              >
                <Play className="h-4 w-4 fill-[#D4AF37]" />
                Xem Miễn Phí Trên YouTube
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - FLOATING IMAGE GALLERY (45%) */}
          <div className="lg:col-span-5 h-[500px] lg:h-[600px] relative w-full flex items-center justify-center">
            
            {/* Desktop floating placeholders layout */}
            <div className="absolute inset-0 select-none">
              
              {/* Photo 1 - Rocket Launch */}
              <motion.div
                id="floating-img-1"
                className="absolute top-[10px] right-[10px] w-[180px] h-[230px] lg:w-[220px] lg:h-[280px] bg-white/[0.02] border-2 border-dashed border-[#D4AF37]/30 rounded-xl flex flex-col items-center justify-center p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] cursor-pointer"
                style={{ rotate: '3deg', zIndex: 30 }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, border: '2px solid rgba(212,175,55,0.6)', transition: { duration: 0.2 } }}
              >
                <Rocket className="h-10 w-10 text-[#D4AF37] mb-2" />
                <span className="text-white/40 text-[10px] font-semibold tracking-wider uppercase">Ảnh 1</span>
                <span className="text-white/20 text-[9px] text-center mt-1">Tên lửa bứt phá khỏi bệ phóng</span>
              </motion.div>

              {/* Photo 2 - Astronaut */}
              <motion.div
                id="floating-img-2"
                className="absolute top-[160px] right-[160px] lg:right-[200px] w-[140px] h-[180px] lg:w-[170px] lg:h-[220px] bg-white/[0.02] border-2 border-dashed border-[#D4AF37]/30 rounded-xl flex flex-col items-center justify-center p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] cursor-pointer"
                style={{ rotate: '-2deg', zIndex: 40 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.05, border: '2px solid rgba(212,175,55,0.6)', transition: { duration: 0.2 } }}
              >
                <div className="w-10 h-10 border border-[#D4AF37]/20 rounded-full flex items-center justify-center mb-2 bg-[#D4AF37]/5">
                  <span className="text-xs text-[#D4AF37] font-bold">👩‍🚀</span>
                </div>
                <span className="text-white/40 text-[10px] font-semibold tracking-wider uppercase">Ảnh 2</span>
                <span className="text-white/20 text-[9px] text-center mt-1">Phi hành gia bước ra khoảng không</span>
              </motion.div>

              {/* Photo 3 - Nebula */}
              <motion.div
                id="floating-img-3"
                className="absolute top-[70px] left-[10px] w-[160px] h-[200px] lg:w-[190px] lg:h-[240px] bg-white/[0.02] border-2 border-dashed border-[#D4AF37]/30 rounded-xl flex flex-col items-center justify-center p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] cursor-pointer"
                style={{ rotate: '-4deg', zIndex: 20 }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ scale: 1.05, border: '2px solid rgba(212,175,55,0.6)', transition: { duration: 0.2 } }}
              >
                <Compass className="h-8 w-8 text-[#3B82F6] mb-2" />
                <span className="text-white/40 text-[10px] font-semibold tracking-wider uppercase">Ảnh 3</span>
                <span className="text-white/20 text-[9px] text-center mt-1">Tinh vân tuyệt đẹp rực rỡ sắc màu</span>
              </motion.div>

              {/* Photo 4 - Space Station */}
              <motion.div
                id="floating-img-4"
                className="absolute bottom-[20px] left-[110px] lg:left-[150px] w-[130px] h-[160px] lg:w-[150px] lg:h-[190px] bg-white/[0.02] border-2 border-dashed border-[#D4AF37]/30 rounded-xl flex flex-col items-center justify-center p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] cursor-pointer"
                style={{ rotate: '5deg', zIndex: 50 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                whileHover={{ scale: 1.05, border: '2px solid rgba(212,175,55,0.6)', transition: { duration: 0.2 } }}
              >
                <Globe className="h-8 w-8 text-[#D4AF37] mb-2" />
                <span className="text-white/40 text-[10px] font-semibold tracking-wider uppercase">Ảnh 4</span>
                <span className="text-white/20 text-[9px] text-center mt-1">Trạm vũ trụ chuyển động quỹ đạo</span>
              </motion.div>

              {/* Photo 5 - Planet */}
              <motion.div
                id="floating-img-5"
                className="absolute top-[10px] left-[140px] lg:left-[170px] w-[110px] h-[140px] lg:w-[130px] lg:h-[160px] bg-white/[0.02] border-2 border-dashed border-[#D4AF37]/30 rounded-xl flex flex-col items-center justify-center p-3 shadow-[0_20px_40px_rgba(0,0,0,0.5)] cursor-pointer"
                style={{ rotate: '-3deg', zIndex: 10 }}
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                whileHover={{ scale: 1.05, border: '2px solid rgba(212,175,55,0.6)', transition: { duration: 0.2 } }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#3B82F6]/40 to-[#D4AF37]/40 border border-white/10 flex items-center justify-center mb-2" />
                <span className="text-white/40 text-[10px] font-semibold tracking-wider uppercase">Ảnh 5</span>
                <span className="text-white/20 text-[9px] text-center">Sao Thổ & vòng đai vĩ đại</span>
              </motion.div>

              {/* Photo 6 - Telescope */}
              <motion.div
                id="floating-img-6"
                className="absolute bottom-[40px] right-[10px] w-[140px] h-[180px] lg:w-[170px] lg:h-[220px] bg-white/[0.02] border-2 border-dashed border-[#D4AF37]/30 rounded-xl flex flex-col items-center justify-center p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] cursor-pointer"
                style={{ rotate: '2deg', zIndex: 40 }}
                animate={{ y: [0, -11, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                whileHover={{ scale: 1.05, border: '2px solid rgba(212,175,55,0.6)', transition: { duration: 0.2 } }}
              >
                <div className="text-xl mb-2">🔭</div>
                <span className="text-white/40 text-[10px] font-semibold tracking-wider uppercase">Ảnh 6</span>
                <span className="text-white/20 text-[9px] text-center mt-1">Kính viễn vọng nhìn xa thẳm</span>
              </motion.div>

              {/* Photo 7 - Galaxy */}
              <motion.div
                id="floating-img-7"
                className="absolute top-[10px] right-[180px] lg:right-[230px] w-[100px] h-[130px] lg:w-[120px] lg:h-[150px] bg-white/[0.02] border-2 border-dashed border-[#D4AF37]/30 rounded-xl flex flex-col items-center justify-center p-3 shadow-[0_20px_40px_rgba(0,0,0,0.5)] cursor-pointer"
                style={{ rotate: '6deg', zIndex: 20 }}
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                whileHover={{ scale: 1.05, border: '2px solid rgba(212,175,55,0.6)', transition: { duration: 0.2 } }}
              >
                <div className="text-xl mb-1 animate-spin" style={{ animationDuration: '20s' }}>🌌</div>
                <span className="text-white/40 text-[10px] font-semibold tracking-wider uppercase">Ảnh 7</span>
                <span className="text-white/20 text-[9px] text-center">Dải ngân hà khổng lồ</span>
              </motion.div>

              {/* Photo 8 - Launchpad */}
              <motion.div
                id="floating-img-8"
                className="absolute bottom-[80px] left-[10px] w-[120px] h-[150px] lg:w-[140px] lg:h-[180px] bg-white/[0.02] border-2 border-dashed border-[#D4AF37]/30 rounded-xl flex flex-col items-center justify-center p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] cursor-pointer"
                style={{ rotate: '-5deg', zIndex: 30 }}
                animate={{ y: [0, -13, 0] }}
                transition={{ duration: 5.7, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                whileHover={{ scale: 1.05, border: '2px solid rgba(212,175,55,0.6)', transition: { duration: 0.2 } }}
              >
                <div className="text-xl mb-2">🗼</div>
                <span className="text-white/40 text-[10px] font-semibold tracking-wider uppercase">Ảnh 8</span>
                <span className="text-white/20 text-[9px] text-center mt-1">Bệ phóng khổng lồ chờ đợi</span>
              </motion.div>

            </div>

            {/* Mobile Touch-Friendly Fallback Gallery */}
            <div className="md:hidden flex flex-wrap justify-center gap-4 py-8">
              <div className="w-[140px] h-[180px] bg-white/[0.02] border-2 border-dashed border-[#D4AF37]/30 rounded-xl flex flex-col items-center justify-center p-3 shadow-[0_10px_20px_rgba(0,0,0,0.4)]">
                <Rocket className="h-8 w-8 text-[#D4AF37] mb-1" />
                <span className="text-white/40 text-[10px] uppercase">Ảnh 1</span>
                <span className="text-white/20 text-[8px] text-center mt-1">Tên lửa sẵn sàng phóng</span>
              </div>
              <div className="w-[140px] h-[180px] bg-white/[0.02] border-2 border-dashed border-[#D4AF37]/30 rounded-xl flex flex-col items-center justify-center p-3 shadow-[0_10px_20px_rgba(0,0,0,0.4)]">
                <div className="text-lg mb-1">👩‍🚀</div>
                <span className="text-white/40 text-[10px] uppercase">Ảnh 2</span>
                <span className="text-white/20 text-[8px] text-center mt-1">Phi hành gia thực chiến</span>
              </div>
              <div className="w-[140px] h-[180px] bg-white/[0.02] border-2 border-dashed border-[#D4AF37]/30 rounded-xl flex flex-col items-center justify-center p-3 shadow-[0_10px_20px_rgba(0,0,0,0.4)]">
                <Compass className="h-8 w-8 text-[#3B82F6] mb-1" />
                <span className="text-white/40 text-[10px] uppercase">Ảnh 3</span>
                <span className="text-white/20 text-[8px] text-center mt-1">Khám phá tinh vân</span>
              </div>
              <div className="w-[140px] h-[180px] bg-white/[0.02] border-2 border-dashed border-[#D4AF37]/30 rounded-xl flex flex-col items-center justify-center p-3 shadow-[0_10px_20px_rgba(0,0,0,0.4)]">
                <Globe className="h-8 w-8 text-[#D4AF37] mb-1" />
                <span className="text-white/40 text-[10px] uppercase">Ảnh 4</span>
                <span className="text-white/20 text-[8px] text-center mt-1">Trạm vũ trụ quốc tế</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Feature Teaser */}
      <div className="border-t border-white/5 bg-[#0a0a12] py-8 px-6 lg:px-12 relative z-20">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
              Khóa Học Tiêu Điểm
            </span>
            <span className="text-xl font-semibold text-white">Chế Tạo Tên Lửa Sẵn Sàng Phóng</span>
          </div>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            <div className="text-left md:text-right">
              <div className="text-white/40 text-xs uppercase mb-1">Thời lượng</div>
              <div className="font-mono text-sm text-white/80">12 chương • 8 giờ</div>
            </div>
            <div className="text-left md:text-right">
              <div className="text-white/40 text-xs uppercase mb-1">Giá trị</div>
              <div className="text-[#D4AF37] font-bold text-2xl">$297</div>
            </div>
            <button
              onClick={() => {
                if (coursesRef.current) {
                  coursesRef.current.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="cursor-pointer px-6 py-3 border border-white/10 hover:border-[#D4AF37]/50 rounded-lg text-sm font-bold hover:bg-white/5 text-white transition-all duration-300"
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 3 – KHÓA HỌC */}
      <section 
        id="courses" 
        ref={coursesRef} 
        className="bg-[#050508] py-[120px] px-6 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/2 rounded-full filter blur-[150px] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[2.5rem] font-semibold text-white tracking-tight">Khóa Học Cao Cấp</h2>
            <div className="w-[60px] h-[3px] bg-[#D4AF37] mx-auto mt-4" />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            {COURSES.map((course) => (
              <motion.div
                id={`course-card-${course.id}`}
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                whileHover={{ 
                  y: -4, 
                  borderColor: 'rgba(212,175,55,0.4)', 
                  boxShadow: '0 0 40px rgba(212,175,55,0.15)' 
                }}
                className="bg-white/[0.03] border border-[#D4AF37]/15 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 group"
              >
                <div>
                  {/* Tag */}
                  <span className="text-[0.875rem] font-medium tracking-wider text-[#D4AF37]/70 uppercase block mb-4">
                    {course.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-base leading-relaxed mb-6">
                    {course.description}
                  </p>
                </div>

                <div>
                  {/* Meta */}
                  <div className="text-sm text-white/40 mb-6 border-t border-white/5 pt-4">
                    {course.meta}
                  </div>

                  {/* Bottom Area - Price & CTA */}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-3xl font-bold text-[#D4AF37]">
                      {course.price}
                    </span>
                    <button
                      onClick={() => onNavigate('register')}
                      className="cursor-pointer inline-flex items-center gap-2 text-[#D4AF37] font-semibold hover:underline group-hover:translate-x-1 transition-all duration-300"
                    >
                      Đăng Ký Ngay
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 – ĐÁNH GIÁ HỌC VIÊN */}
      <section 
        id="testimonials" 
        ref={testimonialsRef} 
        className="bg-[#0a0a0a] py-[120px] px-6 overflow-hidden relative"
      >
        <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-[#3B82F6]/3 rounded-full filter blur-[100px] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto relative">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[2.5rem] font-semibold text-white tracking-tight">Học Viên Nói Gì</h2>
            <div className="w-[60px] h-[3px] bg-[#D4AF37] mx-auto mt-4" />
          </div>

          {/* Scrolling horizontal container */}
          <div className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing px-4">
            {TESTIMONIALS.map((testimonial) => (
              <motion.div
                id={`testimonial-${testimonial.id}`}
                key={testimonial.id}
                className="w-[350px] flex-shrink-0 bg-white/[0.03] border border-white/10 rounded-xl p-7 snap-start relative hover:border-[#D4AF37]/30 transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                {/* Quotes quote mark overlay */}
                <Quote className="h-12 w-12 text-[#D4AF37]/30 absolute top-4 left-4" />
                
                <div className="relative z-10 pt-6">
                  {/* Quote content */}
                  <p className="text-white/80 text-base italic leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>

                  {/* Divider */}
                  <div className="w-10 h-[1px] bg-[#D4AF37]/30 mb-4" />

                  {/* Author Name */}
                  <h4 className="text-white font-semibold text-lg">{testimonial.author}</h4>
                  
                  {/* Author Role */}
                  <span className="text-[#D4AF37] text-sm font-medium block mt-1">{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Swipe indicator for mobile */}
          <p className="text-center text-xs text-white/30 mt-6 md:hidden">
            ← Vuốt để xem thêm →
          </p>
        </div>
      </section>

      {/* SECTION 5 – CTA */}
      <section className="bg-[#050505] py-[160px] px-6 relative text-center overflow-hidden">
        {/* Stellar gold ellipse glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-[600px] mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[2.5rem] font-semibold text-white tracking-tight mb-6"
          >
            Sẵn Sàng Chinh Phục Vũ Trụ?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/60 leading-relaxed mb-10"
          >
            Tham gia cùng 6.700+ học viên đang học những mô hình vũ trụ thực chiến — những gì thực sự vận hành ngoài không gian.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              onClick={() => onNavigate('register')}
              className="cursor-pointer inline-flex items-center justify-center bg-[#D4AF37] text-[#050508] font-bold text-lg px-12 py-5 rounded-lg hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] active:scale-95 transition-all duration-300 mb-4"
            >
              Bắt Đầu Ngay Hôm Nay
            </button>
          </motion.div>

          {/* Refund Notice */}
          <p className="text-sm text-white/40 flex items-center justify-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
            Hoàn tiền trong 30 ngày
          </p>
        </div>
      </section>

    </div>
  );
}
