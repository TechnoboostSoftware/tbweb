import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Import the client logo images with correct asset paths
import kushalsImg from '../components/assets/kushalsIcon.jpg';
import text2motionImg from '../components/assets/texttoMotionIcon.jpg';
import stridesImg from '../components/assets/stridesIcon.jpg';
import newClientImg from '../components/assets/truevisualIcon.jpg';
import anotherClientImg from '../components/assets/kocIcon.jpg';

export function ClientsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout>();

  // Client logos data - using only the 5 provided real logos
  const clients = [
    {
      id: 1,
      name: "Kushals",
      logo: kushalsImg,
      width: 180,
      height: 60
    },
    {
      id: 2,
      name: "Text2Motion",
      logo: text2motionImg,
      width: 160,
      height: 60
    },
    {
      id: 3,
      name: "Strides",
      logo: stridesImg,
      width: 180,
      height: 60
    },
    {
      id: 4,
      name: "Client Logo",
      logo: newClientImg,
      width: 170,
      height: 55
    },
    {
      id: 5,
      name: "Partner Logo",
      logo: anotherClientImg,
      width: 150,
      height: 55
    }
  ];

  const totalSlides = Math.ceil(clients.length / 2); // For mobile (2 per slide)

  // Auto-scroll functionality - slowed down for better UX
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 6000); // Increased from 4000ms to 6000ms for slower scrolling
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const renderClientLogo = (client: any, maxHeight: string = "max-h-16", scaleFactor: number = 1) => {
    return (
      <ImageWithFallback
        src={client.logo}
        alt={`${client.name} logo`}
        width={client.width * scaleFactor}
        height={client.height * scaleFactor}
        className={`${maxHeight} object-contain hover:scale-110 transition-transform duration-300 cursor-pointer`}
      />
    );
  };

  return (
    <div className="pt-16 border-t border-gray-200">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-[var(--dark-primary)] mb-2">
          Trusted by Our Clients
        </h3>
        <p className="text-gray-600">
          Partnering with forward-thinking companies to drive digital transformation
        </p>
      </div>

      {/* Desktop View - All logos visible */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-center space-x-12 py-8">
          {clients.map((client) => (
            <div
              key={client.id}
              className="clients-carousel-item flex items-center justify-center h-16 px-4"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {renderClientLogo(client)}
            </div>
          ))}
        </div>
      </div>

      {/* Tablet View - 4 logos visible with scrolling */}
      <div className="hidden md:block lg:hidden">
        <div className="relative overflow-hidden py-8">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentSlide * (100 / Math.ceil(clients.length / 4))}%)`,
              width: `${Math.ceil(clients.length / 4) * 100}%`
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {clients.map((client) => (
              <div
                key={client.id}
                className="clients-carousel-item flex items-center justify-center h-16 px-4"
                style={{ width: `${100 / clients.length}%` }}
              >
                {renderClientLogo(client, "max-h-12", 0.8)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View - 2 logos per slide with improved layout */}
      <div className="block md:hidden">
        <div className="relative overflow-hidden py-8">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ 
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${totalSlides * 100}%`
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {Array.from({ length: totalSlides }, (_, slideIndex) => {
              const slideClients = clients.slice(slideIndex * 2, slideIndex * 2 + 2);
              return (
                <div 
                  key={slideIndex} 
                  className="flex items-center justify-center min-h-[80px]" 
                  style={{ width: `${100 / totalSlides}%` }}
                >
                  {slideClients.map((client) => (
                    <div
                      key={client.id}
                      className={`clients-carousel-item flex items-center justify-center h-16 px-3 ${
                        slideClients.length === 1 ? 'w-full' : 'w-1/2'
                      }`}
                    >
                      {renderClientLogo(client, "max-h-12", 0.7)}
                    </div>
                  ))}
                  {/* Fill empty space if only one logo in slide */}
                  {slideClients.length === 1 && (
                    <div className="w-1/2 flex items-center justify-center h-16">
                      {/* Empty space for single logo slides */}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows - Mobile Only */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous clients"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next clients"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Dot Indicators - Mobile Only */}
        <div className="flex justify-center space-x-2 mt-4">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-[var(--teal-primary)] w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Know More Button */}
      <div className="flex justify-center mt-8">
        <Button 
          onClick={() => window.location.hash = 'projects'}
          variant="outline"
          className="border-[var(--teal-primary)] text-[var(--teal-primary)] hover:bg-[var(--teal-primary)] hover:text-white transition-all duration-300 cursor-pointer"
        >
          Know More
        </Button>
      </div>
    </div>
  );
}