class TechnoBoostFooter extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <div class="mx-4 mt-8 text-white font-sans md:hidden block">
        <div class="flex flex-col gap-5">
          <h1 class="text-2xl">
            We’re <span class="text-[#31F7C8]">Technoboost.</span> A group of dedicated individuals collaborating on
            amazing initiatives and fostering lasting relationships that go far
            beyond just the final product.
          </h1>
          <h1 class="text-2xl">
            Want to collaborate with a super down-to-earth, mad-talented team?
            Hit us up!
          </h1>
          <div class="flex flex-col gap-3 text-lg">
            <div class="flex flex-col">
              <a href="">Instagram</a>
              <a href="">Facebook</a>
              <a href="">LinkedIn</a>
            </div>
            <div class="flex flex-col">
              <a href="#client-success">Client Success</a>
              <a href="">About</a>
              <a href="">Careers</a>
            </div>
          </div>
          <div>
            <h1>
              Technoboost Services <br />
              24, 2nd Floor, Shree Durga Arcade <br />
              1st Cross Rd, Kasavanahalli.
            </h1>
          </div>
          <div
            class="flex items-center justify-between bg-[#F6FA5E] text-black rounded-2xl px-6 py-3"
          >
            <div>
              <p class="text-4xl">Let's Connect</p>
              <p class="font-light mt-2 text-xs">
                Let's have a quick virtual chat about project
              </p>
            </div>
            <div>
            <a href="contact-us.html">
              <img
                src="images/arrow.svg"
                class="w-12 hover:scale-125 cursor-pointer transition-all"
                alt="Arrow"
              />
              </a>
            </div>
          </div>
        </div>
        <div class="flex gap-2 mt-5 items-center">
          <img src="images/web-white.svg" alt="Web Icon" />
          <p>Online</p>
          <span class="bg-[#31F7C8] md:w-4 md:h-4 w-2 h-2 rounded-full"></span>
        </div>
      </div>
    `;
  }
}
customElements.define("techno-boost-footer", TechnoBoostFooter);

class TechnoBoostFixNav extends HTMLElement {
  constructor() {
    super();

    let serviceurl='#our-service'
    let clientSuccessUrl='#client-success'
    if(!location.pathname.includes('index.html')){
        serviceurl='index.html#our-service'
        clientSuccessUrl='index.html#client-success'
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
            >HOME</a>
            <a
              href="${serviceurl}"
              id="services"
              class="hover:bg-[#05070F] nav-link hover:text-white p-2 rounded-xl cursor-pointer"
            >SERVICES</a>
            <a
              href=""
              class="hover:bg-[#05070F] nav-link hover:text-white p-2 rounded-xl hidden cursor-pointer"
            >PRODUCTS</a>
            <a
              href="${clientSuccessUrl}"
              id="client"
              class="hover:bg-[#05070F] nav-link hover:text-white p-2 rounded-xl text-nowrap cursor-pointer"
            >CLIENT SUCCESS</a>
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
      <a href="contact-us.html" class="let-connect yellow h-28 w-28 lg:h-36 lg:w-36 flex items-center justify-center rounded-full yellow shadow-sm hover:scale-125 transition-all cursor-pointer fixed right-6 z-50 translate-y-[-140%] opacity-100 transition-transform duration-500 ease-in-out">
      <h1 class="text-[10px] md:text-sm" style="transform: translateY(35px)">
    Let's Connect
      </h1>
      </a>
    `;
  }

  connectedCallback() {
    const letConnect = this.querySelector(".let-connect");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 1200) {
        letConnect.classList.add("translate-y-[-100%]", "opacity-0");
        letConnect.classList.remove("translate-y-0", "opacity-100");
      } else {
        letConnect.classList.remove("translate-y-[-100%]", "opacity-0");
        letConnect.classList.add("translate-y-0", "opacity-100");
      }
    });
  }
}

customElements.define("lets-connect", LetsConnect);

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
