import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ShoppingBag, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-14 w-auto"
                src="/Britania Logo.png"
                alt="Britania Allied"
              />
            </Link>
            <div className="hidden md:ml-8 md:flex md:space-x-8">
              <Link
                to="/products"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition-colors duration-200"
              >
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <Link
                to="/promotions"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition-colors duration-200"
              >
                Promotions & Events
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                to="/careers"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition-colors duration-200"
              >
                Careers
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <Link 
              to="/products"
              className="inline-flex items-center p-2 rounded-full text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors duration-200"
            >
              <ShoppingBag className="h-5 w-5" />
            </Link>
            <Link 
              to="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
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
        <div className="md:hidden shadow-lg">
          <div className="pt-2 pb-3 space-y-1 bg-white">
            <Link
              to="/products"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 hover:border-red-500 transition-colors duration-200"
            >
              Products
            </Link>
            <Link
              to="/promotions"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 hover:border-red-500 transition-colors duration-200"
            >
              Promotions & Events
            </Link>
            <Link
              to="/about"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 hover:border-red-500 transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              to="/careers"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 hover:border-red-500 transition-colors duration-200"
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="block pl-3 pr-4 py-2 text-base font-medium text-white bg-red-600 hover:bg-red-700 transition-colors duration-200 mx-3 my-2 rounded-md text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;