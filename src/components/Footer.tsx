import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const LinkedInIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-white">CrackerJack<span className="text-secondary">.</span></h2>
            <p className="mt-2 text-sm text-slate-400">Your Partner for growth.</p>
            <div className="mt-4 flex space-x-4">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <LinkedInIcon className="w-6 h-6"/>
                </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-base text-slate-400 hover:text-white transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white">Contact</h3>
            <ul className="mt-4 space-y-2 text-base text-slate-400">
                <li><a href="mailto:alex.png@crackerjack.partners" className="hover:text-white transition-colors">alex.png@crackerjack.partners</a></li>
                <li><a href="tel:+6587588048" className="hover:text-white transition-colors">+65 8758 8048</a></li>
            </ul>
          </div>
           <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white">Legal</h3>
            <ul className="mt-4 space-y-2 text-base text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} CrackerJack People Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;