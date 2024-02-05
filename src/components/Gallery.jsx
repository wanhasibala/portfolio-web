import Intersect from "/public/Intersect.png";
import Intersect1 from "/public/Intersect-1.png";
import Intersect2 from "/public/Intersect-2.png";
import Intersect3 from "/public/Intersect-3.png";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
export default function Galery() {
//   gsap.registerPlugin(ScrollTrigger);
//   gsap.to("[data-speedd]", {
//   y: (i, el) => (1 - parseFloat(el.getAttribute("data-speedd"))) * ScrollTrigger.maxScroll(window) ,
//   ease: "none",
//   scrollTrigger: {
//     start: 0,
//     end: "max",
//     invalidateOnRefresh: true,
//     scrub: 1
//   }
// });
  return (
    <div class="bg-secondary-100 w-[100vw]">
      <div className=" relative my-10 flex gap-5 border justify-center mx-auto ">
        <div className="relative w-[1440px] h-fit top-0 left-0 border border-black gap-5  flex justify-center ">
          <img
            className="mt-[101px] w-[286.19px] h-[750px]"
            alt="Intersect"
            src="Intersect-3.png"
            data-speed='1'
          />
          <img
            className="  w-[286.19px] h-[750px]"
            alt="Intersect"
            src="Intersect-2.png"
            data-speedd='0.75'
          />

          <img
            className="mt-[178px] w-[286.19px] h-[750px]"
            alt="Intersect"
            src="Intersect-1.png"
            data-speedd='1.1'
          />
          <img
            className=" mt-[55px] w-[286.19px] h-[750px]"
            alt="Intersect"
            src="Intersect.png"
            data-speedd='0.90'
          />
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-12 text-4xl font-medium text-center text-secondary-800">
        I am a Product Design with a keen eye for aesthetics and a commitment to
        crafting digital experiences that not only meet but exceed user
        expectations.
      </div>
    </div>
  );
}
