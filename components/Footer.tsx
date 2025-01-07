import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-black shadow h-fit py-2">
      <section className="text-center leading-6 py-5 font-light text-sm px-5">
        <a
          href="#top"
          className="text-yellow-200 uppercase underline underline-offset-2"
        >
          Back to Top
        </a>
        <div className="flex w-full text-center justify-center mt-4 gap-x-4">
          <a
            href="mailto:faizfirdaus.340@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillMail
              className="text-gray-400"
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/faiz-firdaus-610778255/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin
              className="text-gray-400"
              size={30}
            />
          </a>
          <a
            href="https://github.com/faizfrds"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub
              className="text-gray-400"
              size={30}
            />
          </a>
        </div>
        <h2 className="text-gray-400 pt-2 capitalize">
          created by faiz firdaus - last updated January 2025
        </h2>
        <h3 className="text-gray-500">
          Designed using Figma. Created using Next.js with Tailwind CSS.
          Deployed using Vercel.
        </h3>
      </section>
    </footer>
  );
}
