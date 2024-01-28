export default function Card(){
    return(
        <div className="w-fit flex flex-col items-start gap-2 p-[10px] rounded-[10px] border border-gray-300">
            <div className="h-[250px] w-[250px] bg-gray-600 rounded-[5px] "></div>
            <div className="text-2xl font-medium">3D Design</div>
            <div className="max-w-[243px]">We offer a wide range of design services</div>
        </div>
    )
}