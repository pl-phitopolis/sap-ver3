
import React, { useState, useEffect, createContext, useContext } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import GetInvolved from './pages/GetInvolved';

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
        
        {/* Persistent CTA Button */}
        <div className="fixed bottom-8 right-8 z-[60] hidden md:block">
          <button 
            onClick={() => navigateTo('#/get-involved?role=donor')}
            className="bg-[#D69E2E] hover:bg-[#c48d24] text-slate-900 font-bold py-4 px-8 rounded-2xl shadow-2xl shadow-[#D69E2E]/20 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-3 border border-white/20"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            Donate to Mission
          </button>
        </div>
      </div>
    </RouterContext.Provider>
  );
};

export default App;
