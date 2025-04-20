import React from "react";
import Link from "next/link";
import { HiOutlineGlobeAlt, HiArrowLeft } from "react-icons/hi";

const imageNames = [
  "beach",
  "bridge",
  "wfall",
  "canon",
  "cool",
    "DSC00421",
  "hotel",
  "DSC00294",
  "tre",
  "snowy",
  "DSC01140",
  "waterfall",
];

export default function Gallery() {
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
          <h1 className="text-yellow-300 text-4xl font-bold my-5">
            Gallery
          </h1>


              <div className="columns-1 sm:columns-2 sm:gap-8 md:columns-3 ">
                {imageNames.map((link, key) => (
                  <div className={`bg-white p-1 rounded-md ${key !== 0 ? 'mt-3' : ''}`}>
                    <img
                      src={`https://picturesforfaiz.s3.us-east-2.amazonaws.com/${link}.png`}
                      key={key}  
                      className="rounded-lg"
                    />
                  </div>
                ))}
  
          </div>
        </div>
      </div>
    </main>
  );
}
