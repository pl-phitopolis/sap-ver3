import React from 'react';
import { Shield, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useRouter } from '../App';

const Footer: React.FC = () => {
  const { navigateTo } = useRouter();

  const handleNav = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    navigateTo(path);
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <Shield className="w-8 h-8 text-indigo-500" />
              <span className="text-2xl font-bold tracking-tighter text-white">SAP</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8">
              Empowering veterans to provide elite, community-first safety patrol support for schools and houses of worship.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><button onClick={(e) => handleNav(e, '#/')} className="text-slate-400 hover:text-indigo-400 transition-colors">Home</button></li>
              <li><button onClick={(e) => handleNav(e, '#/about')} className="text-slate-400 hover:text-indigo-400 transition-colors">About Us</button></li>
              <li><button onClick={(e) => handleNav(e, '#/services')} className="text-slate-400 hover:text-indigo-400 transition-colors">Safety Model</button></li>
              <li><button onClick={(e) => handleNav(e, '#/contact?role=guard')} className="text-slate-400 hover:text-indigo-400 transition-colors">Join the Patrol</button></li>
              <li><button onClick={(e) => handleNav(e, '#/contact?role=school')} className="text-slate-400 hover:text-indigo-400 transition-colors">Partner Schools</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Transparency Report</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Donor FAQ</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Legal & Liability</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-indigo-500 shrink-0" />
                <span>1200 Security Way, Ste 100<br />Arlington, VA 22201</span>
              </li>
              <li className="flex gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-indigo-500 shrink-0" />
                <span>+1 (800) SAP-SAFE</span>
              </li>
              <li className="flex gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-indigo-500 shrink-0" />
                <span>info@safetyalertpatrol.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Safety Alert Patrol (SAP). All rights reserved. 501(c)(3) Nonprofit.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300">Accessibility</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;