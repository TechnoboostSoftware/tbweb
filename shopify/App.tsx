import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Capabilities } from "./components/Capabilities";
import { Process } from "./components/Process";
import { Clients } from "./components/Clients";
import { Pricing } from "./components/Pricing";
import { About } from "./components/About";
import { AuditForm } from "./components/AuditForm";
import { ContactModal } from "./components/ContactModal";
import { MessageCircle, MapPin, Mail, Phone, Linkedin } from "lucide-react";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsOfService } from "./components/TermsOfService";
import technoIcon from "../components/assets/technoboostIcon.png";

import Toast from "./components/toast";

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<"home" | "privacy" | "terms">(
    "home"
  );
  const [toast, setToast] = useState({
    show: false,
    type: "success",
    message: "",
  });

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ show: true, type, message });
  };

  const scrollToAudit = () => {
    // If we are on privacy or terms page, switch to home first
    if (currentView !== "home") {
      setCurrentView("home");
      setTimeout(() => {
        const element = document.getElementById("free-audit");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById("free-audit");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLinkClick = (href: string) => {
    // Logo click or top of page
    if (href === "#") {
      setCurrentView("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Internal anchor links
    if (href.startsWith("#")) {
      setCurrentView("home");
      // Small timeout to allow DOM to update if switching from another view
      setTimeout(() => {
        const id = href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentView("privacy");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentView("terms");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-purple selection:text-white">
      <Navbar
        onConnectClick={() => setIsContactModalOpen(true)}
        onLinkClick={handleLinkClick}
      />

      <main>
        {currentView === "home" && (
          <>
            <Hero />
            <Clients />
            <Services />
            <Capabilities />
            <Process />
            <Pricing
              onGetStartedClick={() => setIsContactModalOpen(true)}
              onContactSalesClick={scrollToAudit}
            />
            <About />
            <AuditForm showToast={showToast} />
          </>
        )}
        {currentView === "privacy" && <PrivacyPolicy />}
        {currentView === "terms" && <TermsOfService />}
      </main>

      {/* Floating Action Button (FAB) */}
      <button
        className="fixed bottom-8 right-8 bg-brand-purple hover:bg-brand-purple-dark text-white p-4 rounded-full shadow-2xl hover:shadow-brand-purple/50 transition-all duration-300 z-40 group"
        onClick={() => setIsContactModalOpen(true)}
      >
        <MessageCircle className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" />
      </button>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        showToast={showToast}
      />

      {/* Footer */}
      <footer className="bg-gray-50 text-gray-900 py-20 border-t border-gray-200 mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Brand & Description */}
            <div>
              <div
                className="flex items-center gap-2 mb-6 cursor-pointer"
                onClick={() => handleLinkClick("#")}
              >
                <img src={technoIcon} className="w-[30%]" alt="" />
              </div>
              <p className="text-gray-500 leading-relaxed max-w-lg text-lg mb-8">
                We're Technoboost. A group of dedicated individuals
                collaborating on amazing initiatives and fostering lasting
                relationships that go far beyond just the final product.
              </p>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/technoboost-services/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-gray-200 hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white text-gray-500 transition-all duration-300 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 fill-current" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-12 flex flex-col gap-6 justify-center lg:mt-2">
              <h3 className="text-lg font-bold text-brand-dark mb-2">
                Contact Us
              </h3>

              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-white border border-gray-200 rounded-lg shrink-0 group-hover:bg-brand-purple group-hover:border-brand-purple transition-colors duration-300 shadow-sm">
                  <MapPin className="w-5 h-5 text-brand-purple group-hover:text-white transition-colors" />
                </div>
                <span className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                  24, 2nd Floor, Shree Durga Arcade
                  <br />
                  1st Cross Rd, Kasavanahalli
                </span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-white border border-gray-200 rounded-lg shrink-0 group-hover:bg-brand-purple group-hover:border-brand-purple transition-colors duration-300 shadow-sm">
                  <Mail className="w-5 h-5 text-brand-purple group-hover:text-white transition-colors" />
                </div>
                <a
                  href="mailto:contactus@technoboost.in"
                  className="text-gray-600 hover:text-brand-purple transition-colors"
                >
                  contactus@technoboost.in
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-white border border-gray-200 rounded-lg shrink-0 group-hover:bg-brand-purple group-hover:border-brand-purple transition-colors duration-300 shadow-sm">
                  <Phone className="w-5 h-5 text-brand-purple group-hover:text-white transition-colors" />
                </div>
                <a
                  href="tel:+919632968050"
                  className="text-gray-600 hover:text-brand-purple transition-colors"
                >
                  +91 9632968050
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Technoboost. All rights
              reserved.
            </p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a
                href="#"
                onClick={handlePrivacyClick}
                className="hover:text-brand-purple transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                onClick={handleTermsClick}
                className="hover:text-brand-purple transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
      <Toast
        type={toast.type as "success" | "error"}
        message={toast.message}
        show={toast.show}
        onClose={() => setToast((t) => ({ ...t, show: false }))}
      />
    </div>
  );
}

export default App;
