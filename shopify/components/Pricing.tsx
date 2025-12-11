import React, { useState } from "react";
import { Check, Star } from "lucide-react";
import { Button } from "../ui/Button";

interface PricingProps {
  onGetStartedClick: () => void;
  onContactSalesClick: () => void;
}

const PLANS_USD = [
  {
    name: "Launch",
    price: "$699",
    description: "Perfect for new brands starting their journey.",
    features: [
      "Premium Theme Setup",
      "Mobile Responsive Design",
      "Payment & Shipping Setup",
      "Up to 25 Products",
      "Basic SEO Configuration",
      "2 Rounds of Revisions",
      "1 Week Support",
    ],
    highlight: false,
    buttonVariant: "outline" as const,
  },
  {
    name: "Growth",
    price: "$1,699",
    description: "For brands ready to scale with custom design.",
    features: [
      "Everything in Launch",
      "Custom Homepage Design",
      "Brand Identity Refinement",
      "Email Marketing Setup",
      "App Integrations (Reviews/Loyalty)",
      "Speed Optimization",
      "4 Rounds of Revisions",
      "1 Month Support",
    ],
    highlight: true,
    buttonVariant: "primary" as const,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for high-volume stores.",
    features: [
      "Fully Custom Headless Build",
      "Advanced Data Migration",
      "ERP/CRM Integration",
      "Custom Private App Dev",
      "Conversion Rate Optimization",
      "Dedicated Project Manager",
      "Priority Support",
      "SLA Guarantee",
    ],
    highlight: false,
    buttonVariant: "outline" as const,
  },
];

const PLANS_INR = [
  {
    name: "Launch",
    price: "₹59,000",
    description: "Perfect for new brands starting their journey.",
    features: [
      "Premium Theme Setup",
      "Mobile Responsive Design",
      "Payment & Shipping Setup",
      "Up to 25 Products",
      "Basic SEO Configuration",
      "2 Rounds of Revisions",
      "1 Week Support",
    ],
    highlight: false,
    buttonVariant: "outline" as const,
  },
  {
    name: "Growth",
    price: "₹1,45,000",
    description: "For brands ready to scale with custom design.",
    features: [
      "Everything in Launch",
      "Custom Homepage Design",
      "Brand Identity Refinement",
      "Email Marketing Setup",
      "App Integrations (Reviews/Loyalty)",
      "Speed Optimization",
      "4 Rounds of Revisions",
      "1 Month Support",
    ],
    highlight: true,
    buttonVariant: "primary" as const,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for high-volume stores.",
    features: [
      "Fully Custom Headless Build",
      "Advanced Data Migration",
      "ERP/CRM Integration",
      "Custom Private App Dev",
      "Conversion Rate Optimization",
      "Dedicated Project Manager",
      "Priority Support",
      "SLA Guarantee",
    ],
    highlight: false,
    buttonVariant: "outline" as const,
  },
];

export const Pricing: React.FC<PricingProps> = ({
  onGetStartedClick,
  onContactSalesClick,
}) => {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");

  const activePlans = currency === "USD" ? PLANS_USD : PLANS_INR;

  return (
    <section className="py-24 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-purple font-bold tracking-wider uppercase text-sm mb-3 block">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6">
            Transparent Investment
          </h2>
          <p className="text-xl text-gray-500 mb-8">
            Choose the package that fits your current stage of growth. No hidden
            fees.
          </p>

          {/* Currency Switcher */}
          <div className="inline-flex bg-white rounded-full p-1 border border-gray-200 shadow-sm relative">
            {/* Slider Background */}
            <div
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-brand-purple rounded-full transition-all duration-300 ${
                currency === "USD" ? "left-1" : "left-[calc(50%+2px)]"
              }`}
            ></div>

            <button
              onClick={() => setCurrency("USD")}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold transition-colors duration-300 w-24 ${
                currency === "USD"
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              USD
            </button>
            <button
              onClick={() => setCurrency("INR")}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold transition-colors duration-300 w-24 ${
                currency === "INR"
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              INR
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {activePlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 bg-white border ${
                plan.highlight
                  ? "border-brand-purple shadow-2xl scale-105 z-10 ring-4 ring-brand-purple/10"
                  : "border-gray-200 shadow-lg"
              } transition-all duration-300 flex flex-col h-full`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-brand-purple text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                  <Star className="w-3 h-3 fill-current" /> Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-extrabold text-brand-dark">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-gray-500 font-medium">/project</span>
                  )}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="flex-1 mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div
                        className={`mt-1 p-0.5 rounded-full ${
                          plan.highlight ? "bg-brand-purple/10" : "bg-gray-100"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            plan.highlight
                              ? "text-brand-purple"
                              : "text-gray-500"
                          }`}
                          strokeWidth={3}
                        />
                      </div>
                      <span className="text-gray-600 text-sm font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={plan.buttonVariant}
                className="w-full"
                onClick={
                  plan.price === "Custom"
                    ? onContactSalesClick
                    : onGetStartedClick
                }
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
