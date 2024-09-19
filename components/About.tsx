import React from "react";

export default function About() {
  return (
    <div
      id="about"
      className="justify-center flex py-10 bg-gradient-to-b from-teal-950 to-amber-200/70"
    >
      <div className="items-center w-2/3 justify-center flex flex-col-reverse lg:flex lg:flex-row">
        <div className="lg:p-10 lg:block lg:w-2/3 text-justify">
          <div className="text-white">
            <h2 className="my-4 font-bold text-3xl text-yellow-300 sm:text-4xl ">
              About Me
            </h2>
            <p className="text-sm mb-4 text-white">
              Hi there, I'm Faiz, and I'm currently a junior computer science
              student at UMass Amherst. I've been playing with computers for as
              long as I can remember and started learning to code at 11. I'm
              currently an undergraduate teaching assistant for CS326 (Web
              Programming) under Prof. Tim Richards and a treasurer for the Indonesian Student Association.
            </p>
            <p className="text-sm mb-4 text-white">
              My main focus these days is to explore as many areas of computer
              science as possible while also getting my hands dirty with
              cutting-edge tools. I am avidly interested in making functional
              software with aesthetic UI, and I have recently developed a liking
              for low-level development.
            </p>
            <p className="text-sm mb-4 text-white">
              When I'm not in front of the computer, I love to go on adventures
              (especially mountains and misty forests), spend time around my
              cats, do any activity that pumps my adrenaline, and spot cool
              trains when I get the chance.
            </p>
            <p className="text-sm mb-4 text-white">
              I'm open to any opportunities that come my way and am more than
              happy to talk!
            </p>
          </div>
        </div>
        <div className="pt-10 lg:w-1/3">
          <div className="w-72 h-72 mx-auto rounded-full overflow-hidden border-4 border-white">
            <img
              src="/images/profile.png"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
