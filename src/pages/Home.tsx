import { useEffect, useRef, useState } from 'react';
import { Award, Heart, Briefcase, Gift, Star, MapPin, Users, Clock } from 'lucide-react';

// Custom hook for scroll-triggered animations
const useIntersectionObserver = <T extends HTMLElement = HTMLElement>(
  options: IntersectionObserverInit
): [React.RefObject<T>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

const Home = () => {
  const [heroTextRef, heroTextVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5 });
  const [trustBadgeRef, trustBadgeVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.3 });
  const [productShowcaseRef, productShowcaseVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.3 });
  const [brandStoryRef, brandStoryVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.3 });
  const [engagingContentRef, engagingContentVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.3 });
  const [testimonialsRef, testimonialsVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.3 });

  return (
    <div className="bg-light-gray text-text-gray">
      {/* Hero Section - Modern Design */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-red via-red-800 to-red-900 min-h-screen">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-warm-beige/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-red-300/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover object-center opacity-20"
            src="/Picture1.png"
            alt="Britania premium products showcase"  
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-red/80 via-red-800/60 to-red-900/40"></div>
        </div>

        {/* Main Content */}
        <div className="relative min-h-screen flex items-center justify-center">
          <div className="max-w-6xl mx-auto py-16 px-6 sm:py-18 sm:px-8 lg:py-20 lg:px-12 text-center">
            <div
              ref={heroTextRef}
              className={`transform transition-all duration-1000 ease-out ${heroTextVisible ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-4'}`}
            >
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                <Award className="h-5 w-5 text-warm-beige mr-2" />
                <span className="text-warm-beige text-sm font-semibold">EST. 1991 • HOUSE OF DAWDA GROUP • 30+ YEARS OF EXCELLENCE</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-tight">
                <span className="block bg-gradient-to-r from-white via-warm-beige to-white bg-clip-text text-transparent">
                  BRITANIA
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-warm-beige mt-2">
                  Uganda's Trusted Choice
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl lg:text-3xl text-red-100 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
                Crafting <span className="text-warm-beige font-semibold">premium fruit drinks</span>, <span className="text-warm-beige font-semibold">quality biscuits</span>, and <span className="text-warm-beige font-semibold">delicious confectioneries</span> that bring families together across Uganda
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-warm-beige mb-2">7K+</div>
                  <div className="text-sm text-red-200">Group Employees</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-warm-beige mb-2">$380M</div>
                  <div className="text-sm text-red-200">Group Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-warm-beige mb-2">30+</div>
                  <div className="text-sm text-red-200">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-warm-beige mb-2">1962</div>
                  <div className="text-sm text-red-200">Group Founded</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="#products"
                  className="group relative overflow-hidden px-10 py-5 bg-white text-brand-red font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 min-w-[200px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-warm-beige to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    <span>Explore Products</span>
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </a>
                
                <a
                  href="#story"
                  className="group px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-2xl hover:bg-white hover:text-brand-red transform hover:scale-105 transition-all duration-300 min-w-[200px] text-center"
                >
                  <div className="flex items-center justify-center">
                    <Heart className="mr-2 w-5 h-5" />
                    <span>Our Story</span>
                  </div>
                </a>
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Showcase - Featured Products */}
      <section
        id="products"
        ref={productShowcaseRef}
        className={`py-12 bg-gradient-to-br from-gray-50 via-white to-warm-beige/20 transform transition-all duration-1000 ease-out ${productShowcaseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-block">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-1 bg-brand-red rounded-full mr-3"></div>
                <Star className="h-8 w-8 text-brand-red" />
                <div className="w-12 h-1 bg-brand-red rounded-full ml-3"></div>
              </div>
              <h2 className="text-5xl sm:text-6xl font-black text-heading-gray mb-6">
                Our Premium
                <span className="block text-brand-red">Product Range</span>
              </h2>
              <p className="text-xl sm:text-2xl text-text-gray max-w-4xl mx-auto leading-relaxed">
                Discover our carefully crafted selection of beverages, snacks, and confectioneries that have been 
                <span className="text-brand-red font-semibold"> delighting families for generations</span>
              </p>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: 'Splash Fruit Drinks', 
                image: '/WhatsApp Image 2023-07-27 at 5.32.43 PM.jpeg.jpg', 
                href: '/products#splash', 
                tag: 'Bestseller',
                color: 'bg-gradient-to-br from-orange-500 to-red-500',
                description: 'Our flagship fruit drink brand loved by families across Uganda. Refreshing and delicious.',
                features: ['Premium Fruit Drinks', 'Trusted Brand', 'Multiple Flavors']
              },
              { 
                name: 'Britania Quality Biscuits', 
                image: '/IMG_4045.jpg', 
                href: '/products#biscuits', 
                tag: 'Since 1991',
                color: 'bg-gradient-to-br from-amber-500 to-orange-600',
                description: 'Crispy, golden, and perfectly baked. Our signature biscuits and confectioneries made with care.',
                features: ['Quality Ingredients', 'Crispy Texture', 'Family Favorite']
              },
              { 
                name: 'Premium Beverage Range', 
                image: '/Picture1.png', 
                href: '/products#beverages', 
                tag: 'Complete Range',
                color: 'bg-gradient-to-br from-blue-500 to-cyan-500',
                description: 'Including Yojus, SunSip, TopUp and more. Complete beverage solutions for every occasion.',
                features: ['Multiple Brands', 'Quality Assured', 'Wide Distribution']
              },
            ].map((product, idx) => (
              <div key={product.name} className="group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-700 bg-white border border-gray-100">
                  {/* Image Container with proper aspect ratio and cover behavior */}
                  <div className="relative w-full h-56 overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Tag */}
                  <div className="absolute top-6 left-6">
                    <span className={`${product.color} text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm`}>
                      {product.tag}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-heading-gray mb-2 group-hover:text-brand-red transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-text-gray mb-3 leading-relaxed text-base">
                      {product.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-text-gray">
                          <div className="w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center mr-3">
                            <Star className="h-3 w-3 text-brand-red" />
                          </div>
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <a
                      href={product.href}
                      className="group/btn relative overflow-hidden w-full px-6 py-2 bg-brand-red text-white font-bold text-base rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center">
                        <span>Explore Range</span>
                        <svg className="ml-3 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10">
            <div className="inline-block">
              <a
                href="/products"
                className="group relative overflow-hidden px-10 py-3 bg-gradient-to-r from-brand-red to-red-700 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center">
                  <span>View Complete Product Range</span>
                  <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section - Modern Heritage Design */}
      <section
        id="story"
        ref={brandStoryRef}
        className={`relative overflow-hidden py-12 bg-gradient-to-br from-slate-900 via-brand-red to-red-900 transform transition-all duration-1000 ease-out ${brandStoryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-warm-beige/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="/IMG_4045.jpg"
            alt="Britania heritage"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-red/80 via-transparent to-brand-red/60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
              <Clock className="h-5 w-5 text-warm-beige mr-2" />
              <span className="text-warm-beige text-sm font-semibold">EST. 1991 • 30+ YEARS OF EXCELLENCE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              A Legacy of
              <span className="block bg-gradient-to-r from-warm-beige to-yellow-200 bg-clip-text text-transparent">
                Trust & Excellence
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-warm-beige to-yellow-200 mx-auto"></div>
          </div>
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Story Content */}
            <div className="space-y-4">
              <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-warm-beige rounded-2xl flex items-center justify-center mr-3">
                    <Award className="h-5 w-5 text-brand-red" />
                  </div>
                  <h3 className="text-xl font-bold text-warm-beige">Our Journey</h3>
                </div>
                <p className="text-white text-base leading-relaxed">
                  Since 1991, Britania Allied Industries Limited has been a proud member of the House of Dawda Group, manufacturing quality biscuits, fruit drinks, and confectioneries. Part of a respected conglomerate with roots dating back to 1962, founded by Hasmukh Dawda.
                </p>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-warm-beige rounded-2xl flex items-center justify-center mr-3">
                    <Heart className="h-5 w-5 text-brand-red" />
                  </div>
                  <h3 className="text-xl font-bold text-warm-beige">Our Promise</h3>
                </div>
                <p className="text-white text-base leading-relaxed">
                  Every product that bears the Britania name represents our unwavering commitment to quality manufacturing, from our headquarters in Kampala's Ntinda Industrial Area to families across Uganda.
                </p>
              </div>
              
              <div className="pt-2">
                <a
                  href="/about"
                  className="group relative overflow-hidden inline-flex items-center px-6 py-3 bg-white text-brand-red font-bold text-base rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-warm-beige to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center">
                    <span>Read Our Complete Story</span>
                    <svg className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Award, number: "1962", label: "Group Founded", color: "from-yellow-400 to-orange-500" },
                { icon: Users, number: "7K+", label: "Group Employees", color: "from-green-400 to-blue-500" },
                { icon: MapPin, number: "Uganda", label: "Headquarters", color: "from-purple-400 to-pink-500" },
                { icon: Clock, number: "30+", label: "Years Experience", color: "from-blue-400 to-cyan-500" }
              ].map((stat, idx) => (
                <div key={idx} className="group text-center bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300">
                  <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-black text-white mb-1 group-hover:text-warm-beige transition-colors duration-300">
                    {stat.number}
                  </h4>
                  <p className="text-warm-beige font-medium text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engaging Content Section - Modern Services */}
      <section
        ref={engagingContentRef}
        className={`py-12 bg-gradient-to-br from-gray-50 via-warm-beige/30 to-white overflow-hidden transform transition-all duration-1000 ease-out ${engagingContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-warm-beige/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-6 py-3 bg-brand-red/10 backdrop-blur-sm rounded-full border border-brand-red/20 mb-4">
              <Star className="h-5 w-5 text-brand-red mr-2" />
              <span className="text-brand-red text-sm font-semibold">DISCOVER MORE WITH BRITANIA</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-heading-gray mb-4">
              More Than Just
              <span className="block text-brand-red">Products</span>
            </h2>
            <p className="text-lg sm:text-xl text-text-gray max-w-3xl mx-auto leading-relaxed">
              Discover creative ways to enjoy our products and make every moment special with 
              <span className="text-brand-red font-semibold"> Britania</span>
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Gift,
                title: "Special Promotions",
                description: "Discover our latest offers and bundle deals. Save more when you buy your favorite products together.",
                href: "/promotions",
                color: "from-pink-500 to-rose-500",
                bgColor: "bg-gradient-to-br from-pink-50 to-rose-50"
              },
              {
                icon: Heart,
                title: "Recipe Ideas",
                description: "Get creative with our products! Discover delicious recipes and serving suggestions for every occasion.",
                href: "#",
                color: "from-red-500 to-pink-500",
                bgColor: "bg-gradient-to-br from-red-50 to-pink-50"
              },
              {
                icon: Briefcase,
                title: "Join Our Team",
                description: "Be part of a dynamic team that's shaping the future of food and beverages in Uganda.",
                href: "/careers",
                color: "from-brand-red to-red-600",
                bgColor: "bg-gradient-to-br from-red-50 to-orange-50"
              }
            ].map((service, idx) => (
              <div key={idx} className="group">
                <div className={`relative overflow-hidden ${service.bgColor} rounded-3xl p-5 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105`}>
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center shadow-lg mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-heading-gray mb-3 group-hover:text-brand-red transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-text-gray mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* CTA Button */}
                    <a 
                      href={service.href} 
                      className={`group/btn relative overflow-hidden inline-flex items-center px-5 py-2 bg-gradient-to-r ${service.color} text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center">
                        <span className="text-sm">{service.title === "Special Promotions" ? "View Offers" : service.title === "Recipe Ideas" ? "Explore Recipes" : "View Careers"}</span>
                        <svg className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials - Enhanced Design */}
      <section
        ref={testimonialsRef}
        className={`relative py-12 bg-gradient-to-br from-slate-50 via-gray-100 to-warm-beige/20 overflow-hidden transform transition-all duration-1000 ease-out ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-brand-red/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-warm-beige/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 mb-4 shadow-sm">
              <Users className="h-5 w-5 text-brand-red mr-2" />
              <span className="text-brand-red text-sm font-semibold">CUSTOMER TESTIMONIALS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-heading-gray mb-4">
              Trusted by Families
              <span className="block text-brand-red">Across Uganda</span>
            </h2>
            <p className="text-lg sm:text-xl text-text-gray max-w-3xl mx-auto leading-relaxed">
              Here's what our customers say about their 
              <span className="text-brand-red font-semibold"> Britania experience</span>
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Amina Okoro",
                location: "Kampala, Uganda",
                image: "https://randomuser.me/api/portraits/women/68.jpg",
                text: "Britania products have been part of our family for over 15 years. The quality never disappoints, and my children absolutely love the juice flavors!",
                rating: 5
              },
              {
                name: "David Mwangi",
                location: "Jinja, Uganda",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                text: "As a retailer, I trust Britania products because my customers always come back for more. The brand reputation speaks for itself.",
                rating: 5
              },
              {
                name: "Sarah Johnson",
                location: "Entebbe, Uganda",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                text: "The new biscuit flavors are amazing! Perfect with my morning tea, and the packaging keeps them fresh for longer.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="group">
                <div className="relative bg-white rounded-3xl p-5 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:scale-105">
                  {/* Quote Icon */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-brand-red to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                  
                  {/* Stars */}
                  <div className="flex items-center mb-3 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-base text-text-gray mb-4 leading-relaxed text-center italic">
                    "{testimonial.text}"
                  </blockquote>
                  
                  {/* Customer Info */}
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <img 
                        className="h-10 w-10 rounded-2xl object-cover shadow-lg ring-4 ring-white" 
                        src={testimonial.image} 
                        alt={testimonial.name}
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4 text-center">
                      <div className="text-base font-bold text-heading-gray">{testimonial.name}</div>
                      <div className="text-sm text-text-gray flex items-center justify-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Modern Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-red via-red-800 to-red-900 py-12">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-80 h-80 bg-warm-beige/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-300/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="/Picture1.png"
            alt="Britania products"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-red/60 to-transparent"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center px-6 sm:px-8 lg:px-12">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
            <Heart className="h-5 w-5 text-warm-beige mr-2" />
            <span className="text-warm-beige text-sm font-semibold">JOIN THE BRITANIA FAMILY</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
            Ready to Taste
            <span className="block bg-gradient-to-r from-warm-beige to-yellow-200 bg-clip-text text-transparent">
              the Difference?
            </span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-red-100 max-w-4xl mx-auto mb-6 leading-relaxed font-light">
            Join thousands of satisfied customers who choose 
            <span className="text-warm-beige font-semibold"> Britania for quality and taste across Uganda</span>
          </p>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-warm-beige mb-1">7K+</div>
              <div className="text-xs text-red-200">Group Employees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-warm-beige mb-1">$380M</div>
              <div className="text-xs text-red-200">Group Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-warm-beige mb-1">30+</div>
              <div className="text-xs text-red-200">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-warm-beige mb-1">1991</div>
              <div className="text-xs text-red-200">Est. Date</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="/products"
              className="group relative overflow-hidden px-8 py-4 bg-white text-brand-red font-bold text-lg rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 min-w-[200px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-warm-beige to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center">
                <span>Shop Our Products</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </a>
            
            <a
              href="/about"
              className="group px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-3xl hover:bg-white hover:text-brand-red transform hover:scale-105 transition-all duration-300 min-w-[200px] text-center"
            >
              <div className="flex items-center justify-center">
                <Award className="mr-2 w-5 h-5" />
                <span>Learn More About Us</span>
              </div>
            </a>
          </div>
          
          {/* Additional Info */}
          <div className="pt-4 border-t border-white/20">
            <p className="text-red-200 text-base">
              🏭 <span className="text-warm-beige font-semibold">Manufactured in Uganda</span> | 
              🏆 <span className="text-warm-beige font-semibold">30+ years</span> of experience | 
              🌟 <span className="text-warm-beige font-semibold">Trusted brands</span> like Splash, Yojus, SunSip & TopUp
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;