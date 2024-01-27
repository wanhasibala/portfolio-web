export default function Navbar(){
  return(
  <div className="fixed top-[50px] flex w-full justify-between px-10  text-white">
      <div className="px-2 bg-primary-200 flex justify-between w-full">
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
