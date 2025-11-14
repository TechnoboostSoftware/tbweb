import Tropology from "../assets/07-topography.jpg";
import Speed from "../assets/fast-website.jpg";
import Clarity from "../assets/clear-pricing.jpg";
import Trust from "../assets/delivering-websites.jpg";
import Support from "../assets/comperhensive-support.jpg";

const Difference = ({ openModal }: { openModal: () => void }) => {
  const items = [
    {
      img: Speed,
      title: "Speed",
      desc: "Fast website, happy visitors!",
    },
    {
      img: Clarity,
      title: "Clarity",
      desc: "Clear pricing, happy users!",
    },
    {
      img: Trust,
      title: "Trust",
      desc: "Delivering websites with confidence.",
    },
    {
      img: Support,
      title: "Support",
      desc: "Comprehensive support post-launch!",
    },
  ];

  return (
    <div style={{ backgroundImage: `url(${Tropology})` }}>
      <div className="pt-16 max-w-7xl md:mx-auto mx-4 px-4">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-bold text-[1.75rem] mb-1 text-black text-center manrope-font">
            The{" "}
            <span className="italic instrument-serif-font font-normal">
              Difference
            </span>
          </h3>
          <p className="max-w-3xl mx-auto text-black text-center manrope-font font-normal">
            Most agencies stop at launch. We make sure you start strong and grow
            with confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md manrope-font relative overflow-hidden fade-up"
            >
              <div className="relative">
                <img
                  src={item.img}
                  className="w-full h-48 object-cover rounded-t-lg"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
              </div>

              <div className="py-6 text-center">
                <h4 className="font-bold text-lg mb-2 text-[#2AB7CA]">
                  {item.title}
                </h4>
                <p className="text-sm font-medium text-black">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={openModal}
            className="relative flex items-center gap-2 px-4 py-2 rounded-full text-white font-medium text-sm overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-0.5 cursor-pointer"
            style={{
              background: "linear-gradient(180deg, #3a3a3a 0%, #0a0a0a 100%)",
            }}
          >
            <span className="relative z-10">Start Your Journey</span>
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
      </div>
    </div>
  );
};

export default Difference;
