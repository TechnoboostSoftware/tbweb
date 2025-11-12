import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import Logo from "../assets/logo.svg";
const FooterShopify = () => {
  return (
    <footer className="bg-[#05070f] text-white mt-12">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Left Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 cursor-pointer">
              <img
                src={Logo}
                alt="Technoboost Logo"
                className="h-4 lg:h-7 object-contain"
              />
            </div>

            <p className="text-gray-300 leading-relaxed mb-8 max-w-md">
              We're Technoboost. A group of dedicated individuals collaborating
              on amazing initiatives and fostering lasting relationships that go
              far beyond just the final product.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[var(--teal-primary)]" />
                <span className="text-gray-300">
                  24, 2nd Floor, Shree Durga Arcade 1st Cross Rd, Kasavanahalli
                </span>
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
              {[
                "Custom Shopify Development",
                "Store Setup & Configuration",
                "App Customisation",
                "App Integrations",
                "Platform Migration",
              ].map((item, i) => (
                <li key={i}>
                  <button className="text-gray-300 hover:text-[var(--teal-accent)] transition-colors duration-200 text-left">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <button className="text-gray-300 hover:text-[var(--teal-accent)] transition-colors duration-200 text-left">
                  About Us
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-[var(--teal-accent)] transition-colors duration-200 text-left">
                  Contact
                </button>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/technoboost-services/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-[var(--teal-primary)] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
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
              © {new Date().getFullYear()} Technoboost. All rights reserved.
            </div>

            <div className="flex space-x-6 text-sm">
              <button
                onClick={() => (window.location.hash = "privacy-policy")}
                className="text-gray-400 hover:text-[var(--teal-accent)] transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => (window.location.hash = "terms-of-service")}
                className="text-gray-400 hover:text-[var(--teal-accent)] transition-colors duration-200"
              >
                Terms of Service
              </button>
              <button
                onClick={() => (window.location.hash = "cookie-policy")}
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
};

export default FooterShopify;
