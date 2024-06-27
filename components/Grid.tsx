import React from "react";

const sample = [
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    name: "El Paso",
    desc: "Hello",
    url: "",
    tools: [""]
  },
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    name: "El Paso",
    desc: "Hello",
    url: "",
    tools: [""]
  },
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    name: "El Paso",
    desc: "Hello",
    url: "",
    tools: [""]
  },
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    name: "El Paso",
    desc: "Hello",
    url: "",
    tools: [""]
  },
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    name: "El Paso",
    desc: "Hello",
    url: "",
    tools: [""]
  },
];

export default function Grid() {
  return (
    <div className="bg-transparent py-16">
      <div className="container mx-auto px-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sample.map((proj) => (
            <div key={proj.name} className="group block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:scale-[102%] transition text-center hover:shadow-2xl hover:shadow-yellow-300">
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
          {/* <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="relative overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                alt="Product"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                  View Product
                </button>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-4">
              Product Name
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              ante justo. Integer euismod libero id mauris malesuada tincidunt.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="relative overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                alt="Product"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                  View Product
                </button>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-4">
              Product Name
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              ante justo. Integer euismod libero id mauris malesuada tincidunt.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="relative overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                alt="Product"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                  View Product
                </button>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-4">
              Product Name
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              ante justo. Integer euismod libero id mauris malesuada tincidunt.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
