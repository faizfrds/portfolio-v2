"use client";
import React from "react";
import Image from "next/image";
// import "react-tabs/style/react-tabs.css";
import { AiFillGithub, AiOutlineArrowLeft } from "react-icons/ai";
import { HiOutlineGlobeAlt, HiArrowLeft } from "react-icons/hi";
import Link from "next/link";
import Row from "./components/Row";

const Projects = () => {
  const [openTab, setOpenTab] = React.useState(1);

  const projects = [
    {
      year: "2023",
      title: "Recommendify",
      description:
        "Web app where users are presented with personalized data of their Spotify profiles. Recommended songs are also given which can be added directly to their Spotify playlist.",
      tools: ["Next.js", "Spotify API", "Axios", "Vercel"],
      github: "https://github.com/faizfrds/spotify-user-analysis",
      link: "https://spotify-recfy.vercel.app/",
    },
    {
      year: "2023",
      title: "Job Finder",
      description:
        "Mobile app where users can search for a job and the data is fetched from an API.",
      tools: ["React Native", "Expo", "Rapid API"],
      github: "https://github.com/faizfrds/react-native-jobs",
    },
    {
      year: "2023",
      title: "Fitness Trainer",
      description:
        "Users choose their fitness goal and provided with a list of exercises to do. Alternatively, users can enter height and weight which is then processed to give the appropriate fitness advice.",
      tools: [
        "Railway",
        "Prisma ORM",
        "PostgreSQL",
        "Dynamic Routes",
        "REST API",
      ],
      github: "https://github.com/faizfrds/fitness-trainer",
      link: "https://fitness-trainer-nine.vercel.app/",
    },
    {
      year: "2023",
      title: "Sticky Note App",
      description:
        "Web app where users can add sticky notes or brainstorm ideas. Integrated with Prisma and Docker.",
      tools: ["Prisma ORM", "PostgreSQL", "Docker", "Next.js", "CRUD"],
      github: "https://github.com/faizfrds/api-prisma",
    },
    {
      year: "2023",
      title: "Cats4You",
      description:
        "A web app serving as a hub for cat adoption. Equipped with SQL database and authentication systems.",
      tools: ["Supabase", "OAuth", "App Router"],
      github: "https://github.com/faizfrds/cat-adopt-site",
      link: "https://cats4you.vercel.app/",
    },
    {
      year: "2023",
      title: "Spotify Clone",
      description:
        "Spotify web app clone which includes authentication and upload features.",
      tools: ["Supabase", "PostgreSQL", "TypeScript", "Tailwind CSS", "Vercel"],
      github: "https://github.com/faizfrds/spotify-app",
      link: "https://spotify-app-tawny.vercel.app",
    },
    {
      year: "2023",
      title: "IP Finder",
      description:
        "Web app which utilizes an API in order to gather information on a target IP address.",
      tools: ["WEB API", "Git", "React", "TypeScript"],
      github: "https://github.com/faizfrds/osint-tool",
      link: "https://osint-tool-two.vercel.app",
    },
    {
      year: "2023",
      title: "Personal Portfolio Website",
      description:
        "Personal website to showcase my work and projects along with providing contact information of myself.",
      tools: ["Next.js", "Tailwind CSS", "Vercel"],
    },
    {
      year: "2022",
      title: "Cat Hotel App",
      description:
        "Hotel booking system for a client's cat hotel startup. Have separate admin and customer sections which is accessed through login system implemented with PHP sessions.",
      tools: ["HTML", "Bootstrap", "CSS", "PHP", "SQL", "MySQL"],
      github: "https://github.com/faizfrds/cat",
    },
  ];

  return (
    <main className="bg-gradient-to-b from-slate-950 to-teal-950 lg:px-20 py-10 justify-center flex">
      <div className="flex flex-wrap w-2/3 lg:mt-10 mt-20">
        <Link href="/">
          <div className="group flex items-center gap-x-1 text-white font-semibold">
            <HiArrowLeft
              size={15}
              className="group-hover:-translate-x-1 group-hover:cursor-pointer transition"
            />
            Return
          </div>
        </Link>

        <div className="w-full justify-center flex flex-col">
          <h1 className="text-yellow-300 text-4xl font-bold mt-5">
            Project Archive
          </h1>
          {/* <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-1 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal  " +
                  (openTab === 1
                    ? "text-white bg-slate-700"
                    : "text-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Computer Science
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-xl rounded block leading-normal  " +
                  (openTab === 2
                    ? "text-white bg-slate-700"
                    : "text-white ")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Graphic Design
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-xl rounded block leading-normal  " +
                  (openTab === 3
                    ? "text-white bg-slate-700"
                    : "text-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Other
              </a>
            </li>
          </ul> */}

          {/* <div className="bg-yellow-200 h-[2px] w-full mt-2 " /> */}

          <div className="items-center flex flex-col min-w-0 break-words w-full mb-6 rounded">
            <div className="py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  {/* <h1 className="font-medium text-3xl text-center text-yellow-300 pt-8">
                    Computer Science Projects
                  </h1> */}

                  <table className="mt-3 w-[101%] border-collapse text-left">
                    <thead className=" sticky top-0 z-10 text-yellow-200/80 px-6 py-5 backdrop-blur">
                      <tr>
                        <th
                          scope="col"
                          className="hidden lg:table-cell text-center w-[4%]"
                        >
                          Year
                        </th>
                        <th scope="col" className="py-8 px-8 lg:w-[16%] ">
                          Project Name
                        </th>
                        <th
                          scope="col"
                          className="hidden lg:table-cell py-8 px-8 "
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          className="hidden md:table-cell py-8 px-8 lg:w-[30%]"
                        >
                          Tech Stack
                        </th>
                        <th scope="col" className="py-8 px-8">
                          Links
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300 text-sm">
                      {projects.map((proj, index) => (
                        <Row
                          key={index}
                          year={proj.year}
                          title={proj.title}
                          description={proj.description}
                          tools={proj.tools}
                          github={proj.github}
                          link={proj.link}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <h1 className="font-medium text-4xl text-center items-center pb-10 pt-8">
                    Graphic Design Projects
                  </h1>
                  <div className="flex-wrap grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
                    <div className="px-1 py-1 rounded-lg bg-white">
                      <Image
                        width={500}
                        height={500}
                        className="h-auto max-w-full rounded-lg bg-white"
                        src="/jakarta sinks 4.png"
                        alt=""
                      />
                    </div>
                    <div className="px-1 py-1 rounded-lg bg-white">
                      <Image
                        width={500}
                        height={500}
                        className="h-auto max-w-full rounded-lg"
                        src="/king mio viii.jpg"
                        alt=""
                      />
                    </div>
                    <div className="px-1 py-1 rounded-lg bg-white">
                      <Image
                        width={500}
                        height={500}
                        className="h-auto max-w-full rounded-lg"
                        src="/outer space 2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="px-1 py-1 rounded-lg bg-white">
                      <Image
                        width={500}
                        height={500}
                        className="h-auto max-w-full rounded-lg"
                        src="/panda fire.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
