import React, { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const experiences = [
  {
    url: "https://www.cics.umass.edu/",
    company: "manning college of information and computer sciences",
    title: "Research Intern",
    date: "June 2024 - Present",
    desc: "Conducted in-depth research on eBPF to capture state differences in applications, aimed at advancing CDN technologies through edge computing. Additionally implemented proof-of-concept models for performance enhancement.",
    tools: ["eBPF", "C", "Python", "Docker", "Flask"],
  },
  {
    url: "https://www.umass.edu/",
    company: "University of Massachusetts Amherst",
    title: "Undergraduate Teaching Assistant",
    date: "September 2023 - Present",
    desc: "Reinforced the operations of the course CS 119 (Introduction to Programming with Python) and CS326 (Web Programming) by providing assistance to the faculty staff. Improved students' performance and understanding by providing forum help and office hours to tutor fundamental programming topics.",
    tools: ["python", "web technologies", "higher education"],
  },
  // {
  //   url: "https://www.mapcollective.com/",
  //   company: "map-collective inc.",
  //   title: "data science intern",
  //   date: "january 2024 - may2024",
  //   desc: "Compiled comprehensive reports summarizing findings, trends, and insights from 10+ automobile company data, providing recommendations for improving sustainability practices.",
  //   tools: ["Excel", "data analysis"],
  // },
  {
    url: "https://www.theaapdn.org/",
    company: "The American Academy of Pediatric Neuropsychology",
    title: "Frontend Engineer Intern",
    date: "July 2023 - September 2023",
    desc: "Brought a 25% surge in user web traffic by upgrading pages of an engaging frontend through HTML, Bootstrap, and Tailwind frameworks which overall elevated the client's online presence. Reinforced the development of responsive design and intuitive user experience through UI/UX design principles.",
    tools: ["HTML", "Bootstrap", "Dreamweaver"],
  },
  {
    url: "https://mucciassessment.com/",
    company: "Mucci Assessment and Development",
    title: "Data Science Intern",
    date: "July 2023 - September 2023",
    desc: "Utilized web scraping tools to collect and analyze data on potential business partners, identifying over 20 viable candidate that created 60% successful new connections.",
    tools: ["Web Scraper", "Phantombuster", "Excel"],
  },
];

export default function Experiences() {
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
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="to-teal-950 relative max-w-full overflow-hidden border-double border-0 border-t-8 border-b-8 border-yellow-300 bg-gradient-to-b from-slate-950 px-8 py-10 shadow-2xl h-full"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 70%)`,
        }}
      />
     
      <div className="justify-center flex p-10">
        
        <div className="lg:w-2/3 flex flex-col justify-center text-center">
        <h1 className="text-4xl text-yellow-300 font-bold mt-4 mb-8">Experiences</h1>
          <ol className="relative border-l border-gray-100 dark:border-gray-700 text-justify">
            {experiences.map((exp, index) => (
              <li key={index} className="mb-10 ml-5">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-slate-100 rounded-full -left-3 ring-8 ring-teal-500/80">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-slate-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="httpwww.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>

                <div className="ml-4">
                  <a
                    href="httpswww.cics.umass.edu"
                    className="text-left flex items-center text-xl font-bold rounded-md text-yellow-300 w-fit capitalize"
                  >
                    {exp.company}
                  </a>

                  <h4 className="pt-2 text-lg font-md capitalize text-left text-white font-serif">
                    {exp.title}
                  </h4>
                  <time className="block mb-2 text-sm font-normal leading-none text-neutral-200 pb-1.5 capitalize">
                    {exp.date}
                  </time>

                  <p className="mb-4 text-sm font-light text-neutral-100/70 leading-6">
                    {exp.desc}
                  </p>

                  <ul className="flex flex-wrap gap-2 font-medium text-s">
                    {exp.tools.map((tool, key) => (
                      <li key={key}>
                        <div className="flex items-center rounded-full bg-cyan-500/50 px-3 py-1 leading-5 font-normal text-yellow-200 capitalize">
                          {tool}
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-white h-[1px] w-[20vh] my-6" />
                </div>
              </li>
            ))}
          </ol>

          <a
            className="flex items-center font-bold text-gray-100 group pt-2"
            href="https://drive.google.com/file/d/1WqwSULu-3KfX7q4f9f6yvknoXFqFome_/view?usp=sharing"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-500/40 motion-reduce:transition-none"></span>
              <span className="group whitespace-nowrap flex items-center">
                <span className="font-light border-b border-transparent pb-px transition group-hover:border-yellow-200 motion-reduce:transition-none">
                  View Resume
                </span>
                <BsArrowRight className="ml-2 group-hover:translate-x-1 transition" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
