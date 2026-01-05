import React, { useState } from 'react';
import { Sparkles, Dumbbell, BookOpen, Heart, Zap, Layers, Image, Star, CheckCircle, MessageSquareMore, GitMerge, LayoutGrid, Lightbulb } from 'lucide-react';
import { COURSE_NAME, COURSE_LOGO } from '../constants';

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const [imgError, setImgError] = useState(false);

  const featureCards = [
    {
      icon: Layers,
      title: "EXECUTABLE STEPS",
      text: "Complex info broken into simple, clutter-free daily protocols."
    },
    {
      icon: BookOpen,
      title: "STUDY MATERIALS",
      text: "Detailed study materials with images and practical examples."
    },
    {
      icon: Image,
      title: "PRACTICAL IMAGES",
      text: "Clear images and visual aids to ensure perfect implementation."
    },
    {
      icon: Star,
      title: "THE BEST CONTENT",
      text: "The most comprehensive and effective fitness knowledge available today."
    },
    {
      icon: CheckCircle,
      title: "GUARANTEED RESULTS",
      text: "100% results guaranteed if protocols are followed strictly."
    },
    {
      icon: MessageSquareMore,
      title: "SIMPLE EXPLANATION",
      text: "Complex fitness topics explained in the simplest way possible."
    },
    {
      icon: GitMerge,
      title: "ACTIONABLE GUIDE",
      text: "Connecting all scattered knowledge into one cohesive roadmap."
    },
    {
      icon: LayoutGrid,
      title: "RICH & STRUCTURED",
      text: "Highly organized content designed for maximum learning efficiency."
    }
  ];

  return (
    <section className="relative w-full pt-16 pb-6 md:pt-20 md:pb-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
        <h1 className={`text-5xl md:text-7xl lg:text-[7rem] font-heading mb-2 tracking-tight leading-[0.9] select-none pop-on-scroll ${isDark ? 'bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400' : 'text-slate-950'}`}>
          {COURSE_NAME.split(' / ')[0]}
        </h1>
        <p className={`text-base md:text-lg max-w-2xl mx-auto font-bold leading-relaxed mb-4 pop-on-scroll ${isDark ? 'text-gray-400' : 'text-slate-800'}`}>
          The definitive architectural blueprint for the human physique. 
          Scientific mastery condensed into one complete guide.
        </p>

        <div className="mb-4 flex justify-center perspective-container pop-on-scroll">
          {!imgError ? (
            <div className="relative group transition-all duration-700 animate-float-3d">
              {/* Enhanced 3D Blue Glow */}
              <div className={`absolute -inset-16 ${isDark ? 'bg-blue-600/30' : 'bg-blue-500/20'} blur-[120px] rounded-full opacity-60 z-0`}></div>
              <div className={`absolute -inset-8 ${isDark ? 'bg-blue-400/20' : 'bg-blue-400/10'} blur-[60px] rounded-full opacity-40 z-0`}></div>
              
              <img 
                src={COURSE_LOGO} 
                alt="Course Logo" 
                onError={() => setImgError(true)}
                className="relative w-56 h-56 md:w-[28rem] md:h-[28rem] object-contain drop-shadow-[0_45px_100px_rgba(0,0,0,0.6)] z-20 transition-all duration-700 hover:scale-105"
              />
            </div>
          ) : (
            <div className="w-56 h-56 md:w-[28rem] md:h-[28rem] bg-blue-600/5 rounded-full flex items-center justify-center border border-blue-500/10">
               <Dumbbell className="w-24 h-24 text-blue-500/20" />
            </div>
          )}
        </div>

        {/* 2 columns layout resulting in 4 rows for 8 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-[900px] mx-auto mt-6">
          {featureCards.map((card, idx) => (
            <div 
              key={idx} 
              className={`p-5 md:p-6 rounded-3xl border transition-all duration-500 hover:scale-[1.02] pop-on-scroll ${isDark ? 'bg-white/[0.03] border-white/5 hover:border-blue-500/30' : 'bg-white border-blue-100 hover:border-blue-500/50 shadow-lg'}`}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="flex flex-col space-y-3">
                <div className="bg-blue-600/10 p-2.5 rounded-xl w-fit">
                  <card.icon className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-[10px] md:text-[11px] font-black tracking-[0.2em] mb-1.5 uppercase text-blue-700">{card.title}</h3>
                  <p className={`text-[12px] md:text-[13px] font-bold leading-relaxed ${isDark ? 'text-gray-200' : 'text-slate-900'}`}>
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;