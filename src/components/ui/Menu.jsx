import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Magnetic from "../../common/Magnetic/Magnetic";

export default function Menu({ toggleHamburger, isActive }) {
  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    import("locomotive-scroll").then((locomotiveModule) => {
      const locomotivescroll = new locomotiveModule.default();
      setScroll(locomotivescroll);
    });
  }, []);

  const handleScroll = (id) => {
    scroll && scroll.scrollTo(id, { duration: 2 });
    SecurityPolicyViolationEvent(false);
  };
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
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
          >
            Home
          </Link>
        </Magnetic>
        <Magnetic>
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Gallery
          </Link>
        </Magnetic>
        <Magnetic>
          <Link
            to="work"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
          >
            Project
          </Link>
        </Magnetic>
        <Magnetic>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
          >
            Contact
          </Link>
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
