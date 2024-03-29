//COMPONENTS
import Base from "../components/container/base";

const people = [
  {
    name: 'Junaid Ahmad',
    role: 'CEO',
    company: "Jackrabbit Ops",
    companyUrl: "https://www.jackrabbitops.com/",
    imageUrl:
      'https://lh3.googleusercontent.com/pw/AMWts8CxKJQX0P1dueFlVhh6NOdmrt_Qv4u6RMGggvaZrMwMYO4gv0OvmrGd5bMDtTaTG_m0TSAYMFSzoi-OWkEem3haW0g35wnDJKPE67n0pQ7kr5PIgqnlLFZzekCFlHHHfVOKE22oD7vXXO5CxE20qDI=w1921-h1813-no?authuser=0',
    bio: 'Victoria will be the next big tech scene! I have worked in software in Toronto and SF, and Victoria offers the one thing the future of tech demands; passionate talent outside of software. The barrier to entry into creating highly scalable companies has been greatly reduced! Scale YYJ will break down barriers for our community to nurture high yeild companies!',
    twitterUrl: 'https://twitter.com/junaid_sudo',
    linkedinUrl: 'https://www.linkedin.com/in/junaidaahmad/',
  },
  {
    name: 'Nadia Tatlow',
    role: 'CEO',
    company: "Shift",
    companyUrl: "https://tryshift.com/",
    imageUrl: "/nadia.jpg",
    bio: 'Excited to be part of the ScaleYYJ founding group to help build connections, and break down barriers for more diverse participation in our community. Weve got some incredible businesses here, so I am looking forward to seeing the momentum we can gain throughout this week. ',
    twitterUrl: 'https://twitter.com/NadiaTatlow',
    linkedinUrl: 'https://www.linkedin.com/in/nadiatatlow/',
  },
  {
    name: 'Brad Williams',
    role: 'CEO',
    company: "The Finance Stack",
    companyUrl: "https://www.thefinancestack.com/",
    imageUrl:
    "/brad.png",
    bio: "A golden opportunity to bring together an incredible network of first-time founders, seasoned entrepreneurs, angel investors, venture capitalists, and large organizations that thrive within Victoria's phenomenal ecosystem. The chance to enhance collaboration and increase the visibility of this vibrant community beyond the borders of British Columbia and Canada is nothing short of exhilarating.",
    twitterUrl: 'https://twitter.com/theFinanceStack',
    linkedinUrl: 'https://www.linkedin.com/in/bradwilliamseas/',
  },
  {
    name: 'Jayesh Vekariya',
    role: 'CEO',
    company: "Joni",
    companyUrl: "https://getjoni.com/",
    imageUrl:
      'https://lh3.googleusercontent.com/pw/AMWts8Cp6LajxS34mHl0S4xCrKbgGtfOQK9JuWZYDSsoXDiOd3OJK8dKmSNgLRmefwlAl7or3IuHitSC7NhCveYMBQQ0Bc0d9BSQGHZ_pF2Fz8cQoJu0NIS-QgPFwYKuBSNdaa5D1tP4BGffEZZfBogK74Y=w683-h1024-no?authuser=0',
    bio: "A golden opportunity to bring together an incredible network of first-time founders, seasoned entrepreneurs, angel investors, venture capitalists, and large organizations that thrive within Victoria's phenomenal ecosystem. The chance to enhance collaboration and increase the visibility of this vibrant community beyond the borders of British Columbia and Canada is nothing short of exhilarating.",
    twitterUrl: 'https://www.instagram.com/get_joni/',
    linkedinUrl: 'https://www.linkedin.com/in/jayeshvekariya/',
  },
  {
    name: 'Dan Gunn',
    role: 'CEO',
    company: "VIATEC",
    companyUrl: "https://www.viatec.ca/",
    imageUrl:
      'https://lh3.googleusercontent.com/pw/AMWts8CXjNfzjvacJAk0FP7hIr-Utq5zFdhRsDn42vrSe-CJj-OxgTnr9npeS6vvSNnNsUhiJy1ADqCb-nd87f3a82R-zERDywwGSzH6R8ggqIWaaxdW7Q69-pm7riOXUv4hS2Dsgfzkluh4VVjOMSbwSo0=w1460-h1826-no?authuser=0',
    bio: "Bringing Victoria's tech, innovation and entrepreneurship communities together is my primary focus at all times and I know that the BEST initiatives are the ones that come from the grassroots and the frontlines. ScaleYYJ is a manifestation that is capturing the energy, interest and spirit of our great region in the best possible way.",
    twitterUrl: 'https://twitter.com/VIATEC',
    linkedinUrl: 'https://www.linkedin.com/in/dangunn/',
  },
  // More people...
]


export default function Home() {
  return (
    <div className="min-h-screen">
      <Base>
      <div className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Scale YYJ Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Organized by passionate local founders driven to grow out Victoria&#39;s scaling busness community. From Tech to Social Movements; if you are looking to scale; we are here to support!
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt={person.name} />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-gray-600">{person.role} | <a href={person.companyUrl}>{person.company}</a></p>
              <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
      </Base>
    </div>
  );
}