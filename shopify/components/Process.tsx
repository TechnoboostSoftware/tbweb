import Tropology from "../assets/07-topography.jpg";
import Call from "../assets/call.svg";
import Quote from "../assets/fixed-quote.svg";
import Design from "../assets/design.svg";
import Launch from "../assets/launch.svg";
import Testing from "../assets/testing.svg";
import Development from "../assets/development.svg";

const Process = () => {
  const steps = [
    {
      img: Call,
      title: "Discovery Call",
      text: "15-minute chat to understand your needs",
    },
    {
      img: Quote,
      title: "Fixed Quote",
      text: "Clear pricing, no surprises",
    },
    {
      img: Design,
      title: "Design",
      text: "Custom design or theme selection",
    },
    {
      img: Launch,
      title: "Launch",
      text: "Go live with ongoing support",
    },
    {
      img: Testing,
      title: "Testing",
      text: "Quality assurance & optimization",
    },
    {
      img: Development,
      title: "Development",
      text: "Build your store with weekly updates",
    },
  ];

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.utils.toArray(".process-card").forEach((elem: any) => {
  //     gsap.from(elem, {
  //       scrollTrigger: {
  //         trigger: elem,
  //         start: "top 85%",
  //       },
  //       y: 50,
  //       opacity: 0,
  //       duration: 1,
  //       ease: "power3.out",
  //     });
  //   });
  // }, []);

  return (
    <section
      style={{ backgroundImage: `url(${Tropology})` }}
      className="bg-cover"
    >
      <div className="mx-auto max-w-7xl mt-16 px-6 lg:px-32 text-black">
        <div className="text-center mb-10">
          <h3 className="text-[1.75rem] font-bold manrope-font">
            Our{" "}
            <span className="italic instrument-serif-font font-normal">
              Process
            </span>
          </h3>
          <p className="max-w-2xl mx-auto manrope-font">
            A proven workflow designed to deliver your Shopify store on time, on
            budget, and built to drive sales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {steps.map((step, i) => {
            // assuming 3 columns and 6 steps
            const cols = 3;
            const isTopRow = i < cols; // 0,1,2
            const isBottomRow = i >= cols && i < cols * 2; // 3,4,5
            const isLastColTop = i % cols === cols - 1; // 2
            const isFirstColBottom = i % cols === 0; // 3

            // Show arrow:
            // - Top row: on 0,1 (not 2)
            // - Bottom row: on 4,5 (not 3)
            const showArrow =
              (isTopRow && !isLastColTop) || (isBottomRow && !isFirstColBottom);

            return (
              <div
                key={i}
                className="relative border rounded-2xl border-[#2AB7CA33] bg-white p-6 space-y-4 process-card"
              >
                <img src={step.img} alt="" className="w-12" />
                <h4 className="font-medium manrope-font">{step.title}</h4>
                <p className="text-sm text-[#4A5565]">{step.text}</p>

                {/* small step arrows */}
                {showArrow && (
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 hidden md:block
            ${isTopRow ? "right-[-30px]" : "left-[-40px]"}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className={`${isBottomRow ? "rotate-180" : ""} w-12 h-12`}
                      fill="none"
                      stroke="#6FCAD8"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="4" y1="16" x2="22" y2="16" />
                      <path d="M16 10l8 6-8 6" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}

          {/* Curved arrow right side */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="320"
            viewBox="0 0 200 320"
            fill="none"
            className="text-[#2AB7CA] absolute top-8 lg:right-[-13%] overflow-hidden hidden md:block"
          >
            <path
              d="M60 20 C180 100, 180 220, 60 300"
              stroke="#2AB7CA"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M60 300 L65 280 M60 300 L72 310"
              stroke="#2AB7CA"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Process;
