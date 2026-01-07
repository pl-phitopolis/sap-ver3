import React from 'react';
import { Shield, School, BarChart3, Clock } from 'lucide-react';
import { IMPACT_STATS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const IconMap: { [key: string]: React.ReactNode } = {
  Shield: <Shield className="w-6 h-6 text-[#D69E2E]" />,
  School: <School className="w-6 h-6 text-white" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-[#D69E2E]" />,
  Clock: <Clock className="w-6 h-6 text-white" />
};

const StatsDashboard: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div ref={ref} className="py-24 md:py-32 bg-slate-950 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1A365D]/20 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 uppercase">Impact Metrics.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Our metrics are more than numbers; they represent children saved, communities secured, and veterans finding new purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {IMPACT_STATS.map((stat, idx) => (
            <div 
              key={idx}
              className={`bg-[#1A365D]/30 border border-white/10 p-10 rounded-[2.5rem] hover:border-[#D69E2E]/50 hover:shadow-[0_0_30px_rgba(214,158,46,0.08)] transition-all group relative overflow-hidden shimmer-trigger cursor-default active:scale-[0.98] reveal-hidden tactical-border ${
                isVisible ? `reveal-visible stagger-${idx + 1}` : ''
              }`}
            >
              {/* Shimmer Effect */}
              <div className="shimmer-element absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
              
              {/* Expanding Bottom Border */}
              <div className="absolute bottom-0 left-0 h-1.5 bg-[#D69E2E] w-0 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>

              <div className="mb-8 p-5 bg-slate-900 border border-white/10 w-fit rounded-2xl group-hover:scale-110 group-hover:bg-[#1A365D] transition-all duration-500 relative z-10">
                {IconMap[stat.icon]}
              </div>
              <div className="text-5xl font-black mb-2 tracking-tighter text-white relative z-10">{stat.value}</div>
              <div className="text-[#D69E2E] font-black mb-4 tracking-[0.2em] text-xs uppercase relative z-10">{stat.label}</div>
              <p className="text-slate-400 text-sm leading-relaxed relative z-10 font-medium">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsDashboard;