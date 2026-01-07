import React, { useEffect, useState } from 'react';
import StatsDashboard from '../components/StatsDashboard';
import ExpertGrid from '../components/ExpertGrid';
import ScrollStories from '../components/ScrollStories';
import { ArrowRight, ShieldCheck, Landmark, Heart } from 'lucide-react';
import { useRouter } from '../App';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Home: React.FC = () => {
  const { navigateTo } = useRouter();
  const [scrollY, setScrollY] = useState(0);
  
  const pathReveal = useScrollReveal(0.1);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="aurora-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        {/* Parallax Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <div 
            className="absolute top-[10%] left-[5%] w-[40%] h-[60%] bg-[#1A365D]/30 blur-[120px] rounded-full animate-pulse transition-transform duration-300"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          ></div>
          <div 
            className="absolute bottom-[10%] right-[5%] w-[30%] h-[50%] bg-[#D69E2E]/10 blur-[100px] rounded-full animate-pulse transition-transform duration-300"
            style={{ transform: `translateY(${scrollY * -0.1}px)`, animationDelay: '1s' }}
          ></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-32">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#D69E2E]/10 border border-[#D69E2E]/30 text-[#D69E2E] text-[10px] md:text-sm font-black uppercase tracking-[0.3em] mb-6 md:mb-10 backdrop-blur-sm animate-entry">
              <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" /> Safety Alert Patrol
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.05] text-glow animate-entry stagger-1 uppercase">
              Accept your <br className="hidden sm:block" /><span className="text-[#D69E2E]">new mission.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-slate-400 mb-10 md:mb-16 max-w-3xl leading-relaxed animate-entry stagger-2">
              Connecting retired military and law enforcement elite with schools and churches to provide a new standard of community safety through <span className="text-white font-black underline decoration-[#D69E2E] underline-offset-8">Professional Stewardship.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-8 animate-entry stagger-3">
              <button 
                onClick={() => navigateTo('#/contact?role=guard')} 
                className="shimmer-trigger relative overflow-hidden px-10 py-5 md:px-12 md:py-6 bg-[#D69E2E] hover:bg-[#c48d24] text-[#1A365D] rounded-2xl font-black text-base md:text-xl transition-all active:scale-95 flex items-center justify-center gap-2 group shadow-2xl shadow-[#D69E2E]/20"
              >
                <div className="shimmer-element absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"></div>
                Join the Patrol <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button 
                onClick={() => navigateTo('#/services')} 
                className="px-10 py-5 md:px-12 md:py-6 bg-[#1A365D]/20 hover:bg-[#1A365D]/40 text-white border border-white/10 rounded-2xl font-black text-base md:text-xl transition-all active:scale-95 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                Safety Model
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Path Selection - Standardized Spacing & Refined Cards */}
      <section ref={pathReveal.ref} className="py-24 md:py-32 border-y border-white/5 bg-slate-950/80 transition-all duration-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* For Guards Card */}
            <div 
              onClick={() => navigateTo('#/contact?role=guard')}
              className={`p-10 lg:p-12 bg-[#1A365D]/20 border border-white/10 rounded-[2.5rem] hover:border-[#D69E2E]/40 hover:shadow-[0_0_30px_rgba(214,158,46,0.05)] transition-all group cursor-pointer relative overflow-hidden shimmer-trigger tactical-border reveal-hidden ${
                pathReveal.isVisible ? 'reveal-visible stagger-1' : ''
              }`}
            >
              <div className="shimmer-element absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 h-1 bg-[#D69E2E] w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
              
              <div className="w-14 h-14 bg-[#D69E2E]/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform relative z-10">
                <ShieldCheck className="w-7 h-7 text-[#D69E2E]" />
              </div>
              <h3 className="text-2xl font-black mb-4 relative z-10 uppercase tracking-tight">For Guards</h3>
              <p className="text-base text-slate-400 mb-8 leading-relaxed relative z-10">Your skills are needed. Transition your years of service into protecting your community's most vulnerable spaces.</p>
              <span className="text-[#D69E2E] font-black text-sm flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest relative z-10">
                Enlist now <ArrowRight className="w-5 h-5" />
              </span>
            </div>

            {/* For Schools Card */}
            <div 
              onClick={() => navigateTo('#/services')}
              className={`p-10 lg:p-12 bg-[#1A365D]/20 border border-white/10 rounded-[2.5rem] hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all group cursor-pointer relative overflow-hidden shimmer-trigger tactical-border reveal-hidden ${
                pathReveal.isVisible ? 'reveal-visible stagger-2' : ''
              }`}
            >
              <div className="shimmer-element absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 h-1 bg-white w-0 group-hover:w-full transition-all duration-500 ease-out"></div>

              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform relative z-10">
                <Landmark className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 relative z-10 uppercase tracking-tight text-white">For Schools</h3>
              <p className="text-base text-slate-400 mb-8 leading-relaxed relative z-10">Implement a precision-led safety model that balances clinical authority with human warmth and stewardship.</p>
              <span className="text-white font-black text-sm flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest relative z-10">
                Safety model <ArrowRight className="w-5 h-5" />
              </span>
            </div>

            {/* For Donors Card */}
            <div 
              onClick={() => navigateTo('#/contact?role=donor')}
              className={`p-10 lg:p-12 bg-[#1A365D]/20 border border-white/10 rounded-[2.5rem] hover:border-[#D69E2E]/40 hover:shadow-[0_0_30px_rgba(214,158,46,0.05)] transition-all group cursor-pointer relative overflow-hidden shimmer-trigger tactical-border reveal-hidden ${
                pathReveal.isVisible ? 'reveal-visible stagger-3' : ''
              }`}
            >
              <div className="shimmer-element absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 h-1 bg-[#D69E2E] w-0 group-hover:w-full transition-all duration-500 ease-out"></div>

              <div className="w-14 h-14 bg-[#D69E2E]/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform relative z-10">
                <Heart className="w-7 h-7 text-[#D69E2E]" />
              </div>
              <h3 className="text-2xl font-black mb-4 relative z-10 uppercase tracking-tight">For Donors</h3>
              <p className="text-base text-slate-400 mb-8 leading-relaxed relative z-10">Directly fund the protection of local institutions and provide meaningful careers for our nation's veterans.</p>
              <span className="text-[#D69E2E] font-black text-sm flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest relative z-10">
                Support SAP <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
      </section>

      <StatsDashboard />
      
      <ScrollStories />

      <ExpertGrid />

      {/* Final CTA - Enhanced Depth */}
      <section className="py-32 md:py-48 bg-[#1A365D] relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/40 to-[#020617]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-5xl md:text-8xl font-black mb-8 text-white tracking-tighter uppercase leading-none">Ready to serve?</h2>
          <p className="text-slate-300 text-lg md:text-3xl max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
            Join the alliance of professional guardians dedicated to reclaiming safety for our schools and churches.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-8">
            <button 
              onClick={() => navigateTo('#/contact')} 
              className="px-12 py-6 md:px-16 md:py-7 bg-[#D69E2E] text-[#1A365D] rounded-[2rem] font-black text-lg md:text-2xl hover:bg-[#c48d24] hover:scale-105 transition-all active:scale-95 shadow-2xl shadow-black/50"
            >
              Apply to Join
            </button>
            <button 
              onClick={() => navigateTo('#/contact?role=donor')} 
              className="px-12 py-6 md:px-16 md:py-7 bg-white/10 text-white rounded-[2rem] font-black text-lg md:text-2xl hover:bg-white/20 transition-all active:scale-95 border border-white/20 backdrop-blur-md"
            >
              Donate Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;