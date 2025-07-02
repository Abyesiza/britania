import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-light-gray shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                className="h-14 w-auto"
                src="/Britania Logo.png"
                alt="Britania Allied"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/promotions">Promotions</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/careers">Careers</NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 border border-secondary-gray rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-red"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-text-gray" />
            </div>
            <Link 
              to="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-red hover:bg-red-700 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-gray hover:text-brand-red focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-light-gray shadow-lg">
          <div className="pt-2 pb-3 space-y-1">
            <MobileNavLink to="/products">Products</MobileNavLink>
            <MobileNavLink to="/promotions">Promotions</MobileNavLink>
            <MobileNavLink to="/about">About Us</MobileNavLink>
            <MobileNavLink to="/careers">Careers</MobileNavLink>
            <div className="px-3 pt-2 pb-3">
              <Link
                to="/contact"
                className="block w-full text-center px-4 py-2 text-sm font-medium rounded-md text-white bg-brand-red hover:bg-red-700 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-heading-gray hover:text-brand-red border-b-2 border-transparent hover:border-brand-red transition-colors duration-200"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children }) => (
  <Link
    to={to}
    className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-heading-gray hover:bg-secondary-gray hover:border-brand-red hover:text-brand-red transition-colors duration-200"
  >
    {children}
  </Link>
);

export default Navbar;
