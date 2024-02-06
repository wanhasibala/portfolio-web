import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Hero() {
  gsap.registerPlugin(ScrollTrigger);

  // make the boxes random colors
  gsap.set(".box", {
    backgroundColor: "rgb(random(0,190), random(0,190), random(0,190))",
  });

  // apply parallax effect to any element with a data-speed attribute
  gsap.to("[data-speed]", {
    y: (i, el) =>
      (1 - parseFloat(el.getAttribute("data-speed"))) *
      ScrollTrigger.maxScroll(window),
    ease: "none",
    scrollTrigger: {
      start: 0,
      end: "max",
      invalidateOnRefresh: true,
      scrub: 1,
    },
  });
  return (
    <section class="max-w-[100vw] h-[99vh] bg-primary-200 relative rounded-b-[50px]  leading-tight flex flex-col hero">
      <div class="max-w-[1440px] h-full absolute flex flex-col justify-end gap-10 lg:gap-24  text-white px-4 pb-[50px] md:pb-[100px] self-center z-1">
        <h1 class="text-title font-bold " data-speed="0.70">
          Visual designer based on{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EBB9AC] to-[#BFB2E2]">
            Indonesia
          </span>
        </h1>
        <h2
          className=" text-special text-secondary-200 w-full md:max-w-[800px] "
          data-speed="0.80"
        >
          Interested in Web and Mobile development, Product Design, and 3D
          design and animation
        </h2>
        <div
          className="flex text-special bg-gray-100 items-center gap-2 hover:gap-5 duration-500 esae-in-out w-fit px-10 py-5 font-medium text-primary-200 rounded-full "
          data-speed="1.00"
        >
          Get in touch
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1L14 7L8 13M13.1667 7H1"
              stroke="#1D233B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <svg
        width="274"
        height="274"
        viewBox="0 0 274 274"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute bottom-48 right-32 z-1 w-[200px] md:bottom-[40%] md:right-[40%]  "
      >
        <circle
          cx="137.04"
          cy="137.04"
          r="136.5"
          transform="rotate(135 137.04 137.04)"
          fill="url(#paint0_linear_645_682)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_645_682"
            x1="137.04"
            y1="0.540039"
            x2="156.132"
            y2="118.005"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#131931" />
            <stop offset="1" stop-color="#1D233B" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}
