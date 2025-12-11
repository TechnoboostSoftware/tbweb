import React from "react";
import { ShoppingBag, Zap, ShieldCheck } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="about">
      {/* Decorative background blob */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 skew-x-12 transform origin-top-right -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
              <img
                src="https://illustrations.popsy.co/amber/creative-work.svg"
                alt="Team Collaboration Illustration"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-purple/5 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-brand-purple"></div>
              <span className="text-brand-purple font-bold tracking-wider uppercase text-sm">
                About Us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 leading-tight">
              Engineering Growth, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-purple-500">
                Not Just Websites.
              </span>
            </h2>

            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              We’re Technoboost — a Shopify design and development agency
              focused on helping new brands and SMEs get live faster. Our
              mission is simple: deliver Shopify builds with clear pricing,
              faster turnaround, and reliable post-launch support.
            </p>

            {/* Principle Cards */}
            <div className="space-y-6">
              {/* Card 1 */}
              <div className="flex gap-5 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100 group">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Shopify Focused
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Specialized in Shopify development
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex gap-5 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100 group">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Fast Turnaround
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    2-4 weeks guaranteed delivery
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex gap-5 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100 group">
                <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Quality Assured
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Professional team, not freelancers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
