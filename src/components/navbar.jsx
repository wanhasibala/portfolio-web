import { useEffect, useState } from "react";
import Button from "./ui/Button";
import Menu from "./ui/Menu";
import Magnetic from "../common/Magnetic/Magnetic";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const toggleHamburger = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <header className="fixed z-10 mx-auto  w-full   flex  justify-between px-2   text-secondary-100">
        <div className="  px-1 md:px-4 py-2 flex justify-between w-full rounded-full items-center mt-10  mx-auto">
          <Magnetic>
            <a
              href="/"
              className="text-2xl font-semibold bg-primary-200 py-2 px-4 rounded-full"
            >
              wan
            </a>
          </Magnetic>
          <Button toggleHamburger={toggleHamburger} isActive={!isActive} />
          <Menu toggleHamburger={toggleHamburger} isActive={!isActive} />
        </div>
      </header>
    </>
  );
}
