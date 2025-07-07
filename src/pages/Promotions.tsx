import React from 'react';
import { Calendar, MapPin, Tag, CheckCircle } from 'lucide-react';

const Promotions = () => {
  return (
    <div className="bg-light-gray text-text-gray">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-red to-red-900 py-20 min-h-[500px] flex items-center">
        <div className="absolute inset-0">  
          <img 
            src="/Picture1.png" 
            alt="Promotions at Britania" 
            className="w-full h-full object-contain object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-red/60 to-red-900/60"></div>
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 sm:p-10 lg:p-12 border border-white/20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Promotions & Events
            </h1>
            <p className="text-xl sm:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Explore the latest offers, discounts, and events from Britania Allied Industries—bringing value and excitement to Uganda
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Current Promotions */}
        <section className="mb-16 bg-secondary-gray p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <div className="w-20 h-1 bg-brand-red rounded"></div>
            <h2 className="text-2xl font-semibold text-heading-gray ml-4">Current Promotions</h2>
          </div>
          <p className="text-text-gray mb-8 max-w-3xl">
            Take advantage of these limited-time offers on your favorite Britania SPLASH products. 
            Available at participating retailers across Uganda.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Summer Special',
                description: 'Get 20% off on all refreshing SPLASH drinks. Perfect for the hot summer days!',
                image: '/Picture2.png',
                validUntil: 'August 31, 2024',
                badge: 'Best Seller'
              },
              {
                title: 'Family Pack Deal',
                description: 'Buy any 3 Britania biscuit packs and get 1 free. Great value for the whole family!',
                image: '/Picture3.png',
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
              <div key={promo.title} className="bg-white rounded-lg shadow-lg overflow-hidden border border-light-gray transition-transform hover:shadow-xl hover:scale-105 duration-300">
                <div className="relative">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-48 object-contain"
                  />
                  <div className="absolute top-0 right-0 bg-brand-red text-white px-3 py-1 rounded-bl-lg">
                    {promo.badge}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-heading-gray">{promo.title}</h3>
                  <p className="mt-2 text-text-gray">{promo.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-sm text-brand-red font-medium">Valid until: {promo.validUntil}</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-red text-white">
                      Limited Offer
                    </span>
                  </div>
                  <button className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-red hover:bg-red-700 transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Product */}
        <section className="mb-16 bg-light-gray rounded-xl overflow-hidden shadow-md">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="/Picture1.png"
                alt="SPLASH juice promotion"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-brand-red text-white rounded-full text-sm font-medium mb-4">
                Featured Product
              </div>
              <h2 className="text-2xl font-bold text-heading-gray mb-4">SPLASH Fruit Juice Variety Pack</h2>
              <p className="text-text-gray mb-6">
                Try all our delicious SPLASH fruit juice flavors with this special variety pack.
                Each pack contains 6 bottles of different flavors, perfect for the whole family.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-red mr-2" />
                  <span>6 different flavors in one pack</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-red mr-2" />
                  <span>15% discount compared to buying individually</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-red mr-2" />
                  <span>Available at all major supermarkets in Uganda</span>
                </li>
              </ul>
              <div>
                <a href="/products#juices" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-red hover:bg-red-700 transition-colors duration-200">
                  View All Juices
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-16 bg-secondary-gray p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <div className="w-20 h-1 bg-brand-red rounded"></div>
            <h2 className="text-2xl font-semibold text-heading-gray ml-4">Upcoming Events</h2>
          </div>
          <p className="text-text-gray mb-8 max-w-3xl">
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
                image: '/Picture2.png'
              },
              {
                title: 'Entebbe Community Wellness Day',
                date: 'September 10, 2024',
                location: 'Entebbe Botanical Gardens',
                description: 'A day focused on community health and wellness. Free product samples and health consultations available.',
                image: '/Picture3.png'
              }
            ].map((event) => (
              <div key={event.title} className="bg-white rounded-lg shadow-md overflow-hidden border border-light-gray">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-contain md:h-48 lg:h-full"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-heading-gray mr-2">{event.title}</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-red text-white">
                        Upcoming
                      </span>
                    </div>
                    <div className="mt-2 space-y-1">
                      <p className="text-text-gray flex items-center">
                        <Calendar className="h-5 w-5 text-brand-red mr-2" />
                        <span>{event.date}</span>
                      </p>
                      <p className="text-text-gray flex items-center">
                        <MapPin className="h-5 w-5 text-brand-red mr-2" />
                        <span>{event.location}</span>
                      </p>
                    </div>
                    <p className="mt-3 text-text-gray">{event.description}</p>
                    <div className="mt-4 flex">
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-red hover:bg-red-700 transition-colors duration-200">
                        Register Now
                      </button>
                      <button className="ml-3 inline-flex items-center px-4 py-2 border border-secondary-gray text-sm font-medium rounded-md text-heading-gray bg-white hover:bg-light-gray transition-colors duration-200">
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
        <section className="bg-light-gray p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <div className="w-20 h-1 bg-brand-red rounded"></div>
            <h2 className="text-2xl font-semibold text-heading-gray ml-4">Past Events Gallery</h2>
          </div>
          <p className="text-text-gray mb-8 max-w-3xl">
            Relive some of our most memorable events and promotions across Uganda.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: '/Picture1.png', alt: 'Product launch event' },
              { src: '/Picture2.png', alt: 'School outreach program' },
              { src: '/Picture3.png', alt: 'Community tasting event' },
              { src: '/Britania Logo.png', alt: 'Trade fair booth' },
              { src: '/Picture1.png', alt: 'Rural market promotion' },
              { src: '/Picture2.png', alt: 'University campus event' },
              { src: '/Picture3.png', alt: 'Product sampling' },
              { src: '/Britania Logo.png', alt: 'Charity donation event' }
            ].map((image, index) => (
              <div key={index} className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105 duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mt-16 bg-brand-red rounded-xl text-white p-8 shadow-md">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Stay Updated on Promotions</h2>
            <p className="mb-6 text-red-100">Subscribe to our newsletter to receive the latest news on Britania SPLASH products, promotions, and events in Uganda</p>
            <div className="flex flex-col sm:flex-row justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 w-full sm:w-auto min-w-0 flex-auto sm:flex-1 text-heading-gray placeholder-text-gray rounded-l-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button 
                className="mt-2 sm:mt-0 inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md sm:rounded-l-none text-brand-red bg-white hover:bg-gray-200 transition-colors duration-200"
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