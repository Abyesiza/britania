import { useEffect, useRef, useState } from 'react';
import { Award, Heart, Briefcase, Gift, Star, MapPin, Users, Clock, ChevronLeft, ChevronRight, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

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

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  discount: string;
  description: string;
  href: string;
}

const HeroProductCarousel = ({ products }: { products: Product[] }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % products.length);
        }, 5000);
        return () => clearTimeout(timer);
    }, [currentSlide, products.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
    };

    return (
        <div className="relative w-full max-w-md mx-auto lg:max-w-lg">
            <div className="relative h-80 sm:h-96 overflow-hidden rounded-3xl shadow-2xl border-4 border-white/20 backdrop-blur-md">
                {products.map((product, index) => (
                    <div
                        key={product.id}
                        className={`absolute inset-0 bg-black/20 transition-all duration-700 ease-in-out ${
                            index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0'
                        } ${ index > currentSlide ? 'translate-x-full' : '-translate-x-full' }`}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                            <div className="mb-2 inline-block bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full">{product.discount}</div>
                            <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                            <p className="text-warm-beige">{product.category}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Controls */}
            <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white rounded-full text-gray-800 shadow-lg transform -translate-x-1/2 hover:scale-110 transition-all">
                <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white rounded-full text-gray-800 shadow-lg transform translate-x-1/2 hover:scale-110 transition-all">
                <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
                {products.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentSlide === idx ? 'bg-white scale-125' : 'bg-white/50'
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

const Home = () => {
  const [heroTextRef, heroTextVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5 });
  const [trustBadgeRef, trustBadgeVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.3 });
  const [productShowcaseRef, productShowcaseVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.3 });
  const [engagingContentRef, engagingContentVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.3 });
  const [testimonialsRef, testimonialsVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.3 });
  const [socialsRef, socialsVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.3 });

  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const nativeImages = [
    '/Picture1.png',
    '/Picture2.png',
    '/Picture3.png',
    '/Britania Logo.png',
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Splash Kachupa",
      category: "Beverages",
      image: "/Picture2.png",
      discount: "REFRESHING",
      description: "Apple flavored juice drink.",
      href: "/products#splash"
    },
    {
      id: 2,
      name: "Yojus Apple",
      category: "Beverages",
      image: "/Picture1.png",
      discount: "FAMILY SIZE",
      description: "1L pack of delicious apple fruit drink.",
      href: "/products#yojus"
    },
    {
      id: 3,
      name: 'Refresh Water',
      category: "Water",
      image: "/Picture3.png",
      discount: "HYDRATE",
      description: 'Purified drinking water to chill the heat.',
      href: '/products#water'
    },
    {
      id: 4,
      name: "Premium Biscuits",
      category: "Confectionery",
      image: "/IMG_4045.jpg",
      discount: "CRUNCHY",
      description: "Delicious baked biscuits for every occasion.",
      href: '/products#biscuits'
    },
    {
      id: 5,
      name: "SunSip Energy Drink",
      category: "Beverages",
      image: "https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg?auto=compress&cs=tinysrgb&w=400",
      discount: "10% OFF",
      description: "Energizing drink for active lifestyles",
      href: '/products#beverages'
    },
    {
      id: 6,
      name: "Tomato Sauce",
      category: "Sauces",
      image: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=400",
      discount: "5% OFF",
      description: "Rich and flavorful tomato sauce",
      href: '/products#sauces'
    }
  ];

  const scrollToProduct = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 320 + 24; // w-80 (320px) + gap-6 (24px)
      const scrollAmount = cardWidth * 2;
      
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cardWidth = 320 + 24;
        const newIndex = Math.round(container.scrollLeft / cardWidth);
        setCurrentProductIndex(newIndex);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="bg-navy-blue text-white">
      {/* Hero Section - Modern Design */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-red via-blue-800 to-blue-900 min-h-[80vh] flex items-center">
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
        <div className="relative w-full">
          <div className="max-w-7xl w-full mx-auto py-12 px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div
              ref={heroTextRef}
              className={`transform transition-all duration-1000 ease-out ${heroTextVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'} text-center lg:text-left`}
            >
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <Award className="h-5 w-5 text-warm-beige mr-2" />
                <span className="text-warm-beige text-xs font-semibold tracking-wider uppercase">30+ Years of Excellence</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white mb-4 leading-tight">
                <span className="block bg-gradient-to-r from-white via-warm-beige to-white bg-clip-text text-transparent">
                  BRITANIA
                </span>
                <span className="block text-3xl sm:text-4xl xl:text-5xl font-bold text-warm-beige mt-1">
                  Uganda's Trusted Choice
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-red-100 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Premium fruit drinks, quality biscuits, and delicious confectioneries for families across Uganda.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <a
                  href="#products"
                  className="group relative overflow-hidden px-8 py-4 bg-white text-brand-red font-bold text-base rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 min-w-[200px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-warm-beige to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    <span>View Our Products</span>
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <HeroProductCarousel products={products.slice(0, 3)} />
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
            <div className="inline-flex items-center justify-center mb-4">
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
          
          {/* Product Carousel */}
          <div className="relative">
            <button 
              onClick={() => scrollToProduct('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-brand-red hover:bg-red-700 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentProductIndex === 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={() => scrollToProduct('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-brand-red hover:bg-red-700 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentProductIndex >= products.length - 2}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12"
              style={{ scrollbarWidth: 'none' }}
            >
              {products.map((product, index) => (
                <div 
                  key={product.id} 
                  className="flex-shrink-0 w-80 bg-white border-gray-200 rounded-2xl shadow-lg hover:border-brand-red/50 transition-all duration-500 group cursor-pointer transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg bg-gray-100">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-56 object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                        {product.discount}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4 space-y-2">
                      <p className="text-sm text-gray-500 uppercase tracking-wide">{product.category}</p>
                      <h3 className="text-xl font-semibold text-heading-gray group-hover:text-brand-red transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-text-gray text-sm">{product.description}</p>
                      <div className="flex items-center justify-end pt-2">
                        <a href={product.href} className="bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 text-sm font-semibold">
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(products.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    Math.floor(currentProductIndex / 2) === index 
                      ? 'bg-brand-red scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => {
                    if (scrollContainerRef.current) {
                      const cardWidth = 320 + 24;
                      scrollContainerRef.current.scrollTo({
                        left: index * cardWidth * 2,
                        behavior: 'smooth'
                      });
                    }
                  }}
                />
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10">
            <div className="inline-block">
              <a
                href="/products"
                className="group relative overflow-hidden px-10 py-3 bg-gradient-to-r from-brand-red to-red-700 text-black font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative flex items-center">
                  <span>View Complete Product Range</span>
                  <svg 
                    className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300 ease-out" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </a>
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

      {/* Social Media Section */}
      <section ref={socialsRef} className={`py-20 bg-warm-beige/20 text-text-gray transform transition-all duration-1000 ease-out ${socialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-heading-gray">
              GET <span className="text-brand-red">SOCIAL</span>
            </h2>
            <p className="text-xl text-gray-600">
              Follow us for the latest updates, behind-the-scenes content, and product launches
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[...Array(8)].map((_, index) => (
              <div 
                key={index} 
                className="relative group cursor-pointer"
              >
                <img 
                  src={nativeImages[index % nativeImages.length]}
                  alt={`Social post ${index + 1}`}
                  className="w-full h-48 object-contain rounded-lg transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white animate-bounce" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg mb-6">Let's take it to the next level. Follow us for daily updates.</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center hover:bg-red-700 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:rotate-12">
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center hover:bg-red-700 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:rotate-12">
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center hover:bg-red-700 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:rotate-12">
                <Twitter className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center hover:bg-red-700 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:rotate-12">
                <Youtube className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;