import { useEffect, useRef, useState } from "react";
import AppSetupIcon from "../assets/app-setup.svg";
import LaunchSupportIcon from "../assets/launch-support.svg";
import StoreSetupIcon from "../assets/store-setup1.svg";
import ThemeDesignIcon from "../assets/theme-design.svg";
import BrandIdentityIcon from "../assets/brand-identity1.svg";
import Arrow from "../assets/Arrows.svg";

const ServicesCarousel = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const dotsRef = useRef<HTMLDivElement[]>([]);
  const [current, setCurrent] = useState(2);

  let OFFSET_X = 260;
  let Z_DEPTH = 140;
  let ROT_Y = 18;

  const services = [
    {
      img: AppSetupIcon,
      title: "App Setup",
      text: "Payments, shipping, email, subscriptions — everything connected.",
    },
    {
      img: LaunchSupportIcon,
      title: "Launch Support",
      text: "Dedicated support window to ensure your store runs smoothly after launch.",
    },
    {
      img: StoreSetupIcon,
      title: "Store Setup",
      text: "Migrate from WooCommerce, Wix, or Magento to Shopify — quick and stress-free.",
    },
    {
      img: ThemeDesignIcon,
      title: "Theme Design",
      text: "Custom Shopify themes designed for speed, mobile, and conversions.",
    },
    {
      img: BrandIdentityIcon,
      title: "Brand Identity",
      text: "Fonts, colors, and layouts aligned to your brand for a polished look.",
    },
  ];

  const total = services.length;

  const updateResponsiveValues = () => {
    if (window.innerWidth < 480) {
      OFFSET_X = 160;
      Z_DEPTH = 100;
      ROT_Y = 12;
    } else if (window.innerWidth < 768) {
      OFFSET_X = 200;
      Z_DEPTH = 120;
      ROT_Y = 14;
    } else if (window.innerWidth < 1024) {
      OFFSET_X = 230;
      Z_DEPTH = 130;
      ROT_Y = 16;
    } else {
      OFFSET_X = 260;
      Z_DEPTH = 140;
      ROT_Y = 18;
    }
  };

  const updateCarousel = () => {
    updateResponsiveValues();

    cardsRef.current.forEach((card, i) => {
      let diff = (i - current + total) % total;
      if (diff > total / 2) diff -= total;

      const tx = diff * OFFSET_X;
      const tz = -Math.abs(diff) * Z_DEPTH;
      const ry = diff * -ROT_Y;
      const scale = diff === 0 ? 1.05 : 0.85;
      const opacity = 1;

      card.style.transform = `
          translate(-50%, -50%)
          translateX(${tx}px)
          translateZ(${tz}px)
          rotateY(${ry}deg)
          scale(${scale})
      `;
      card.style.zIndex = String(total - Math.abs(diff));
      card.style.opacity = String(opacity);
      card.classList.toggle("active", diff === 0);
    });

    dotsRef.current.forEach((dot, i) =>
      dot.classList.toggle("active", i === current)
    );
  };

  useEffect(() => {
    updateCarousel();
    window.addEventListener("resize", updateCarousel);
    return () => window.removeEventListener("resize", updateCarousel);
  }, [current]);

  return (
    <section className="bg-white flex flex-col justify-center items-center overflow-hidden text-black manrope-font">
      <h2 className="text-[#2AB7CA] font-semibold text-[1.375rem] text-center">
        Our Services
      </h2>
      <h4 className="text-[1.75rem] mt-2 text-center font-bold">
        We provide{" "}
        <span className="instrument-serif-font font-normal">
          High Quality Services
        </span>
      </h4>
      <p className="max-w-2xl text-center mt-3">
        Delivering innovative, scalable, and reliable Shopify solutions tailored
        to your business needs, with a focus on performance, security, and user
        experience.
      </p>

      <div className="carousel w-full max-w-6xl px-4 mt-10">
        <div className="track relative mx-auto">
          {services.map((service, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el as HTMLDivElement)}
              className="card space-y-2 md:space-y-4"
            >
              <div className="icon">
                <img src={service.img} alt="" className="" />
              </div>
              <h4>{service.title}</h4>
              <p className="text-[12px] md:text-[1.059rem] text-center opacity-90 px-2 md:px-8">
                {service.text}
              </p>

              <button className="glow-button">Start Your Journey →</button>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={() => setCurrent((c) => (c - 1 + total) % total)}
            className="text-gray-500 hover:text-black text-2xl cursor-pointer"
          >
            <img src={Arrow} alt="" className="w-6 rotate-180" />
          </button>
          <div className="flex gap-2 items-center">
            {services.map((_, i) => (
              <div
                key={i}
                ref={(el) => (dotsRef.current[i] = el as HTMLDivElement)}
                onClick={() => setCurrent(i)}
                className="dot cursor-pointer"
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent((c) => (c + 1) % total)}
            className="text-gray-500 hover:text-black text-2xl cursor-pointer"
          >
            <img src={Arrow} alt="" className="w-6 " />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
