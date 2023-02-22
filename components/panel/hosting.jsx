export default function Hosting() {
  return (
    <div id="host" className=" border border-vibrant flex flex-col justify-center items-start p-6 bg-vibrant">
      <h3 className="font-header text-5xl text-white">
        Interested in Hosting a Scale YYJ Event?
      </h3>
      <div className="flex flex-row gap-6 my-8">
        <p>
          Submit details of the event to{" "}
          <a
            href="https://forms.gle/v8XYcx8D4V9LQ2ga8"
            target="_blank"
            rel="noreferrer"
            className="text-black underline"
          >
            Hosting Form
          </a>{" "}
        </p>
      </div>
    </div>
  );
}
