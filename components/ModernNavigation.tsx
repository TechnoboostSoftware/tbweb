import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, ArrowRight } from "lucide-react";
import technoboostLogo from '../components/assets/technoboostIcon.png';


interface NavigationProps {
  currentRoute?: string;
}

export function ModernNavigation({ currentRoute = 'home' }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: "Services", href: "expertise" },
    { name: "About", href: "about" },
    { name: "Case Studies", href: "work" }
  ];

  const handleLogoClick = () => {
    window.location.hash = 'home';
  };

  const handleNavClick = (href: string) => {
  setIsOpen(false);
  window.location.hash = href; // Update the hash

  // Smooth scroll to the section
  setTimeout(() => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 100); // small delay allows hash change to complete
};


  // const handleNavClick = (href: string) => {
  //   setIsOpen(false);
  //   if (href.startsWith('#')) {
  //     // If we're not on home page, go to home first
  //     if (currentRoute !== 'home') {
  //      window.location.hash = 'expertise';
  //       setTimeout(() => {
  //         const element = document.querySelector(href);
  //         if (element) {
  //           element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //         }
  //       }, 300);
  //     } else {
  //       window.location.hash = 'expertise';
  //       setTimeout(() => {
  //         const element = document.querySelector(href);
  //         if (element) {
  //           element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //         }
  //       }, 100);
  //     }
  //   } else {
  //     // For route navigation
  //     window.location.hash = href;
  //   }
  // };

  const handleContactClick = () => {
    setIsOpen(false);
    window.location.hash = 'contact';
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center hover:opacity-80 transition-opacity cursor-pointer">
            <img 
              src={technoboostLogo} 
              alt="Technoboost Logo" 
              className="h-8 lg:h-9 w-auto object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`font-medium transition-colors duration-200 cursor-pointer ${
                  currentRoute === item.href 
                    ? 'text-[var(--teal-primary)]' 
                    : 'text-gray-700 hover:text-[var(--teal-primary)]'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              onClick={handleContactClick}
              className="bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] hover:from-[var(--teal-secondary)] hover:to-[var(--teal-primary)] text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg border-0 cursor-pointer"
            >
              Let's Connect
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-gray-700 hover:text-[var(--teal-primary)] hover:bg-gray-100/50"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent 
              side="right" 
              className="w-full sm:w-80 bg-white border-l border-gray-200 p-0 z-50"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 cursor-pointer">
                  <img 
                    src={technoboostLogo} 
                    alt="Technoboost Logo" 
                    className="h-6 w-auto object-contain"
                  />
                </div>

                {/* Mobile Navigation */}
                <div className="flex-1 px-6 py-8">
                  <div className="flex flex-col space-y-8">
                    {navigationItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        className={`text-left text-xl font-medium transition-colors duration-200 py-2 border-b border-transparent hover:border-[var(--teal-primary)] ${
                          currentRoute === item.href 
                            ? 'text-[var(--teal-primary)] border-[var(--teal-primary)]' 
                            : 'text-gray-700 hover:text-[var(--teal-primary)]'
                        }`}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="p-6 border-t border-gray-200">
                  <Button 
                    onClick={handleContactClick}
                    className="w-full bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] hover:from-[var(--teal-secondary)] hover:to-[var(--teal-primary)] text-white py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg border-0 text-lg"
                  >
                    Let's Connect
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}