import React, { useRef, useState } from "react";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";

const projectsList = [
  {
    image: "/images/int-trav.JPG",
    name: "Intelligent Travel",
    desc: "AI powerered destination finder for adventurous travelers, leveraging OpenAI API to discover suitable locations with helpful informations.",
    url: "https://intelligent-travel.vercel.app/",
    tools: ["OpenAI", "React", "Tailwind"],
  },
  {
    image: "/images/cats4you.png",
    name: "Cats4You",
    desc: "Adoption hub for cats, maximizing use of relational databases to maintain data integrity and easier data management.",
    url: "https://cats4you.vercel.app/",
    tools: ["PostgreSQL", "Supabase", "REST API"],
  },
  {
    image: "/images/ebpf.png",
    name: "XDN Benchmark",
    desc: "An approach used to capture state differences and replicate applications, paving the way for advancing current CDN technologies.",
    url: "",
    tools: ["eBPF", "Docker", "Python"],
  },
];

export default function Grid() {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div className="lg:h-fit items-center py-16 overflow-auto text-center bg-gradient-to-b from-black to-slate-950 flex justify-center flex-col">
      <h1 className="text-4xl font-bold text-yellow-300">Projects</h1>
      <div className="max-w-screen-xl mx-auto p-8 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsList.map((card, key) => (
            <a
              key={key}
              href={card.url}
              className="rounded-md overflow-hidden shadow-lg flex flex-col bg-slate-200/10 cursor-pointer hover:shadow-lg hover:shadow-yellow-300/40 hover:scale-[102%] transition duration-200 ease-in-out"
            >
              <div className="relative md:h-56 h-48 ">
                <a>
                  <img
                    className="w-full h-full object-cover"
                    src={card.image}
                    alt="project pic"
                  />
                </a>
              </div>

              <div className="px-6 py-4 mb-auto">
                <a className="font-medium text-lg text-white inline-block duration-500 ease-in-out mb-2">
                  {card.name}
                </a>
                <p className="text-gray-500 text-sm">{card.desc}</p>
              </div>

              <div className="flex p-2 mb-2 justify-center">
                {card.tools.map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-500/30 text-yellow-300 text-sm rounded-full mx-1 px-2 py-1"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
      <a
        className="flex items-center font-bold text-gray-100 group pt-2"
        href="/projects"
      >
        <span>
          <span className="border-b border-transparent pb-px transition group-hover:border-teal-500/40 motion-reduce:transition-none"></span>
          <span className="group whitespace-nowrap flex items-center">
            <span className="font-light border-b border-transparent pb-px transition group-hover:border-yellow-200 motion-reduce:transition-none">
              View Projects List
            </span>
            <BsArrowRight className="ml-2 group-hover:translate-x-1 transition" />
          </span>
        </span>
      </a>
    </div>
  );
}
