import React from "react";
import { Store, Palette, PenTool, Puzzle, Rocket } from "lucide-react";

const SERVICES = [
  {
    icon: Store,
    title: "Store Setup",
    description:
      "Complete technical setup including payments, shipping, and taxes.",
    color: "from-red-500 to-red-600",
    textColor: "text-red-600",
    shadow: "shadow-red-500/30",
  },
  {
    icon: Palette,
    title: "Theme Design",
    description: "Custom, high-converting themes focused on user experience.",
    color: "from-purple-500 to-purple-600",
    textColor: "text-purple-600",
    shadow: "shadow-purple-500/30",
  },
  {
    icon: PenTool,
    title: "Brand Identity",
    description: "Unique logos and visual identity that stands out.",
    color: "from-blue-500 to-blue-600",
    textColor: "text-blue-600",
    shadow: "shadow-blue-500/30",
  },
  {
    icon: Puzzle,
    title: "App Integration",
    description:
      "Seamless integration of reviews, loyalty, and marketing apps.",
    color: "from-amber-400 to-amber-500",
    textColor: "text-amber-600",
    shadow: "shadow-amber-500/30",
  },
  {
    icon: Rocket,
    title: "Launch Support",
    description: "Expert guidance for a smooth go-live event.",
    color: "from-emerald-400 to-emerald-500",
    textColor: "text-emerald-600",
    shadow: "shadow-emerald-500/30",
  },
];

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-brand-purple font-bold tracking-wider uppercase text-sm mb-3 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6">
            Everything You Need To Grow
          </h2>
          <p className="text-xl text-gray-500">
            Comprehensive solutions tailored for your ecommerce success.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Background Connecting Line (Desktop) */}
          <div className="absolute top-[3.5rem] left-0 w-full h-2 bg-gray-100 hidden lg:block rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                {/* Pin / Circle Container */}
                <div className="relative z-10 mb-4 transition-transform duration-300 group-hover:-translate-y-2">
                  {/* Outer Gradient Ring */}
                  <div
                    className={`w-28 h-28 rounded-full bg-gradient-to-b ${service.color} p-1.5 ${service.shadow} shadow-xl flex items-center justify-center relative`}
                  >
                    {/* Inner White Circle */}
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center border-[4px] border-gray-50 shadow-inner">
                      {/* Icon */}
                      <service.icon
                        className={`w-10 h-10 ${service.textColor}`}
                        strokeWidth={2}
                      />
                    </div>

                    {/* Bottom Point (Triangle) */}
                    <div
                      className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br ${service.color} transform rotate-45 -z-10 rounded-sm`}
                    ></div>
                  </div>
                </div>

                {/* Dotted Line connector */}
                <div className="h-10 w-px border-l-2 border-dotted border-gray-300 mb-4 hidden lg:block"></div>

                {/* Text Content */}
                <div className="px-2">
                  <h3 className={`text-xl font-bold ${service.textColor} mb-3`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
