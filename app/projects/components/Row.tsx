import { url } from "inspector";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { HiExternalLink, HiOutlineExternalLink } from "react-icons/hi";

interface RowProps {
  year: string;
  title: string;
  description: string;
  tools: string[];
  github?: string;
  link?: string;
}

const Row: React.FC<RowProps> = ({
  year,
  title,
  description,
  tools,
  github,
  link,
}) => {
  return (
    <tr className=" border-b border-t border-slate-200/20">
      <th
        scope="row"
        className="hidden lg:table-cell text-center font-medium whitespace-nowrap"
      >
        {year}
      </th>
      <td className="py-6 px-8">{title}</td>
      <td className="hidden lg:table-cell py-6 px-8 text-justify">
        {description}
      </td>
      <td className="py-6 px-8 hidden md:table-cell">
        <ul className="flex flex-wrap gap-2 font-medium text-s">
          {tools.map((item, index) => (
            <div className="flex items-center rounded-full bg-teal-200/50 px-3 py-1 leading-5 text-yellow-200" key={index}>
              {item}
            </div>
          ))}
        </ul>
      </td>
      <td className="py-6 px-8">
        <div className="flex gap-x-3">
          <a
            className={
              "items-baseline font-medium leading-tight hover:text-yellow-200 text-sm text-slate-400 focus-visible:text-teal-300 group/link hover:cursor-pointer " +
              (github === undefined ? "hidden" : "inline-flex ")
            }
            href={github}
            target="#"
          >
            <AiFillGithub size={25} />
          </a>

          <a
            className={
              "items-baseline font-medium leading-tight hover:text-yellow-200 text-sm text-slate-400 focus-visible:text-teal-300 group/link hover:cursor-pointer " +
              (link === undefined ? "hidden" : "inline-flex ")
            }
            href={link}
            target="#"
          >
            <HiExternalLink size={25} />
          </a>
        </div>
      </td>
    </tr>
  );
};

export default Row;
