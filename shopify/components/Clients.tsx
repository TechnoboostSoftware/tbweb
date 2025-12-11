import React from "react";
import {
  Sparkles,
  ShoppingBag,
  Smile,
  Utensils,
  Leaf,
  Settings,
  Heart,
  Globe,
  Crown,
} from "lucide-react";

const CLIENTS = [
  { name: "Kushal's", icon: Sparkles },
  { name: "The Brand Lookbook", icon: ShoppingBag },
  { name: "KT Kids", icon: Smile },
  { name: "Joyspoon", icon: Utensils },
  { name: "Nistara Naturals", icon: Leaf },
  { name: "Autologue Design", icon: Settings },
  { name: "Goli", icon: Heart },
  { name: "My Pacha", icon: Globe },
  { name: "Imrasasi", icon: Crown },
];

interface LogoCardProps {
  name: string;
  Icon: React.ElementType;
}

const LogoCard: React.FC<LogoCardProps> = ({ name, Icon }) => (
  <div className="flex items-center gap-3 px-8 py-4 bg-white rounded-xl shadow-sm border border-gray-100 min-w-[240px] mx-4 hover:border-brand-purple/30 hover:shadow-md transition-all duration-300 cursor-pointer group">
    <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-brand-purple/10 transition-colors">
      <Icon className="w-5 h-5 text-gray-400 group-hover:text-brand-purple transition-colors" />
    </div>
    <span className="font-bold text-gray-400 text-lg group-hover:text-gray-800 transition-colors whitespace-nowrap">
      {name}
    </span>
  </div>
);

export const Clients: React.FC = () => {
  // Duplicate list to ensure smooth scrolling
  const marqueeClients = [...CLIENTS, ...CLIENTS];
  const reversedClients = [...CLIENTS].reverse();
  const reversedMarqueeClients = [...reversedClients, ...reversedClients];

  return (
    <section
      className="py-16 bg-gray-50 overflow-hidden relative border-b border-gray-100"
      id="clients"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-brand-purple font-bold tracking-wider uppercase text-sm mb-3 block">
            Trusted Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
            Powering Emerging Brands
          </h2>
          <p className="text-lg text-gray-500">
            We partner with visionary businesses to build exceptional digital
            experiences.
          </p>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="relative w-full">
        {/* Row 1 - Left */}
        <div className="flex overflow-hidden mb-6 relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {marqueeClients.map((client, index) => (
              <LogoCard
                key={`r1-${index}`}
                name={client.name}
                Icon={client.icon}
              />
            ))}
          </div>
          {/* Gradients for fade effect */}
          <div className="absolute top-0 left-0 h-full w-20 md:w-40 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-20 md:w-40 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>

        {/* Row 2 - Right */}
        <div className="flex overflow-hidden relative">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {reversedMarqueeClients.map((client, index) => (
              <LogoCard
                key={`r2-${index}`}
                name={client.name}
                Icon={client.icon}
              />
            ))}
          </div>
          {/* Gradients for fade effect */}
          <div className="absolute top-0 left-0 h-full w-20 md:w-40 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-20 md:w-40 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};
