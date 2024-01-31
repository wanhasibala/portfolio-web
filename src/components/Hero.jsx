export default function Hero(){
  return(
  <div  className="w-full flex flex-col gap-10 lg:gap-24 bg-primary-200 text-white px-12 pt-32 pb-24 rounded-b-[50px]">
      <h1 className="text-7xl lg:text-9xl font-bold">Visual designer based on <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EBB9AC] to-[#BFB2E2]">Indonesia</span></h1>
      <h2 className=" text-secondary-200 max-w-[30rem]">Interested in Web and Mobile development, Product Design, and 3D design and animation</h2>
      <div className="inline-flex bg-gray-100 items-center justify-center w-fit px-10 py-5  font-medium text-primary-200 rounded-full" > 
        Get in touch
      </div>
    </div>
  )
}
