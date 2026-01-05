import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CurriculumSection from './components/CurriculumSection';
import PaymentSection from './components/PaymentSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Application strictly defaults to dark mode on load
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }

    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      document.documentElement.style.setProperty('--scroll', scrollPercent.toString());
    };

    window.addEventListener('scroll', handleScroll);

    // Scroll reveal observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.pop-on-scroll').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [isDark]);

  return (
    <div className={`${isDark ? 'text-white' : 'text-slate-950'} min-h-screen transition-colors duration-500 overflow-x-hidden relative`}>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="relative pt-12">
        <Hero isDark={isDark} />
        
        <div className="max-w-5xl mx-auto px-6 space-y-12 py-8">
          <section id="curriculum" className="pop-on-scroll">
            <div className="text-center mb-6">
              <h2 className={`text-2xl md:text-4xl font-heading tracking-tight mb-1 uppercase ${isDark ? 'text-white' : 'text-black'}`}>Course Architecture</h2>
              <div className="w-12 h-0.5 bg-blue-600 mx-auto mb-2"></div>
              <p className={`max-w-xl mx-auto text-xs md:text-sm font-bold underline decoration-blue-600/30 underline-offset-4 ${isDark ? 'text-gray-400' : 'text-slate-700'}`}>
                Rich and structured content, Real life applications and useful examples
              </p>
            </div>
            <CurriculumSection isDark={isDark} />
          </section>

          <section id="payment" className="pb-16 pop-on-scroll">
            <PaymentSection isDark={isDark} />
          </section>
        </div>
      </main>

      <Footer isDark={isDark} />
    </div>
  );
};

export default App;