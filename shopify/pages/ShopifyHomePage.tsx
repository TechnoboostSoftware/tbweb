import { useState } from "react";
import Hero from "../components/Hero";
import ServicesCarousel from "../components/ServicesCarousel";
import Capabilities from "../components/Capabilities";
import Process from "../components/Process";
import Pricing from "../components/Pricing";
import Difference from "../components/Difference";
import About from "../components/About";
import FooterShopify from "../components/FooterShopify";

export function ShopifyHomePage() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="manrope-font">
      <Hero openModal={openModal} />
      <ServicesCarousel openModal={openModal} />
      <Capabilities openModal={openModal} />
      <Process />
      <Pricing />
      <Difference openModal={openModal} />
      <About openModal={openModal} />
      <FooterShopify />

      {/*  Global Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center px-4 z-[1000]"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
            <button
              onClick={closeModal}
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
      )}
    </div>
  );
}
