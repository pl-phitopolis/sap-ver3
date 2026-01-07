import React from 'react';
import { Shield, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useRouter } from '../App';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Footer: React.FC = () => {
  const { navigateTo } = useRouter();
  const { ref, isVisible } = useScrollReveal(0.05);

  const handleNav = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    navigateTo(path);
  };

  return (
    <footer ref={ref} className={`bg-slate-950 border-t border-white/5 pt-24 pb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <Shield className="w-8 h-8 text-[#D69E2E]" />
              <span className="text-2xl font-black tracking-tighter text-white">SAP</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8">
              Empowering veterans to provide elite, community-first safety patrol support for schools and houses of worship.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-900 hover:bg-[#D69E2E] hover:text-[#1A365D] rounded-lg transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-slate-900 hover:bg-[#D69E2E] hover:text-[#1A365D] rounded-lg transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-slate-900 hover:bg-[#D69E2E] hover:text-[#1A365D] rounded-lg transition-all"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-widest text-sm border-l-2 border-[#D69E2E] pl-4">Quick Links</h4>
            <ul className="space-y-4">
              <li><button onClick={(e) => handleNav(e, '#/')} className="text-slate-400 hover:text-[#D69E2E] transition-colors font-bold uppercase text-xs tracking-widest">Home</button></li>
              <li><button onClick={(e) => handleNav(e, '#/about')} className="text-slate-400 hover:text-[#D69E2E] transition-colors font-bold uppercase text-xs tracking-widest">About Us</button></li>
              <li><button onClick={(e) => handleNav(e, '#/services')} className="text-slate-400 hover:text-[#D69E2E] transition-colors font-bold uppercase text-xs tracking-widest">Safety Model</button></li>
              <li><button onClick={(e) => handleNav(e, '#/contact?role=guard')} className="text-slate-400 hover:text-[#D69E2E] transition-colors font-bold uppercase text-xs tracking-widest">Join the Patrol</button></li>
              <li><button onClick={(e) => handleNav(e, '#/contact?role=school')} className="text-slate-400 hover:text-[#D69E2E] transition-colors font-bold uppercase text-xs tracking-widest">Partner Schools</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-widest text-sm border-l-2 border-[#D69E2E] pl-4">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-[#D69E2E] transition-colors font-bold uppercase text-xs tracking-widest">Transparency Report</a></li>
              <li><a href="#" className="text-slate-400 hover:text-[#D69E2E] transition-colors font-bold uppercase text-xs tracking-widest">Donor FAQ</a></li>
              <li><a href="#" className="text-slate-400 hover:text-[#D69E2E] transition-colors font-bold uppercase text-xs tracking-widest">Legal & Liability</a></li>
              <li><a href="#" className="text-slate-400 hover:text-[#D69E2E] transition-colors font-bold uppercase text-xs tracking-widest">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-widest text-sm border-l-2 border-[#D69E2E] pl-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-[#D69E2E] shrink-0" />
                <span className="text-sm">1200 Security Way, Ste 100<br />Arlington, VA 22201</span>
              </li>
              <li className="flex gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-[#D69E2E] shrink-0" />
                <span className="text-sm font-bold">+1 (800) SAP-SAFE</span>
              </li>
              <li className="flex gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-[#D69E2E] shrink-0" />
                <span className="text-sm font-bold">info@safetyalertpatrol.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Safety Alert Patrol (SAP). 501(c)(3) Nonprofit.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;