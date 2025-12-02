import Tropology from "../assets/07-topography.jpg";
import Arrow from "../assets/Arrows.svg";
import ArrowWhite from "../assets/Arrow White.svg";

const Pricing = () => {
  const plans = [
    {
      name: "Launch Kit",
      subtitle: "Basic",
      price: "$699 USD",
      highlight: false,
      btnText: "Book Launch Kit",
      features: [
        "Store setup / migration",
        "Premium theme (light customization)",
        "Core app setup (payments, shipping, email)",
        "QA & performance check",
        "30-day launch support",
      ],
    },
    {
      name: "Growth Kit",
      subtitle: "Enhanced",
      price: "$1,799 USD",
      highlight: true,
      btnText: "Start Growth Build",
      features: [
        "Everything in Launch Kit",
        "Deeper layout customization",
        "+5 advanced apps (subscriptions, reviews, upsells, loyalty)",
        "Analytics setup (Shopify + GA4)",
        "60-day extended support",
      ],
    },
  ];

  return (
    <div style={{ backgroundImage: `url(${Tropology})` }}>
      <section className="pt-16 px-6 max-w-7xl mx-auto text-black">
        {/* Heading */}
        <div className="text-center">
          <h3 className="text-[1.75rem] font-bold manrope-font">
            The{" "}
            <span className="italic instrument-serif-font font-normal">
              Pricing
            </span>
          </h3>
          <p className="max-w-3xl mx-auto manrope-font mt-2">
            While many agencies focus solely on the launch, we ensure you kick
            off strong and continue to grow — with clear & transparent pricing.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 fade-zoom px-2">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`border-2 rounded-2xl p-6 shadow-sm bg-white/60 transition-shadow duration-300 ${
                plan.highlight
                  ? "border-[#2AB7CA80] hover:shadow-[0_0_5px_1px_#2AB7CA80] relative"
                  : "border-[#E5E7EB] hover:shadow-[0_0_5px_1px_#E5E7EB] relative"
              }`}
            >
              {/* Recommended Badge */}
              {plan.highlight && (
                <div className="absolute top-[-12px] bg-[#2AB7CA] rounded-2xl text-white px-4 py-1 right-6 text-sm">
                  Recommended
                </div>
              )}

              <h4 className="font-semibold text-xl text-[#101828]">
                {plan.name}{" "}
                <span className="text-[#6A7282] font-normal">
                  - {plan.subtitle}
                </span>
              </h4>

              <h3 className="text-4xl font-semibold mt-2 text-[#101828]">
                {plan.price}
              </h3>

              {/* Features */}
              <ul className="text-[#364153] space-y-2 mt-4 text-sm manrope-font">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="#2AB7CA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M8 12l3 3 5-6" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              {plan.highlight ? (
                <button className="premium-btn bg-[#2AB7CA] py-3 px-5 rounded-xl mt-6 text-white text-lg shadow-lg flex items-center gap-3 cursor-pointer">
                  {plan.btnText}
                  <img src={ArrowWhite} alt="" />
                </button>
              ) : (
                <button className="normal-btn mt-6 py-3 px-4 text-black text-lg flex items-center gap-3 manrope-font cursor-pointer">
                  {plan.btnText}
                  <img src={Arrow} alt="" />
                </button>
              )}
              <p className=" text-xs font-normal right-4 bottom-2 absolute hidden md:block">
                *Final pricing depends on scope after a free audit.
              </p>
            </div>
          ))}
        </div>
        <p className="text-xs mt-2 font-normal text-center  block md:hidden">
          *Final pricing depends on scope after a free audit.
        </p>
      </section>
    </div>
  );
};

export default Pricing;
