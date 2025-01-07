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
              Hi there, I'm Faiz, and I'm currently a third-year Computer Science and Math (Statistics and Data Science concentration) double major
              at the University of Massachusetts Amherst. I'm
              currently an Undergraduate Course Assistant for CS326 (Web
              Programming) and an Undergraduate Researcher for the Wireless and Sensors Systems Lab (WSSL). I'm looking to explore deeper on the interdisciplinary between computers and nature.
            </p>
            <p className="text-sm mb-4 text-white">
              My main focus these days is to try as many areas of computer
              science as I can and figure out what floats my boat. I'm avidly interested in making functional
              software with aesthetic UI, and I have recently developed an interest
              for computer applications in the physical world. I've also been curious about smart agriculture and ML-driven wildlife conservation so I'm definitely keeping my options open.
            </p>
            <p className="text-sm mb-4 text-white">
              When I'm not in front of the computer, I love to go on outdoor adventures (bonus points if they have pine trees), create cinematic videos, spoil my cats with a little too many snacks, do any adrenaline-inducing activities, and spot cool trains (including Amtrak) when I get the chance.
            </p>
            <p className="text-sm mb-4 text-white">
              I'm open to any opportunities that come my way and shoot me an email if you ever want to get in touch!
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
