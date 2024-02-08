import Card from "./ui/card";
export default function Offer() {
  return (
    <>
      <div className="my-10 px-12 flex justify-between">
        <div className="flex items-center border gap-5">
          <div className="-rotate-90 origin-right border border-black w-fit h-fit self-start">SERVICES</div>
          <div className="text-heading-3 md:text-6xl font-medium -ml-8  text-secondary-800">
            We offer a wide range of design services
          </div>
        </div>
        <div className="flex gap-4 self-center h-fit w-fit">
          <svg
            width="57"
            height="56"
            viewBox="0 0 57 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="57" height="56" rx="28" fill="#171717" />
            <path
              d="M32 16L22.1213 25.8787C20.9497 27.0503 20.9497 28.9497 22.1213 30.1213L32 40"
              stroke="#F9F9F9"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>

          <svg
            width="57"
            height="56"
            viewBox="0 0 57 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="57"
              y="56"
              width="57"
              height="56"
              rx="28"
              transform="rotate(-180 57 56)"
              fill="#171717"
            />
            <path
              d="M25 40L34.8787 30.1213C36.0503 28.9497 36.0503 27.0503 34.8787 25.8787L25 16"
              stroke="#F9F9F9"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      <div className="flex mx-12 gap-5 overflow-scroll my-20">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
