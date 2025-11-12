import Tropology from "../assets/07-topography.jpg";
import Card1 from "../assets/card-1.png";
import Card2 from "../assets/card-2.jpg";
import Card3 from "../assets/card-3.jpg";
import Card4 from "../assets/card-4.jpg";

const Capabilities = ({ openModal }: { openModal: () => void }) => {
  const cards = [
    {
      title: "Fast Delivery",
      points: [
        "Proven process that avoids delays.",
        "We move fast so you can start selling sooner.",
        "Agile workflow with regular feedback.",
      ],
      img: Card1,
    },
    {
      title: "Design-First Approach",
      points: [
        "Custom theme development from scratch",
        "UX patterns tested for higher conversions",
        "Branding elements integrated seamlessly",
      ],
      img: Card2,
    },
    {
      title: "Clear Pricing",
      points: [
        "Two transparent tiers (Launch Kit & Growth Build)",
        "Detailed inclusions listed upfront",
        "No unexpected add-on costs mid-project",
      ],
      img: Card3,
    },
    {
      title: "Post-Launch Care",
      points: [
        "Bug fixes and minor tweaks included.",
        "Hands-on assistance with app usage.",
        "Priority response so you’re never left waiting.",
      ],
      img: Card4,
    },
  ];

  return (
    <section
      style={{ backgroundImage: `url(${Tropology})` }}
      className="bg-center border-t-4 border-[#FAFBFC] mt-16 text-black"
    >
      <div className="pt-12 mx-4 flex flex-col items-center justify-center text-center">
        <h3 className="font-bold text-[1.75rem] mb-1 manrope-font">
          Our{" "}
          <span className="instrument-serif-font font-normal">
            Capabilities
          </span>
        </h3>

        <p className="max-w-5xl mx-auto text-[#262626] manrope-font">
          At our core, we focus on helping new brands launch and grow on
          Shopify. We deliver lean, reliable, and professional stores built for
          speed, conversions, and scalability.
        </p>

        <button
          onClick={openModal}
          className="relative flex mt-3 items-center gap-2 px-4 py-2 rounded-full text-white font-medium text-sm overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-0.5 cursor-pointer"
          style={{
            background: "linear-gradient(180deg, #3a3a3a 0%, #0a0a0a 100%)",
          }}
        >
          <span className="relative z-10">Let's Connect</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 relative z-10"
          >
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>

          {/* subtle glossy shine layer */}
          <span className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 rounded-full pointer-events-none"></span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 max-w-7xl mx-auto px-4">
        {cards.map((card, i) => (
          <div
            key={i}
            className="border rounded-l-[28px]  rounded-r-xl border-[#05667742] flex items-center bg-white overflow-hidden"
          >
            <div className="w-[50%] m-3 md:m-8 manrope-font">
              <h3 className="text-black font-bold mb-2">{card.title}</h3>
              <ul className="text-[#4A5565] list-disc list-inside space-y-2 text-xs marker:text-[#00ACC1]">
                {card.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-[40%] h-full">
              <img
                src={card.img}
                className="w-full h-full object-fill "
                alt={card.title}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;
