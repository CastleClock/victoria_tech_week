import { useState } from "react";

const Questions = [
  {
    q: "I’m flying in for Victoria Tech Week. What part of town should I stay in?",
    a: " We recommend staying in the downtown Victoria area, which is where most of the events will be held.",
  },
  {
    q: "Who is organizing Victoria Tech Week?",
    a: "VTW is organized by a number of VCs, entrepreneurs, and community leaders in the Victoria Area. See organizers here.",
  },
  {
    q: "What kind of events should I expect? ",
    a: "Events will range from fireside chats to expert panels to workshops. There will be something for everyone. See event schedule here.",
  },
  {
    q: "I want to host an event, what do I do?",
    a: "Submit details of the event to Luma page or send email with event details to events@victoriatechweek.com, or reach out via twitter",
  },
];
export default function FAQ() {
  const [selected, setSelected] = useState(0);
  return (
    <div
      id="faq"
      className=" border border-vibrant bg-white flex flex-col justify-start items-start p-6"
    >
      <h3 className="font-header text-5xl text-vibrant mb-4">FAQ</h3>
      {Questions.map((document, index) => (
        <div key={index} className="w-full border-b border-vibrant">
          <button
            onClick={() => setSelected(selected === index ? null : index)}
            className="hover:bg-gray-100 w-full py-4  flex flex-row justify-between"
          >
            <p className="text-gray-800 text-sm  font-bold">{document.q}</p>
            <img src="/button.svg" />
          </button>
          {selected === index && (
            <p className="py-2 text-gray-900 text-sm">{document.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
