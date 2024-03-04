import React from "react";
import Magnetic from "../../common/Magnetic/Magnetic";

export default function Menu({ toggleHamburger, isActive }) {
  return (
    <div
      onClick={toggleHamburger}
      className={`absolute top-0 right-0 z-0  h-[100vh] w-full py-32 md:px-20 px-10 text-4xl bg-primary-200 max-w-lg duration-500 ease-in-out  transition-all   text-white flex flex-col  justify-between  ${
        isActive && "right-[-32rem] "
      }`}
    >
      <div className="text-xl border-b pb-2">Navigation</div>
      <div className="flex flex-col  gap-5">
        <Magnetic>
          <a href="/">Home</a>
        </Magnetic>
        <Magnetic>

        <a href="#gallery">Gallery</a>
        </Magnetic>
        {/* <a href="#services">Services</a> */}
        <Magnetic>

        <a href="#work">Project</a>
        </Magnetic>
        <Magnetic>
          
        <a href="#contact">Contact</a>
        </Magnetic>
      </div>
      <div>
        <div className="text-xl border-b pb-2 mb-4">Link</div>
        <div className="text-lg flex gap-4 ">
          <a href="https://instagram.com/wanhasib.ala/">Instagram</a>
          <a href="https://twitter.com/wanhasib_ala">Twitter</a>
          <a href="https://github.com/wanhasibala">Github</a>
          <a href="">Email</a>
        </div>
      </div>
    </div>
  );
}
