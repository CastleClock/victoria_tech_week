export default function Footer() {
  return (
    <div className="border- border-t border-vibrant top-0 sticky  z-40 bg-[#FFFCF1]">
      <div className="max-w-7xl mx-auto px-6 py-2 flex flex-row justify-between items-center">
        <img
          className="h-7 w-7 hidden lg:block"
          alt="vic tech week logo"
          src="/logo.png"
        />
        <div className="flex flex-row gap-6">
          <p>
            Designed by{" "}
            <a
              href="https://jackrabbitops.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-700"
            >
              Jackrabbit Ops{" "}
            </a>
          </p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <a
            href="https://twitter.com/scaleyyj"
            rel="noreferrer"
            target="_blank"
            className="text-black hover:text-gray-700"
          >
            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <p className="hidden lg:block">Scale YYJ</p>
        </div>
      </div>
    </div>
  );
}
