import React from "react";
import gsap from "gsap";

export default function Project() {
gsap.set(".flair", {xPercent: -50, yPercent: -50});

let xTo = gsap.quickTo(".flair", "x", {duration: 0.6, ease: "power3"}),
    yTo = gsap.quickTo(".flair", "y", {duration: 0.6, ease: "power3"});

window.addEventListener("mousemove", e => {
  xTo(e.clientX);
  yTo(e.clientY);
});
  return (
    <div className="flex flex-row  justify-between text-[16px] text-secondary-700 py-[50px] border-y border-secondary-300 menu-item">
      <p className="min-w-[250px] text-2xl">ADS VIDEO</p>
      <p className="hidden md:flex">Indonesia</p>
      <p className="hidden md:flex">3D Design</p>
      <p>2022</p>
      <div className="flair flair--3 w-[100px] h-[100px] fixed top-0 left-0 pointer-events-none"></div>
      {/* <img src='/Intersect.webp'  style={{border:1, padding:4, borderColor:'#000000', borderRadius:50}}/> */}
      {/* <div
        className="hover-reveal absolute top-0 left-0 w-[200px] h-[300px] opacity-1 pointer-events-none translate-x-0 translate-y-[-200px] duration-[0.2s] ease-in-out"
        style={{ border: 1, padding: 4 }}
      >
        <div className="hover-reveal__inner w-full h-full overflow-hidden relative will-change-transform">
          <img
            src="/Intersect.webp"
            className="hover-reveal__img one bg-cover relative will-change-transform scale-90 duration-1500"
          />
        </div>
      </div> */}
    </div>
  );
}
