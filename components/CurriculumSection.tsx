import React from 'react';
import { CURRICULUM_DATA } from '../constants';
import { 
  Dumbbell, Apple, Zap, ClipboardList, FlaskConical, 
  Moon, Flame, Brain, Target, ShieldCheck, 
  Video, FileText, Lock, ChevronRight 
} from 'lucide-react';

interface CurriculumSectionProps {
  isDark: boolean;
}

const iconMap: Record<string, any> = {
  Dumbbell, Apple, Zap, ClipboardList, FlaskConical, 
  Moon, Flame, Brain, Target, ShieldCheck
};

const CurriculumSection: React.FC<CurriculumSectionProps> = ({ isDark }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {CURRICULUM_DATA.map((module, idx) => {
        const IconComponent = iconMap[module.iconName] || Dumbbell;
        
        // Breaking description into parts for "executable steps" visual
        const descriptionParts = module.description.split('. ').filter(p => p.trim());

        return (
          <div 
            key={module.id} 
            className={`group p-8 rounded-[2rem] border transition-all duration-500 pop-on-scroll hover:-translate-y-2 flex flex-col ${isDark ? 'bg-neutral-900/50 border-white/10 hover:border-blue-500/30' : 'bg-white/90 border-black/10 hover:border-blue-500/30 shadow-xl'}`}
            style={{ transitionDelay: `${(idx % 2) * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className={`p-3 rounded-2xl ${isDark ? 'bg-blue-600/20' : 'bg-blue-600/10'}`}>
                <IconComponent className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex flex-col items-end">
                <span className={`text-[10px] font-black tracking-[0.3em] uppercase ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>PHASE {module.id < 10 ? `0${module.id}` : module.id}</span>
                <div className="h-1 w-12 bg-blue-600/20 rounded-full mt-1 group-hover:w-16 transition-all duration-500"></div>
              </div>
            </div>

            <h3 className={`text-xl md:text-2xl font-bold mb-4 tracking-tight leading-tight ${isDark ? 'text-white' : 'text-black'}`}>{module.title}</h3>
            
            {/* Executable Steps Visualization */}
            <div className="space-y-2 mb-8 flex-grow">
              {descriptionParts.map((part, pIdx) => (
                <div key={pIdx} className="flex items-start space-x-2">
                  <ChevronRight className="w-3.5 h-3.5 mt-1 text-blue-500 shrink-0" />
                  <p className={`text-[13px] leading-relaxed font-semibold ${isDark ? 'text-gray-400' : 'text-gray-800'}`}>
                    {part.endsWith('.') ? part : `${part}.`}
                  </p>
                </div>
              ))}
            </div>

            <div className={`space-y-3 pt-6 border-t ${isDark ? 'border-white/5' : 'border-black/10'}`}>
              <div className={`relative overflow-hidden rounded-2xl p-4 transition-all duration-300 ${isDark ? 'bg-black/30 group-hover:bg-black/50' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
                <div className="flex items-center">
                  <div className="p-2 bg-red-500/10 rounded-xl mr-3">
                    <Video className="w-4 h-4 text-red-500" />
                  </div>
                  <div className="flex-grow">
                    <p className={`text-[9px] font-black uppercase tracking-widest mb-0.5 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Primary Visual Lab</p>
                    <div className="relative">
                      <p className={`text-[13px] font-bold blur-[5px] select-none opacity-30 whitespace-nowrap overflow-hidden ${isDark ? 'text-white' : 'text-black'}`}>Practical Lab Demonstration: Master Class HD</p>
                      <div className="absolute inset-0 flex items-center justify-start">
                         <span className="flex items-center text-[10px] font-black uppercase text-blue-600 bg-blue-600/10 px-2 py-0.5 rounded-md backdrop-blur-sm">
                           <Lock className="w-3 h-3 mr-1.5" /> SECURE RESOURCE
                         </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`relative overflow-hidden rounded-2xl p-4 transition-all duration-300 ${isDark ? 'bg-black/30 group-hover:bg-black/50' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
                <div className="flex items-center">
                  <div className="p-2 bg-blue-500/10 rounded-xl mr-3">
                    <FileText className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-grow">
                    <p className={`text-[9px] font-black uppercase tracking-widest mb-0.5 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Theoretical Manual</p>
                    <div className="relative">
                      <p className={`text-[13px] font-bold blur-[5px] select-none opacity-30 whitespace-nowrap overflow-hidden ${isDark ? 'text-white' : 'text-black'}`}>Implementation Blueprint: Step-by-Step PDF</p>
                      <div className="absolute inset-0 flex items-center justify-start">
                         <span className="flex items-center text-[10px] font-black uppercase text-blue-600 bg-blue-600/10 px-2 py-0.5 rounded-md backdrop-blur-sm">
                           <Lock className="w-3 h-3 mr-1.5" /> SECURE MATERIAL
                         </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CurriculumSection;