import React, { useState } from 'react';
import { LEADERSHIP } from '../constants';
import { Expert } from '../types';
import { X } from 'lucide-react';

const ExpertGrid: React.FC = () => {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);

  return (
    <section className="py-16 md:py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">The Expert Alliance.</h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Led by a command structure of retired elite personnel and institutional security scientists.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {LEADERSHIP.map((expert, idx) => (
            <div 
              key={idx}
              className="group cursor-pointer"
              onClick={() => setSelectedExpert(expert)}
            >
              <div className="relative aspect-[4/5] mb-4 md:mb-6 overflow-hidden rounded-2xl md:rounded-3xl bg-slate-800 shadow-xl">
                <img 
                  src={expert.imageUrl} 
                  alt={expert.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                   <p className="text-indigo-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">{expert.role}</p>
                   <p className="text-white text-lg md:text-xl font-bold tracking-tight">{expert.name}</p>
                </div>
              </div>
              <p className="text-slate-400 line-clamp-2 text-xs md:text-sm leading-relaxed mb-3">
                {expert.bio}
              </p>
              <div className="flex flex-wrap gap-2">
                {expert.credentials.slice(0, 2).map((cred, cIdx) => (
                  <span key={cIdx} className="text-[10px] font-bold px-2 py-1 bg-slate-800 rounded-md text-slate-300 border border-slate-700">
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
          <div className="bg-slate-900 border border-slate-800 w-full max-w-4xl rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative my-auto">
            <button 
              onClick={() => setSelectedExpert(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-slate-950/50 hover:bg-slate-800 rounded-full transition-colors z-20 text-white"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 h-full max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible">
              <div className="aspect-[4/5] md:aspect-auto h-[300px] md:h-auto">
                <img src={selectedExpert.imageUrl} alt={selectedExpert.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:p-12 overflow-y-auto">
                <p className="text-indigo-400 font-bold text-xs md:text-sm uppercase tracking-widest mb-2">{selectedExpert.role}</p>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4 md:mb-6 tracking-tight text-white">{selectedExpert.name}</h3>
                <p className="text-slate-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-lg">
                  {selectedExpert.bio}
                </p>
                <div className="space-y-4">
                  <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">Credentials & Background</h4>
                  <ul className="space-y-2">
                    {selectedExpert.credentials.map((cred, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-400 text-xs md:text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
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