import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import BackgroundVideo from "../assets/Techno Banner Video.mp4";
import Logo from "../assets/logo.svg";
import MouseIcon from "../assets/mouseIcon.svg";
import BlackBtnArrow from "../assets/balck-btn-arrow.svg";

const Hero = ({ openModal }: { openModal: () => void }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Mouse Parallax
  useEffect(() => {
    const heroContent = document.querySelector(
      ".hero-content"
    ) as HTMLElement | null;
    if (!heroContent) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      heroContent.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const handleNavClick = (href: string) => {
    setIsOpen(false);
    window.location.hash = href; // Update the hash

    // Smooth scroll to the section
    setTimeout(() => {
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // small delay allows hash change to complete
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[750px] flex flex-col justify-center items-center text-center overflow-hidden text-white manrope-font">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={BackgroundVideo} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* NAVBAR */}
        <header className="absolute top-0 w-full max-w-7xl mx-auto flex justify-between items-center px-4 md:px-0 py-6 z-20">
          <img src={Logo} alt="logo" className="w-[40%] md:w-[17%]" />

          {/* Desktop Menu */}
          <nav className="rounded-full pl-5 pr-3 py-3 backdrop-blur-md hidden md:flex">
            <div className="flex items-center space-x-8 text-sm font-medium">
              <a href="#" className="hover:text-yellow-400">
                About Us
              </a>
              <a href="#" className="hover:text-yellow-400">
                Services
              </a>
              <a href="#" className="hover:text-yellow-400">
                Contact
              </a>

              <button
                onClick={openModal}
                className="flex items-center gap-2 bg-[#FDD531] text-black font-medium text-sm px-6 py-2.5 rounded-full hover:bg-[#ffdf57] transition cursor-pointer"
              >
                Let’s Connect
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-7 h-7" />
          </button>
        </header>

        {/* HERO TEXT */}
        <div className="relative z-10 max-w-5xl px-4 mx-auto">
          <h1 className="text-4xl md:text-[4rem] font-medium leading-none mt-0 md:mt-6">
            We Don’t Just Build <br />
            <span className="font-normal instrument-serif-font">
              Shopify Stores.
            </span>{" "}
            We Launch and <br className="hidden lg:block" />
            <span className="font-medium">Grow Them.</span>
          </h1>

          <p className="mt-6 text-lg max-w-3xl mx-auto">
            From Shopify setup to custom theme design, app setup, and
            post-launch support — we give you everything you need to start
            selling fast. <br className="hidden lg:block" />
            Serving Clients Across - India, USA & Australia.
          </p>

          <div className="md:my-8 my-4 space-y-5 flex flex-col justify-center items-center">
            <button
              onClick={openModal}
              className="flex items-center gap-2 bg-[#FDD531] text-black font-medium text-sm  px-4 py-2.5 rounded-full hover:bg-[#ffdf57] transition cursor-pointer"
            >
              Start Your Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </button>
            <p className="text-white/60 text-sm">Scroll Down</p>
          </div>
        </div>

        {/* Curve Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="block w-full h-16 md:h-32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1920 200"
            preserveAspectRatio="none"
          >
            <ellipse cx="960" cy="200" rx="1060" ry="200" fill="#ffffff" />
          </svg>
        </div>

        {/* Mouse Scroll Icon */}
        <div className="absolute bottom-[5%] md:bottom-[12%] left-1/2 -translate-x-1/2">
          <img src={MouseIcon} className="hero-content" alt="scroll" />
        </div>
      </section>

      {/* ✅ Animated Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-full w-3/4 max-w-xs bg-[#0e0f11] p-6 flex flex-col space-y-6 text-white shadow-xl
            transition-transform duration-300 ease-out
            ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={() => setMobileMenuOpen(false)} className="self-end">
            <X className="w-6 h-6" />
          </button>

          <a href="#" className="hover:text-yellow-400 text-lg">
            About Us
          </a>
          <a href="#" className="hover:text-yellow-400 text-lg">
            Services
          </a>
          <a href="#" className="hover:text-yellow-400 text-lg">
            Contact
          </a>

          <button
            onClick={() => {
              openModal();
              setMobileMenuOpen(false);
            }}
            className="bg-[#FDD531] text-black px-6 py-2 rounded-full shadow-md hover:bg-yellow-300 transition mt-4"
          >
            Let’s Connect →
          </button>
        </div>
      </div>

      {/* {showModal && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center px-4 z-[1000]"
          onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
        >
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ×
            </button>

            <h2 className="text-xl font-semibold text-black mb-4">
              Get My Shopify Store Live
            </h2>

            <form className="space-y-3 text-black">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg p-3"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg p-3"
              />
              <input
                type="text"
                placeholder="Business / Store Name"
                className="w-full border rounded-lg p-3"
              />
              <textarea
                rows={4}
                placeholder="Message / Requirements"
                className="w-full border rounded-lg p-3"
              />

              <button
                type="submit"
                className="w-full bg-[#2AB7CA] hover:bg-teal-600 text-white py-3 rounded-lg transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Hero;
