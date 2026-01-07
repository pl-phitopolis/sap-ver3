import React, { useRef } from 'react';
import { STORIES } from '../constants';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ScrollStories: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = window.innerWidth > 768 ? 500 : 320;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 uppercase">Mission outcomes.</h2>
            <p className="text-slate-400 text-lg md:text-xl font-medium">Voices from the field and the communities we protect.</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-4 border border-white/10 rounded-full hover:bg-[#1A365D] hover:border-[#D69E2E]/50 transition-all text-white active:scale-90 shadow-lg"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 border border-white/10 rounded-full hover:bg-[#1A365D] hover:border-[#D69E2E]/50 transition-all text-white active:scale-90 shadow-lg"
              aria-label="Next story"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 lg:gap-12 pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none' }}
        >
          {STORIES.map((story, idx) => (
            <div 
              key={story.id} 
              className={`min-w-[300px] sm:min-w-[400px] md:min-w-[600px] bg-[#1A365D]/10 border border-white/10 rounded-[3rem] overflow-hidden snap-center flex flex-col group hover:border-[#D69E2E]/30 transition-all duration-700 reveal-hidden tactical-border ${
                isVisible ? `reveal-visible stagger-${idx + 1}` : ''
              }`}
            >
              <div className="h-64 md:h-80 relative overflow-hidden">
                <img src={story.imageUrl} alt={story.title} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#1A365D]/40 group-hover:bg-transparent transition-all duration-700"></div>
                <Quote className="absolute top-8 left-8 w-12 h-12 md:w-16 md:h-16 text-[#D69E2E]/30" />
              </div>
              <div className="p-10 md:p-16 flex-1 flex flex-col">
                <h3 className="text-2xl md:text-4xl font-black mb-6 tracking-tight text-white uppercase">{story.title}</h3>
                <p className="text-slate-300 text-lg md:text-2xl italic mb-10 flex-1 leading-relaxed">
                  "{story.content}"
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-[1.25rem] bg-[#D69E2E] flex items-center justify-center font-black text-[#1A365D] text-2xl shadow-xl">
                    {story.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xl font-black text-white uppercase tracking-tight">{story.author}</p>
                    <p className="text-[#D69E2E] text-xs font-black uppercase tracking-[0.2em]">{story.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollStories;