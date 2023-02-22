export default function Hosting() {
  return (
    <div id="host" className=" border border-vibrant flex flex-col justify-center items-start p-6 bg-vibrant">
      <h3 className="font-header text-5xl text-white">
        Hosting a Scale YYJ Event?
      </h3>
      <div className="flex flex-row gap-6 my-8">
        <p>
          Submit details of the event to{" "}
          <a
            href="https://lu.ma/victoria-tech-week"
            target="_blank"
            rel="noreferrer"
            className="text-black underline"
          >
            Luma page
          </a>{" "}
          or send email with event details to{" "}
          <a
            className="text-black underline"
            href="mailto:events@scaleyyj.com"
          >
            events@scaleyyj.com
          </a>
        </p>
      </div>
    </div>
  );
}
