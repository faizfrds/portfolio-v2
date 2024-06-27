import React from 'react'
import { BsArrowRight } from "react-icons/bs";

const experiences = [{
    url: "",
    company: "comp",
    title: "title",
    date: "",
    desc: "desc",
    tools: "tools",
},{
    url: "",
    company: "comp",
    title: "title",
    date: "",
    desc: "desc",
    tools: "tools",
},{
    url: "",
    company: "comp",
    title: "title",
    date: "",
    desc: "desc",
    tools: "tools",
}]

export default function Experiences() {
  return (
    <section
    id="experiences"
    className="lg:px-24 lg:py-12 py-8 bg-emerald-700 text-center"
  >
    <h2 className="sticky top-0 z-20 mb-2 w-full px-6 py-5 backdrop-blur text-4xl font-medium text-center text-yellow-300">
      Experience
    </h2>
    <div className="justify-center flex px-8 py-7">
      <div className="lg:w-10/12">
        <ol className="relative border-l border-gray-100 dark:border-gray-700 text-justify">
        <li className="mb-10 ml-5">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-emerald-700">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-800 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>

            <div className="ml-4">
              <a
                href="https://www.cics.umass.edu"
                className="text-left flex items-center text-xl font-bold rounded-md text-yellow-300 w-fit capitalize"
              >
                map-collective inc.
              </a>

              <h4 className="pt-2 text-lg font-md capitalize text-left">
                data science intern
              </h4>
              <time className="block mb-2 text-sm font-normal leading-none text-neutral-200 pb-1.5 capitalize">
                january 2024 - Present
              </time>

              <p className="mb-4 text-sm font-light text-neutral-100/70 leading-6">
              Compiled comprehensive reports summarizing findings, trends, and insights from 10+ automobile company data, providing recommendations for improving sustainability practices.
              </p>
              <ul className="flex flex-wrap gap-2 font-medium text-s">
                <li>
                  <div className="flex items-center rounded-full bg-cyan-500/50 px-3 py-1 leading-5 font-normal text-yellow-200">
                    Python
                  </div>
                </li>
                <li>
                  <div className="flex items-center rounded-full bg-cyan-500/50 px-3 py-1 leading-5 font-normal text-yellow-200">
                    Higher Education
                  </div>
                </li>
                <li>
                  <div className="flex items-center rounded-full bg-cyan-500/50 px-3 py-1 leading-5 font-normal text-yellow-200">
                    Programming
                  </div>
                </li>
              </ul>
              <div className="bg-white h-[1px] w-[20vh] my-6" />
            </div>
          </li>
          
          <li className="mb-10 ml-5">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-800 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>

            <div className="ml-4">
              <a
                href="https://www.cics.umass.edu"
                className="text-left flex items-center text-xl font-bold rounded-md text-yellow-200 w-fit capitalize"
              >
                manning college of information and computer sciences
              </a>

              <h4 className="pt-2 text-lg font-md capitalize text-left">
                undergraduate course assistant
              </h4>
              <time className="block mb-2 text-sm font-normal leading-none text-neutral-200 pb-1.5">
                September 2023 - Present
              </time>

              <p className="mb-4 text-sm font-light text-neutral-100/70 leading-6">
                Reinforced the operations of the course{" "}
                <em>COMPSCI 119 - Introduction to Programming with Python</em>{" "}
                by providing assistance to the faculty staff. Improved
                students' performance and understanding by providing forum
                help and office hours to tutor fundamental programming topics.
              </p>
              <ul className="flex flex-wrap gap-2 font-medium text-s">
                <li>
                  <div className="flex items-center rounded-full bg-blue-500/50 px-3 py-1 leading-5 font-normal text-yellow-200">
                    Python
                  </div>
                </li>
                <li>
                  <div className="flex items-center rounded-full bg-blue-500/50 px-3 py-1 leading-5 font-normal text-yellow-200">
                    Higher Education
                  </div>
                </li>
                <li>
                  <div className="flex items-center rounded-full bg-blue-500/50 px-3 py-1 leading-5 font-normal text-yellow-200">
                    Programming
                  </div>
                </li>
              </ul>
              <div className="bg-white h-[1px] w-[20vh] my-6" />
            </div>
          </li>

          <li className="mb-10 ml-5">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-800 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>

            <div className="ml-4">
              <h3 className="flex items-center text-left text-xl font-bold rounded-md text-yellow-200 w-fit">
                Mucci Assessment and Development
              </h3>

              <h4 className="pt-2 text-lg font-md">
                Frontend Engineer Intern
              </h4>
              <time className="block mb-2 text-sm font-normal leading-none text-neutral-200 pb-1.5">
                July 2023 - September 2023
              </time>

              <p className="mb-4 text-sm font-light text-neutral-100/70 leading-6">
                Brought a 25% surge in user web traffic by upgrading pages of
                an engaging frontend through HTML, Bootstrap, and Tailwind
                frameworks which overall elevated the client's online
                presence. Reinforced the development of responsive design
                and intuitive user experience through UI/UX design principles
              </p>
              <ul className="flex flex-wrap gap-2 font-medium text-s">
                <li>
                  <div className="flex items-center rounded-full bg-blue-500/50 px-3 py-1 leading-5 font-normal text-yellow-200">
                    HTML
                  </div>
                </li>
                <li>
                  <div className="flex items-center rounded-full bg-blue-500/50 px-3 py-1 leading-5 font-normal text-yellow-200">
                    Bootstrap
                  </div>
                </li>
                <li>
                  <div className="flex items-center rounded-full bg-blue-500/50 px-3 py-1 leading-5 font-normal text-yellow-200">
                    Dreamweaver
                  </div>
                </li>
              </ul>
              <div className="bg-white h-[1px] w-[20vh] my-6" />

              <h4 className="pt-2 text-lg font-md">Data Science Intern</h4>
              <time className="block mb-2 text-sm font-normal leading-none text-neutral-200 pb-1.5">
                April 2023 - June 2023
              </time>
              <p className="mb-4 text-sm font-light text-neutral-100/70 leading-6">
                Leveraged web scraping techniques and data mining tools to
                identify and analyze potential partners for the client,
                leading to the discovery of over 200+ potential connections
                that brought a 10% increase in the client organization's
                outreach network and fostered lucrative partnerships.
              </p>
              <ul className="flex flex-wrap gap-1 font-medium text-s">
                <li>
                  <div className="flex items-center rounded-full bg-blue-500/50 px-3 py-1 leading-5 font-normal text-yellow-200">
                    Phantombuster
                  </div>
                </li>
                <li>
                  <div className="flex items-center rounded-full bg-blue-500/50 px-3 py-1 leading-5 font-normal text-yellow-200">
                    Kali Linux
                  </div>
                </li>
                <li>
                  <div className="flex items-center rounded-full bg-blue-500/50 px-3 py-1 leading-5 font-normal text-yellow-200">
                    OSINT
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ol>

        <a
          className="flex items-center font-bold text-gray-100 group pt-2"
          href="/resume.pdf"
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
  </section>
  )
}
