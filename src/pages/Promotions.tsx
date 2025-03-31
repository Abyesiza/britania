import React from 'react';

const Promotions = () => {
  return (
    <div className="bg-white">
      <div className="relative bg-red-600 py-16">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/IMG_4045.jpg" 
            alt="Promotions banner" 
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Promotions & Events</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Discover the latest offers and events from Britania Allied Industries (U) Ltd, makers of SPLASH products
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Current Promotions */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-20 h-1 bg-red-600 rounded"></div>
            <h2 className="text-2xl font-semibold text-gray-900 ml-4">Current Promotions</h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Take advantage of these limited-time offers on your favorite Britania SPLASH products. 
            Available at participating retailers across Uganda.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Summer Special',
                description: 'Get 20% off on all refreshing SPLASH drinks. Perfect for the hot summer days!',
                image: '/WhatsApp Image 2023-07-27 at 5.32.43 PM.jpeg.jpg',
                validUntil: 'August 31, 2024',
                badge: 'Best Seller'
              },
              {
                title: 'Family Pack Deal',
                description: 'Buy any 3 Britania biscuit packs and get 1 free. Great value for the whole family!',
                image: '/IMG_4045.jpg',
                validUntil: 'July 15, 2024',
                badge: 'Limited Time'
              },
              {
                title: 'Healthy Choice',
                description: 'Special discount on Refresh mineral water cases. Stay hydrated and save!',
                image: '/Picture1.png',
                validUntil: 'September 1, 2024',
                badge: 'New Offer'
              }
            ].map((promo) => (
              <div key={promo.title} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform hover:shadow-xl hover:scale-105 duration-300">
                <div className="relative">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 rounded-bl-lg font-medium">
                    {promo.badge}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{promo.title}</h3>
                  <p className="mt-2 text-gray-600">{promo.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-sm text-red-600 font-medium">Valid until: {promo.validUntil}</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Limited Offer
                    </span>
                  </div>
                  <button className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Product */}
        <section className="mb-16 bg-gray-50 rounded-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="/WhatsApp Image 2023-07-27 at 5.32.43 PM.jpeg.jpg"
                alt="SPLASH juice promotion"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
                Featured Product
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">SPLASH Fruit Juice Variety Pack</h2>
              <p className="text-gray-600 mb-6">
                Try all our delicious SPLASH fruit juice flavors with this special variety pack.
                Each pack contains 6 bottles of different flavors, perfect for the whole family.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>6 different flavors in one pack</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>15% discount compared to buying individually</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Available at all major supermarkets in Uganda</span>
                </li>
              </ul>
              <div>
                <a href="/products#juices" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200">
                  View All Juices
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-20 h-1 bg-red-600 rounded"></div>
            <h2 className="text-2xl font-semibold text-gray-900 ml-4">Upcoming Events</h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Join us at these exciting events across Uganda and get a chance to sample our products, 
            win prizes, and learn more about Britania Allied Industries.
          </p>
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                title: 'Kampala Food Festival',
                date: 'July 15-17, 2024',
                location: 'Lugogo Cricket Grounds, Kampala',
                description: 'Join us for a weekend of food, fun, and refreshments. Sample our latest SPLASH products and enjoy special festival-only offers.',
                image: '/Picture1.png'
              },
              {
                title: 'Jinja Healthy Living Expo',
                date: 'August 5, 2024',
                location: 'Main Street Mall, Jinja',
                description: 'Learn about healthy living and discover our range of nutritious products. Special demonstrations and giveaways throughout the day.',
                image: '/IMG_4045.jpg'
              },
              {
                title: 'Entebbe Community Wellness Day',
                date: 'September 10, 2024',
                location: 'Entebbe Botanical Gardens',
                description: 'A day focused on community health and wellness. Free product samples and health consultations available.',
                image: '/WhatsApp Image 2023-07-27 at 5.32.43 PM.jpeg.jpg'
              }
            ].map((event) => (
              <div key={event.title} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover md:h-48 lg:h-full"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 mr-2">{event.title}</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Upcoming
                      </span>
                    </div>
                    <div className="mt-2 space-y-1">
                      <p className="text-gray-600 flex items-center">
                        <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{event.date}</span>
                      </p>
                      <p className="text-gray-600 flex items-center">
                        <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{event.location}</span>
                      </p>
                    </div>
                    <p className="mt-3 text-gray-600">{event.description}</p>
                    <div className="mt-4 flex">
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200">
                        Register Now
                      </button>
                      <button className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
                        Add to Calendar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events Gallery */}
        <section>
          <div className="flex items-center mb-6">
            <div className="w-20 h-1 bg-red-600 rounded"></div>
            <h2 className="text-2xl font-semibold text-gray-900 ml-4">Past Events Gallery</h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Relive some of our most memorable events and promotions across Uganda.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: '/IMG_4045.jpg', alt: 'Product launch event' },
              { src: '/WhatsApp Image 2023-07-27 at 5.32.43 PM.jpeg.jpg', alt: 'School outreach program' },
              { src: '/Picture1.png', alt: 'Community tasting event' },
              { src: '/IMG_4045.jpg', alt: 'Trade fair booth' },
              { src: '/WhatsApp Image 2023-07-27 at 5.32.43 PM.jpeg.jpg', alt: 'Rural market promotion' },
              { src: '/Picture1.png', alt: 'University campus event' },
              { src: '/IMG_4045.jpg', alt: 'Product sampling' },
              { src: '/WhatsApp Image 2023-07-27 at 5.32.43 PM.jpeg.jpg', alt: 'Charity donation event' }
            ].map((image, index) => (
              <div key={index} className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105 duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mt-16 bg-red-600 rounded-xl text-white p-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Stay Updated on Promotions</h2>
            <p className="mb-6">Subscribe to our newsletter to receive the latest news on Britania SPLASH products, promotions, and events in Uganda</p>
            <div className="flex flex-col sm:flex-row justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 w-full sm:w-auto min-w-0 flex-auto sm:flex-1 text-gray-900 placeholder-gray-500 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button 
                className="mt-2 sm:mt-0 inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md sm:rounded-l-none text-white bg-red-700 hover:bg-red-800 transition-colors duration-200"
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Promotions;