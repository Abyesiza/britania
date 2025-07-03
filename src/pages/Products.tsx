import React from 'react';
import { CheckCircle } from 'lucide-react';

const Products = () => {
  return (
    <div className="bg-light-gray text-text-gray">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-red to-red-900 py-20 min-h-[500px] flex items-center">
        <div className="absolute inset-0">  
          <img 
            src="/Picture1.png" 
            alt="Products at Britania" 
            className="w-full h-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-red/60 to-red-900/60"></div>
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 sm:p-10 lg:p-12 border border-white/20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Britania Product Range
            </h1>
            <p className="text-xl sm:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Discover our full range of beverages, biscuits, and more—crafted for Uganda by Britania Allied Industries
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Biscuits Section */}
        <section id="biscuits" className="mb-20 bg-secondary-gray p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <div className="w-20 h-1 bg-brand-red rounded"></div>
            <h2 className="text-2xl font-semibold text-heading-gray ml-4">Biscuits</h2>
          </div>
          <p className="text-text-gray mb-8 max-w-3xl">
            Our delicious, crunchy biscuits are made from the finest ingredients, perfect for every occasion. Britania biscuits are a household favorite in Uganda.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Cream Biscuits",
                description: "Delicious cream-filled biscuits for a sweet treat",
                price: "UGX 2,500",
                features: ["Available in vanilla, chocolate and strawberry flavors", "Family pack size", "Perfect with tea or coffee"]
              },
              {
                name: "Digestive Biscuits",
                description: "Wholesome and nutritious digestive biscuits",
                price: "UGX 3,000",
                features: ["High in fiber", "Low sugar option", "Great for breakfast"]
              },
              {
                name: "Chocolate Coated Biscuits",
                description: "Crunchy biscuits with rich chocolate coating",
                price: "UGX 3,500",
                features: ["Premium quality chocolate", "Individually wrapped", "Ideal for special occasions"]
              }
            ].map((product, idx) => (
              <div key={idx} className="bg-white border border-light-gray rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:scale-105 duration-300">
                <div className="h-48 relative">
                  <img
                    src="/IMG_4045.jpg"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-brand-red text-white px-3 py-1 rounded-bl-lg">
                    {product.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-heading-gray">{product.name}</h3>
                  <p className="mt-2 text-text-gray">{product.description}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-heading-gray">Features:</h4>
                    <ul className="mt-2 space-y-1">
                      {product.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-brand-red mr-2" />
                          <span className="text-sm text-text-gray">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Juices Section */}
        <section id="juices" className="mb-20 bg-light-gray p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <div className="w-20 h-1 bg-brand-red rounded"></div>
            <h2 className="text-2xl font-semibold text-heading-gray ml-4">SPLASH Juices</h2>
          </div>
          <p className="text-text-gray mb-8 max-w-3xl">
            Our SPLASH juices are made from natural fruits, delivering refreshing taste and essential nutrients. A favorite among Ugandan families.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Orange SPLASH",
                description: "Refreshing orange juice with pulp",
                price: "UGX 2,000",
                features: ["100% natural", "No added preservatives", "Rich in Vitamin C"]
              },
              {
                name: "Mango SPLASH",
                description: "Sweet and tangy mango juice",
                price: "UGX 2,000",
                features: ["Made from premium mangoes", "No artificial colors", "Perfect tropical taste"]
              },
              {
                name: "Mixed Fruit SPLASH",
                description: "Blend of assorted fruits for maximum flavor",
                price: "UGX 2,200",
                features: ["Combination of 5 fruits", "Balanced nutrition", "Refreshing taste"]
              }
            ].map((product, idx) => (
              <div key={idx} className="bg-white border border-light-gray rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:scale-105 duration-300">
                <div className="h-48 relative">
                  <img
                    src="/WhatsApp Image 2023-07-27 at 5.32.43 PM.jpeg.jpg"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-brand-red text-white px-3 py-1 rounded-bl-lg">
                    {product.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-heading-gray">{product.name}</h3>
                  <p className="mt-2 text-text-gray">{product.description}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-heading-gray">Features:</h4>
                    <ul className="mt-2 space-y-1">
                      {product.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-brand-red mr-2" />
                          <span className="text-sm text-text-gray">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Drinking Water Section */}
        <section id="water" className="mb-20 bg-secondary-gray p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <div className="w-20 h-1 bg-brand-red rounded"></div>
            <h2 className="text-2xl font-semibold text-heading-gray ml-4">Drinking Water</h2>
          </div>
          <p className="text-text-gray mb-8 max-w-3xl">
            Our pure, refreshing water is processed using state-of-the-art purification technology to ensure the highest quality and safety standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Refresh Mineral Water",
                description: "Pure mineral water for healthy hydration",
                price: "UGX 1,500",
                features: ["Essential minerals", "Multiple sizes available", "Perfect for hydration"]
              },
              {
                name: "Refresh Sparkling Water",
                description: "Refreshing sparkling water with a twist",
                price: "UGX 2,000",
                features: ["Light carbonation", "Zero calories", "Ideal for mixing drinks"]
              },
              {
                name: "Refresh Alkaline Water",
                description: "Balanced pH water for health-conscious consumers",
                price: "UGX 2,500",
                features: ["pH balanced", "Extra hydration", "Ideal for active lifestyles"]
              }
            ].map((product, idx) => (
              <div key={idx} className="bg-white border border-light-gray rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:scale-105 duration-300">
                <div className="h-48 relative">
                  <img
                    src="/Picture1.png"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-brand-red text-white px-3 py-1 rounded-bl-lg">
                    {product.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-heading-gray">{product.name}</h3>
                  <p className="mt-2 text-text-gray">{product.description}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-heading-gray">Features:</h4>
                    <ul className="mt-2 space-y-1">
                      {product.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-brand-red mr-2" />
                          <span className="text-sm text-text-gray">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Quality Section */}
        <section className="bg-light-gray rounded-xl p-8 mb-12 shadow-md">
          <h2 className="text-2xl font-semibold text-heading-gray mb-6 text-center">Our Commitment to Quality</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium text-heading-gray mb-2">Highest Standards</h3>
              <p className="text-text-gray">All Britania products are manufactured under strict quality control and safety standards.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium text-heading-gray mb-2">Local Production</h3>
              <p className="text-text-gray">Proudly manufactured in Uganda, supporting the local economy and ensuring freshness.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium text-heading-gray mb-2">Natural Ingredients</h3>
              <p className="text-text-gray">We use the finest natural ingredients to deliver great taste and nutritional value.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-brand-red rounded-xl text-white p-8 shadow-md">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to try our products?</h2>
            <p className="mb-6 text-red-100">Find Britania SPLASH products at stores all across Uganda and East Africa</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/promotions" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-brand-red bg-white hover:bg-gray-200">
                View Current Promotions
              </a>
              <a href="/contact" className="inline-flex justify-center items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-brand-red">
                Contact Sales Team
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;