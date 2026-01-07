import React, { useState } from 'react';
import { LEADERSHIP } from '../constants';
import { Expert } from '../types';
import { X } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ExpertGrid: React.FC = () => {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-[#1A365D]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white uppercase">The Expert Alliance.</h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Led by a command structure of retired elite personnel and institutional security scientists.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {LEADERSHIP.map((expert, idx) => (
            <div 
              key={idx}
              className={`group cursor-pointer transform transition-all active:scale-95 reveal-hidden ${isVisible ? `reveal-visible stagger-${idx + 1}` : ''}`}
              onClick={() => setSelectedExpert(expert)}
            >
              <div className="relative aspect-[4/5] mb-4 md:mb-6 overflow-hidden rounded-[2rem] bg-slate-800 shadow-xl border border-white/5 group-hover:border-[#D69E2E]/30">
                <img 
                  src={expert.imageUrl} 
                  alt={expert.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A365D] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                   <p className="text-[#D69E2E] text-[10px] md:text-xs font-black uppercase tracking-widest mb-1">{expert.role}</p>
                   <p className="text-white text-lg md:text-xl font-black tracking-tight uppercase">{expert.name}</p>
                </div>
              </div>
              <p className="text-slate-400 line-clamp-2 text-xs md:text-sm leading-relaxed mb-4">
                {expert.bio}
              </p>
              <div className="flex flex-wrap gap-2">
                {expert.credentials.slice(0, 2).map((cred, cIdx) => (
                  <span key={cIdx} className="text-[10px] font-black px-2.5 py-1.5 bg-[#1A365D]/40 rounded-md text-[#D69E2E] border border-[#D69E2E]/20 uppercase tracking-tighter">
                    {cred}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bio Modal */}
      {selectedExpert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md overflow-y-auto">
          <div className="bg-slate-900 border border-white/10 w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl relative my-auto animate-entry">
            <button 
              onClick={() => setSelectedExpert(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-slate-950/50 hover:bg-[#D69E2E] hover:text-[#1A365D] rounded-full transition-all z-20 text-white"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 h-full max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible">
              <div className="aspect-[4/5] md:aspect-auto h-[300px] md:h-auto">
                <img src={selectedExpert.imageUrl} alt={selectedExpert.name} className="w-full h-full object-cover grayscale" />
              </div>
              <div className="p-6 md:p-12 overflow-y-auto">
                <p className="text-[#D69E2E] font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-2">{selectedExpert.role}</p>
                <h3 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 tracking-tight text-white uppercase">{selectedExpert.name}</h3>
                <p className="text-slate-300 mb-8 md:mb-10 leading-relaxed text-sm md:text-lg italic">
                  "{selectedExpert.bio}"
                </p>
                <div className="space-y-4">
                  <h4 className="text-xs md:text-sm font-black text-[#D69E2E] uppercase tracking-widest border-b border-[#D69E2E]/20 pb-2">Background & Ops</h4>
                  <ul className="space-y-3">
                    {selectedExpert.credentials.map((cred, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-400 text-xs md:text-base">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D69E2E] shrink-0"></div>
                        {cred}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExpertGrid;