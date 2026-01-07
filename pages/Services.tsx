import React, { useState, useEffect } from 'react';
import { Shield, BookOpen, UserCheck, Activity, ChevronDown, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Services: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  const introReveal = useScrollReveal(0.1);
  const modelReveal = useScrollReveal(0.1);
  const faqReveal = useScrollReveal(0.1);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      title: 'Assessment',
      desc: 'Our security scientists conduct a 72-point site vulnerability audit.',
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: 'Selection',
      desc: 'Tier-1 vetting matched to your specific campus culture.',
      icon: <UserCheck className="w-6 h-6" />
    },
    {
      title: 'Integration',
      desc: 'Seamless deployment using our "Stealth Stewardship" protocols.',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Reporting',
      desc: 'Daily digital logs and monthly performance reviews.',
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

  const faqs = [
    { q: 'How do you vet your patrol officers?', a: 'Every guard undergoes a multi-layered screening process including psychological evaluations, criminal background checks at the federal level, and a panel interview.' },
    { q: 'What is the institutional liability model?', a: 'SAP carries a comprehensive $10M umbrella policy designed specifically for professional security stewardship, mitigating institutional risk.' },
    { q: 'How does the cost compare to private security?', a: 'As a nonprofit, our model is significantly more cost-effective. We prioritize impact over profit, allowing institutions to access elite protection at local rates.' }
  ];

  const PhaseContent = ({ index }: { index: number }) => (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center w-full">
      <div className="flex-1 w-full text-left">
        <h2 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 tracking-tight text-white uppercase">The {steps[index].title} Phase</h2>
        <p className="text-sm md:text-lg text-slate-400 leading-relaxed mb-6 md:mb-8">
          During the {steps[index].title.toLowerCase()} phase, we utilize proprietary methodologies developed by top-tier tactical planners to ensure maximum coverage and institutional safety.
        </p>
        <ul className="space-y-3 md:space-y-4">
          {[1, 2, 3].map((item) => (
            <li key={item} className="flex items-center gap-3 md:gap-4 text-slate-300 text-sm md:text-base">
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#D69E2E] shrink-0" />
              <span>Critical operational protocol level {index + 1}.{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full lg:w-1/2 aspect-square max-w-[400px] lg:max-w-none bg-[#1A365D]/30 rounded-2xl md:rounded-3xl border border-white/5 p-6 md:p-8 flex items-center justify-center group overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D69E2E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="text-center relative z-10">
          <div className="w-20 h-20 md:w-32 md:h-32 bg-[#D69E2E]/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 border border-[#D69E2E]/30 group-hover:scale-110 group-hover:bg-[#D69E2E]/20 transition-all duration-500">
             <Shield className="w-10 h-10 md:w-16 md:h-16 text-[#D69E2E]" />
          </div>
          <p className="font-mono text-[#D69E2E] text-[10px] md:text-xs uppercase tracking-widest font-bold">Protocol Visualization</p>
          <p className="text-slate-500 text-[10px] md:text-sm mt-2 font-mono">ID: SAP-PRO-{index + 100}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 bg-slate-950 min-h-screen">
      {/* Parallax Background Layer */}
      <div 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-[0.03]"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <h2 className="text-[20vw] font-black uppercase tracking-tighter whitespace-nowrap select-none">
          Security Protocol
        </h2>
      </div>

      <section ref={introReveal.ref} className="py-12 md:py-24 relative overflow-hidden z-10">
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-[#1A365D]/20 blur-[150px] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-3xl mb-12 md:mb-16 transition-all duration-1000 ${introReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-7xl font-black mb-6 md:mb-8 tracking-tight text-white uppercase">Security Science.</h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed text-left">
              Moving beyond reactive security into <span className="text-white font-bold underline decoration-[#D69E2E] decoration-4 underline-offset-8">pro-active precision stewardship.</span> Our model is clinical, evidence-based, and human-centric.
            </p>
          </div>

          <div 
            ref={modelReveal.ref}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 md:mb-24"
            role="tablist"
            aria-label="Security model phases"
          >
            {steps.map((step, idx) => (
              <button 
                key={idx}
                role="tab"
                aria-selected={activeStep === idx}
                aria-controls={`phase-panel-${idx}`}
                id={`phase-tab-${idx}`}
                className={`p-6 md:p-8 rounded-2xl border transition-all duration-500 cursor-pointer text-left transform active:scale-95 reveal-hidden relative overflow-hidden ${
                  modelReveal.isVisible ? `reveal-visible stagger-${idx + 1}` : ''
                } ${
                  activeStep === idx 
                    ? 'bg-[#1A365D] border-[#D69E2E] shadow-2xl shadow-[#D69E2E]/10 text-white' 
                    : 'bg-slate-900 border-white/5 text-slate-400 hover:border-white/10'
                }`}
                onClick={() => setActiveStep(idx)}
              >
                {/* Active Progress Bar */}
                {activeStep === idx && (
                  <div className="absolute top-0 left-0 h-1 bg-[#D69E2E] w-full animate-pulse"></div>
                )}

                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-4 md:mb-6 transition-colors duration-500 ${
                   activeStep === idx ? 'bg-[#D69E2E] text-[#1A365D]' : 'bg-slate-800 text-[#D69E2E]'
                }`}>
                  {step.icon}
                </div>
                <h3 className={`text-lg md:text-xl font-black mb-2 md:mb-3 transition-colors duration-500 uppercase tracking-tight ${
                  activeStep === idx ? 'text-white' : 'text-slate-200'
                }`}>
                  {step.title}
                </h3>
                <p className={`text-xs md:text-sm leading-relaxed transition-colors duration-500 ${activeStep === idx ? 'text-slate-300' : 'text-slate-500'}`}>
                  {step.desc}
                </p>
              </button>
            ))}
          </div>

          <div className={`bg-[#1A365D]/10 border border-white/5 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 lg:p-16 overflow-hidden relative transition-all duration-1000 delay-300 ${modelReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
             <div className="relative overflow-hidden w-full" id="phase-viewport">
                <div 
                  className="paging-transition flex w-[400%]"
                  style={{ transform: `translateX(-${activeStep * 25}%)` }}
                >
                  {steps.map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1/4 shrink-0 px-2"
                      role="tabpanel"
                      id={`phase-panel-${i}`}
                      aria-labelledby={`phase-tab-${i}`}
                      hidden={activeStep !== i && undefined}
                    >
                      <PhaseContent index={i} />
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqReveal.ref} className="py-12 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-black mb-8 md:mb-12 text-center tracking-tight text-white uppercase transition-all duration-1000 ${faqReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Implementation FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden reveal-hidden ${faqReveal.isVisible ? `reveal-visible stagger-${idx + 1}` : ''}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                  aria-controls={`faq-answer-${idx}`}
                  className={`w-full px-6 py-4 md:px-8 md:py-6 text-left flex justify-between items-center transition-all ${
                    openFaq === idx ? 'bg-[#1A365D]/40' : 'hover:bg-white/5'
                  }`}
                >
                  <span className={`font-black text-sm md:text-lg transition-colors uppercase tracking-tight ${openFaq === idx ? 'text-[#D69E2E]' : 'text-white'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 text-slate-500 shrink-0 ml-2 transition-transform duration-300 ${
                    openFaq === idx ? 'rotate-180 text-[#D69E2E]' : ''
                  }`} />
                </button>
                <div 
                  id={`faq-answer-${idx}`}
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaq === idx ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 md:px-8 md:pb-6 text-xs md:text-sm lg:text-base text-slate-400 leading-relaxed border-t border-white/5 pt-3 md:pt-4 text-left">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;