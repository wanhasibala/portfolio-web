export default function Project(){
  return(
  <>
  <h1 className="size-2/4 text-secondary-800 my-20 text-6xl mx-auto text-center">A Quick Glance of My past Project</h1>
  <div className="my-10 mx-12 flex gap-5 overflow-scroll">
      <a className="relative w-fit mt-[-1.00px] bg-secondary-200 px-4 py-2 rounded-full  font-regular text-secondary-800 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
       3D Design 
      </a>
<a className="relative w-fit mt-[-1.00px] bg-secondary-200 px-4 py-2 rounded-full  font-regular text-secondary-800 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
  Product Design
      </a>
<a className="relative w-fit mt-[-1.00px] bg-secondary-200 px-4 py-2 rounded-full  font-regular text-secondary-800 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
  Web Development
      </a>

<a className="relative w-fit mt-[-1.00px] bg-secondary-200 px-4 py-2 rounded-full  font-regular text-secondary-800 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
  Mobile Development
  </a>
  </div>
  <div className="my-20 mx-12">
      <div className="flex flex-row justify-between text-[14px] text-secondary-700">
        <p className="min-w-[250px]">TITLE</p>
        <p className="hidden md:flex">LOCATION</p>
        <p className="hidden md:flex">SERVICES</p>
        <p>YEARS</p>
      </div>
      <div className="mt-[50px]">
        <div className="flex flex-row  justify-between text-[16px] text-secondary-700 py-[50px] border-y border-secondary-300 ">
          <p className="min-w-[250px] text-2xl">ADS VIDEO</p>
          <p className="hidden md:flex">Indonesia</p>
          <p className="hidden md:flex">3D Design</p>
          <p>2022</p>
        </div>
        <div className="flex flex-row  justify-between text-[16px] text-secondary-700 py-[50px] border-y border-secondary-300 ">
          <p className="min-w-[250px] text-2xl">ADS VIDEO</p>
          <p className="hidden md:flex">Indonesia</p>
          <p className="hidden md:flex">3D Design</p>
          <p >2022</p>
        </div>
      </div>
      <div className="my-20 relative rounded-full bg-secondary-900 w-fit mx-auto text-xl text-secondary-100 px-10 py-5 ">
        Archive
        <div className="absolute top-3 left-[70%] text-sm">0</div>
      </div>
    </div> 

  </>
  )
}
