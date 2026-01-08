
import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
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
        ? 'bg-[#020617]/70 backdrop-blur-xl border-b border-white/10 shadow-2xl py-0' 
        : 'bg-transparent py-2'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <button 
              onClick={(e) => handleNavClick(e, '#/')} 
              className="flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-[#D69E2E]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-lg p-1"
              aria-label="Safety Alert Patrol Home"
            >
              <Shield className="w-8 h-8 text-[#D69E2E] group-hover:scale-110 transition-transform" />
              <span className="text-2xl font-black tracking-tighter text-white">SAP</span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {NAV_ITEMS.map((item) => {
                const isActive = activePath === item.href;
                return (
                  <button
                    key={item.label}
                    onClick={(e) => handleNavClick(e, item.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`px-3 py-2 text-sm font-bold transition-all relative group outline-none focus-visible:ring-2 focus-visible:ring-[#D69E2E]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-lg ${
                      isActive ? 'text-[#D69E2E]' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-[#D69E2E] rounded-full" />
                    )}
                  </button>
                );
              })}
              <button
                onClick={(e) => handleNavClick(e, '#/get-involved')}
                aria-current={activePath === '#/get-involved' ? 'page' : undefined}
                className={`px-5 py-2 rounded-xl text-sm font-black transition-all transform hover:scale-105 active:scale-95 ml-4 outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                  activePath === '#/get-involved' 
                    ? 'bg-white text-[#1A365D]' 
                    : 'bg-[#D69E2E] hover:bg-[#c48d24] text-[#1A365D]'
                }`}
              >
                Get Involved
              </button>
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
                aria-current={isActive ? 'page' : undefined}
                className={`block w-full text-left px-4 py-4 text-base font-bold transition-all rounded-xl ${
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
              className="w-full block text-center bg-[#D69E2E] text-[#1A365D] px-5 py-4 rounded-2xl text-base font-black active:scale-95 transition-transform shadow-xl shadow-[#D69E2E]/20"
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
