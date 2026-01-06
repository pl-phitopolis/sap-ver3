
import React, { useRef } from 'react';
import { STORIES } from '../constants';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const ScrollStories: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 400;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Mission outcomes.</h2>
            <p className="text-slate-400 text-lg">Voices from the field and the communities we protect.</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-3 border border-slate-800 rounded-full hover:bg-slate-800 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 border border-slate-800 rounded-full hover:bg-slate-800 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-12 snap-x no-scrollbar"
          style={{ scrollbarWidth: 'none' }}
        >
          {STORIES.map((story) => (
            <div 
              key={story.id} 
              className="min-w-[320px] md:min-w-[500px] bg-slate-900/50 border border-slate-800 rounded-[2.5rem] overflow-hidden snap-start flex flex-col"
            >
              <div className="h-64 relative">
                <img src={story.imageUrl} alt={story.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-slate-950/40"></div>
                <Quote className="absolute top-8 left-8 w-12 h-12 text-white/20" />
              </div>
              <div className="p-8 md:p-12 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{story.title}</h3>
                <p className="text-slate-400 text-lg italic mb-8 flex-1">
                  "{story.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center font-bold text-indigo-400">
                    {story.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white">{story.author}</p>
                    <p className="text-slate-500 text-sm uppercase tracking-widest">{story.location}</p>
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
