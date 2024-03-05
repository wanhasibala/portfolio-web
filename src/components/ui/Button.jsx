import React, { useState } from "react";
import Magnetic from "../../common/Magnetic/Magnetic";

export default function Button({ toggleHamburger, isActive }) {
  return (
    <>
      <div className="pointer-events-auto absolute right-[2.5%]  z-[51] ">
        <Magnetic>
          <div
            onClick={toggleHamburger}
            className={`  right-0 m-5 w-16 h-16 rounded-full bg-primary-200 cursor-pointer flex flex-col gap-2 items-center justify-center z-20   hover:ring-4 hover:ring-primary-300 `}
          >
            <div
              className={`block h-[1px] w-[40%]  bg-white relative transition-transform origin-bottom-right ${
                !isActive &&
                "-rotate-45 -translate-y-[5px] -translate-x-[3px]  "
              }`}
            ></div>
            <div
              className={`block h-[1px] w-[40%]  bg-white relative transition-transform origin-top-right ${
                !isActive &&
                "rotate-45 translate-y-[5px] -translate-x-[3px] h-[3px] "
              }`}
            ></div>
          </div>
        </Magnetic>
      </div>
    </>
  );
}
