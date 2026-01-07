import React from 'react';
import ExpertGrid from '../components/ExpertGrid';
import { FileText, Download, ShieldCheck, History, Target } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About: React.FC = () => {
  const introReveal = useScrollReveal(0.1);
  const storyReveal = useScrollReveal(0.15);
  const transparencyReveal = useScrollReveal(0.15);

  return (
    <div className="pt-20">
      <section ref={introReveal.ref} className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-3xl mb-16 transition-all duration-1000 ${introReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight uppercase">Our Stewardship.</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Safety Alert Patrol was founded on a singular principle: that the men and women who protected our country are uniquely qualified to protect our communities.
            </p>
          </div>

          <div ref={storyReveal.ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div className={`relative aspect-video rounded-[2.5rem] overflow-hidden bg-slate-800 border border-white/5 reveal-hidden ${storyReveal.isVisible ? 'reveal-visible stagger-1' : ''}`}>
               <img src="https://picsum.photos/1200/800?random=20" alt="Training Session" className="w-full h-full object-cover grayscale" />
               <div className="absolute inset-0 bg-[#1A365D]/30"></div>
            </div>
            <div className={`flex flex-col justify-center reveal-hidden ${storyReveal.isVisible ? 'reveal-visible stagger-2' : ''}`}>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center">
                    <History className="w-6 h-6 text-[#D69E2E]" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-black mb-3 uppercase tracking-tight text-white">The Founding</h3>
                    <p className="text-slate-400 leading-relaxed">Established in 2021 by a coalition of retired special operations officers and educators who recognized a critical gap in institutional safety protocols.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-black mb-3 uppercase tracking-tight text-white">The Mission</h3>
                    <p className="text-slate-400 leading-relaxed">To provide elite, professional safety patrol support while facilitating the meaningful transition of veterans back into community-centric service.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExpertGrid />

      {/* Transparency Section */}
      <section ref={transparencyReveal.ref} className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-[#1A365D]/20 border border-white/5 rounded-[3rem] p-12 md:p-20 overflow-hidden relative transition-all duration-1000 ${transparencyReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D69E2E]/5 blur-[100px] -z-10"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="text-left">
                <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight uppercase text-white">Radical Transparency.</h2>
                <p className="text-slate-400 mb-12 text-lg leading-relaxed">
                  As a 501(c)(3), we are committed to absolute financial and operational transparency. Every dollar is tracked, every patrol is logged, and every outcome is verified.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className={`reveal-hidden ${transparencyReveal.isVisible ? 'reveal-visible stagger-1' : ''}`}>
                    <p className="text-4xl font-black text-[#D69E2E] mb-1">87%</p>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Program Services</p>
                  </div>
                  <div className={`reveal-hidden ${transparencyReveal.isVisible ? 'reveal-visible stagger-2' : ''}`}>
                    <p className="text-4xl font-black text-white mb-1">100%</p>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Vetting Rigor</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  { title: '2023 Annual Report', size: 'PDF • 4.2 MB', icon: <FileText className="w-6 h-6 text-slate-400" /> },
                  { title: 'IRS Form 990', size: 'PDF • 1.8 MB', icon: <FileText className="w-6 h-6 text-slate-400" /> },
                  { title: 'Safety Standards V.4', size: 'PDF • 2.1 MB', icon: <ShieldCheck className="w-6 h-6 text-slate-400" /> }
                ].map((doc, idx) => (
                  <div 
                    key={idx}
                    className={`bg-slate-950/50 border border-white/5 p-6 rounded-2xl flex items-center justify-between group cursor-pointer hover:border-[#D69E2E]/30 transition-all relative overflow-hidden shimmer-trigger active:scale-95 reveal-hidden ${transparencyReveal.isVisible ? `reveal-visible stagger-${idx + 1}` : ''}`}
                  >
                    <div className="shimmer-element absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 h-0.5 bg-[#D69E2E] w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
                    
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="p-3 bg-slate-900 rounded-xl group-hover:bg-[#1A365D] transition-colors">
                        {doc.icon}
                      </div>
                      <div className="text-left">
                        <p className="font-black uppercase tracking-tight group-hover:text-white transition-colors text-slate-200">{doc.title}</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{doc.size}</p>
                      </div>
                    </div>
                    <Download className="w-5 h-5 text-[#D69E2E] group-hover:translate-y-1 group-hover:scale-110 transition-all relative z-10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;