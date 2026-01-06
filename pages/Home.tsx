import React from 'react';
import StatsDashboard from '../components/StatsDashboard';
import ExpertGrid from '../components/ExpertGrid';
import ScrollStories from '../components/ScrollStories';
import { ArrowRight, ShieldCheck, Landmark, Heart } from 'lucide-react';
import { useRouter } from '../App';

const Home: React.FC = () => {
  const { navigateTo } = useRouter();

  return (
    <div className="aurora-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-[10%] left-[5%] w-[40%] h-[60%] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[50%] bg-emerald-600/5 blur-[100px] rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] mb-6 md:mb-8 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" /> Safety Alert Patrol
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 md:mb-8 leading-[1.1] text-glow">
              Accept your <span className="text-indigo-500">new mission.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-400 mb-8 md:mb-12 max-w-2xl leading-relaxed">
              We connect retired military and law enforcement elite with schools and churches to provide a new standard of community safety through <span className="text-slate-200 font-semibold">Professional Stewardship.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <button 
                onClick={() => navigateTo('#/contact?role=guard')} 
                className="px-8 py-4 md:px-10 md:py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-base md:text-lg transition-all flex items-center justify-center gap-2 group shadow-lg shadow-indigo-600/20"
              >
                Join the Patrol <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigateTo('#/services')} 
                className="px-8 py-4 md:px-10 md:py-5 bg-slate-800/50 hover:bg-slate-800 text-white border border-slate-700 rounded-2xl font-bold text-base md:text-lg transition-all flex items-center justify-center gap-2"
              >
                Partner Institutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Path Selection */}
      <section className="py-16 md:py-24 border-y border-slate-900 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-8 md:p-10 bg-slate-900/40 border border-slate-800 rounded-[2rem] hover:border-indigo-500/50 transition-all group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-600/20 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6 md:w-7 md:h-7 text-indigo-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">For Guards</h3>
              <p className="text-sm md:text-base text-slate-400 mb-6 md:mb-8 leading-relaxed">Your skills are needed. Transition your years of service into protecting your community's most vulnerable spaces.</p>
              <button 
                onClick={() => navigateTo('#/contact?role=guard')} 
                className="text-indigo-400 font-bold text-sm md:text-base flex items-center gap-2 hover:gap-3 transition-all outline-none"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="p-8 md:p-10 bg-slate-900/40 border border-slate-800 rounded-[2rem] hover:border-emerald-500/50 transition-all group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-600/20 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                <Landmark className="w-6 h-6 md:w-7 md:h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">For Schools</h3>
              <p className="text-sm md:text-base text-slate-400 mb-6 md:mb-8 leading-relaxed">Implement a precision-led safety model that balances clinical authority with human warmth and stewardship.</p>
              <button 
                onClick={() => navigateTo('#/services')} 
                className="text-emerald-400 font-bold text-sm md:text-base flex items-center gap-2 hover:gap-3 transition-all outline-none"
              >
                Safety model <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="p-8 md:p-10 bg-slate-900/40 border border-slate-800 rounded-[2rem] hover:border-blue-500/50 transition-all group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 md:w-7 md:h-7 text-blue-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">For Donors</h3>
              <p className="text-sm md:text-base text-slate-400 mb-6 md:mb-8 leading-relaxed">Directly fund the protection of local institutions and provide meaningful careers for our nation's veterans.</p>
              <button 
                onClick={() => navigateTo('#/contact?role=donor')} 
                className="text-blue-400 font-bold text-sm md:text-base flex items-center gap-2 hover:gap-3 transition-all outline-none"
              >
                Support SAP <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <StatsDashboard />
      
      <ScrollStories />

      <ExpertGrid />

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 text-white tracking-tight">Ready to serve again?</h2>
          <p className="text-indigo-100 text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-12">
            Join the alliance of professional guardians dedicated to reclaiming safety for our schools and churches.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <button 
              onClick={() => navigateTo('#/contact')} 
              className="px-10 py-4 md:px-12 md:py-5 bg-white text-indigo-600 rounded-2xl font-bold text-base md:text-lg hover:bg-indigo-50 transition-all"
            >
              Apply to Join
            </button>
            <button 
              onClick={() => navigateTo('#/contact?role=donor')} 
              className="px-10 py-4 md:px-12 md:py-5 bg-indigo-700 text-white rounded-2xl font-bold text-base md:text-lg hover:bg-indigo-800 transition-all border border-indigo-400/30"
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