import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Shield, Landmark, Heart } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact: React.FC = () => {
  const [role, setRole] = useState<'guard' | 'school' | 'donor'>('guard');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { ref, isVisible } = useScrollReveal(0.1);

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    const roleParam = params.get('role');
    if (roleParam === 'guard' || roleParam === 'school' || roleParam === 'donor') {
      setRole(roleParam);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-40 pb-20 flex flex-col items-center justify-center px-4 text-center aurora-bg">
        <div className="w-24 h-24 md:w-32 md:h-32 bg-[#D69E2E]/20 rounded-full flex items-center justify-center mb-10 border border-[#D69E2E]/30 animate-scanning shadow-[0_0_40px_rgba(214,158,46,0.2)]">
          <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-[#D69E2E] animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight uppercase text-white text-glow">Mission Received.</h1>
        <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
          Your credentials have been uploaded to our command center. Our vetting team typically responds within 24-48 business hours.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="px-12 py-5 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-black text-lg transition-all active:scale-95 w-full max-w-xs uppercase tracking-[0.2em] shadow-2xl"
        >
          Return to Contact
        </button>
      </div>
    );
  }

  const getSliderClass = () => {
    switch(role) {
      case 'guard': return 'translate-x-0 bg-[#D69E2E] shadow-[#D69E2E]/40';
      case 'school': return 'translate-x-full bg-white shadow-white/40';
      case 'donor': return 'translate-x-[200%] bg-[#D69E2E] shadow-[#D69E2E]/40';
      default: return 'translate-x-0 bg-[#D69E2E]';
    }
  };

  const getRoleIndex = () => {
    if (role === 'guard') return 0;
    if (role === 'school') return 1;
    return 2;
  };

  const ContactForm = ({ currentRole }: { currentRole: 'guard' | 'school' | 'donor' }) => (
    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="space-y-3 text-left">
          <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Full Name</label>
          <input 
            required
            type="text" 
            placeholder="e.g. James Vance"
            className="w-full bg-slate-950/80 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#D69E2E]/50 focus:ring-4 focus:ring-[#D69E2E]/5 transition-all text-white text-base placeholder:text-slate-600 font-medium backdrop-blur-md"
          />
        </div>
        <div className="space-y-3 text-left">
          <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
          <input 
            required
            type="email" 
            placeholder="e.g. james@ops-secure.org"
            className="w-full bg-slate-950/80 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#D69E2E]/50 focus:ring-4 focus:ring-[#D69E2E]/5 transition-all text-white text-base placeholder:text-slate-600 font-medium backdrop-blur-md"
          />
        </div>
      </div>

      <div className="space-y-3 text-left">
        <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
          {currentRole === 'guard' ? 'Prior Service / Unit' : currentRole === 'school' ? 'Organization Name' : 'Subject'}
        </label>
        <input 
          required
          type="text" 
          placeholder={currentRole === 'guard' ? 'e.g. 75th Ranger Regiment' : currentRole === 'school' ? 'e.g. Grace Prep Academy' : 'e.g. Strategic Partnership'}
          className="w-full bg-slate-950/80 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#D69E2E]/50 focus:ring-4 focus:ring-[#D69E2E]/5 transition-all text-white text-base placeholder:text-slate-600 font-medium backdrop-blur-md"
        />
      </div>

      <div className="space-y-3 text-left">
        <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Message or Details</label>
        <textarea 
          rows={5}
          placeholder="Briefly describe your interest in the mission..."
          className="w-full bg-slate-950/80 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#D69E2E]/50 focus:ring-4 focus:ring-[#D69E2E]/5 transition-all text-white resize-none text-base placeholder:text-slate-600 font-medium backdrop-blur-md"
        ></textarea>
      </div>

      <button 
        disabled={loading}
        type="submit"
        className={`w-full py-5 md:py-6 rounded-[2rem] font-black text-xl md:text-2xl flex items-center justify-center gap-4 transition-all active:scale-95 uppercase tracking-[0.1em] ${
          currentRole === 'school' ? 'bg-white text-[#1A365D]' : 'bg-[#D69E2E] text-[#1A365D]'
        } ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] shadow-2xl shadow-black/30 hover:shadow-[#D69E2E]/20'}`}
      >
        {loading ? (
          <div className="w-8 h-8 border-4 border-slate-900/30 border-t-slate-900 rounded-full animate-spin"></div>
        ) : (
          <>Upload Mission Inquiry <Send className="w-6 h-6" /></>
        )}
      </button>
      <p className="text-center text-xs text-slate-500 font-bold uppercase tracking-[0.15em] leading-relaxed">
        Secure transmission. By submitting, you agree to our <br /> rigorous data stewardship protocols.
      </p>
    </form>
  );

  return (
    <div className="pt-24 min-h-screen bg-slate-950">
      <section ref={ref} className="py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter text-white uppercase text-glow leading-[0.9]">New Mission.</h1>
              <p className="text-xl md:text-2xl text-slate-400 mb-12 md:mb-16 leading-relaxed text-left font-medium">
                Regain the power to help. Whether you are a veteran looking to serve or an institution looking for protection, your journey starts here.
              </p>

              <div className="space-y-10 mb-16 lg:mb-0">
                {[
                  { label: 'Secure Email', val: 'ops@safetyalertpatrol.org', icon: <Mail className="w-6 h-6 text-[#D69E2E]" /> },
                  { label: 'Tactical Support', val: '+1 (800) SAP-SAFE', icon: <Phone className="w-6 h-6 text-white" /> },
                  { label: 'Command HQ', val: 'Arlington, Virginia', icon: <MapPin className="w-6 h-6 text-[#D69E2E]" /> }
                ].map((item, idx) => (
                  <div key={idx} className={`flex gap-6 items-center reveal-hidden ${isVisible ? `reveal-visible stagger-${idx + 1}` : ''}`}>
                    <div className="p-5 bg-[#1A365D]/40 rounded-2xl border border-white/10 shrink-0 shadow-lg">
                      {item.icon}
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                      <p className="text-xl md:text-2xl font-black text-white">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`bg-[#1A365D]/10 border border-white/10 rounded-[3rem] p-8 md:p-16 relative flex flex-col min-h-[700px] md:min-h-[850px] transition-all duration-1000 delay-300 shadow-3xl backdrop-blur-sm tactical-border ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div 
                className="relative flex p-2 bg-slate-950/80 border border-white/10 rounded-2xl mb-12 md:mb-16 shrink-0"
                role="tablist"
                aria-label="Contact role selector"
              >
                <div 
                  className={`absolute top-2 left-2 w-[calc(33.33%-5px)] h-[calc(100%-16px)] rounded-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-2xl z-0 ${getSliderClass()}`}
                >
                  <div className="absolute inset-0 bg-white/10 blur-[4px] rounded-xl"></div>
                </div>

                <button 
                  type="button"
                  onClick={() => setRole('guard')}
                  role="tab"
                  aria-selected={role === 'guard'}
                  aria-controls="form-panel-guard"
                  id="tab-guard"
                  className={`relative flex-1 flex items-center justify-center gap-3 py-5 px-4 rounded-xl font-black text-sm transition-all z-10 outline-none uppercase tracking-widest ${
                    role === 'guard' ? 'text-[#1A365D]' : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <Shield className="w-5 h-5" /> Guard
                </button>
                <button 
                  type="button"
                  onClick={() => setRole('school')}
                  role="tab"
                  aria-selected={role === 'school'}
                  aria-controls="form-panel-school"
                  id="tab-school"
                  className={`relative flex-1 flex items-center justify-center gap-3 py-5 px-4 rounded-xl font-black text-sm transition-all z-10 outline-none uppercase tracking-widest ${
                    role === 'school' ? 'text-[#1A365D]' : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <Landmark className="w-5 h-5" /> School
                </button>
                <button 
                  type="button"
                  onClick={() => setRole('donor')}
                  role="tab"
                  aria-selected={role === 'donor'}
                  aria-controls="form-panel-donor"
                  id="tab-donor"
                  className={`relative flex-1 flex items-center justify-center gap-3 py-5 px-4 rounded-xl font-black text-sm transition-all z-10 outline-none uppercase tracking-widest ${
                    role === 'donor' ? 'text-[#1A365D]' : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <Heart className="w-5 h-5" /> Donor
                </button>
              </div>

              <div className="relative flex-grow overflow-hidden" id="form-viewport">
                <div 
                  className="paging-transition flex h-full w-[300%]"
                  style={{ transform: `translateX(-${getRoleIndex() * 33.3333}%)` }}
                >
                  <div 
                    className="w-1/3 h-full px-2"
                    role="tabpanel"
                    id="form-panel-guard"
                    aria-labelledby="tab-guard"
                  >
                    <ContactForm currentRole="guard" />
                  </div>
                  <div 
                    className="w-1/3 h-full px-2"
                    role="tabpanel"
                    id="form-panel-school"
                    aria-labelledby="tab-school"
                  >
                    <ContactForm currentRole="school" />
                  </div>
                  <div 
                    className="w-1/3 h-full px-2"
                    role="tabpanel"
                    id="form-panel-donor"
                    aria-labelledby="tab-donor"
                  >
                    <ContactForm currentRole="donor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;