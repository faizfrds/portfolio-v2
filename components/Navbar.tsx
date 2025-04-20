"use client";
import React, { useState } from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiOutlineMenu,
  AiFillYoutube,
  AiOutlineInstagram
} from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <nav
        className={
          "absolute top-0 left-0 px-8 pt-8 pb-2 z-50 w-full transition-all linear duration-500 " +
          (isOpen ? "" : "bg-transparent max-h-0")
        }
      >
        <div className="container mx-auto flex justify-end items-center">
          <div className="justify-end items-center space-x-4 mx-10 hidden md:flex">
            <a
              href="https://drive.google.com/file/d/1WqwSULu-3KfX7q4f9f6yvknoXFqFome_/view?usp=sharing"
              target="#"
              rel="noopener noreferrer"
              className="text-white/30 text-sm font-semibold hover:text-yellow-100"
            >
              Resume
            </a>
            <a
              href="/projects"
              className="text-white/30 text-sm font-semibold hover:text-yellow-100"
            >
              Projects
            </a>
            <a
              href="/gallery"
              className="text-white/30 text-sm font-semibold hover:text-yellow-100"
            >
              Gallery
            </a>
            <a
              href="#about"
              rel="noopener noreferrer"
              className="text-white/30 text-sm font-semibold hover:text-yellow-100"
            >
              About
            </a>
            <a
              href="mailto:faizfirdaus.340@gmail.com"
              target="#"
              rel="noopener noreferrer"
            >
              <AiFillMail
                className="text-white/30 hover:text-yellow-100 transition"
                size={30}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/faiz-firdaus-610778255/"
              target="#"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin
                className="text-white/30 hover:text-yellow-100 transition"
                size={30}
              />
            </a>
            <a
              href="https://github.com/faizfrds"
              target="#"
              rel="noopener noreferrer"
            >
              <AiFillGithub
                className="text-white/30 hover:text-yellow-100 transition"
                size={30}
              />
            </a>
            <a
              href="https://www.youtube.com/@indexnotzero"
              target="#"
              rel="noopener noreferrer"
            >
              <AiFillYoutube
                className="text-white/30 hover:text-yellow-100 transition"
                size={30}
              />
            </a>
            <a
              href="https://www.instagram.com/faizfrds.mp4"
              target="#"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram
                className="text-white/30 hover:text-yellow-100 transition"
                size={30}
              />
            </a>
            
          </div>

          <div className="md:hidden z-20">
            <button onClick={toggleMenu}>
              <AiOutlineMenu className="text-white/30" size={30} />
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden absolute top-0 right-0 w-full flex flex-col items-center space-y-4 transition-all  duration-500 ease-in-out pt-20 pb-6 ${
            isOpen ? " max-h-screen delay-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-custom-teal rounded-2xl p-4`}
        >
          <a
            href="https://drive.google.com/file/d/1WqwSULu-3KfX7q4f9f6yvknoXFqFome_/view?usp=sharing"
            target="#"
            rel="noopener noreferrer"
            className="text-sm font-bold text-yellow-200 shadow-lg"
          >
            Resume
          </a>
          <a
            href="/projects"
            rel="noopener noreferrer"
            className="text-sm font-bold text-yellow-200 shadow-lg"
          >
            Projects
          </a>
          <a
            href="/gallery"
            rel="noopener noreferrer"
            className="text-sm font-bold text-yellow-200 shadow-lg"
          >
            Gallery
          </a>
          <a
            href="#about"
            rel="noopener noreferrer"
            className="text-sm font-bold text-yellow-200 shadow-lg"
          >
            About
          </a>
          <a
            href="mailto:faizfirdaus.340@gmail.com"
            target="#"
            rel="noopener noreferrer"
            className="text-sm font-bold text-yellow-200 shadow-lg"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/faiz-firdaus-610778255/"
            target="#"
            rel="noopener noreferrer"
            className="text-sm font-bold text-yellow-200 shadow-lg"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/faizfrds"
            target="#"
            rel="noopener noreferrer"
            className="text-sm font-bold text-yellow-200 shadow-lg"
          >
            GitHub
          </a>
          <a
            href="https://www.youtube.com/@indexnotzero"
            target="#"
            rel="noopener noreferrer"
            className="text-sm font-bold text-yellow-200 shadow-lg"
          >
            YouTube
          </a>
          <a
            href="https://www.instagram.com/faizfrds.mp4"
            target="#"
            rel="noopener noreferrer"
            className="text-sm font-bold text-yellow-200 shadow-lg"
          >
            Instagram
          </a>
        </div>
      </nav>
    </div>
  );
}
