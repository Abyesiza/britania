import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/Picture1.png"
            alt="Britania products hero image"
          />
          <div className="absolute inset-0 bg-red-700 mix-blend-multiply opacity-30" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Refreshing Moments,<br />Every Day
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Discover our range of quality beverages and snacks that bring joy to millions of people around the world.
          </p>
          <div className="mt-10">
            <a
              href="/products"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Our Product Categories
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: 'Biscuits',
              image: '/IMG_4045.jpg',
              description: 'Delicious, crunchy biscuits for every occasion'
            },
            {
              name: 'Juices',
              image: '/WhatsApp Image 2023-07-27 at 5.32.43 PM.jpeg.jpg',
              description: 'Refreshing, natural juices packed with goodness'
            },
            {
              name: 'Drinking Water',
              image: '/Picture1.png',
              description: 'Pure, refreshing water for healthy hydration'
            }
          ].map((category) => (
            <div key={category.name} className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative w-full h-80 bg-white rounded-t-lg overflow-hidden group-hover:opacity-90 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-red-600">
                  <a href={`/products#${category.name.toLowerCase()}`}>
                    <span className="absolute inset-0" />
                    {category.name}
                  </a>
                </h3>
                <p className="text-base text-gray-700">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Promotions */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-baseline sm:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Current Promotions</h2>
            <a href="/promotions" className="hidden text-sm font-semibold text-red-600 hover:text-red-700 sm:block transition-colors duration-200">
              Browse all promotions<span aria-hidden="true"> →</span>
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
            {[
              {
                name: 'Summer Special',
                description: 'Get 20% off on all refreshing drinks',
                imageSrc: '/IMG_4045.jpg',
              },
              {
                name: 'Family Pack',
                description: 'Buy any 3 biscuit packs and get 1 free',
                imageSrc: '/WhatsApp Image 2023-07-27 at 5.32.43 PM.jpeg.jpg',
              },
              {
                name: 'Healthy Choice',
                description: 'Special discount on mineral water cases',
                imageSrc: '/Picture1.png',
              }
            ].map((promotion) => (
              <div key={promotion.name} className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="w-full h-64 rounded-t-lg overflow-hidden group-hover:opacity-90">
                  <img
                    src={promotion.imageSrc}
                    alt={promotion.name}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-red-600">
                    <a href="/promotions">
                      <span className="absolute inset-0" />
                      {promotion.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-700">{promotion.description}</p>
                </div>
                <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 rounded-bl-lg font-medium">
                  Limited Time
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <a href="/promotions" className="block text-sm font-semibold text-red-600 hover:text-red-700 transition-colors duration-200">
              Browse all promotions<span aria-hidden="true"> →</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Testimonials section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">What Our Customers Say</h2>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: "I love the taste of Britania biscuits. They're my go-to snack during coffee breaks!",
                author: "Sarah Johnson",
                role: "Loyal Customer"
              },
              {
                quote: "The quality of Britania products is consistently excellent. My family enjoys them every day.",
                author: "Michael Chen",
                role: "Family Shopper"
              },
              {
                quote: "Britania's fruit juices are so refreshing and taste like real fruit. No artificial flavors!",
                author: "Emma Williams",
                role: "Health Enthusiast"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6 border-l-4 border-red-600">
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="mt-4">
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-red-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA section */}
      <div className="bg-red-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to try our products?</span>
            <span className="block text-red-200">Find them at stores near you.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/products"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50 transition-colors duration-300"
              >
                View Products
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/about"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-800 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;