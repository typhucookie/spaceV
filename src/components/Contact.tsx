import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, User, Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !message) return;

    setIsSending(true);
    // Simulate premium message dispatching
    setTimeout(() => {
      setIsSending(false);
      setSendSuccess(true);
      setFullName('');
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setSendSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-[#050508] text-white min-h-[calc(100vh-72px)] flex items-center justify-center relative overflow-hidden">
      {/* Background starlight orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#D4AF37]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[500px] mx-auto px-6 py-[100px] relative z-10 text-center">
        
        {/* Header */}
        <div className="mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[2.5rem] font-bold text-white tracking-tight mb-4"
          >
            Kết Nối Với Tôi
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base text-white/60"
          >
            Có câu hỏi? Muốn hợp tác? Hãy gửi tin nhắn cho mình.
          </motion.p>
        </div>

        {/* Form Container with AnimatePresence */}
        <AnimatePresence mode="wait">
          {!sendSuccess ? (
            <motion.form 
              key="contact-form"
              onSubmit={handleSubmit} 
              className="text-left space-y-5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-semibold tracking-wider text-white/80 uppercase block">Họ tên</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg py-[14px] pl-12 pr-4 text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/15 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-xs font-semibold tracking-wider text-white/80 uppercase block">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nguyen.van.a@vutru.com"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg py-[14px] pl-12 pr-4 text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/15 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-semibold tracking-wider text-white/80 uppercase block">Tin nhắn</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-white/30" />
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Nhập nội dung tin nhắn của bạn ở đây..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/15 transition-all duration-300 min-h-[150px] resize-y"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                id="contact-submit"
                type="submit"
                disabled={isSending}
                className="cursor-pointer w-full bg-[#D4AF37] text-[#050508] font-bold py-[14px] rounded-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSending ? (
                  <span className="w-5 h-5 border-2 border-[#050508] border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Gửi Tin Nhắn
                  </>
                )}
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0a0a12] border border-[#D4AF37]/30 p-8 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.15)] flex flex-col items-center py-12"
            >
              <CheckCircle2 className="h-16 w-16 text-[#D4AF37] mb-4 animate-bounce" />
              <h2 className="text-2xl font-bold text-white mb-2">Đã Gửi Thành Công!</h2>
              <p className="text-white/60 text-sm leading-relaxed max-w-[320px]">
                Cảm ơn bạn đã liên hệ. Tin nhắn của bạn đã được đưa vào luồng tiếp nhận tín hiệu. Tôi sẽ kết nối lại với bạn sớm nhất có thể.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Alternative Contact Info */}
        <p className="text-sm text-white/50 mt-10">
          Hoặc liên hệ trực tiếp qua email:{' '}
          <a
            id="contact-email-link"
            href="mailto:hello@vutrucungkhoa.com"
            className="text-[#D4AF37] font-semibold hover:underline"
          >
            hello@vutrucungkhoa.com
          </a>
        </p>

      </div>
    </div>
  );
}
