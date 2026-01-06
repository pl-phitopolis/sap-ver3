import React, { useState } from 'react';
import { Shield, BookOpen, UserCheck, Activity, ChevronDown, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

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

  return (
    <div className="pt-20">
      <section className="py-12 md:py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-indigo-600/10 blur-[150px] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 md:mb-16">
            <h1 className="text-4xl md:text-7xl font-black mb-6 md:mb-8 tracking-tight">Security Science.</h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              We move beyond reactive security into pro-active precision stewardship. Our model is clinical, evidence-based, and human-centric.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 md:mb-24">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className={`p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border transition-all cursor-pointer ${
                  activeStep === idx 
                    ? 'bg-indigo-600 border-indigo-500 shadow-xl shadow-indigo-600/20 text-white' 
                    : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
                onClick={() => setActiveStep(idx)}
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-4 md:mb-6 ${
                   activeStep === idx ? 'bg-white text-indigo-600' : 'bg-slate-800 text-indigo-400'
                }`}>
                  {step.icon}
                </div>
                <h3 className={`text-lg md:text-xl font-bold mb-2 md:mb-3 text-white`}>
                  {step.title}
                </h3>
                <p className={`text-xs md:text-sm leading-relaxed ${activeStep === idx ? 'text-indigo-100' : 'text-slate-500'}`}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 lg:p-16 overflow-hidden">
             <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                <div className="flex-1 w-full text-left">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 tracking-tight">The {steps[activeStep].title} Phase</h2>
                  <p className="text-sm md:text-lg text-slate-400 leading-relaxed mb-6 md:mb-8">
                    During the {steps[activeStep].title.toLowerCase()} phase, we utilize proprietary methodologies developed by top-tier tactical planners to ensure maximum coverage.
                  </p>
                  <ul className="space-y-3 md:space-y-4">
                    {[1, 2, 3].map((item) => (
                      <li key={item} className="flex items-center gap-3 md:gap-4 text-slate-300 text-sm md:text-base">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-indigo-500 shrink-0" />
                        <span>Critical operational protocol level {activeStep + 1}.{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 aspect-square max-w-[400px] lg:max-w-none bg-slate-800/50 rounded-2xl md:rounded-3xl border border-slate-700 p-6 md:p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 md:w-32 md:h-32 bg-indigo-600/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 border border-indigo-500/30">
                       <Shield className="w-10 h-10 md:w-16 md:h-16 text-indigo-500" />
                    </div>
                    <p className="font-mono text-indigo-400 text-[10px] md:text-xs uppercase tracking-widest">Protocol Visualization</p>
                    <p className="text-slate-500 text-[10px] md:text-sm mt-2 font-mono">ID: SAP-PRO-{activeStep + 100}</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black mb-8 md:mb-12 text-center tracking-tight">Implementation FAQ</h2>
          <div className="space-y-4">
            {[
              { q: 'How do you vet your patrol officers?', a: 'Every guard undergoes a multi-layered screening process including psychological evaluations, criminal background checks at the federal level, and a panel interview.' },
              { q: 'What is the institutional liability model?', a: 'SAP carries a comprehensive $10M umbrella policy designed specifically for professional security stewardship, mitigating institutional risk.' },
              { q: 'How does the cost compare to private security?', a: 'As a nonprofit, our model is significantly more cost-effective. We prioritize impact over profit, allowing institutions to access elite protection at local rates.' }
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl md:rounded-2xl overflow-hidden">
                <button className="w-full px-6 py-4 md:px-8 md:py-6 text-left flex justify-between items-center hover:bg-slate-800/50 transition-colors">
                  <span className="font-bold text-sm md:text-lg">{faq.q}</span>
                  <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-slate-500 shrink-0 ml-2" />
                </button>
                <div className="px-6 pb-4 md:px-8 md:pb-6 text-xs md:text-sm lg:text-base text-slate-400 leading-relaxed border-t border-slate-800/50 pt-3 md:pt-4">
                  {faq.a}
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