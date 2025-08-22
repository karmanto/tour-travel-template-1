import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Compass, Twitter, Instagram } from 'lucide-react';

const Header: React.FC = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Vacations', path: '/vacations' },
    { name: 'About Us', path: '/about-us' },
  ];

  return (
    <header className="relative z-20 text-bv-text-light">
      {/* Top Bar - Social Media */}
      <div className="bg-bv-dark-blue bg-opacity-50 py-2 px-8 md:px-16 lg:px-24 flex justify-end space-x-4 text-sm">
        <a href="#" className="hover:text-bv-teal transition-colors"><Twitter size={16} /></a>
        <a href="#" className="hover:text-bv-teal transition-colors"><Instagram size={16} /></a>
      </div>

      {/* Main Header Content */}
      <div className="py-6 px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center text-bv-text-light hover:text-bv-teal transition-colors mb-4 md:mb-0">
          <Compass size={48} strokeWidth={1.5} />
          <span className="text-3xl font-bold tracking-wider mt-2">BON VOYAGE</span>
          <span className="text-sm text-bv-text-secondary">Best Prices, Best Holidays</span>
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-6 md:space-x-10 text-lg font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative pb-1 group hover:text-bv-teal transition-colors ${
                  isActive ? 'text-bv-teal' : 'text-bv-text-light'
                }`
              }
            >
              {/* Use children as a function to access isActive */}
              {({ isActive }) => (
                <>
                  {link.name}
                  {/* Underline effect on hover and for active link */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-bv-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-bv-teal ${isActive ? 'scale-x-100' : 'scale-x-0'} transition-transform duration-300 ease-out`}></span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
