import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
// import newLogo from 'figma:asset/76d4447ee4e782a568c85b015f75833f8a1afcc0.png';
import newLogo from '../components/assets/technoboosticonWhite.png';

export function ModernFooter() {
  const services = [
    "UX/UI Design",
    "Software Development",
    "AI & Automation",
    "Data Analytics",
    "Smart-sheet solutions",
    "Product Engineering"
  ];

  const company = [
    "About Us",
    "Careers",
    "Case Studies",
    "Contact"
  ];

  const handleCompanyClick = (item: string) => {
    switch (item) {
      case "About Us":
        window.location.hash = 'about';
        break;
      case "Careers":
        window.location.hash = 'careers';
        break;
      case "Case Studies":
        window.location.hash = 'work';
        break;
      case "Contact":
        window.location.hash = 'contact';
        break;
      default:
        // For other items that don't have pages yet
        break;
    }
  };

  const handleServiceClick = (service: string) => {
    switch (service) {
      case "UX/UI Design":
        window.location.hash = 'ux-ui-design';
        break;
      case "Software Development":
        window.location.hash = 'web-development';
        break;
      case "AI & Automation":
        window.location.hash = 'ai-automation';
        break;
      case "Data Analytics":
        window.location.hash = 'data-analytics';
        break;
      case "Smart-sheet solutions":
        window.location.hash = 'smartsheet-solutions';
        break;
      case "Product Engineering":
        window.location.hash = 'product-engineering';
        break;
      default:
        // For other services that don't have pages yet
        break;
    }
  };

  return (
    <footer className="bg-[var(--dark-primary)] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 cursor-pointer">
              <img 
                src={newLogo} 
                alt="Technoboost Logo" 
                className="h-10 lg:h-20 w-auto object-contain"
              />
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-8 max-w-md">
              We're Technoboost. A group of dedicated individuals collaborating on amazing initiatives and fostering lasting relationships that go far beyond just the final product.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[var(--teal-primary)]" />
                <span className="text-gray-300">24, 2nd Floor, Shree Durga Arcade 1st Cross Rd, Kasavanahalli</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[var(--teal-primary)]" />
                <span className="text-gray-300">contactus@technoboost.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[var(--teal-primary)]" />
                <span className="text-gray-300">+91 9632968050</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleServiceClick(service)}
                    className="text-gray-300 hover:text-[var(--teal-accent)] transition-colors duration-200 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleCompanyClick(item)}
                    className="text-gray-300 hover:text-[var(--teal-accent)] transition-colors duration-200 text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/technoboost-services/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-[var(--teal-primary)] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Technoboost. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <button 
                onClick={() => window.location.hash = 'privacy-policy'}
                className="text-gray-400 hover:text-[var(--teal-accent)] transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => window.location.hash = 'terms-of-service'}
                className="text-gray-400 hover:text-[var(--teal-accent)] transition-colors duration-200"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => window.location.hash = 'cookie-policy'}
                className="text-gray-400 hover:text-[var(--teal-accent)] transition-colors duration-200"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}