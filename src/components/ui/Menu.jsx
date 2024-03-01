import React from "react";

export default function Menu({ toggleHamburger, isActive }) {
  return (
    <div
      onClick={toggleHamburger}
      className={`absolute top-0 right-0  h-[100vh] w-full py-32 md:px-20 px-10 text-4xl bg-primary-200 max-w-lg duration-500 ease-in-out  transition-all   text-white flex flex-col  justify-between  ${
        isActive && "-right-[32rem] "
      }`}
    >
      <div className="text-xl border-b pb-2">Navigation</div>
      <div className="flex flex-col  gap-5">
        <a href="/">Home</a>
        <a href="#gallery">Gallery</a>
        <a href="#services">Services</a>
        <a href="#work">Project</a>
        <a href="#contact">Contact</a>
      </div>
      <div> 
        <div className="text-xl border-b pb-2 mb-4">Link</div>
        <div className="text-lg flex gap-4 ">
          <a href="https://instagram.com/wanhasib.ala/" >Instagram</a>
          <a href="https://twitter.com/wanhasib_ala">Twitter</a>
          <a href="https://github.com/wanhasibala">Github</a>
          <a href="">Email</a>
        </div>
      </div>
    </div>
  );
}
