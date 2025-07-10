import React, { useState } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Button from './Button';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink: React.FC<{ to: string; children: React.ReactNode, className?: string }> = ({ to, children, className }) => (
    <RouterNavLink 
        to={to} 
        className={({ isActive }) => 
            `py-2 text-sm font-medium transition-colors ${isActive ? 'text-secondary' : 'text-slate-700 hover:text-secondary'} ${className}`
        }
        onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </RouterNavLink>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold text-primary">
            CrackerJack<span className="text-secondary">.</span>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) =>
              link.subLinks ? (
                <div key={link.name} className="relative group">
                  <span className="flex items-center py-2 text-sm font-medium text-slate-700 cursor-pointer hover:text-secondary">
                    {link.name}
                    <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                  </span>
                  <div className="absolute left-0 mt-2 w-56 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-1">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-secondary"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink key={link.name} to={link.path}>{link.name}</NavLink>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center">
            <Button as={Link} to="/contact" variant="primary">Contact Us</Button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/> }
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                 link.subLinks ? (
                    <div key={link.name}>
                        <span className="flex items-center py-2 text-sm font-medium text-slate-700">
                           <Link to={link.path} onClick={() => setIsMenuOpen(false)}>{link.name}</Link>
                        </span>
                        <div className="pl-4">
                            {link.subLinks.map((subLink) => (
                                <NavLink key={subLink.name} to={subLink.path} className="block">{subLink.name}</NavLink>
                            ))}
                        </div>
                    </div>
                 ) : (
                    <NavLink key={link.name} to={link.path}>{link.name}</NavLink>
                 )
              ))}
              <Button as={Link} to="/contact" variant="primary" className="w-full text-center mt-4">Contact Us</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
