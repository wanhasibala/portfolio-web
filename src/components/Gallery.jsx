import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import SplitText from "gsap-trial/SplitText";

export default function Galery() {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  gsap.to(".box-2", {
    y: 202,
    ease: "none",
    scrollTrigger: {
      trigger: ".galery-container",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: 1,
    },
  });
  gsap.to(".box-3", {
    y: -154,
    ease: "none",
    scrollTrigger: {
      trigger: ".galery-container",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: 1,
    },
  });
  gsap.to(".box-4", {
    y: 92,
    ease: "none",
    scrollTrigger: {
      trigger: ".galery-container",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true,
    },
  });
  //split text animation

  let text = new SplitText(".split", { type: "words" });

  gsap.from(text.words, {
    opacity: 0.15,
    stagger: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".trigger",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });

  return (
    <>
      <div className=" self-center my-10 flex gap-5 border justify-center mx-auto px-4 relative  h-[60vh] md:h-[120vh]">
        <div class=" galery-container  top-50 left-0  gap-gap mx-4 px-4 flex justify-center">
          <img
            className="mt-[101px] h-image-height w-image-width box-1"
            alt="Intersect"
            src="Intersect-3.png"
            data-speed="1"
          />
          <img
            className="  h-image-height w-image-width box-2"
            alt="Intersect"
            src="Intersect-2.png"
            data-speedd="0.75"
          />

          <img
            className="mt-[178px] h-image-height w-image-width box-3"
            alt="Intersect"
            src="Intersect-1.png"
            data-speedd="1.1"
          />
          <img
            className=" mt-[55px]  h-image-height w-image-width box-4"
            alt="Intersect"
            src="Intersect.png"
            data-speedd="0.90"
          />
        </div>
      </div>

      <div className="  max-w-[1440px] mx-auto px-4 md:px-12 text-heading-3 font-medium text-center my-5 text-secondary-800 trigger">
        <div className="split">
          I am a Product Design with a keen eye for aesthetics and a commitment
          to crafting digital experiences that not only meet but exceed user
          expectations.
        </div>
      </div>

      {/* <div class=" flex gap-[20px]  w-[100vw] my-2.5">
        <div className="w-[120px] h-[67.5px] bg-secondary-700">first</div>
        <div className="w-[120px] h-[67.5px] bg-secondary-700">first</div>
        <div className="w-[120px] h-[67.5px] bg-secondary-700">first</div>
        <div className="w-[120px] h-[67.5px] bg-secondary-700">first</div>
      </div>
      <div class=" flex gap-[20px] overflow-scroll w-[100vw] my-2.5">
        <div className="w-[120px] h-[67.5px] bg-secondary-700">first</div>
        <div className="w-[120px] h-[67.5px] bg-secondary-700">first</div>
        <div className="w-[120px] h-[67.5px] bg-secondary-700">first</div>
        <div className="w-[120px] h-[67.5px] bg-secondary-700">first</div>
      </div> */}

      <style></style>
    </>
  );
}
