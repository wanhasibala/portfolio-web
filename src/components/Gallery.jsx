import Intersect from "/public/Intersect.png";
import Intersect1 from "/public/Intersect-1.png";
import Intersect2 from "/public/Intersect-2.png";
import Intersect3 from "/public/Intersect-3.png";
export default function Galery(){
  return (
    <>
 <div className=" relative my-10 flex max-w-lg border md:max-w-4xl justify-center mx-auto">
      <div className=" w-3/4 h-[75vh] top-0 left-0">
        <img className="top-0 left-3/4 absolute w-1/4 h-3/4" alt="Intersect" src="Intersect.png" />
        <img className="top-[109px] left-2/4 absolute w-1/4 h-3/4" alt="Intersect" src="Intersect-1.png" />
        <img className="top-0 left-1/4 absolute w-1/4 h-3/4" alt="Intersect" src="Intersect-2.png" />
        <img className="top-[62px] left-0 absolute w-1/4 h-3/4" alt="Intersect" src="Intersect-3.png" />
      </div>
    </div>
      <div className="max-w-[1400] px-12 text-4xl text-center text-secondary-800">I am a Product Design with a keen eye for aesthetics and a commitment to crafting digital experiences that not only meet but exceed user expectations.</div>
    </>
  )
}
