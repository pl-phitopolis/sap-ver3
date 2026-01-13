import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, Activity, Radio, Lock, Target } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { useRouter } from '../App';

interface NavigationProps {
  currentPath?: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentPath: propsPath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentPath: contextPath, navigateTo } = useRouter();
  
  const activePath = (propsPath || contextPath || '#/').split('?')[0];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [activePath]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    navigateTo(href);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#020617]/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-0' 
        : 'bg-transparent py-2'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            {/* ADVANCED TACTICAL LOGO - PRECISION ALIGNED */}
            <div className="relative group">
              <button 
                onClick={(e) => handleNavClick(e, '#/')} 
                className="flex items-center gap-2.5 outline-none rounded-xl p-2 transition-all relative z-20 group"
                aria-label="Safety Alert Patrol Home"
              >
                <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
                   {/* Background aura/glow */}
                   <div className="absolute inset-0 bg-[#D69E2E] rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 scale-50 group-hover:scale-150"></div>
                   
                   {/* Primary Shield Icon */}
                   <Shield className={`w-7 h-7 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative z-10 ${
                     scrolled ? 'text-[#D69E2E]' : 'text-white group-hover:text-[#D69E2E]'
                   } group-hover:scale-110 group-hover:rotate-[3deg]`} />
                   
                   {/* Sweep Light Animation on Shield */}
                   <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-1 h-20 bg-white/40 blur-md absolute top-[-50%] left-[50%] animate-sweep"></div>
                   </div>
                </div>
                
                {/* SAP Text - Perfectly Aligned via leading-none */}
                <span className={`text-2xl font-black tracking-tighter leading-none transition-all duration-500 group-hover:text-[#D69E2E] group-hover:drop-shadow-[0_0_8px_rgba(214,158,46,0.5)] ${
                  scrolled ? 'text-white' : 'text-white'
                }`}>
                  SAP
                </span>
              </button>

              {/* HUD OVERLAY CARD */}
              <div className="absolute top-[calc(100%-12px)] left-0 w-64 p-5 bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] opacity-0 scale-95 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <div className="flex items-center gap-2">
                       <Activity className="w-4 h-4 text-[#D69E2E] animate-pulse" />
                       <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Mission Status</span>
                    </div>
                    <span className="px-2 py-0.5 bg-[#D69E2E]/10 text-[#D69E2E] text-[8px] font-black rounded uppercase">Active</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <Radio className="w-4 h-4 text-slate-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-tighter">Comms Link</span>
                        <span className="text-[10px] font-black text-white uppercase">Encrypted Sector 7</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <Lock className="w-4 h-4 text-slate-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-tighter">Authorization</span>
                        <span className="text-[10px] font-black text-white uppercase">Level 4 Tier-1</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <div className="h-1 flex-grow bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-[#D69E2E] w-[87%] animate-pulse"></div>
                    </div>
                    <span className="text-[9px] font-black text-slate-500 uppercase">87% Load</span>
                  </div>
                </div>
                
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-[#D69E2E]/40 rounded-tl-lg"></div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-[#D69E2E]/40 rounded-br-lg"></div>
              </div>
            </div>
          </div>

          {/* Desktop Menu - Enhanced with Tactical Interactions */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {NAV_ITEMS.map((item) => {
                const isActive = activePath === item.href;
                return (
                  <button
                    key={item.label}
                    onClick={(e) => handleNavClick(e, item.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`px-6 py-3 text-xs font-black uppercase tracking-widest transition-all relative group outline-none rounded-xl ${
                      isActive ? 'text-[#D69E2E]' : 'text-slate-400 hover:text-white hover:tracking-[0.2em]'
                    }`}
                  >
                    {/* Target Lock Brackets */}
                    <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#D69E2E]/0 group-hover:border-[#D69E2E]/60 transition-all duration-300 -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                    <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[#D69E2E]/0 group-hover:border-[#D69E2E]/60 transition-all duration-300 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                    <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-[#D69E2E]/0 group-hover:border-[#D69E2E]/60 transition-all duration-300 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                    <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-[#D69E2E]/0 group-hover:border-[#D69E2E]/60 transition-all duration-300 translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"></div>

                    <span className="relative z-10">{item.label}</span>
                    
                    {/* Telemetry Underline */}
                    {isActive && (
                      <div className="absolute bottom-2 left-4 right-4 h-[2px] bg-white/5 overflow-hidden rounded-full">
                         <div className="absolute inset-0 bg-[#D69E2E] animate-nav-sweep shadow-[0_0_8px_#D69E2E]"></div>
                      </div>
                    )}
                  </button>
                );
              })}

              {/* ARMED CTA BUTTON */}
              <div className="relative ml-4">
                {/* Radar Pulse */}
                <div className="absolute inset-0 rounded-xl bg-[#D69E2E] opacity-20 animate-radar pointer-events-none"></div>
                
                <button
                  onClick={(e) => handleNavClick(e, '#/get-involved')}
                  className={`relative px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 group overflow-hidden border border-white/10 ${
                    activePath === '#/get-involved' 
                      ? 'bg-white text-[#1A365D]' 
                      : 'bg-[#D69E2E] hover:bg-[#D69E2E]/80 backdrop-blur-md text-[#1A365D]'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Target className={`w-3 h-3 ${activePath === '#/get-involved' ? 'text-[#1A365D]' : 'text-[#1A365D]'}`} />
                    Get Involved
                  </span>
                  
                  {/* Micro Scanning Sweep */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="w-1 h-32 bg-white/40 blur-md absolute top-[-50%] left-[-100%] group-hover:animate-nav-sweep rotate-[25deg]"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#D69E2E]/50"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Main menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'max-h-[500px] border-b border-white/10 bg-[#020617]/95 backdrop-blur-2xl' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activePath === item.href;
            return (
              <button
                key={item.label}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block w-full text-left px-4 py-4 text-sm font-black uppercase tracking-widest transition-all rounded-xl ${
                  isActive ? 'text-[#D69E2E] bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-4">
            <button
              onClick={(e) => handleNavClick(e, '#/get-involved')}
              className="w-full block text-center bg-[#D69E2E] text-[#1A365D] px-5 py-4 rounded-2xl text-sm font-black uppercase tracking-widest active:scale-95 transition-transform shadow-xl shadow-[#D69E2E]/20"
            >
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
