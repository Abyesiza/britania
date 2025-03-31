
import { Twitter, Instagram, Facebook, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/">
              <img
                className="h-14"
                src="/Britania Logo.png"
                alt="Britania Allied"
              />
            </Link>
            <p className="text-gray-400 text-base font-light">
              Bringing refreshing moments to millions of people every day through our quality beverages and snacks.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-red-500 tracking-wider uppercase">Products</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/products" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      Biscuits
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      Juices
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      Drinking Water
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-red-500 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/about" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-red-500 tracking-wider uppercase">Contact Us</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 text-red-500 mr-2" />
                    <a href="mailto:info@britaniaallied.com" className="text-gray-300 hover:text-white transition-colors duration-200">info@britaniaallied.com</a>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-red-500 mr-2" />
                    <a href="tel:+15551234567" className="text-gray-300 hover:text-white transition-colors duration-200">+1 (555) 123-4567</a>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-red-500 mr-2 mt-1" />
                    <span className="text-gray-300">123 Business Street, City, Country</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <h3 className="text-sm font-semibold text-red-500 tracking-wider uppercase">Subscribe to our newsletter</h3>
                  <div className="mt-4 flex">
                    <input
                      type="email"
                      className="min-w-0 flex-1 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-transparent rounded-l-md"
                      placeholder="Enter your email"
                    />
                    <button
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-r-md text-white bg-red-600 hover:bg-red-700"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 flex justify-between items-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Britania Allied. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;