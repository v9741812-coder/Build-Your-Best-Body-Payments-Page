import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Dumbbell, ChevronDown } from 'lucide-react';
import { SCHOOL_NAME, GROWTH_LAB_LOGO, CURRICULUM_DATA } from '../constants';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const [imgError, setImgError] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const upiLink = "upi://pay?pa=8825061493-3@ybl&pn=The%20Growth%20Lab&am=269&cu=INR";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 border-b ${isDark ? 'bg-black/90 border-white/10' : 'bg-white/90 border-black/10'} backdrop-blur-xl`}>
      <div className="max-w-[1400px] mx-auto px-4 h-16 md:h-20 flex items-center justify-between relative">
        <div className="flex items-center space-x-2 shrink-0">
          {!imgError ? (
            <img 
              src={GROWTH_LAB_LOGO} 
              alt={SCHOOL_NAME} 
              onError={() => setImgError(true)}
              className="w-7 h-7 md:w-10 md:h-10 object-contain rounded-lg bg-black/10 p-0.5"
            />
          ) : (
            <div className="bg-blue-600 p-1 rounded-lg">
              <Dumbbell className="text-white w-4 h-4 md:w-5 md:h-5" />
            </div>
          )}
          <div className="flex flex-col">
            <span className="font-heading text-sm md:text-xl tracking-wider uppercase leading-none whitespace-nowrap">{SCHOOL_NAME}</span>
          </div>
        </div>

        <nav className="flex items-center space-x-3 md:space-x-8">
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center py-2 px-1 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Curriculum <ChevronDown className={`ml-1 w-3.5 h-3.5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className={`absolute top-full right-[-20px] md:right-0 mt-2 w-72 md:w-80 p-3 rounded-2xl border shadow-[0_20px_50px_rgba(0,0,0,0.5)] dropdown-animate z-[200] ${isDark ? 'bg-zinc-950 border-white/10' : 'bg-white border-black/10'}`}>
                <div className="max-h-[60vh] overflow-y-auto space-y-1 pr-1 custom-scroll">
                  <p className="text-[9px] font-black tracking-widest text-blue-500 mb-3 px-2 uppercase opacity-60">Complete Modules</p>
                  {CURRICULUM_DATA.map((module) => (
                    <div 
                      key={module.id} 
                      className={`group flex items-center px-3 py-2.5 text-[10px] md:text-[11px] font-bold uppercase tracking-wide rounded-xl transition-all cursor-default ${isDark ? 'text-gray-400 hover:bg-white/5 hover:text-white' : 'text-gray-600 hover:bg-black/5 hover:text-black'}`}
                    >
                      <span className="w-5 text-blue-500 font-black mr-2 opacity-50">{module.id}</span>
                      <span className="flex-1 truncate">{module.title}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-white/5 px-2">
                   <p className="text-[9px] italic text-gray-500">Includes all learning resources and study materials</p>
                </div>
              </div>
            )}
          </div>

          <a href={upiLink} className="px-4 py-2 bg-blue-600 text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] rounded-xl hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20 transition-all transform active:scale-95 shrink-0">Join</a>
          
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-xl transition-all shrink-0 ${isDark ? 'hover:bg-white/5 bg-white/5' : 'hover:bg-black/5 bg-black/5'}`}
          >
            {isDark ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;