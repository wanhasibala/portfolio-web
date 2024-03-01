export default function Footer() {
  const time = document.getElementById("datetime");
  setInterval(() => {
    const now = new Date();
    let h =now.getHours();
    let m = now.getMinutes();
    let clock = h + ":" + m  ;
    time.innerHTML = clock;
  }, 1000);

  return (
    <div className="my-20 max-w-[1440px] mx-5 lg:mx-auto lg:px-5  ">
      <div className="flex gap-5 justify-around mb-10">
        <div className="flex flex-col w-full gap-2">
          <div className="border-b border-gray-800 font-semibold ">
            NAVIGATION
          </div>
          <a href="/" className="hover:pl-2 duration-500">
            {" "}
            Home{" "}
          </a>
          <a href="#about" className="hover:pl-2 duration-500">
            About
          </a>
          <a href="#service" className="hover:pl-2 duration-500">
            Services
          </a>
          <a href="#work" className="hover:pl-2 duration-500">
            Work
          </a>
          <a href="#contact" className="hover:pl-2 duration-500">
            {" "}
            Contact
          </a>
        </div>
        <div className="flex flex-col w-full gap-2">
          <div className="border-b border-gray-800 font-semibold">SOCIAL</div>
          <a
            href="https://www.linkedin.com/in/wanhasib/"
            className="hover:pl-2 duration-500"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/wanhasibala"
            className="hover:pl-2 duration-500"
          >
            Github
          </a>
          <a
            href="https://www.instagram.com/wanhasib.ala"
            className="hover:pl-2 duration-500"
          >
            Istagram
          </a>
          <a
            href="https://twitter.com/wanhasib_ala"
            className="hover:pl-2 duration-500"
          >
            Twitter
          </a>
        </div>
      </div>
      <div className="flex gap-2 items-end justify-around">
        <div className="text-2xl md:text-6xl font-bold w-full">
          <div>2024</div>
          <div>WAN HASIB </div>
        </div>
        <div className="font-semibold w-full">
          LOCAL TIME
          <div className="font-normal" id="datetime"></div>
        </div>
      </div>
    </div>
  );
}
