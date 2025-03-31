

const About = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Britania Allied</h1>
        <p className="text-xl text-red-600 font-medium">Food & Beverage Company</p>
      </div>
      
      <div className="bg-red-50 rounded-xl p-8 mb-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700">
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
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            At Britania Uganda, our mission is to produce high-quality food and beverage products 
            that delight our customers while adhering to the highest standards of quality and safety. 
            We aim to be the leading food and beverage manufacturer in East Africa, bringing joy to 
            millions of families every day.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To be the most trusted and loved food and beverage brand in East Africa, known for our 
            quality, innovation, and commitment to customer satisfaction.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Our Brands</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'SPLASH', category: 'Beverages', image: '/WhatsApp Image 2023-07-27 at 5.32.43 PM.jpeg.jpg' },
            { name: 'YOJUS', category: 'Juices', image: '/IMG_4045.jpg' },
            { name: 'Sun-Sip', category: 'Natural Fruit Juices', image: '/Picture1.png' },
            { name: 'Refresh', category: 'Drinking Water', image: '/Picture1.png' },
            { name: 'Top Up', category: 'Tomato Sauce', image: '/IMG_4045.jpg' },
            { name: 'Britania Biscuits', category: 'Biscuits', image: '/WhatsApp Image 2023-07-27 at 5.32.43 PM.jpeg.jpg' }
          ].map((brand) => (
            <div key={brand.name} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-red-600">{brand.name}</h3>
                <p className="text-sm text-gray-500">{brand.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Company Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-600">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry</h3>
          <p className="text-gray-600">Food and Beverage Manufacturing</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-600">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Company Size</h3>
          <p className="text-gray-600">501-1,000 employees</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-600">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
          <p className="text-gray-600">Uganda, East Africa</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Our History</h2>
      <div className="relative border-l-2 border-red-600 pl-8 mb-16 ml-6">
        <div className="space-y-12">
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-white bg-red-600"></div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">1990: Company Founded</h3>
              <p className="mt-1 text-gray-600">Britania Allied was established in Uganda with a vision to create quality refreshments for the local market.</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-white bg-red-600"></div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">2000: Expansion into Beverages</h3>
              <p className="mt-1 text-gray-600">Launched our first line of natural fruit juices under the SPLASH brand and expanded our product range.</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-white bg-red-600"></div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">2010: Market Leadership</h3>
              <p className="mt-1 text-gray-600">Became a household name in Uganda with our diverse product portfolio and quality standards.</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-white bg-red-600"></div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">2020: Regional Expansion</h3>
              <p className="mt-1 text-gray-600">Expanded our operations to neighboring East African countries, bringing Britania products to more consumers.</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Our Leadership Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {[
          { name: 'John Smith', role: 'CEO', department: 'Executive' },
          { name: 'Sarah Johnson', role: 'Head of Production', department: 'Production' },
          { name: 'Michael Brown', role: 'Marketing Director', department: 'Marketing' },
          { name: 'Emily Davis', role: 'R&D Manager', department: 'Research & Development' },
          { name: 'David Wilson', role: 'Sales Director', department: 'Sales' },
          { name: 'Lisa Anderson', role: 'HR Director', department: 'Human Resources' }
        ].map((member) => (
          <div key={member.name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="w-20 h-20 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-red-600 text-xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 text-center">{member.name}</h3>
            <p className="text-red-600 text-center">{member.role}</p>
            <p className="text-sm text-gray-500 text-center">{member.department}</p>
          </div>
        ))}
      </div>

      <div className="bg-red-600 text-white rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Join Us in Our Journey</h2>
        <p className="text-center mb-6">
          Britania Allied Industries (U) Ltd is committed to growth, innovation, and excellence. 
          We invite you to be part of our story as we continue to refresh and delight consumers across East Africa.
        </p>
        <div className="flex justify-center">
          <a href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50 transition-colors duration-300">
            Contact Us
          </a>
          <a href="/careers" className="ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-800 transition-colors duration-300">
            Join Our Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;