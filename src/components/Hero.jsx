import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Hero() {
gsap.registerPlugin(ScrollTrigger);

// make the boxes random colors
gsap.set(".box", {backgroundColor: "rgb(random(0,190), random(0,190), random(0,190))"});

// apply parallax effect to any element with a data-speed attribute
gsap.to("[data-speed]", {
  y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window) ,
  ease: "none",
  scrollTrigger: {
    start: 0,
    end: "max",
    invalidateOnRefresh: true,
    scrub: 1
  }
});
  return (
    <section class="max-w-[99vw] h-[99vh] bg-primary-200 relative rounded-b-[50px] leading-tight flex flex-col hero">
      <div class="max-w-[1440px] h-full absolute flex flex-col justify-end gap-5 lg:gap-24  text-white px-4  pb-10 self-center ">
        <h1 className="text-7xl lg:text-9xl font-bold layer-1 layer parallax " data-speed='0.70'>
          Visual designer based on{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EBB9AC] to-[#BFB2E2]">
            Indonesia
          </span>
        </h1>
        <h2 className=" text-2xl text-secondary-200 max-w-[600px] md:max-w-[800px] " data-speed='0.80'>
          Interested in Web and Mobile development, Product Design, and 3D
          design and animation
        </h2>
        <div className="inline-flex text-xl bg-gray-100 items-center justify-center w-fit px-10 py-5 font-medium text-primary-200 rounded-full layer-3 layer parallax" data-speed='1.00'>
          Get in touch
        </div>
      </div>
    </section>
  );
}
