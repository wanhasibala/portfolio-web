export default function Footer() {
  return (
    <div className="my-20 mx-12 ">
      <div className="flex gap-5 justify-around mb-10">
        <div className="flex flex-col w-full gap-2">
          <div className="border-b border-gray-800 font-semibold ">NAVIGATION</div> Home <br />
          About
          <br />
          Services
          <br />
          Work <br />
          Contact
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
