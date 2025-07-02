import React from 'react';
import { Award, Feather, Heart, Leaf, Tag, Briefcase, Gift } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-light-gray text-text-gray">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-red to-red-900">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="w-full h-full object-cover"
            src="/Picture1.png"
            alt="Britania products"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:py-32 lg:px-8 lg:max-w-7xl">
          <div className="lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Taste the Tradition of</span>
              <span className="block">Britania Quality</span>
            </h1>
            <p className="mt-4 max-w-md text-lg text-red-100 sm:text-xl md:mt-5 md:max-w-3xl">
              From refreshing juices to delicious biscuits, we bring joy to every household. Discover our wide range of products made with the finest ingredients.
            </p>
            <div className="mt-8 sm:flex sm:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="/products"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-red bg-white hover:bg-gray-200 md:py-4 md:text-lg md:px-10"
                >
                  Explore Products
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/about"
                  className="w-full flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-brand-red md:py-4 md:text-lg md:px-10"
                >
                  Our Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-br from-warm-beige to-earthy-brown py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Committed to Excellence
            </h2>
            <p className="mt-4 text-lg text-white">
              What makes Britania a beloved brand in every home.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-red text-white mx-auto">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-white">Quality Ingredients</h3>
              <p className="mt-2 text-white">
                We source only the finest ingredients to ensure superior taste and quality.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-red text-white mx-auto">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-white">Family Tradition</h3>
              <p className="mt-2 text-white">
                A legacy of passion and dedication in every product we make.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-red text-white mx-auto">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-white">Natural Goodness</h3>
              <p className="mt-2 text-white">
                No artificial flavors or preservatives, just pure, natural taste.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-red text-white mx-auto">
                <Feather className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-white">Light & Crispy</h3>
              <p className="mt-2 text-white">
                Our biscuits are baked to perfection for that satisfying crunch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-light-gray to-secondary-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-heading-gray sm:text-4xl">
              Our Signature Products
            </h2>
            <p className="mt-4 text-lg text-text-gray">
              Discover the products that have made Britania a household name.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
            {[
              { name: 'Splash Juices', image: '/WhatsApp Image 2023-07-27 at 5.32.43 PM.jpeg.jpg', href: '/products#juices' },
              { name: 'Britania Biscuits', image: '/IMG_4045.jpg', href: '/products#biscuits' },
              { name: 'Refresh Water', image: '/Picture1.png', href: '/products#water' },
            ].map((product) => (
              <a key={product.name} href={product.href} className="group block">
                <div className="overflow-hidden rounded-lg shadow-lg group-hover:shadow-premium transition-shadow duration-300">
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-semibold text-heading-gray">{product.name}</h3>
                    <p className="mt-2 text-brand-red font-medium group-hover:text-red-700 transition-colors duration-300">
                      View Products &rarr;
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Sections */}
      <section className="bg-secondary-gray py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-brand-red p-8 rounded-lg shadow-lg text-center text-white">
              <Gift className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-extrabold mb-2">Latest Promotions</h3>
              <p className="text-red-100">Don't miss out on our exciting offers and discounts!</p>
              <a href="/promotions" className="mt-4 inline-block px-6 py-2 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-brand-red transition-colors duration-300">
                View All
              </a>
            </div>
            <div className="bg-light-gray p-8 rounded-lg shadow-lg text-center text-heading-gray">
              <Tag className="h-12 w-12 mx-auto mb-4 text-brand-red" />
              <h3 className="text-2xl font-extrabold mb-2">Special Offers</h3>
              <p className="text-text-gray">Grab your favorite products at unbeatable prices.</p>
              <a href="/products" className="mt-4 inline-block px-6 py-2 border border-brand-red text-base font-medium rounded-md text-brand-red hover:bg-brand-red hover:text-white transition-colors duration-300">
                Shop Deals
              </a>
            </div>
            <div className="bg-brand-red p-8 rounded-lg shadow-lg text-center text-white">
              <Briefcase className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-extrabold mb-2">Join Our Team</h3>
              <p className="text-red-100">Explore career opportunities and grow with Britania.</p>
              <a href="/careers" className="mt-4 inline-block px-6 py-2 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-brand-red transition-colors duration-300">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="relative bg-brand-red py-16 sm:py-24">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/IMG_4045.jpg"
            alt="Britania factory"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            A Journey of Taste & Trust
          </h2>
          <p className="mt-4 text-lg text-red-100">
            For decades, Britania has been a pioneer in creating high-quality food and beverages. Our commitment to innovation and customer satisfaction has made us a leading name in East Africa.
          </p>
          <a
            href="/about"
            className="mt-8 inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-red bg-white hover:bg-gray-100"
          >
            Discover Our History
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-light-gray py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-heading-gray sm:text-4xl">
              From Our Customers
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-secondary-gray p-8 rounded-lg shadow-md">
              <blockquote className="text-lg text-text-gray">
                <p>"The quality of Britania products is consistently excellent. My family enjoys them every day, especially the digestive biscuits!"</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center">
                <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Customer" />
                <div className="ml-4">
                  <div className="text-base font-medium text-heading-gray">Amina Okoro</div>
                  <div className="text-sm text-text-gray">Kampala, Uganda</div>
                </div>
              </figcaption>
            </div>
            <div className="bg-secondary-gray p-8 rounded-lg shadow-md">
              <blockquote className="text-lg text-text-gray">
                <p>"Britania's fruit juices are so refreshing and taste like real fruit. No artificial flavors, which is important for my kids."</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center">
                <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Customer" />
                <div className="ml-4">
                  <div className="text-base font-medium text-heading-gray">David Mwangi</div>
                  <div className="text-sm text-text-gray">Nairobi, Kenya</div>
                </div>
              </figcaption>
            </div>
            <div className="bg-secondary-gray p-8 rounded-lg shadow-md">
              <blockquote className="text-lg text-text-gray">
                <p>"I love the taste of Britania biscuits. They're my go-to snack during coffee breaks. The new packaging is also great!"</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center">
                <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Customer" />
                <div className="ml-4">
                  <div className="text-base font-medium text-heading-gray">Sarah Johnson</div>
                  <div className="text-sm text-text-gray">Entebbe, Uganda</div>
                </div>
              </figcaption>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;