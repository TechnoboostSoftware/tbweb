import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { Logo } from "./Logo";

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

interface NavbarProps {
  onConnectClick: () => void;
  onLinkClick: (href: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onConnectClick,
  onLinkClick,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    onLinkClick(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className=" flex items-center cursor-pointer gap-2"
            onClick={(e) => handleNavClick(e, "#")}
          >
            <img
              src="/components/assets/technoboostIcon.png"
              className="w-[45%]"
              alt=""
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-600 hover:text-brand-purple text-sm font-semibold transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button
              size="sm"
              className="ml-4 flex items-center gap-2"
              onClick={onConnectClick}
            >
              Let's Connect <ArrowRight className="w-4 h-4" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-brand-purple focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-lg font-medium text-gray-900 hover:text-brand-purple"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <Button
              className="w-full justify-center"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onConnectClick();
              }}
            >
              Let's Connect
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
