import Link from "next/link";

const HOSTS = [
  {
    url: "https://tryshift.com/",
    src: "/shift.png",
  },
  {
    url: "https://www.thefinancestack.com/",
    src: "/fstack.svg",
  },
  {
    url: "https://jackrabbitops.com/",
    src: "/JRO.png",
  },
  {
    url: "https://www.viatec.ca/",
    src: "/viatec.png",
  },
  {
    url: "https://getjoni.com/",
    src: "/joni.png",
  },
  {
    url: "https://www.cosmogence.com/",
    src: "/cosmogence.png",
  },
];
export default function Logos() {
  return (
    <div className="bg-black flex flex-row  flex-wrap justify-center items-center py-3 gap-4 lg:gap-10 relative w-full px-2">
      {HOSTS.map((host, i) => (
        <Link key={i} href={host.url} target="_blank" rel="noreferrer">
          <img
            src={host.src}
            className="h-8 lg:h-10 w-auto mx-auto"
            alt="host logo"
          />
        </Link>
      ))}
      <p className="text-gray-100 text-xs lg:text-sm">+ more</p>
    </div>
  );
}
