"use client";
import React, { useEffect, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Textbox from "./Textbox";
import Navbar from "./Navbar";
import Experiences from "./Experiences";
import Experience_text from "./Experience_text";

export default function Header() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="relative h-screen overflow-x-hidden overflow-y-auto flex items-center">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/background.png)",
            transform: `translateY(${offset * -0.2}px)`,
          }}
        />
        <div className="absolute top-0 left-0 w-full h-[75vh] overflow-hidden" >
            <span id="star"></span>
            <span id="star"></span>
            <span id="star"></span>
            <span id="star"></span>
            <span id="star"></span>
            <span id="star"></span>
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/bg3.png)",
            transform: `translateY(${offset * -0.06}px)`,
          }}
        />

        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/bg2.png)",
            transform: `translateY(${offset * -0.2}px)`,
          }}
        />

        <div className="w-full h-[500px] mb-16 md:mb-12 md:h-[700px] lg:h-[900px] relative">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url(/images/nametag.png)",
              transform: `translateY(${offset * -0.1}px)`,
            }}
          />
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/bg1.png)",
            transform: `translateY(${offset * -0.35}px)`,
            translate: "translateY(-10px)",
          }}
        />
      </div>
    </div>
  );
}
