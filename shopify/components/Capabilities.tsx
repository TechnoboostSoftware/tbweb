import React from "react";
import { Code, Puzzle, Palette, Gauge, TrendingUp, Cpu } from "lucide-react";

const CAPABILITIES = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Data-driven interfaces designed for conversion and brand affinity.",
    className: "",
  },
  {
    icon: Gauge,
    title: "Speed Optimization",
    description: "Core Web Vitals tuning for sub-second load times.",
    className: "",
  },
  {
    icon: Puzzle,
    title: "App Ecosystem",
    description:
      "Seamless integration of third-party apps for reviews, loyalty, and marketing.",
    className: "",
  },
  {
    icon: TrendingUp,
    title: "Conversion Strategy",
    description:
      "A/B testing, funnel optimization, and data analysis to turn visitors into buyers.",
    className: "",
  },
  {
    icon: Code,
    title: "Custom Development",
    description:
      "Bespoke Liquid & React builds tailored to your unique business logic. We handle complex integrations and custom functionality that standard themes can't match.",
    className:
      "md:col-span-2 lg:col-span-2 relative overflow-hidden bg-brand-purple/5", // Feature card
  },
];

export const Capabilities: React.FC = () => {
  return (
    <section
      className="py-24 bg-white relative overflow-hidden"
      id="capabilities"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Subtle Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-1 bg-brand-purple rounded-full"></div>
              <span className="text-brand-purple font-bold tracking-wider uppercase text-sm">
                Core Competencies
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6">
              Engineering Digital Success
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed">
              We focus on the technical pillars that actually drive revenue:
              performance, experience, and scalability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, index) => (
            <div
              key={index}
              // Updated classes: Permanent shadow, border, and white background. Shake only on hover.
              className={`p-8 rounded-2xl border border-brand-purple/20 shadow-lg shadow-brand-purple/5 transition-all duration-300 group cursor-pointer hover:animate-shake bg-white ${
                cap.className || ""
              }`}
            >
              {/* Special decoration for the big card */}
              {cap.className?.includes("col-span-2") && (
                <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
                  <Cpu className="w-64 h-64 -mr-16 -mt-16 text-brand-purple rotate-12" />
                </div>
              )}

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm bg-brand-purple/10 text-brand-purple`}
                >
                  <cap.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 text-brand-dark transition-colors">
                  {cap.title}
                </h3>
                <p className="leading-relaxed font-medium text-gray-500">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
