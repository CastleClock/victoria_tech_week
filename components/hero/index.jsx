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
      <div className="absolute inset-0  opacity-20 ">
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
      <div className="h-8 w-full absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-[#FFFCF1]">
        {" "}
      </div>
      <div className="relative max-w-4xl  tracking-widest mx-auto py-12 px-4 sm:px-6 lg:py-32 lg:px-8 flex flex-col  justify-center items-center text-center bg-transparent">
        <p className="font-copy text-xl font-medium pb-4">
          June 5th - 12th, 2023
        </p>
        <h1 className="font-header text-8xl">
          Victoria <span className="block">Tech Week</span>
        </h1>
        <div className="flex flex-row gap-6 my-6">
          <button className="px-6 py-3 text-lg bg-black text-white rounded-3xl hover:bg-white hover:text-black">
            Register to Attend
          </button>
          <button className="px-6 py-3 text-lg bg-[#5e8085] text-white rounded-3xl hover:bg-white hover:text-black">
            See Event Schedule
          </button>
        </div>
        <p>
          Want to host an event?{" "}
          <span className="underline font-semibold ">Host an event</span>
        </p>
      </div>
    </div>
  );
}
