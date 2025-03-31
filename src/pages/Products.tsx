import React from 'react';

const Products = () => {
  return (
    <div className="bg-white">
      <div className="relative bg-red-600 py-16">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/Picture1.png" 
            alt="Products background" 
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Discover Britania's range of quality products, commonly known as SPLASH, bringing refreshment to millions of families in Uganda
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Biscuits Section */}
        <section id="biscuits" className="mb-20">
          <div className="flex items-center mb-6">
            <div className="w-20 h-1 bg-red-600 rounded"></div>
            <h2 className="text-2xl font-semibold text-gray-900 ml-4">Biscuits</h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl">
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
              <div key={idx} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:scale-105 duration-300">
                <div className="h-48 relative">
                  <img
                    src="/IMG_4045.jpg"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 rounded-bl-lg">
                    {product.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <p className="mt-2 text-gray-600">{product.description}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700">Features:</h4>
                    <ul className="mt-2 space-y-1">
                      {product.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start">
                          <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-600">{feature}</span>
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
        <section id="juices" className="mb-20">
          <div className="flex items-center mb-6">
            <div className="w-20 h-1 bg-red-600 rounded"></div>
            <h2 className="text-2xl font-semibold text-gray-900 ml-4">SPLASH Juices</h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl">
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
              <div key={idx} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:scale-105 duration-300">
                <div className="h-48 relative">
                  <img
                    src="/WhatsApp Image 2023-07-27 at 5.32.43 PM.jpeg.jpg"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 rounded-bl-lg">
                    {product.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <p className="mt-2 text-gray-600">{product.description}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700">Features:</h4>
                    <ul className="mt-2 space-y-1">
                      {product.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start">
                          <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-600">{feature}</span>
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
        <section id="water" className="mb-20">
          <div className="flex items-center mb-6">
            <div className="w-20 h-1 bg-red-600 rounded"></div>
            <h2 className="text-2xl font-semibold text-gray-900 ml-4">Drinking Water</h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl">
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
              <div key={idx} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:scale-105 duration-300">
                <div className="h-48 relative">
                  <img
                    src="/Picture1.png"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 rounded-bl-lg">
                    {product.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <p className="mt-2 text-gray-600">{product.description}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700">Features:</h4>
                    <ul className="mt-2 space-y-1">
                      {product.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start">
                          <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-600">{feature}</span>
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
        <section className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Our Commitment to Quality</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Highest Standards</h3>
              <p className="text-gray-600">All Britania products are manufactured under strict quality control and safety standards.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Local Production</h3>
              <p className="text-gray-600">Proudly manufactured in Uganda, supporting the local economy and ensuring freshness.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Natural Ingredients</h3>
              <p className="text-gray-600">We use the finest natural ingredients to deliver great taste and nutritional value.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-red-600 rounded-xl text-white p-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to try our products?</h2>
            <p className="mb-6">Find Britania SPLASH products at stores all across Uganda and East Africa</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/promotions" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50">
                View Current Promotions
              </a>
              <a href="/contact" className="inline-flex justify-center items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-red-700">
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