import Link from "next/link";

const HOSTS = [
  {
    url: "https://jackrabbitops.com/",
    src: "/JRO.png",
  },
];
export default function Logos() {
  return (
    <div className="bg-black flex flex-row  justify-center items-center py-3 gap-4 relative">
      {HOSTS.map((host, i) => (
        <Link key={i} href={host.url} target="_blank" rel="noreferrer">
          <img src={host.src} className="h-10 w-auto" />
        </Link>
      ))}
      <p className="text-gray-100 text-sm">+ more</p>
    </div>
  );
}
