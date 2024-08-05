import React, { useRef, useState } from "react";

const sample = [
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    name: "El Paso",
    desc: "Hello",
    url: "",
    tools: [""],
  },
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    name: "El Paso",
    desc: "Hello",
    url: "",
    tools: [""],
  },
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    name: "El Paso",
    desc: "Hello",
    url: "",
    tools: [""],
  },
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    name: "El Paso",
    desc: "Hello",
    url: "",
    tools: [""],
  },
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    name: "El Paso",
    desc: "Hello",
    url: "",
    tools: [""],
  },
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    name: "El Paso",
    desc: "Hello",
    url: "",
    tools: [""],
  },
];

export default function Grid() {
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
    <div className="min-h-screen lg:h-full h-fit items-center py-16 overflow-auto text-center">
      <h1 className="text-4xl font-bold text-yellow-300">Projects</h1>
      <div className="container mx-auto px-1 flex justify-center w-full lg:w-1/2 lg:p-5">
        <div className="justify-center flex">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden w-full p-10 items-center ">
            {sample.map((proj) => (
              <div
                key={proj.name}
                className="group block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:scale-[102%] transition text-center hover:shadow-lg hover:shadow-yellow-300/90"
              >
                <div className="relative overflow-hidden">
                  <img
                    className="object-cover w-full h-full"
                    src={proj.image}
                    alt="Product"
                  />
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>
                <h3 className="text-xl font-bold text-cyan-700 mt-4">
                  {proj.name}
                </h3>
                <p className="text-gray-500 text-sm mt-2">{proj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
