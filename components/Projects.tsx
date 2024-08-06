import React, { useRef, useState } from "react";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";

const sample = [
  {
    image: "/images/int-trav.JPG",
    name: "Intelligent Travel",
    desc: "AI powerered destination finder for adventurous travelers, leveraging OpenAI API to discover suitable locations with helpful informations.",
    url: "",
    tools: ["OpenAI", "React", "Tailwind"],
  },
  {
    image: "/images/cats4you.png",
    name: "Cats4You",
    desc: "Adoption hub for cats, maximizing use of relational databases to maintain data integrity and easier data management.",
    url: "",
    tools: ["PostgreSQL", "Supabase", "REST API"],
  },
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    name: "XDN Benchmark",
    desc: "An approach used to capture state differences and replicate applications, paving the way for advancing current CDN technologies.",
    url: "",
    tools: ["eBPF, C, Express.js"],
  },
  {
    image: "/images/int-trav.JPG",
    name: "Intelligent Travel",
    desc: "AI powerered destination finder for adventurous travelers, leveraging OpenAI API to discover suitable locations with helpful informations.",
    url: "",
    tools: ["OpenAI", "React", "Tailwind"],
  },
  {
    image: "/images/cats4you.png",
    name: "Cats4You",
    desc: "Adoption hub for cats, maximizing use of relational databases to maintain data integrity and easier data management.",
    url: "",
    tools: ["PostgreSQL", "Supabase", "REST API"],
  },
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    name: "XDN Benchmark",
    desc: "An approach used to capture state differences and replicate applications, paving the way for advancing current CDN technologies.",
    url: "",
    tools: ["eBPF, C, Express.js"],
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
    <div className="min-h-screen lg:h-full h-fit items-center py-16 overflow-auto text-center bg-gradient-to-b from-black to-slate-950">
      <h1 className="text-4xl font-bold text-yellow-300">Projects</h1>
      <div className="container mx-auto px-1 flex justify-center w-full lg:w-1/2 lg:p-5">
        <div className="flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden w-full p-10">
            {sample.map((proj) => (
              <div
                key={proj.name}
                className="group cursor-pointer block max-w-xs p-4 bg-white border border-gray-200 h-[350px] w-[270px] rounded-lg shadow hover:bg-gray-100 hover:scale-[102%] transition-transform text-center hover:shadow-lg hover:shadow-yellow-300/90"
              >
                <div className="relative overflow-hidden w-full mb-4">
                  <img
                    className="object-cover w-full h-full"
                    src={proj.image}
                    alt="Product"
                  />
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>
                <h3 className="text-xl font-bold text-teal-800 mt-4 flex justify-center items-center">
                  {proj.name}
                  <BsArrowUpRight
                    className="ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                    size={12}
                  />
                </h3>
                <p className="text-gray-500 text-sm mt-2">{proj.desc}</p>
              </div>
            ))}
          </div>
          <a
            className="font-bold text-gray-100 pt-2 flex justify-center"
            href="/projects"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-500/40 motion-reduce:transition-none"></span>
              <span className="group whitespace-nowrap flex items-center">
                <span className="font-light border-b border-transparent pb-px transition group-hover:border-yellow-200 motion-reduce:transition-none">
                  View All Projects
                </span>
                <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
