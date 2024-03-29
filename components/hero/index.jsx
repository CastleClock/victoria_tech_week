import Link from "next/link";

//COMPONENTS
import Logos from "../panel/logos";

export default function Hero() {
  return (
    <div className="relative ">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover "
          src="/heroBG.png"
          alt="People working on laptops"
        />
        <div className="absolute inset-0  mix-blend-multiply " />
      </div>
      <div className="absolute inset-0  opacity-20 z-0 ">
        <img
          className="h-full w-full  translate-y-24 object-cover "
          src="/skyLine.svg"
          alt="People working on laptops"
        />
        <div className="absolute inset-y-0  mix-blend-multiply " />
      </div>
      <div className="h-8 w-full absolute top-0 left-0 bg-gradient-to-t to-[#FFFCF1] from-transparent">
        {" "}
      </div>
      <div className="relative max-w-4xl  tracking-widest mx-auto px-4 sm:px-6 py-44 lg:py-32 lg:px-8 flex flex-col  justify-center items-center text-center bg-transparent">
        <p className="font-copy text-vibrant text-xl font-medium pb-4">
          May 29th - June 2nd, 2023
        </p>
        <h1 className="font-header text-5xl lg:text-8xl">
          SCALE <span className="block">YYJ</span>
        </h1>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 my-6 w-max">
          <Link href="https://lu.ma/scaleyyj">
            <button className="px-6 py-3 lg:text-lg bg-black border-2 border-black  text-white rounded-3xl hover:bg-white hover:text-black w-full lg:w-max">
              Register to Attend
            </button>
          </Link>
          <a
            href="https://lu.ma/scaleyyj"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 lg:text-lg bg-vibrant border-2 border-black  text-black rounded-3xl hover:bg-white  w-full lg:w-max"
          >
            See Event Schedule
          </a>
        </div>
        <p>
          Want to host an event?{" "}
          <Link href="/#host" className="underline font-semibold ">
            Host an event
          </Link>
        </p>
      </div>
      <Logos />

    </div>
  );
}
