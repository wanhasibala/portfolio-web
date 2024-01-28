export default function Navbar(){
  return(
  <div className="fixed z-10 top-[50px] flex w-full justify-between px-8  text-white">
      <div className="px-4 py-2 bg-primary-200 flex justify-between w-full rounded-full">
     <a className="text-2xl font-semibold">wan</a> 
      <div className="flex items-center gap-5 md:gap-12">
        <a>About </a>
        <a>Work</a>
        <a>Services</a>
        <div className="text-xl text-gray-950 bg-white px-5 py-1 rounded-full ">contact me</div>
      </div>
      </div>
    </div>
  )
} 
