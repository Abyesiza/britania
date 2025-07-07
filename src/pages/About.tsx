import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-light-gray text-text-gray">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-red to-red-900 py-20 min-h-[500px] flex items-center">
        <div className="absolute inset-0">  
          <img 
            src="/Picture1.png" 
            alt="About Britania Allied" 
            className="w-full h-full object-contain object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-red/60 to-red-900/60"></div>
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 sm:p-10 lg:p-12 border border-white/20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              About Britania Allied
            </h1>
            <p className="text-xl sm:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Learn about our story, mission, and commitment to quality as Uganda's trusted food and beverage manufacturer
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary-gray rounded-xl p-8 mb-12 shadow-md">
          <div className="prose prose-lg max-w-none text-text-gray">
            <p className="text-xl">
              This is the official page for Britania Allied Industries (U) Ltd, commonly known as SPLASH. 
              Britania is a household manufacturer of various products in Uganda, serving millions of 
              customers with our diverse range of quality products including natural fruit juices, 
              biscuits, and beverages. With over 500 employees, we're committed to bringing refreshing 
              and delicious moments to households across Uganda and the region.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <img
              src="/Picture1.png"
              alt="Britania products"
              className="rounded-lg shadow-md w-full h-auto object-contain"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-heading-gray mb-4">Our Mission</h2>
            <p className="text-text-gray mb-6">
              At Britania Uganda, our mission is to produce high-quality food and beverage products 
              that delight our customers while adhering to the highest standards of quality and safety. 
              We aim to be the leading food and beverage manufacturer in East Africa, bringing joy to 
              millions of families every day.
            </p>
            <h2 className="text-2xl font-semibold text-heading-gray mb-4">Our Vision</h2>
            <p className="text-text-gray">
              To be the most trusted and loved food and beverage brand in East Africa, known for our 
              quality, innovation, and commitment to customer satisfaction.
            </p>
          </div>
        </div>

        <div className="bg-light-gray rounded-lg p-8 mb-16 shadow-md">
          <h2 className="text-2xl font-semibold text-heading-gray mb-6 text-center">Our Brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'SPLASH', category: 'Beverages', image: '/Picture2.png' },
              { name: 'YOJUS', category: 'Juices', image: '/Picture1.png' },
              { name: 'Sun-Sip', category: 'Natural Fruit Juices', image: '/Picture1.png' },
              { name: 'Refresh', category: 'Drinking Water', image: '/Picture3.png' },
              { name: 'Top Up', category: 'Tomato Sauce', image: '/Picture2.png' },
              { name: 'Britania Biscuits', category: 'Biscuits', image: '/Britania Logo.png' }
            ].map((brand) => (
              <div key={brand.name} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-brand-red">{brand.name}</h3>
                  <p className="text-sm text-text-gray">{brand.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-heading-gray mb-4 text-center">Company Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-brand-red">
            <h3 className="text-lg font-semibold text-heading-gray mb-2">Industry</h3>
            <p className="text-text-gray">Food and Beverage Manufacturing</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-brand-red">
            <h3 className="text-lg font-semibold text-heading-gray mb-2">Company Size</h3>
            <p className="text-text-gray">501-1,000 employees</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-brand-red">
            <h3 className="text-lg font-semibold text-heading-gray mb-2">Location</h3>
            <p className="text-text-gray">Uganda, East Africa</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-heading-gray mb-6 text-center">Our History</h2>
        <div className="relative border-l-2 border-brand-red pl-8 mb-16 ml-6">
          <div className="space-y-12">
            <div className="relative">
              <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-light-gray bg-brand-red"></div>
              <div>
                <h3 className="text-lg font-semibold text-heading-gray">1990: Company Founded</h3>
                <p className="mt-1 text-text-gray">Britania Allied was established in Uganda with a vision to create quality refreshments for the local market.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-light-gray bg-brand-red"></div>
              <div>
                <h3 className="text-lg font-semibold text-heading-gray">2000: Expansion into Beverages</h3>
                <p className="mt-1 text-text-gray">Launched our first line of natural fruit juices under the SPLASH brand and expanded our product range.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-light-gray bg-brand-red"></div>
              <div>
                <h3 className="text-lg font-semibold text-heading-gray">2010: Market Leadership</h3>
                <p className="mt-1 text-text-gray">Became a household name in Uganda with our diverse product portfolio and quality standards.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-light-gray bg-brand-red"></div>
              <div>
                <h3 className="text-lg font-semibold text-heading-gray">2020: Regional Expansion</h3>
                <p className="mt-1 text-text-gray">Expanded our operations to neighboring East African countries, bringing Britania products to more consumers.</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-heading-gray mb-6 text-center">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { name: 'John Smith', role: 'CEO', department: 'Executive' },
            { name: 'Sarah Johnson', role: 'Head of Production', department: 'Production' },
            { name: 'Michael Brown', role: 'Marketing Director', department: 'Marketing' },
            { name: 'Emily Davis', role: 'R&D Manager', department: 'Research & Development' },
            { name: 'David Wilson', role: 'Sales Director', department: 'Sales' },
            { name: 'Lisa Anderson', role: 'HR Director', department: 'Human Resources' }
          ].map((member) => (
            <div key={member.name} className="bg-secondary-gray rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 mx-auto bg-light-gray rounded-full flex items-center justify-center mb-4">
                <span className="text-brand-red text-xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <h3 className="text-lg font-semibold text-heading-gray text-center">{member.name}</h3>
              <p className="text-brand-red text-center">{member.role}</p>
              <p className="text-sm text-text-gray text-center">{member.department}</p>
            </div>
          ))}
        </div>

        <div className="bg-brand-red text-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">Join Us in Our Journey</h2>
          <p className="text-center mb-6 text-red-100">
            Britania Allied Industries (U) Ltd is committed to growth, innovation, and excellence. 
            We invite you to be part of our story as we continue to refresh and delight consumers across East Africa.
          </p>
          <div className="flex justify-center">
            <a href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-brand-red bg-white hover:bg-gray-200 transition-colors duration-300">
              Contact Us
            </a>
            <a href="/careers" className="ml-4 inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-brand-red transition-colors duration-300">
              Join Our Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
