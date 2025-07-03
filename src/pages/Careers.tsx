import React from 'react';
import { CheckCircle, DollarSign, Briefcase, Clock, Heart, Award } from 'lucide-react';

const Careers = () => {
  return (
    <div className="bg-light-gray text-text-gray">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-red to-red-900 py-20 min-h-[500px] flex items-center">
        <div className="absolute inset-0">  
          <img 
            src="/Picture1.png" 
            alt="Careers at Britania" 
            className="w-full h-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-red/60 to-red-900/60"></div>
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 sm:p-10 lg:p-12 border border-white/20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Careers at Britania Allied
            </h1>
            <p className="text-xl sm:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Join our team in Uganda and be part of a company that's creating refreshing moments for millions
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary-gray rounded-xl p-8 mb-12 shadow-md text-center">
          <p className="text-xl text-text-gray">
            Britania Allied Industries (U) Ltd, commonly known as SPLASH, is a leading food and beverage company in Uganda.
            We're looking for talented individuals to join our growing team and help us continue delivering quality products to our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-light-gray rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-heading-gray mb-6">Why Join Britania?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-brand-red mr-3" />
                <span className="text-text-gray">Be part of Uganda's leading food and beverage manufacturer</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-brand-red mr-3" />
                <span className="text-text-gray">Opportunities for professional growth and development</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-brand-red mr-3" />
                <span className="text-text-gray">Competitive compensation and benefits package</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-brand-red mr-3" />
                <span className="text-text-gray">Collaborative and inclusive work environment</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-brand-red mr-3" />
                <span className="text-text-gray">Make an impact in the lives of millions of Ugandans</span>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/IMG_4045.jpg"
              alt="Britania team"
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="flex items-center mb-6">
          <div className="w-20 h-1 bg-brand-red rounded"></div>
          <h2 className="text-2xl font-semibold text-heading-gray ml-4">Current Openings</h2>
        </div>
        <p className="text-text-gray mb-8 max-w-3xl">
          Explore our current job opportunities across different departments at Britania Allied Industries in Uganda.
        </p>
        <div className="grid gap-6 mb-16">
          {[
            {
              title: 'Production Manager',
              department: 'Production',
              location: 'Kampala, Uganda',
              type: 'Full-time',
              description: 'Oversee the production processes for our SPLASH juice and beverage lines, ensuring efficiency, quality, and safety standards are met.',
              requirements: ['5+ years of production management experience', 'Food & beverage industry knowledge', 'Strong leadership skills']
            },
            {
              title: 'Quality Control Specialist',
              department: 'Quality Assurance',
              location: 'Multiple Locations in Uganda',
              type: 'Full-time',
              description: 'Ensure all products meet our strict quality standards before reaching consumers. Conduct regular tests and implement quality control procedures.',
              requirements: ['3+ years in food quality control', 'Knowledge of food safety regulations', 'Attention to detail']
            },
            {
              title: 'Marketing Coordinator',
              department: 'Marketing',
              location: 'Kampala, Uganda',
              type: 'Full-time',
              description: 'Develop and implement marketing strategies to promote our SPLASH and other Britania products across Uganda and East Africa.',
              requirements: ['Marketing degree', 'Digital marketing experience', 'Creative thinking']
            },
            {
              title: 'Sales Representative',
              department: 'Sales',
              location: 'Various Regions in Uganda',
              type: 'Full-time',
              description: 'Build relationships with retail partners and expand our distribution network throughout Uganda.',
              requirements: ['2+ years in FMCG sales', 'Strong communication skills', 'Willingness to travel']
            }
          ].map((job) => (
            <div key={job.title} className="bg-white shadow-md rounded-lg p-6 border border-light-gray hover:shadow-lg transition-shadow duration-300">
              <div className="md:flex md:items-start md:justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-semibold text-heading-gray">{job.title}</h3>
                    <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-red text-white">
                      New
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-text-gray flex items-center">
                      <Briefcase className="h-5 w-5 text-brand-red mr-2" />
                      <span>Department: {job.department}</span>
                    </p>
                    <p className="text-text-gray flex items-center">
                      <Clock className="h-5 w-5 text-brand-red mr-2" />
                      <span>Location: {job.location}</span>
                    </p>
                    <p className="text-text-gray flex items-center">
                      <CheckCircle className="h-5 w-5 text-brand-red mr-2" />
                      <span>Type: {job.type}</span>
                    </p>
                  </div>
                  <p className="text-text-gray mb-3">{job.description}</p>
                  <div className="mt-2">
                    <h4 className="text-sm font-medium text-heading-gray mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-brand-red mr-2 mt-0.5" />
                          <span className="text-sm text-text-gray">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-red hover:bg-red-700 transition-colors duration-200">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center mb-6">
          <div className="w-20 h-1 bg-brand-red rounded"></div>
          <h2 className="text-2xl font-semibold text-heading-gray ml-4">Benefits</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: (
                <DollarSign className="h-8 w-8 text-brand-red" />
              ),
              title: 'Competitive Salary',
              description: 'We offer competitive compensation packages that reflect your skills and experience'
            },
            {
              icon: (
                <Heart className="h-8 w-8 text-brand-red" />
              ),
              title: 'Health Insurance',
              description: 'Comprehensive health insurance coverage for you and your family'
            },
            {
              icon: (
                <Award className="h-8 w-8 text-brand-red" />
              ),
              title: 'Professional Development',
              description: 'Ongoing training and development opportunities to grow your career'
            },
            {
              icon: (
                <DollarSign className="h-8 w-8 text-brand-red" />
              ),
              title: 'Performance Bonuses',
              description: 'Recognize and reward your contributions to our success'
            },
            {
              icon: (
                <Clock className="h-8 w-8 text-brand-red" />
              ),
              title: 'Flexible Working Hours',
              description: 'Work-life balance with flexible scheduling options'
            },
            {
              icon: (
                <Briefcase className="h-8 w-8 text-brand-red" />
              ),
              title: 'Career Growth',
              description: 'Clear pathways for advancement within Britania Uganda'
            }
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto bg-light-gray rounded-full flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-medium text-heading-gray mb-2">{benefit.title}</h3>
              <p className="text-text-gray">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-secondary-gray rounded-lg p-8 mb-16 shadow-md">
          <h2 className="text-2xl font-semibold text-heading-gray mb-6 text-center">Application Process</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t-2 border-text-gray"></div>
              </div>
              <div className="relative flex justify-between">
                {[
                  { step: 1, title: 'Submit Application' },
                  { step: 2, title: 'Initial Screening' },
                  { step: 3, title: 'Interview Process' },
                  { step: 4, title: 'Final Selection' }
                ].map((step) => (
                  <div key={step.step} className="text-center">
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white text-lg font-semibold">
                      {step.step}
                    </span>
                    <p className="mt-3 text-sm font-medium text-heading-gray">{step.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-text-gray">
                Our recruitment process is designed to identify the best talent to join our team at Britania Allied Industries (U) Ltd in Uganda.
                We value transparency and will keep you informed at every stage of the process.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-brand-red rounded-xl text-white p-8 shadow-md">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Join Our Team Today</h2>
            <p className="mb-6 text-red-100">
              Become part of Britania Allied Industries (U) Ltd, makers of SPLASH products, and help us refresh Uganda with quality food and beverages
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-brand-red bg-white hover:bg-gray-200 transition-colors duration-300"
            >
              View All Openings
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
