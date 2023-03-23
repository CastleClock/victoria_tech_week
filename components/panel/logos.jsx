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
];
export default function Logos() {
  return (
    <div className="bg-black flex flex-row  justify-center items-center py-3 gap-10 relative w-full">
      {HOSTS.map((host, i) => (
        <Link key={i} href={host.url} target="_blank" rel="noreferrer">
          <img src={host.src} className="h-10 w-auto" alt="host logo" />
        </Link>
      ))}
      <p className="text-gray-100 text-sm">+ more</p>
    </div>
  );
}
