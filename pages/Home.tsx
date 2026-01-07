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
      {/* Immersive Scholarly Guardian Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Layer 0: High-Resolution Cinematic Library Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover transition-transform duration-[6000ms] ease-out brightness-[0.45] contrast-[1.25] saturate-[0.7]"
            style={{ transform: `scale(${1.15 + scrollY * 0.00025})` }}
            poster="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2000"
          >
            <source 
              src="https://videos.pexels.com/video-files/3125372/3125372-hd_1920_1080_25fps.mp4" 
              type="video/mp4" 
            />
          </video>
          {/* Filmic Depth Layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-transparent to-black/95"></div>
          <div className="vignette"></div>
          <div className="film-grain"></div>
        </div>

        {/* Layer 1: High-Intensity Dual-Blob Pulsing Aurora Engine */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* SAP Gold Atmosphere - High Visibility */}
          <div 
            className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-[#D69E2E]/20 blur-[180px] rounded-full animate-pulse transition-all duration-[2000ms]"
            style={{ 
              transform: `translate(${scrollY * -0.1}px, ${scrollY * 0.08}px)`,
              animationDuration: '7s'
            }}
          ></div>
          {/* SAP Navy Atmosphere - High Visibility */}
          <div 
            className="absolute bottom-[-15%] right-[-10%] w-[70%] h-[70%] bg-[#1A365D]/50 blur-[220px] rounded-full animate-pulse transition-all duration-[2000ms]"
            style={{ 
              transform: `translate(${scrollY * 0.1}px, ${scrollY * -0.08}px)`,
              animationDelay: '1.5s',
              animationDuration: '11s'
            }}
          ></div>
          {/* Subtle Ambient Mist Over Head */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-white/[0.02] to-transparent"></div>
        </div>

        {/* Layer 2: Centered Content Block - Increased Top Spacing for Nav Integrity */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 text-center mt-24 md:mt-32">
          <div className="flex flex-col items-center">
            {/* Mission Badge */}
            <div className="animate-blur-reveal inline-flex items-center gap-4 px-10 py-4 rounded-full bg-black/70 border border-white/10 text-[#D69E2E] text-[10px] md:text-xs font-black uppercase tracking-[0.8em] mb-14 backdrop-blur-3xl shadow-[0_0_100px_rgba(0,0,0,1)] ring-1 ring-white/10">
              <ShieldCheck className="w-5 h-5 text-glow" /> Safety Alert Patrol
            </div>
            
            <h1 className="animate-blur-reveal stagger-1 text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-black tracking-tighter mb-12 leading-[0.85] text-white uppercase drop-shadow-[0_40px_80px_rgba(0,0,0,1)]">
              PROTECT THE <br /> <span className="text-[#D69E2E] text-glow">FUTURE.</span>
            </h1>
            
            <p className="animate-blur-reveal stagger-2 text-lg md:text-2xl text-slate-300 mb-20 max-w-3xl leading-relaxed font-medium tracking-tight px-6 opacity-90">
              Elite veteran guardianship for our schools and houses of worship through a standard of <br className="hidden md:block" /> 
              <span className="text-white font-black underline decoration-[#D69E2E] decoration-[4px] underline-offset-8">Professional Stewardship.</span>
            </p>

            <div className="animate-blur-reveal stagger-3 flex flex-col sm:flex-row gap-8 md:gap-12">
              <button 
                onClick={() => navigateTo('#/contact?role=guard')} 
                className="group relative overflow-hidden px-16 py-8 bg-[#D69E2E] text-[#1A365D] rounded-full font-black text-xl md:text-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_40px_100px_rgba(214,158,46,0.25)]"
              >
                Join the Patrol
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] bg-gradient-to-r from-transparent via-white/70 to-transparent"></div>
              </button>
              <button 
                onClick={() => navigateTo('#/services')} 
                className="px-16 py-8 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-full font-black text-xl md:text-2xl transition-all hover:scale-105 active:scale-95 backdrop-blur-3xl"
              >
                Our Model
              </button>
            </div>
          </div>
        </div>

        {/* Cinematic Downward Anchor */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 animate-bounce opacity-25">
           <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#D69E2E] to-transparent"></div>
        </div>
      </section>

      {/* Re-entry to Content Sections */}
      <section ref={pathReveal.ref} className="py-24 md:py-32 border-y border-white/5 bg-[#020617] transition-all duration-1000 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div 
              onClick={() => navigateTo('#/contact?role=guard')}
              className={`p-10 lg:p-12 bg-[#1A365D]/20 border border-white/10 rounded-[2.5rem] hover:border-[#D69E2E]/40 hover:shadow-[0_0_40px_rgba(214,158,46,0.1)] transition-all group cursor-pointer relative overflow-hidden shimmer-trigger tactical-border reveal-hidden ${
                pathReveal.isVisible ? 'reveal-visible stagger-1' : ''
              }`}
            >
              <div className="shimmer-element absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 h-1 bg-[#D69E2E] w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
              <div className="w-14 h-14 bg-[#D69E2E]/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform relative z-10">
                <ShieldCheck className="w-7 h-7 text-[#D69E2E]" />
              </div>
              <h3 className="text-2xl font-black mb-4 relative z-10 uppercase tracking-tight">For Guards</h3>
              <p className="text-base text-slate-400 mb-8 leading-relaxed relative z-10">Transition your skills into protecting your community's most vulnerable spaces.</p>
              <span className="text-[#D69E2E] font-black text-sm flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest relative z-10">
                Enlist now <ArrowRight className="w-5 h-5" />
              </span>
            </div>

            <div 
              onClick={() => navigateTo('#/services')}
              className={`p-10 lg:p-12 bg-[#1A365D]/20 border border-white/10 rounded-[2.5rem] hover:border-white/40 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all group cursor-pointer relative overflow-hidden shimmer-trigger tactical-border reveal-hidden ${
                pathReveal.isVisible ? 'reveal-visible stagger-2' : ''
              }`}
            >
              <div className="shimmer-element absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 h-1 bg-white w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform relative z-10">
                <Landmark className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 relative z-10 uppercase tracking-tight text-white">For Schools</h3>
              <p className="text-base text-slate-400 mb-8 leading-relaxed relative z-10">Implement a precision-led safety model balanced with human warmth.</p>
              <span className="text-white font-black text-sm flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest relative z-10">
                Safety model <ArrowRight className="w-5 h-5" />
              </span>
            </div>

            <div 
              onClick={() => navigateTo('#/contact?role=donor')}
              className={`p-10 lg:p-12 bg-[#1A365D]/20 border border-white/10 rounded-[2.5rem] hover:border-[#D69E2E]/40 hover:shadow-[0_0_40px_rgba(214,158,46,0.1)] transition-all group cursor-pointer relative overflow-hidden shimmer-trigger tactical-border reveal-hidden ${
                pathReveal.isVisible ? 'reveal-visible stagger-3' : ''
              }`}
            >
              <div className="shimmer-element absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 h-1 bg-[#D69E2E] w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
              <div className="w-14 h-14 bg-[#D69E2E]/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform relative z-10">
                <Heart className="w-7 h-7 text-[#D69E2E]" />
              </div>
              <h3 className="text-2xl font-black mb-4 relative z-10 uppercase tracking-tight">For Donors</h3>
              <p className="text-base text-slate-400 mb-8 leading-relaxed relative z-10">Fund the protection of local institutions and meaningful veteran careers.</p>
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

      {/* Footer CTA */}
      <section className="py-32 md:py-48 bg-[#1A365D] relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/40 to-[#020617]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-5xl md:text-8xl font-black mb-8 text-white tracking-tighter uppercase leading-none">Ready to serve?</h2>
          <p className="text-slate-300 text-lg md:text-3xl max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
            Join the alliance of professional guardians dedicated to reclaiming safety.
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