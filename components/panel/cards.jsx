export default function Card() {
  return (
    <div className="max-w-7xl mx-auto px-6 my-8 ">
      <div className=" border border-vibrant flex flex-col justify-center items-center py-6">
        <h2 className="font-header text-4xl lg:text-5xl">
          What it&apos;s all about
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-8 px-6">
          <div className="bg-white border border-vibrant p-5">
            <h3 className="font-header text-3xl">Learning</h3>
            <p className="text-gray-700 text-lg pt-4">
              From fire-side chats to expert panels, Scale YYJ is the
              place for anyone to learn about what it takes to scale your business to the next level
            </p>
          </div>
          <div className="bg-white border border-vibrant p-5">
            <h3 className="font-header text-3xl">Building</h3>
            <p className="text-gray-700 text-lg pt-4">
              Bringing the best builders, operators and entrepreneurs under the
              same roof to push Victoria to new heights and break down barriers!
            </p>
          </div>
          <div className="bg-white border border-vibrant p-5">
            <h3 className="font-header text-3xl">Connecting</h3>
            <p className="text-gray-700 text-lg pt-4">
              Whether you&apos;re seeking a co-founder, a new job, or
              making new friends, Scale YYJ is where connections are
              made.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
