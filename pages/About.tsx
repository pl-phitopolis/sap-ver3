
import React from 'react';
import ExpertGrid from '../components/ExpertGrid';
import { FileText, Download, ShieldCheck, History, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">Our Stewardship.</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Safety Alert Patrol was founded on a singular principle: that the men and women who protected our country are uniquely qualified to protect our communities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-800 border border-slate-800">
               <img src="https://picsum.photos/1200/800?random=20" alt="Training Session" className="w-full h-full object-cover grayscale" />
               <div className="absolute inset-0 bg-indigo-600/10"></div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center">
                    <History className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">The Founding</h3>
                    <p className="text-slate-400 leading-relaxed">Established in 2021 by a coalition of retired special operations officers and educators who recognized a critical gap in institutional safety protocols.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">The Mission</h3>
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
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/40 border border-slate-800 rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600/5 blur-[100px] -z-10"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">Radical Transparency.</h2>
                <p className="text-slate-400 mb-12 text-lg leading-relaxed">
                  As a 501(c)(3), we are committed to absolute financial and operational transparency. Every dollar is tracked, every patrol is logged, and every outcome is verified.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-3xl font-bold text-white mb-1">87%</p>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Program Services</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white mb-1">100%</p>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Vetting Rigor</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl flex items-center justify-between group cursor-pointer hover:border-slate-600 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-900 rounded-xl">
                      <FileText className="w-6 h-6 text-slate-400" />
                    </div>
                    <div>
                      <p className="font-bold">2023 Annual Report</p>
                      <p className="text-xs text-slate-500 uppercase tracking-widest">PDF • 4.2 MB</p>
                    </div>
                  </div>
                  <Download className="w-5 h-5 text-indigo-500 group-hover:translate-y-1 transition-transform" />
                </div>
                <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl flex items-center justify-between group cursor-pointer hover:border-slate-600 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-900 rounded-xl">
                      <FileText className="w-6 h-6 text-slate-400" />
                    </div>
                    <div>
                      <p className="font-bold">IRS Form 990</p>
                      <p className="text-xs text-slate-500 uppercase tracking-widest">PDF • 1.8 MB</p>
                    </div>
                  </div>
                  <Download className="w-5 h-5 text-indigo-500 group-hover:translate-y-1 transition-transform" />
                </div>
                <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl flex items-center justify-between group cursor-pointer hover:border-slate-600 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-900 rounded-xl">
                      <ShieldCheck className="w-6 h-6 text-slate-400" />
                    </div>
                    <div>
                      <p className="font-bold">Safety Standards V.4</p>
                      <p className="text-xs text-slate-500 uppercase tracking-widest">PDF • 2.1 MB</p>
                    </div>
                  </div>
                  <Download className="w-5 h-5 text-indigo-500 group-hover:translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
