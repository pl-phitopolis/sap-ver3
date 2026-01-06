
import React, { useState } from 'react';
import { LEADERSHIP } from '../constants';
import { Expert } from '../types';

const ExpertGrid: React.FC = () => {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);

  return (
    <section className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">The Expert Alliance.</h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Led by a command structure of retired elite personnel and security scientists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {LEADERSHIP.map((expert, idx) => (
            <div 
              key={idx}
              className="group cursor-pointer"
              onClick={() => setSelectedExpert(expert)}
            >
              <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-3xl bg-slate-800">
                <img 
                  src={expert.imageUrl} 
                  alt={expert.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 right-6">
                   <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1">{expert.role}</p>
                   <p className="text-white text-xl font-bold">{expert.name}</p>
                </div>
              </div>
              <p className="text-slate-400 line-clamp-2 text-sm leading-relaxed mb-4">
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative">
            <button 
              onClick={() => setSelectedExpert(null)}
              className="absolute top-6 right-6 p-2 hover:bg-slate-800 rounded-full transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-[400px] md:h-auto">
                <img src={selectedExpert.imageUrl} alt={selectedExpert.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-12 overflow-y-auto max-h-[500px] md:max-h-[700px]">
                <p className="text-indigo-400 font-bold text-sm uppercase tracking-widest mb-2">{selectedExpert.role}</p>
                <h3 className="text-3xl font-extrabold mb-6 tracking-tight">{selectedExpert.name}</h3>
                <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                  {selectedExpert.bio}
                </p>
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Credentials & Background</h4>
                  <ul className="space-y-2">
                    {selectedExpert.credentials.map((cred, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
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
