import Card from './ui/card'
export default function Offer(){
  return (
    <>
    <div className="my-10 px-12 flex justify-between">
      <div className="flex ">
       <div className="-rotate-90">SERVICES</div> 
       <div className="text-2xl md:text-6xl font-medium -ml-8 text-secondary-800">We offer a wide range of design services</div>
      </div>
      <div className="flex gap-4 self-center">
        <div className="bg-secondary-900 text-secondary-100 px-2 py-1 rounded-full h-fit">left</div>
        <div className="bg-secondary-900 text-secondary-100 px-2 py-1 rounded-full h-fit">right</div>
      </div>
    </div>
    <div className='flex mx-12 gap-5 overflow-scroll my-20'>
    <Card />
    <Card />
    <Card />
    <Card />
    </div>
    </>
  )
}
