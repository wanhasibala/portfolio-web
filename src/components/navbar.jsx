import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    window.onscroll = function () {
      const header = document.querySelector("header ");
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
      } else {
        header.clasList.remove("navbar-fixed");
      }
    };

    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("hamburger-active");
      navMenu.classList.toggle("hidden");
    });
  });
  return (
    <>
    <header className="absolute z-10 top-[50px]  w-full self-center  mx-auto flex  justify-center px-8  text-secondary-100">
        <div className=" max-w-[1440px] px-4 py-2 bg-primary-200 flex justify-between w-full rounded-full items-center relative">
          <a href="/" className="text-2xl font-semibold bg-primary-200 bg-opacity-80 px-2 py-1 rounded-full">
            wan
          </a>
          <div class="flex items-center  ">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              class="block absolute right-4 md:hidden bg-primary-200 bg-opacity-80 rounded-full w-fit px-2 py-1 h-fit"
            >
              <span class="hamburger-line origin-top-left"></span>
              <span class="hamburger-line"></span>
              <span class="hamburger-line origin-bottom-left "></span>
            </button>
            <nav id="nav-menu" class="hidden md:block ">
              <div class="absolute right-2 mt-6 p-2 rounded-lg text-xl uppercase flex flex-col items-end bg-primary-200 md:bg-opacity-80 md:flex md:flex-row md:-top-5 md:rounded-full px-4 gap-20 ">
                <a href="#about">About </a>
                <a href="#work">Work</a>
                <a href="#service">Services</a>
                <a
                  href="#contact"
                  class="text-xl text-primary-200 bg-secondary-100 px-2 py-1 rounded-full  md:px-8 md:py-0"
                >
                  contact me
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
