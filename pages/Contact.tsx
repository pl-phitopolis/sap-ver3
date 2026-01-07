import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Shield, Landmark, Heart } from 'lucide-react';

const Contact: React.FC = () => {
  const [role, setRole] = useState<'guard' | 'school' | 'donor'>('guard');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    const roleParam = params.get('role');
    if (roleParam === 'guard' || roleParam === 'school' || roleParam === 'donor') {
      setRole(roleParam);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-40 pb-20 flex flex-col items-center justify-center px-4 text-center">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-indigo-600/20 rounded-full flex items-center justify-center mb-8 border border-indigo-500/30 animate-bounce">
          <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-indigo-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-4 md:mb-6 tracking-tight">Mission Received.</h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-lg mx-auto mb-10 md:mb-12 leading-relaxed">
          Your application is being reviewed by our command team. We typically respond within 24-48 business hours.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all w-full max-w-xs"
        >
          Return to Contact
        </button>
      </div>
    );
  }

  // Helper for sliding indicator positioning
  const getSliderClass = () => {
    switch(role) {
      case 'guard': return 'translate-x-0 bg-indigo-600 shadow-indigo-500/40';
      case 'school': return 'translate-x-full bg-emerald-600 shadow-emerald-500/40';
      case 'donor': return 'translate-x-[200%] bg-blue-600 shadow-blue-500/40';
      default: return 'translate-x-0 bg-indigo-600';
    }
  };

  const getRoleIndex = () => {
    if (role === 'guard') return 0;
    if (role === 'school') return 1;
    return 2;
  };

  const ContactForm = ({ currentRole }: { currentRole: 'guard' | 'school' | 'donor' }) => (
    <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        <div className="space-y-2 text-left">
          <label className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
          <input 
            required
            type="text" 
            placeholder="John Doe"
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 md:px-5 md:py-4 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all text-white text-sm md:text-base placeholder:text-slate-700"
          />
        </div>
        <div className="space-y-2 text-left">
          <label className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
          <input 
            required
            type="email" 
            placeholder="john@example.com"
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 md:px-5 md:py-4 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all text-white text-sm md:text-base placeholder:text-slate-700"
          />
        </div>
      </div>

      <div className="space-y-2 text-left">
        <label className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">
          {currentRole === 'guard' ? 'Prior Service / Unit' : currentRole === 'school' ? 'Organization Name' : 'Subject'}
        </label>
        <input 
          required
          type="text" 
          placeholder={currentRole === 'guard' ? 'e.g. 10th Mountain Division' : currentRole === 'school' ? 'e.g. St. Jude Elementary' : 'e.g. Donation Inquiry'}
          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 md:px-5 md:py-4 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all text-white text-sm md:text-base placeholder:text-slate-700"
        />
      </div>

      <div className="space-y-2 text-left">
        <label className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Message or Details</label>
        <textarea 
          rows={4}
          placeholder="Tell us about your mission interest..."
          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 md:px-5 md:py-4 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all text-white resize-none text-sm md:text-base placeholder:text-slate-700"
        ></textarea>
      </div>

      <button 
        disabled={loading}
        type="submit"
        className={`w-full py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-lg md:text-xl flex items-center justify-center gap-3 transition-all ${
          currentRole === 'guard' ? 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/20' : 
          currentRole === 'school' ? 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/20' : 
          'bg-blue-600 hover:bg-blue-500 shadow-blue-500/20'
        } text-white shadow-xl ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {loading ? (
          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        ) : (
          <>Submit Inquiry <Send className="w-5 h-5" /></>
        )}
      </button>
      <p className="text-center text-[10px] md:text-xs text-slate-500">
        By submitting, you agree to our privacy policy and data stewardship protocols.
      </p>
    </form>
  );

  return (
    <div className="pt-20">
      <section className="py-12 md:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h1 className="text-4xl md:text-7xl font-black mb-6 md:mb-8 tracking-tight text-white">New Mission.</h1>
              <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-12 leading-relaxed text-left">
                Regain the power to help. Whether you are a veteran looking to serve or an institution looking for protection, your journey starts here.
              </p>

              <div className="space-y-6 md:space-y-8 mb-12 lg:mb-16">
                <div className="flex gap-4 md:gap-6 items-center">
                  <div className="p-3 md:p-4 bg-slate-900 rounded-xl md:rounded-2xl border border-slate-800 shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Email Us</p>
                    <p className="text-base md:text-lg font-bold text-white">ops@safetyalertpatrol.org</p>
                  </div>
                </div>
                <div className="flex gap-4 md:gap-6 items-center">
                  <div className="p-3 md:p-4 bg-slate-900 rounded-xl md:rounded-2xl border border-slate-800 shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Call Center</p>
                    <p className="text-base md:text-lg font-bold text-white">+1 (800) SAP-SAFE</p>
                  </div>
                </div>
                <div className="flex gap-4 md:gap-6 items-center">
                  <div className="p-3 md:p-4 bg-slate-900 rounded-xl md:rounded-2xl border border-slate-800 shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Headquarters</p>
                    <p className="text-base md:text-lg font-bold text-white">Arlington, Virginia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-[1.5rem] md:rounded-[3rem] p-6 md:p-12 relative flex flex-col min-h-[600px] md:min-h-[700px]">
              {/* Role Toggle Selector */}
              <div className="relative flex p-1 bg-slate-950 rounded-2xl mb-8 md:mb-10 border border-slate-800 overflow-hidden shrink-0">
                <div 
                  className={`absolute top-1 left-1 w-[calc(33.33%-4px)] h-[calc(100%-8px)] rounded-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-lg z-0 ${getSliderClass()}`}
                >
                  <div className="absolute inset-0 bg-white/10 blur-[4px] rounded-xl"></div>
                </div>

                <button 
                  type="button"
                  onClick={() => setRole('guard')}
                  className={`relative flex-1 flex items-center justify-center gap-2 py-3 px-2 rounded-xl font-bold text-xs md:text-sm transition-all z-10 ${
                    role === 'guard' ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <Shield className="w-4 h-4" /> Guard
                </button>
                <button 
                  type="button"
                  onClick={() => setRole('school')}
                  className={`relative flex-1 flex items-center justify-center gap-2 py-3 px-2 rounded-xl font-bold text-xs md:text-sm transition-all z-10 ${
                    role === 'school' ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <Landmark className="w-4 h-4" /> School
                </button>
                <button 
                  type="button"
                  onClick={() => setRole('donor')}
                  className={`relative flex-1 flex items-center justify-center gap-2 py-3 px-2 rounded-xl font-bold text-xs md:text-sm transition-all z-10 ${
                    role === 'donor' ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <Heart className="w-4 h-4" /> Donor
                </button>
              </div>

              {/* Sliding Form Viewport */}
              <div className="relative flex-grow overflow-hidden">
                <div 
                  className="paging-transition flex h-full w-[300%]"
                  style={{ transform: `translateX(-${getRoleIndex() * 33.3333}%)` }}
                >
                  <div className="w-1/3 h-full px-1">
                    <ContactForm currentRole="guard" />
                  </div>
                  <div className="w-1/3 h-full px-1">
                    <ContactForm currentRole="school" />
                  </div>
                  <div className="w-1/3 h-full px-1">
                    <ContactForm currentRole="donor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;