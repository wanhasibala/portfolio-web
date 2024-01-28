export default function Project(){
  return(
  <>
  <h1 className="size-2/4 my-20 text-6xl mx-auto text-center">A Quick Glance of My past Project</h1>
  <div className="my-10 mx-12 flex gap-5 ">
      <a className="relative w-fit mt-[-1.00px] bg-gray-200 px-4 py-2 rounded-full  font-regular text-gray-800 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
       3D Design 
      </a>
<a className="relative w-fit mt-[-1.00px] bg-gray-200 px-4 py-2 rounded-full  font-regular text-gray-800 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
  Product Design
      </a>
<a className="relative w-fit mt-[-1.00px] bg-gray-200 px-4 py-2 rounded-full  font-regular text-gray-800 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
  Web Development
      </a>

<a className="relative w-fit mt-[-1.00px] bg-gray-200 px-4 py-2 rounded-full  font-regular text-gray-800 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
  Mobile Development
  </a>
  </div>
  <div className="my-20 mx-12">
      <div className="flex flex-row justify-between text-[14px] text-gray-700">
        <p className="min-w-[250px]">TITLE</p>
        <p>LOCATION</p>
        <p>SERVICES</p>
        <p>YEARS</p>
      </div>
      <div className="mt-[50px]">
        <div className="flex flex-row  justify-between text-[16px] text-gray-700 py-[50px] border-y border-gray-300 ">
          <p className="min-w-[250px] text-2xl">ADS VIDEO</p>
          <p>Indonesia</p>
          <p>3D Design</p>
          <p>2022</p>
        </div>
        <div className="flex flex-row  justify-between text-[16px] text-gray-700 py-[50px] border-y border-gray-300 ">
          <p className="min-w-[250px] text-2xl">ADS VIDEO</p>
          <p>Indonesia</p>
          <p>3D Design</p>
          <p>2022</p>
        </div>
      </div>
      <div className="my-20 relative rounded-full bg-primary-200 w-fit mx-auto text-xl text-gray-100 px-10 py-5 ">
        Archive
        <div className="absolute top-3 left-[70%] text-sm">0</div>
      </div>
    </div> 

  </>
  )
}
