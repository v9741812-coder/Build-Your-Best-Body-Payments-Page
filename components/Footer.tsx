import React from 'react';
import { SCHOOL_NAME } from '../constants';

interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
  return (
    <footer className={`py-6 md:py-8 border-t ${isDark ? 'bg-black border-white/5' : 'bg-white border-black/5'}`}>
      <div className="max-w-[1400px] mx-auto px-4 flex flex-row justify-center items-center gap-1.5 md:gap-4 flex-nowrap text-center overflow-hidden">
        <div className={`text-[8px] sm:text-[9px] md:text-xs font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] whitespace-nowrap flex-shrink-0 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
          {SCHOOL_NAME}
        </div>
        
        <span className={`text-gray-700 opacity-30 select-none flex-shrink-0`}>|</span>
        
        <div className={`text-[8px] sm:text-[9px] md:text-xs font-black uppercase tracking-[0.05em] md:tracking-[0.1em] whitespace-nowrap truncate ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Build Your Best Body: A Complete Fitness Guide&trade;
        </div>
      </div>
    </footer>
  );
};

export default Footer;