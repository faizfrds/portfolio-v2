import React, { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const projectsList = [
  {
    image: "/images/smart-farm.png",
    alt: "farm",
    name: "Garden of Eden",
    desc: "Small-scale smart farming system leveraging the use of sensors to automate simple gardening tasks, ensuring efficient use of resources.",
    url: "https://github.com/faizfrds/garden-of-eden",
    tools: ["Arduino", "C++", "Internet of Things"],
  },
  {
    image: "/images/cats4you.png",
    alt: "cat shelter",
    name: "Cats4You",
    desc: "Adoption hub for cats, maximizing use of relational databases to maintain data integrity and easier data management.",
    url: "https://cats4you.vercel.app/",
    tools: ["PostgreSQL", "Supabase", "REST API"],
  },
  {
    image: "/images/wildfire.png",
    alt: "wildfire",
    name: "Wild-no-fire",
    desc: "Machine learning powered wildfire risk analyzer, leveraging the YOLOv11 model for better wildfire mitigation and prevention.",
    url: "https://wildfire-prediction.vercel.app/",
    tools: ["YOLOv11", "Computer Vision","ML"],
  },
  {
    image: "/images/ebpf.png",
    alt: "ebpf",
    name: "XDN",
    desc: "An edge approach for content delivery networks. Capturing state differences using eBPF, paving the way for advancing current CDN technologies.",
    url: "https://github.com/faizfrds/xdn-ebpf/tree/main",
    tools: ["eBPF", "C", "Python","Flask"],
  },
  {
    image: "/images/int-trav.JPG",
    alt: "intelligent travel",
    name: "Intelligent Travel",
    desc: "AI-powered destination finder for adventurous travelers, leveraging OpenAI API to discover suitable locations with helpful informations.",
    url: "https://intelligent-travel.vercel.app/",
    tools: ["OpenAI", "REST API", "React"],
  },
  {
    image: "/images/recfy.png",
    alt: "ebpf",
    name: "Recommendify",
    desc: "Web app where users are presented with personalized data of their Spotify profiles. Recommended songs are also given which can be added directly to their Spotify playlist.",
    url: "https://spotify-recfy.vercel.app/",
    tools: ["Axios", "Spotify API", "Next.js"],
  },
];

export default function Projects() {
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
              target="#"
              className="rounded-md overflow-hidden shadow-lg flex flex-col bg-slate-200/10 cursor-pointer hover:shadow-lg hover:shadow-yellow-300/40 hover:scale-[102%] transition duration-200 ease-in-out"
            >
              <div className="relative md:h-56 h-48 ">
                <img
                  className="w-full h-full object-cover"
                  src={card.image}
                  alt={card.alt}
                />
              </div>

              <div className="px-6 py-4 mb-auto">
                <span className="font-medium text-lg text-white inline-block duration-500 ease-in-out mb-2">
                  {card.name}
                </span>
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
        <a
          className="flex items-center font-bold text-gray-100 group pt-2 justify-center"
          href="/projects"
        >
          <span className="group whitespace-nowrap flex items-center text-center mt-6">
            <span className="font-light border-b border-transparent pb-px transition group-hover:border-yellow-200 motion-reduce:transition-none">
              View Projects List
            </span>
            <BsArrowRight className="ml-2 group-hover:translate-x-1 transition" />
          </span>
        </a>
      </div>
    </div>
  );
}
