import React, { useState, useEffect, createContext, useContext } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import GetInvolved from './pages/GetInvolved';
import { Heart } from 'lucide-react';

interface RouterContextType {
  currentPath: string;
  navigateTo: (path: string) => void;
}

export const RouterContext = createContext<RouterContextType>({
  currentPath: '#/',
  navigateTo: () => {},
});

export const useRouter = () => useContext(RouterContext);

const App: React.FC = () => {
  const getNormalizedHash = () => {
    const hash = window.location.hash;
    if (!hash || hash === '#' || hash === '') return '#/';
    return hash;
  };

  const [currentPath, setCurrentPath] = useState(getNormalizedHash());
  const [key, setKey] = useState(0); // For forcing re-animation on path change

  const navigateTo = (path: string) => {
    const targetPath = path.startsWith('#') ? path : `#${path}`;
    setCurrentPath(targetPath);
    setKey(prev => prev + 1); // Trigger re-entry animation
    
    try {
      window.location.hash = targetPath;
    } catch (e) {
      console.warn("Navigation: Could not update URL hash", e);
    }
    
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const normalized = getNormalizedHash();
      if (normalized !== currentPath) {
        setCurrentPath(normalized);
        setKey(prev => prev + 1);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPath]);

  const renderPage = () => {
    const path = currentPath.split('?')[0];
    switch (path) {
      case '#/':
        return <Home />;
      case '#/about':
        return <About />;
      case '#/services':
        return <Services />;
      case '#/contact':
        return <Contact />;
      case '#/get-involved':
        return <GetInvolved />;
      default:
        return <Home />;
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigateTo }}>
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50 selection:bg-[#D69E2E] selection:text-white">
        <Navigation currentPath={currentPath} />
        <main className="flex-grow overflow-hidden">
          <div key={key} className="animate-entry">
            {renderPage()}
          </div>
        </main>
        <Footer />
        
        {/* Persistent CTA Button - "Breathing Heartbeat" Edition */}
        <div className="fixed bottom-8 right-8 z-[60] hidden md:block group/donate">
          <button 
            onClick={() => navigateTo('#/get-involved?role=donor')}
            className="relative bg-[#D69E2E] text-slate-900 font-black py-4.5 px-9 rounded-2xl transition-all flex items-center gap-3 border border-white/20 animate-breathing overflow-hidden group/btn"
          >
            {/* Internal Scanning Heartbeat */}
            <div className="absolute inset-0 pointer-events-none z-0">
               <div className="absolute top-0 w-20 h-full bg-white/30 blur-2xl -skew-x-12 animate-scanning-internal"></div>
            </div>

            <Heart className="w-5 h-5 relative z-10 fill-slate-900 group-hover/btn:scale-125 transition-transform" />
            <span className="relative z-10 uppercase tracking-widest text-sm">Donate to Mission</span>
            
            {/* Subtle Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
          </button>
        </div>
      </div>
    </RouterContext.Provider>
  );
};

export default App;