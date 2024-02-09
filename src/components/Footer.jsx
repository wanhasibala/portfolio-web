export default function Footer() {
  return (
    <div className="my-20 max-w-[1440px] mx-5 lg:mx-auto lg:px-5  ">
      <div className="flex gap-5 justify-around mb-10">
        <div className="flex flex-col w-full gap-2">
          <div className="border-b border-gray-800 font-semibold ">
            NAVIGATION
          </div>{" "}
          <a href="/"> Home </a>
          <a href="#about">About</a>
          <a href="#service">Services</a>
          <a href="#work">Work</a>
          <a href="#contact"> Contact</a>
        </div>
        <div className="flex flex-col w-full gap-2">
          <div className="border-b border-gray-800 font-semibold">SOCIAL</div>
          Linkedin <br />
          Github <br />
          Instagram <br />
          Twitter <br />
        </div>
      </div>
      <div className="flex gap-2 items-end justify-around">
        <div className="text-2xl md:text-6xl font-bold w-full">
          <div>2024</div>
          <div>WAN HASIB </div>
        </div>
        <div className="font-semibold w-full">
          LOCAL TIME
          <div className="font-normal">3:13(GMT+7)</div>
        </div>
      </div>
    </div>
  );
}
