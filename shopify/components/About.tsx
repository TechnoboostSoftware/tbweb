import { useState } from "react";
import AboutUs from "../assets/About-us.jpg";
import Card1 from "../assets/specialized-in.png";
import Card2 from "../assets/fast-turnaround.png";
import Card3 from "../assets/professional-team.png";
import Men from "../assets/men.png";
import Lines from "../assets/line.svg";

const Cards = [
  {
    img: Card1,
    title: "Shopify Focused",
    text: "Specialized in Shopify development",
  },
  {
    img: Card2,
    title: "Fast Turnaround",
    text: "2-4 weeks guaranteed delivery",
  },
  {
    img: Card3,
    title: "Quality Assured",
    text: "Professional team, not freelancers",
  },
];

const About = ({ openModal }: { openModal: () => void }) => {
  return (
    <>
      {/* ABOUT US */}
      <div className="md:mx-auto max-w-7xl mx-8 pt-16 lg:px-6 px-4">
        <div className="flex border rounded-2xl manrope-font">
          <div className="flex flex-col p-5 lg:p-12 lg:w-2/3 items-center md:items-start">
            <h3 className="font-bold text-[1.75rem] mb-4 text-black text-center lg:text-left">
              About{" "}
              <span className="italic instrument-serif-font font-normal">
                Us
              </span>
            </h3>

            <p className="max-w-2xl text-center md:text-left text-[#364153]">
              We’re Technoboost — a Shopify design and development agency
              focused on helping new brands and SMEs get live faster. Our
              mission is simple: deliver Shopify builds with clear pricing,
              faster turnaround, and reliable post-launch support.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
              {Cards.map((item, i) => (
                <div
                  key={i}
                  className="group border border-[#2AB7CA33] rounded-2xl p-4 flex flex-col items-center text-black transition-all duration-300 hover:shadow-md cursor-pointer w-52"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="transition-transform duration-300 group-hover:-translate-y-2"
                  />
                  <h4 className="font-medium mt-2">{item.title}</h4>
                  <p className="text-[10px] xxl:text-xs mt-1 text-[#4A5565] text-nowrap">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative md:w-1/3 lg:block hidden">
            <img
              src={AboutUs}
              className="w-full h-full rounded-r-2xl object-cover"
              alt="About"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,white_2%,white_2%,transparent_30%)] rounded-r-2xl" />
          </div>
        </div>
      </div>

      {/* READY TO LAUNCH */}
      <section className="max-w-7xl mx-auto my-16 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between rounded-2xl bg-gradient-to-r from-yellow-400 to-cyan-500 p-8 md:p-6 relative overflow-hidden">
          {/* Left Image */}
          <div className="hidden md:block relative w-[60%]">
            <img
              src={Men}
              alt="Professional"
              className="w-48 md:w-56 lg:w-[45%] object-contain absolute top-[-5.80rem]"
            />
          </div>

          <img
            src={Lines}
            className="absolute md:top-[6.5rem] md:left-[16rem] top-36 left-16 opacity-50 hidden md:block"
            alt=""
          />

          {/* Right Content */}
          <div className="text-right flex flex-col items-center md:items-start text-white mx-8">
            <h2 className="text-2xl md:text-3xl mb-3 font-semibold text-center md:text-left">
              Ready To Launch Your <br className="hidden md:block" />
              Shopify Store?
            </h2>

            <p className="text-sm md:text-[0.9rem] my-4 text-white max-w-sm text-center md:text-left mt-1">
              Let’s discuss your project & bring your e-commerce vision to life.
              Get a free consultation.
            </p>

            <button
              onClick={openModal}
              className="relative flex items-center gap-2 px-4 py-2 rounded-full text-white font-medium text-sm overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-0.5 cursor-pointer"
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
        </div>
      </section>
    </>
  );
};

export default About;
