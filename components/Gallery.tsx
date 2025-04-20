import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image"; // ✅ Import Next Image

const imageNames = ["wfall.png", "canon.png", "DSC01140.png", "tre.png", "DSC00421.png", "DSC00868.JPG"];

export default function Gallery() {
  return (
    <div
      id="gallery"
      className="justify-center flex py-10 bg-gradient-to-b from-teal-950 to-amber-200/70 border-0 border-double border-b-8 border-yellow-300"
    >
      <div className="items-center max-w-screen-xl mx-8 lg:mx-0 lg:w-2/3 justify-center flex flex-col">
        <h1 className="text-4xl text-yellow-300 font-bold mt-4 mb-8">
          Gallery
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {imageNames.map((link, key) => (
            <div className={`p-1 rounded-md bg-white m-2 ${key >= 3 ? 'hidden md:flex' : ''}`}>
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
                  className="flex items-center font-bold text-gray-100 group pt-2 justify-center"
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
  );
}
