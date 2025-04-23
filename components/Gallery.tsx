"use client"
import React, { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image"; // ✅ Import Next Image

const imageNames = [
  "wfall.png",
  "canon.png",
  "DSC01140.png",
  "tre.png",
  "DSC00421.png",
  "car.JPG",
];

export default function Gallery() {

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
    className="bg-gradient-to-b from-teal-950 to-amber-200/70 relative max-w-full overflow-hidden border-double border-0 border-b-8 px-8 py-10 shadow-2xl h-full  border-yellow-300"
  >
    <div
      className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
      style={{
        opacity,
        background: `radial-gradient(250px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.12), transparent 90%)`,
      }}
    />

    
    <div
      id="gallery"
      className="justify-center flex p-10"
    >
      <div className="items-center max-w-screen-xl mx-8 lg:mx-0 lg:w-2/3 justify-center flex flex-col">
        <h1 className="text-4xl text-yellow-300 font-bold mt-4 mb-8">
          Gallery
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {imageNames.map((link, key) => (
            <div
              className={`p-1 rounded-md bg-white m-2 ${
                key >= 3 ? "hidden md:flex" : ""
              }`}
            >
              <Image
                src={`https://picturesforfaiz.s3.us-east-2.amazonaws.com/${link}`}
                alt={link}
                key={key}
                width={400}
                height={300}
                className="rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <a
          className="flex items-center font-bold text-gray-100 group justify-center"
          href="/gallery"
        >
          <span className="group whitespace-nowrap flex items-center text-center mt-6">
            <span className="font-light border-b border-transparent pb-px transition group-hover:border-yellow-200 motion-reduce:transition-none">
              View Gallery
            </span>
            <BsArrowRight className="ml-2 group-hover:translate-x-1 transition" />
          </span>
        </a>
      </div>
    </div>
    </div>
  );
}
