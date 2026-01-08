
import React from 'react';
import { Mail, Phone, MapPin, Shield, Globe, Cpu, User } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div className="pt-24 min-h-screen bg-slate-950">
      <section ref={ref} className="py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter text-white uppercase text-glow leading-[0.9]">Command HQ.</h1>
              <p className="text-xl md:text-2xl text-slate-400 mb-12 md:mb-16 leading-relaxed text-left font-medium">
                The strategic epicenter for Safety Alert Patrol. Operating with the precision of a mission control center to safeguard communities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mb-16">
                {[
                  { label: 'Secure Comms', val: 'ops@safetyalertpatrol.org', icon: <Mail className="w-5 h-5 text-[#D69E2E]" /> },
                  { label: 'Strategic Line', val: '+1 (800) SAP-SAFE', icon: <Phone className="w-5 h-5 text-white" /> },
                  { label: 'Geo-Coordinates', val: '38.8816° N, 77.0910° W', icon: <Globe className="w-5 h-5 text-[#D69E2E]" /> },
                  { label: 'Unit Infrastructure', val: 'Arlington, Virginia', icon: <Cpu className="w-5 h-5 text-white" /> }
                ].map((item, idx) => (
                  <div key={idx} className={`flex gap-5 items-start p-6 bg-[#1A365D]/20 rounded-2xl border border-white/5 reveal-hidden ${isVisible ? `reveal-visible stagger-${idx + 1}` : ''}`}>
                    <div className="p-3 bg-slate-950 border border-white/10 rounded-xl shrink-0">
                      {item.icon}
                    </div>
                    <div className="text-left min-w-0">
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">
                        {item.label}
                      </p>
                      <p className="text-base font-black text-white break-words">
                        {item.val}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`p-8 bg-slate-900 border-l-4 border-[#D69E2E] rounded-r-2xl reveal-hidden ${isVisible ? 'reveal-visible stagger-4' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#1A365D] rounded-full flex items-center justify-center border border-white/10 shrink-0">
                    <User className="w-6 h-6 text-[#D69E2E]" />
                  </div>
                  <div className="text-left min-w-0">
                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Executive Office</p>
                    <p className="text-lg font-black text-white uppercase tracking-tight">Baron Davis</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed italic">
                  "Institutional reliability is our standard. For strategic partnership inquiries or enterprise integration, reach out directly to my office."
                </p>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="aspect-square w-full bg-[#1A365D]/10 border border-white/10 rounded-[3rem] p-4 relative overflow-hidden group tactical-border shadow-3xl">
                {/* Stylized Tactical Map Placeholder */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200')] bg-cover bg-center grayscale opacity-20 group-hover:scale-110 transition-transform duration-[2000ms]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/80 to-[#020617]"></div>
                
                {/* Radar Grid Overlay */}
                <div className="absolute inset-0 z-10 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #D69E2E 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-12 text-center">
                  <div className="w-24 h-24 bg-[#D69E2E]/10 rounded-full flex items-center justify-center mb-8 border border-[#D69E2E]/40 animate-pulse">
                    <MapPin className="w-10 h-10 text-[#D69E2E]" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Command Stewardship</h3>
                  <p className="text-slate-400 font-medium leading-relaxed max-w-sm break-words">
                    1200 Security Way, Suite 100 <br /> Arlington, VA 22201 <br /> United States
                  </p>
                  <div className="mt-12 flex items-center gap-3 text-[#D69E2E] font-black text-xs uppercase tracking-[0.2em]">
                    <span className="w-2 h-2 rounded-full bg-[#D69E2E] animate-ping"></span> Live Sector Monitoring
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end border-t border-white/10 pt-8">
                   <div className="text-left min-w-0">
                     <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Sector</p>
                     <p className="text-sm font-black text-white uppercase tracking-tight">Mid-Atlantic</p>
                   </div>
                   <div className="text-right min-w-0">
                     <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Status</p>
                     <p className="text-sm font-black text-[#D69E2E] uppercase tracking-tight">Mission Active</p>
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
