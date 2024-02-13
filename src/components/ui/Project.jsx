import React, { useEffect, useRef } from "react";
import gsap from "gsap";


export default function Project() {
  return (
    <div>
      <div className="inline-flex w-full  justify-between text-[16px] text-secondary-700 py-[50px] border-y border-secondary-300 menu-item">
        <div className="min-w-[250px] text-2xl  flex items-center">ADS VIDEO
        <div className="flex-[0] hover:flex-1">

          <img src="/Intersect.webp" alt="hover image" className="  w-[125px] duration-300 " style={{flex: 0 }} /> 
        </div>
        </div>
        <div className="hidden md:flex ">Indonesia</div>
        <div className="hidden md:flex ">3D Design</div>
        <div>2022</div>
        <span className="flair flair--3 w-[100px] h-[100px] fixed top-0 left-0 pointer-events-none"></span>
        
      </div>
    </div>
  );
}
