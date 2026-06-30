import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import Contact from './components/Contact';
import { PageType } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<PageType>('home');
  const [scrollTarget, setScrollTarget] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      
      if (hash === 'home' || hash === '') {
        setActivePage('home');
      } else if (hash === 'login') {
        setActivePage('login');
      } else if (hash === 'register') {
        setActivePage('register');
      } else if (hash === 'about') {
        setActivePage('about');
      } else if (hash === 'contact') {
        setActivePage('contact');
      } else if (hash === 'home-courses' || hash === 'courses') {
        setActivePage('home');
        setScrollTarget('courses');
      } else if (hash === 'home-testimonials' || hash === 'testimonials') {
        setActivePage('home');
        setScrollTarget('testimonials');
      } else {
        setActivePage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageType, scrollToId?: string) => {
    if (scrollToId) {
      window.location.hash = `home-${scrollToId}`;
      setScrollTarget(scrollToId);
    } else {
      window.location.hash = page === 'home' ? '' : page;
    }
    setActivePage(page);
    
    // Smooth scroll to top when changing distinct sub-pages
    if (!scrollToId) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  };

  const renderPageContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <Home 
            onNavigate={handleNavigate} 
            scrollTargetId={scrollTarget}
            onClearScrollTarget={() => setScrollTarget(undefined)}
          />
        );
      case 'login':
        return <Login onNavigate={handleNavigate} />;
      case 'register':
        return <Register onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <Home 
            onNavigate={handleNavigate} 
            scrollTargetId={scrollTarget}
            onClearScrollTarget={() => setScrollTarget(undefined)}
          />
        );
    }
  };

  return (
    <div className="bg-[#050508] min-h-screen text-white font-sans flex flex-col justify-between">
      
      {/* Navigation - Sticky */}
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      {/* Main Content Area with Page Fade Animations */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderPageContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
