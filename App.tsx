import React, { useState, useEffect, createContext, useContext } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Define a simple routing context to avoid prop drilling and handle 
// navigation without triggering origin-restricted browser behaviors.
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

  const navigateTo = (path: string) => {
    // Standardize path
    const targetPath = path.startsWith('#') ? path : `#${path}`;
    
    // Update state first for immediate UI response
    setCurrentPath(targetPath);
    
    // Attempt to update hash for back-button support, but wrap in try-catch
    // as it can fail in highly restricted sandboxes.
    try {
      window.location.hash = targetPath;
    } catch (e) {
      console.warn("Navigation: Could not update URL hash, but state was updated.", e);
    }
    
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const normalized = getNormalizedHash();
      setCurrentPath(normalized);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
      default:
        return <Home />;
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigateTo }}>
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50 selection:bg-indigo-500 selection:text-white">
        <Navigation currentPath={currentPath} />
        <main className="flex-grow">
          {renderPage()}
        </main>
        <Footer />
        
        {/* Persistent CTA Button */}
        <div className="fixed bottom-8 right-8 z-[60] hidden md:block">
          <button 
            onClick={() => navigateTo('#/contact?role=donor')}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl shadow-indigo-600/40 transition-all transform hover:-translate-y-1 flex items-center gap-3 border border-indigo-400/30"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-200 animate-pulse"></span>
            Donate to Mission
          </button>
        </div>
      </div>
    </RouterContext.Provider>
  );
};

export default App;