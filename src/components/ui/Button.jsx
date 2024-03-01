import React, { useState } from "react";

export default function Button({toggleHamburger,isActive}) {
  return (
    <div
      onClick={toggleHamburger}
      className={`fixed  right-0 m-5 z-2 w-16 h-16 rounded-full bg-primary-200 cursor-pointer flex flex-col gap-2 items-center justify-center z-10 shadow-lg shadow-gray-500/50 hover:ring-4 hover:ring-primary-300 ${!isActive && 'right-0'}`}
    >
      <div
        className={`block h-[1px] w-[40%]  bg-white relative transition-transform origin-bottom-right ${
          !isActive && "-rotate-45 -translate-y-[5px] -translate-x-[3px] "
        }`}
      ></div>
      <div
        className={`block h-[1px] w-[40%]  bg-white relative transition-transform origin-top-right ${
          !isActive && "rotate-45 translate-y-[5px] -translate-x-[3px] h-[3px] "
        }`}
      ></div>
    </div>
  );
}
