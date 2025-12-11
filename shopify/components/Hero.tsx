import React from "react";
import { CheckCircle2, ShoppingBag } from "lucide-react";
import { Button } from "../ui/Button";
import { LaptopDisplay } from "./LaptopDisplay";

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* Decorative Circles Background */}
      <div className="absolute top-1/2 right-[-10%] transform -translate-y-1/2 w-[800px] h-[800px] border border-gray-100 rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-1/2 right-[-5%] transform -translate-y-1/2 w-[600px] h-[600px] border border-gray-100 rounded-full pointer-events-none z-0"></div>

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="max-w-2xl">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 bg-brand-purple-light px-4 py-1.5 rounded-full mb-8">
              <ShoppingBag className="w-4 h-4 text-brand-purple" />
              <span className="text-brand-purple font-bold text-xs uppercase tracking-wide">
                Certified Shopify Experts
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-[1.1] mb-6">
              We Don’t Just Build Shopify Stores.{" "}
              <span className="text-brand-purple">
                We Launch and Grow Them.
              </span>
            </h1>

            <div className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg">
              <p className="mb-4">
                From Shopify setup to custom theme design, app setup, and
                post-launch support — we give you everything you need to start
                selling fast.
              </p>
              <p className="font-semibold text-gray-700">
                Serving Clients Across - India, USA & Australia.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                variant="primary"
                className="shadow-brand-purple/30"
              >
                Get Started Now
              </Button>
              <Button size="lg" variant="secondary">
                Get a Free Audit
              </Button>
            </div>

            {/* Checkmarks */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-purple" />
                <span className="font-semibold text-gray-700">
                  Custom Themes
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-purple" />
                <span className="font-semibold text-gray-700">
                  App Integration
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-purple" />
                <span className="font-semibold text-gray-700">
                  Growth Strategy
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Laptop Mockup */}
          <div className="relative mt-12 lg:mt-0 flex justify-center lg:justify-end">
            <LaptopDisplay />
          </div>
        </div>
      </section>
    </div>
  );
};
