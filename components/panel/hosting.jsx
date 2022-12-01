export default function Hosting() {
  return (
    <div className=" border border-[#5e8085] flex flex-col justify-center items-start p-6 bg-[#5e8085]">
      <h3 className="font-header text-5xl text-white">
        Hosting a community meetup?
      </h3>
      <div className="flex flex-row gap-6 my-8">
        <button className="px-6 py-3 text-lg bg-black text-white rounded-3xl hover:bg-white hover:text-black">
          Host an Event
        </button>
      </div>
    </div>
  );
}
