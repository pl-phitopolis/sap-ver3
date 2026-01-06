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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <button 
              onClick={(e) => handleNavClick(e, '#/')} 
              className="flex items-center gap-2 group outline-none"
            >
              <Shield className="w-8 h-8 text-indigo-500 group-hover:scale-110 transition-transform" />
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
                    className={`px-3 py-2 text-sm font-medium transition-all relative group outline-none ${
                      isActive ? 'text-indigo-400' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-indigo-500 rounded-full" />
                    )}
                  </button>
                );
              })}
              <button
                onClick={(e) => handleNavClick(e, '#/contact')}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 ml-4 outline-none ${
                  activePath === '#/contact' 
                    ? 'bg-white text-indigo-600' 
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white'
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
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-[500px] border-b border-slate-800 bg-slate-900' : 'max-h-0'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_ITEMS.map((item) => {
            const isActive = activePath === item.href;
            return (
              <button
                key={item.label}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block w-full text-left px-3 py-4 text-base font-medium transition-colors outline-none ${
                  isActive ? 'text-indigo-400 bg-slate-800/50' : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-4 pb-4 px-3">
            <button
              onClick={(e) => handleNavClick(e, '#/contact')}
              className="w-full block text-center bg-indigo-600 text-white px-5 py-3 rounded-xl text-base font-bold active:scale-95 transition-transform"
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