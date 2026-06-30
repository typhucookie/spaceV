import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, Sparkles, CheckCircle2 } from 'lucide-react';
import { PageType } from '../types';

interface LoginProps {
  onNavigate: (page: PageType) => void;
}

export default function Login({ onNavigate }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setIsSubmitting(true);
    // Simulate premium login request
    setTimeout(() => {
      setIsSubmitting(false);
      setLoginSuccess(true);
      setTimeout(() => {
        onNavigate('home');
      }, 2000);
    }, 1500);
  };

  const handleGoogleLogin = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setLoginSuccess(true);
      setTimeout(() => {
        onNavigate('home');
      }, 1500);
    }, 1000);
  };

  return (
    <div className="min-h-[calc(100vh-72px)] bg-[#050508] grid grid-cols-1 lg:grid-cols-2">
      
      {/* LEFT COLUMN (50%) - Aesthetic Portrait Area */}
      <div className="relative hidden lg:flex flex-col items-center justify-center p-12 bg-gradient-to-br from-[#0a0a12] to-[#050508] overflow-hidden border-r border-[#D4AF37]/10">
        {/* Ambient starry dot pattern */}
        <div 
          className="absolute inset-0 opacity-40" 
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
        
        {/* Golden orbital ambient blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#D4AF37]/5 rounded-full filter blur-[80px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-sm">
          {/* Portrait Placeholder Frame */}
          <div 
            id="login-portrait"
            className="w-[320px] h-[400px] bg-white/[0.01] border-2 border-dashed border-[#D4AF37]/30 rounded-2xl flex flex-col items-center justify-center p-6 shadow-[0_0_80px_rgba(212,175,55,0.12)] mb-8 relative group hover:border-[#D4AF37]/60 transition-all duration-300"
          >
            {/* Minimalist stylized drawing inside */}
            <div className="w-16 h-16 border border-[#D4AF37]/20 rounded-full flex items-center justify-center mb-4 bg-[#D4AF37]/10 text-2xl">
              🚀
            </div>
            <p className="text-white/40 text-sm font-semibold tracking-wider uppercase">Ảnh Chân Dung</p>
            <p className="text-white/20 text-xs text-center mt-2 px-4">
              Huấn luyện viên Nguyễn Phương Khoa — Chuyên gia Kỹ thuật Hệ thống Hàng không Vũ trụ
            </p>
            <div className="absolute bottom-4 left-4 right-4 bg-[#0a0a12]/80 backdrop-blur-md py-2 px-3 rounded-lg border border-white/5 text-[10px] text-white/50 text-center">
              "Xây dựng những sứ mệnh thật ngoài không gian"
            </div>
          </div>

          {/* Logo "Vũ Trụcùng Khoa" */}
          <div className="flex items-center text-2xl select-none mb-2">
            <span className="font-bold text-[#D4AF37]">Vũ Trụ</span>
            <span className="font-normal text-white">cùng Khoa</span>
          </div>

          <p className="text-white/50 text-sm tracking-wide font-medium">
            Huấn Luyện Vũ Trụ Chuyên Sâu
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN (50%) - Interactive Form Area */}
      <div className="flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-[400px]">
          
          <AnimatePresence mode="wait">
            {!loginSuccess ? (
              <motion.div
                key="login-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Title */}
                <h1 className="text-[2rem] font-bold text-white tracking-tight mb-2">Chào Mừng Trở Lại</h1>
                
                {/* Subheadline */}
                <p className="text-white/60 text-sm mb-8 leading-relaxed">
                  Đăng nhập để tiếp tục hành trình khám phá vũ trụ của bạn
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold tracking-wider text-white/80 uppercase block">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                      <input
                        id="login-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nguyen.van.a@vutru.com"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-lg py-[14px] pl-12 pr-4 text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/15 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-semibold tracking-wider text-white/80 uppercase block">Mật khẩu</label>
                      <button
                        type="button"
                        onClick={() => alert("Chức năng khôi phục mật khẩu sẽ gửi link qua email của bạn.")}
                        className="text-xs font-semibold text-[#D4AF37] hover:underline focus:outline-none"
                      >
                        Quên mật khẩu?
                      </button>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                      <input
                        id="login-password"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-lg py-[14px] pl-12 pr-4 text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/15 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    id="login-submit"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#D4AF37] text-[#050508] font-bold py-[14px] rounded-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-[#050508] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      'Đăng Nhập'
                    )}
                  </button>
                </form>

                {/* Divider */}
                <div className="relative my-8 text-center">
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-white/10" />
                  <span className="relative bg-[#050508] px-4 text-xs font-semibold uppercase tracking-widest text-white/40">hoặc</span>
                </div>

                {/* Google Button */}
                <button
                  id="login-google"
                  onClick={handleGoogleLogin}
                  disabled={isSubmitting}
                  className="w-full bg-transparent hover:bg-white/5 border border-white/20 text-white font-semibold py-[14px] rounded-lg transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  Tiếp Tục Với Google
                </button>

                {/* Link to Register */}
                <p className="text-center text-sm text-white/60 mt-8">
                  Chưa có tài khoản?{' '}
                  <button
                    onClick={() => onNavigate('register')}
                    className="font-semibold text-[#D4AF37] hover:underline focus:outline-none"
                  >
                    Đăng ký
                  </button>
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center bg-[#0a0a12] border border-[#D4AF37]/30 p-8 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.15)] flex flex-col items-center"
              >
                <CheckCircle2 className="h-16 w-16 text-[#D4AF37] mb-4 animate-bounce" />
                <h2 className="text-2xl font-bold text-white mb-2">Đăng Nhập Thành Công</h2>
                <p className="text-white/60 text-sm mb-6">
                  Hệ thống đang đồng bộ quỹ đạo học tập của bạn...
                </p>
                <div className="w-12 h-1 border-t-2 border-[#D4AF37] border-r-2 border-r-transparent rounded-full animate-spin" />
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

    </div>
  );
}
