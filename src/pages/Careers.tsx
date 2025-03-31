

const Careers = () => {
  return (
    <div className="bg-white">
      <div className="relative bg-red-600 py-16">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/Picture1.png" 
            alt="Careers at Britania" 
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Careers at Britania Allied</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Join our team in Uganda and be part of a company that's creating refreshing moments for millions
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none mb-12 text-center">
          <p className="text-xl text-gray-600">
            Britania Allied Industries (U) Ltd, commonly known as SPLASH, is a leading food and beverage company in Uganda.
            We're looking for talented individuals to join our growing team and help us continue delivering quality products to our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why Join Britania?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Be part of Uganda's leading food and beverage manufacturer</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Opportunities for professional growth and development</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Competitive compensation and benefits package</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Collaborative and inclusive work environment</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Make an impact in the lives of millions of Ugandans</span>
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
          <div className="w-20 h-1 bg-red-600 rounded"></div>
          <h2 className="text-2xl font-semibold text-gray-900 ml-4">Current Openings</h2>
        </div>
        <p className="text-gray-600 mb-8 max-w-3xl">
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
            <div key={job.title} className="bg-white shadow-md rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="md:flex md:items-start md:justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                    <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      New
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600 flex items-center">
                      <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span>Department: {job.department}</span>
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Location: {job.location}</span>
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Type: {job.type}</span>
                    </p>
                  </div>
                  <p className="text-gray-600 mb-3">{job.description}</p>
                  <div className="mt-2">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                          </svg>
                          <span className="text-sm text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center mb-6">
          <div className="w-20 h-1 bg-red-600 rounded"></div>
          <h2 className="text-2xl font-semibold text-gray-900 ml-4">Benefits</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: (
                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: 'Competitive Salary',
              description: 'We offer competitive compensation packages that reflect your skills and experience'
            },
            {
              icon: (
                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: 'Health Insurance',
              description: 'Comprehensive health insurance coverage for you and your family'
            },
            {
              icon: (
                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              ),
              title: 'Professional Development',
              description: 'Ongoing training and development opportunities to grow your career'
            },
            {
              icon: (
                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              ),
              title: 'Performance Bonuses',
              description: 'Recognize and reward your contributions to our success'
            },
            {
              icon: (
                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: 'Flexible Working Hours',
              description: 'Work-life balance with flexible scheduling options'
            },
            {
              icon: (
                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              ),
              title: 'Career Growth',
              description: 'Clear pathways for advancement within Britania Uganda'
            }
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Application Process</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-between">
                {[
                  { step: 1, title: 'Submit Application' },
                  { step: 2, title: 'Initial Screening' },
                  { step: 3, title: 'Interview Process' },
                  { step: 4, title: 'Final Selection' }
                ].map((step) => (
                  <div key={step.step} className="text-center">
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white text-lg font-semibold">
                      {step.step}
                    </span>
                    <p className="mt-3 text-sm font-medium text-gray-900">{step.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Our recruitment process is designed to identify the best talent to join our team at Britania Allied Industries (U) Ltd in Uganda.
                We value transparency and will keep you informed at every stage of the process.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-red-600 rounded-xl text-white p-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Join Our Team Today</h2>
            <p className="mb-6">
              Become part of Britania Allied Industries (U) Ltd, makers of SPLASH products, and help us refresh Uganda with quality food and beverages
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50 transition-colors duration-200"
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