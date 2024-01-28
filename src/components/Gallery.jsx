import Intersect from "/public/Intersect.png";
import Intersect1 from "/public/Intersect-1.png";
import Intersect2 from "/public/Intersect-2.png";
import Intersect3 from "/public/Intersect-3.png";
export default function Galery(){
  return (
    <>
 <div className="relative mx-auto w-[734px] h-[568px] my-10 flex ">
      <div className=" w-[734px] h-[568px] top-0 left-0">
        <img className="top-0 left-[559px] absolute w-[175px] h-[459px]" alt="Intersect" src="Intersect.png" />
        <img className="top-[109px] left-[375px] absolute w-[175px] h-[459px]" alt="Intersect" src="Intersect-1.png" />
        <img className="top-0 left-[187px] absolute w-[175px] h-[459px]" alt="Intersect" src="Intersect-2.png" />
        <img className="top-[62px] left-0 absolute w-[175px] h-[459px]" alt="Intersect" src="Intersect-3.png" />
      </div>
    </div>
      <div className="max-w-[1400] px-12 text-4xl text-center text-gray-700">I am a Product Design with a keen eye for aesthetics and a commitment to crafting digital experiences that not only meet but exceed user expectations.</div>
    </>
  )
}
