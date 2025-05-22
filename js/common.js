class TechnoBoostFooter extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <div class="mx-4 mt-8 text-white font-sans md:hidden block md:pb-0 pb-30">
        <div class="flex flex-col gap-5">
          <p class="text-2xl">
            We’re <span class="text-[#31F7C8]">Technoboost.</span> A group of dedicated individuals collaborating on
            amazing initiatives and fostering lasting relationships that go far
            beyond just the final product.
          </p>
          <p class="text-2xl">
            Want to collaborate with a super down-to-earth, mad-talented team?
            Hit us up!
          </p>
          <div class="flex flex-col gap-3 text-lg">
            <div class="flex flex-col hidden">
              <a href="">Instagram</a>
              <a href="">Facebook</a>
              <a href="">LinkedIn</a>
            </div>
            <div class="flex flex-col">
              <a href="index.html#client-success">Client Success</a>
              <a href="index.html#our-service">Services</a>
               <a href="terms-condition.html">Terms & Conditions</a>
              <a href="privacy-policy.html">Privacy Policy</a>
            </div>
          </div>
          <div>
            <h4>
              Technoboost Services <br />
              24, 2nd Floor, Shree Durga Arcade <br />
              1st Cross Rd, Kasavanahalli.
            </h4>
          </div>
          <a href="contact-us.html"
            class="flex items-center justify-between group bg-[#F6FA5E] text-black rounded-2xl px-6 py-3"
          >
            <div>
              <h4 class="text-4xl">Let's Connect</h4>
              <p class="font-light mt-2 text-xs">
                Let's have a quick chat about project
              </p>
            </div>
            <div>
            <div>
              <img
                src="images/arrow.svg"
                class="w-12 group-hover:scale-125 cursor-pointer transition-all"
                alt="Arrow"
              />
              </div>
            </div>
          </a>
        </div>
        <div class="flex gap-2 mt-5 items-center hidden">
          <img src="images/web-white.svg" alt="Web Icon" />
          <p>Online</p>
          <span class="bg-[#31F7C8] md:w-4 md:h-4 w-2 h-2 rounded-full"></span>
        </div>
         <p class="text-xs mt-5 text-center">Copyright © Technoboost. All rights reserved.</p>
      </div>
    `;
  }
}
customElements.define("techno-boost-footer", TechnoBoostFooter);

class TechnoBoostFixNav extends HTMLElement {
  constructor() {
    super();

    let serviceurl = "#our-service";
    let clientSuccessUrl = "#client-success";
    if (!location.pathname.includes("index.html")) {
      serviceurl = "index.html#our-service";
      clientSuccessUrl = "index.html#client-success";
    }

    this.innerHTML = `
       <nav
        class="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 bg-white py-2 shadow-lg px-5 rounded-4xl"
      >
        <div class="flex justify-center">
          <div class="flex gap-4 text-xs">
            <a
              href="index.html"
              id="home"
              class="hover:bg-[#05070F] nav-link hover:text-white p-2 rounded-xl cursor-pointer"
            >Home</a>
            <a
              href="${serviceurl}"
              id="services"
              class="hover:bg-[#05070F] nav-link hover:text-white p-2 rounded-xl cursor-pointer"
            >Services</a>
            <a
              href=""
              class="hover:bg-[#05070F] nav-link hover:text-white p-2 rounded-xl hidden cursor-pointer"
            >PRODUCTS</a>
            <a
              href="${clientSuccessUrl}"
              id="client"
              class="hover:bg-[#05070F] nav-link hover:text-white p-2 rounded-xl text-nowrap cursor-pointer"
            >Client Success</a>
          </div>
        </div>
      </nav>
    `;
    this.setSelectedPath();
  }
  setSelectedPath() {
    const location = window.location.href;
    const locationSplit = location.split("/");
    const currentLocation = locationSplit[locationSplit.length - 1];
    const $nav = $(this);
    $nav.find(".nav-link").removeClass("bg-[#05070F] text-white");
    const home =
      currentLocation === "index.html" ||
      currentLocation === "index.html#our-service" ||
      currentLocation === "index.html#client-success";
    const clientSuccess =
      currentLocation === "transforming-pharma.html" ||
      currentLocation === "transforming-jewelry.html";
    const services =
      currentLocation === "ux-design.html" ||
      currentLocation === "software-product.html" ||
      currentLocation === "smartsheet-solutions.html" ||
      currentLocation === "data-analytics.html" ||
      currentLocation === "ai-automation.html";
    if (home) {
      $nav.find("#home").addClass("bg-[#05070F] text-white");
    } else if (clientSuccess) {
      $nav.find("#client").addClass("bg-[#05070F] text-white");
    } else if (services) {
      $nav.find("#services").addClass("bg-[#05070F] text-white");
    }
  }
}

customElements.define("techno-boost-fixed-nav", TechnoBoostFixNav);

class LetsConnect extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <a href="contact-us.html" class="let-connect yellow h-28 w-28 md:h-36 md:w-36 flex items-center justify-center rounded-full yellow shadow-sm hover:scale-125 transition-all cursor-pointer fixed right-6 z-50 md:translate-y-[-120%] translate-y-[-140%] opacity-100 transition-transform duration-500 ease-in-out">
      <h4 class="text-[10px] md:text-sm" style="transform: translateY(35px)">
    Let's Connect
      </h4>
      </a>
    `;
  }

  // connectedCallback() {
  //   const letConnect = this.querySelector(".let-connect");

  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 1200) {
  //       letConnect.classList.add("translate-y-[-100%]", "opacity-0");
  //       letConnect.classList.remove("translate-y-0", "opacity-100");
  //     } else {
  //       letConnect.classList.remove("translate-y-[-100%]", "opacity-0");
  //       letConnect.classList.add("translate-y-0", "opacity-100");
  //     }
  //   });
  // }
}

customElements.define("lets-connect", LetsConnect);

class FeatureWork extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
       <div
        class="bg-white md:bg-transparent mx-4 rounded-2xl px-4 py-6 md:mx-18 md:mt-10 mt-5 md:mx-18"
      >
        <div class="mx-4" id="client-success">
          <span
            class="flex md:flex-col justify-center gap-2 md:gap-0 text-3xl md:text-6xl md:text-[50px]"
          >
            <h3 class="">Client</h3>
            <h3 class="">Success</h3>
          </span>
          <p class="text-center text-xs md:hidden block max-w-xs mx-auto mt-4">
            Your brand is more than just looks; it’s a powerful force. We drive
            its growth by blending fresh ideas and teamwork into everything we
            do.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
            <!-- Card 1 -->
            <a class="flex flex-col gap-3" href="transforming-pharma.html" ;>
              <div class="flip-box rounded-2xl overflow-hidden">
                <div class="flip-box-inner">
                  <!-- Front -->

                  <div class="flip-box-front relative w-full h-full">
                    <img
                      src="images/feature-1.png"
                      alt=""
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <!-- Back -->
                  <div class="flip-box-back relative">
                    <img
                      src="images/feature-1.png"
                      class="w-full h-full object-cover opacity-25"
                      alt=""
                    />
                    <!-- Overlay Shadow -->
                    <div
                      class="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.9)] to-[#1E5351] opacity-90"
                    ></div>
                    <div
                      class="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-base z-10"
                    >
                      <div
                        class="flex flex-col items-center gap-3 md:mx-0 mx-4"
                      >
                        <h4
                          class="md:text-2xl text-base 2xl:text-4xl text-center"
                        >
                          Automated Smart Pharma Solutions.
                        </h4>
                        <p
                          class="max-w-sm 2xl:max-w-md text-center md:text-sm 2xl:text-xl text-xs font-light mx-auto"
                        >
                          Custom inventory management is crucial. <br />
                         Technoboost enhances analytics and simplifies workflows with an easy-to-use interface
                        </p>
                        <p class="self-end font-light text-sm md:mt-4 mt-2">
                          Know More >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex gap-2 items-baseline text-xs">
                <span class="flex items-center gap-1">
                  <span
                    class="bg-black w-2 h-2 rounded-full inline-block"
                  ></span>
                  <p>WEB</p>
                </span>
                <span class="flex items-center gap-1">
                  <span
                    class="bg-black w-2 h-2 rounded-full inline-block"
                  ></span>
                  <span>CUSTOM SOLUTION</span>
                </span>
                <span class="flex items-center gap-1">
                  <span
                    class="bg-black w-2 h-2 rounded-full inline-block"
                  ></span>
                  <span>DATA & ANALYTICS</span>
                </span>
              </div>
              <h4 class="md:text-2xl">Automated Smart Pharma Solutions</h4>
            </a>

            <!-- Card 2 (Duplicate with different content) -->
            <a class="flex flex-col gap-3" href="transforming-jewelry.html" ;>
              <div class="flip-box rounded-2xl overflow-hidden">
                <div class="flip-box-inner">
                  <!-- Front -->
                  <div class="flip-box-front">
                    <img
                      src="images/feature-2.png"
                      alt=""
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <!-- Back -->
                  <div class="flip-box-back relative">
                    <img
                      src="images/feature-2.png"
                      class="w-full h-full object-cover opacity-25"
                      alt=""
                    />
                    <div
                      class="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.9)] to-[#1E5351]"
                    ></div>
                    <div
                      class="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-base z-10"
                    >
                      <div
                        class="flex flex-col justify-center items-center gap-3 md:mx-0 mx-4"
                      >
                        <h4
                          class="text-center md:text-2xl 2xl:text-4xl text-base"
                        >
                          Revolutionizing Jewellery Operations.
                        </h4>
                        <p
                          class="max-w-sm 2xl:max-w-md text-center md:text-sm 2xl:text-xl text-xs font-light mx-auto"
                        >
                          Transforming jewellery operations is essential. <br />
                          Technoboost enhances insights and streamlines
                          processes with a user-friendly design.
                        </p>
                        <p class="self-end font-light text-sm md:mt-4 mt-2">
                          Know More >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             <div class="flex gap-2 items-baseline text-xs">
                <span class="flex items-center gap-1">
                  <span class="bg-black w-2 h-2 rounded-full"></span>
                  <p>WEB</p>
                </span>
                <span class="flex items-center gap-1">
                  <span class="bg-black w-2 h-2 rounded-full"></span>
                  <span>MOBILE</span>
                </span>
                <span class="flex items-center gap-1">
                  <span class="bg-black w-2 h-2 rounded-full"></span>
                  <span>DATA & ANALYTICS</span>
                </span>
                <span class="flex items-center gap-1">
                  <span class="bg-black w-2 h-2 rounded-full"></span>
                  <span>AI</span>
                </span>
              </div>
              <h4 class="md:text-2xl">
                Revolutionizing Fashion Jewelry Operations
              </h4>
            </a>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("feature-work-section", FeatureWork);

class TechnoboostFooter extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = ` <div class="md:flex flex-col gap-10 mx-10 lg:mx-auto mt-10 hidden">
        <!-- Top  -->
        <div class="flex flex-col md:flex-row lg:gap-28 gap-8 items-center">
          <!-- Left -->
          <div class="lg:max-w-2xl max-w-lg">
            <p class="text-xl md:text-2xl leading-snug">
              We’re <span class="text-[#31F7C8]"><a href="index.html">Technoboost</a></span>. A group of
              dedicated individuals collaborating on amazing initiatives and
              fostering lasting relationships that go far beyond just the final
              product.
            </p>
          </div>

          <!-- Right -->
          <div class="flex flex-col gap-10 text-base text-xl">
            <div class="flex flex-col gap-2 hidden">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">LinkedIn</a>
            </div>
            <div class="flex flex-col gap-2 text-lg">
              <a href="index.html#client-success">Client Success</a>
              <a href="index.html#our-service">Services</a>
              <a href="terms-condition.html">Terms & Conditions</a>
              <a href="privacy-policy.html">Privacy Policy</a>
              
            </div>
          </div>
        </div>

        <!-- Bottom Section -->
        <div class="flex flex-col md:flex-row gap-28 items-baseline">
          <h3 class="text-xl md:text-2xl max-w-2xl leading-snug">
            Want to collaborate with a super down-to-earth, mad-talented team?
            Hit us up!
          </h3>

          <!-- Address -->
          <h4 class="text-base text-gray-300 max-w-xs">
            Technoboost Services<br />
            24, 2nd Floor, Shree Durga Arcade<br />
            1st Cross Rd, Kasavanahalli.
          </h4>
        </div>
        <!-- CONNECT BUTTON -->
        <a href="contact-us.html"
          class="flex items-center justify-between group bg-[#F6FA5E] text-black rounded-4xl px-8 py-6 md:py-8 mx-4 md:mx-0"
        >
          <div class="flex flex-col justify-center">
            <h4 class="text-3xl md:text-[50px]">Let's Connect</h4>
            <p class="font-light md:text-2xl mt-2 text-sm">
              Let's have a quick chat about project
            </p>
          </div>
          <div>
            <div>
              <img
                src="images/arrow.svg"
                class="w-12 md:w-32 group-hover:scale-125 cursor-pointer transition-all"
                alt=""
              />
            </div>
          </div>
        </a>
        <div class="flex gap-2 items-center hidden">
          <img src="images/web-white.svg" alt="" />
          <p>Online</p>
          <span class="bg-[#31F7C8] md:w-4 md:h-4 w-2 h-2 rounded-full"></span>
        </div>
        <p class="text-xs">Copyright © 2025 Technoboost. All rights reserved.</p>

      </div>
      
    `;
  }
}

customElements.define("technoboost-footer", TechnoboostFooter);

const element = document.querySelector(".typing");
const contents = document.querySelectorAll(".accordion-content");

function toggleSection(elem) {
  const $section = $(elem).closest("div");
  const $body = $section.next(".body");
  const $img = $section.find("img");
  $(".body").not($body).slideUp(300);
  $(".body").not($body).prev().find("img").removeClass("rotate-180");
  $body.stop(true, true).slideToggle(300);

  $img.toggleClass("rotate-180");
}

// function toggleSection(elem) {
//   const $section = $(elem).closest("div");
//   const $body = $section.next(".body");
//   const $img = $section.find("img");
//   $(".body").not($body).slideUp(300);
//   $(".body").not($body).prev().find("img").removeClass("rotate-180");
//   $body.stop(true, true).slideToggle(300);

//   $img.toggleClass("rotate-180");
// }
