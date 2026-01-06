
import React from 'react';
import { Shield, School, BarChart3, Clock } from 'lucide-react';
import { IMPACT_STATS } from '../constants';

const IconMap: { [key: string]: React.ReactNode } = {
  Shield: <Shield className="w-6 h-6 text-indigo-400" />,
  School: <School className="w-6 h-6 text-emerald-400" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-blue-400" />,
  Clock: <Clock className="w-6 h-6 text-violet-400" />
};

const StatsDashboard: React.FC = () => {
  return (
    <div className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Precision stewardship.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Our metrics are more than numbers; they represent children saved, communities secured, and veterans finding new purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {IMPACT_STATS.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:border-slate-700 transition-all group"
            >
              <div className="mb-6 p-3 bg-slate-800 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                {IconMap[stat.icon]}
              </div>
              <div className="text-4xl font-extrabold mb-2 tracking-tight text-white">{stat.value}</div>
              <div className="text-indigo-400 font-bold mb-3 tracking-wide text-xs uppercase">{stat.label}</div>
              <p className="text-slate-400 text-sm leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsDashboard;
