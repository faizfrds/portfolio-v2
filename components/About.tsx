import React from "react";

export default function About() {
  return (
    <div
      id="about"
      className="justify-center flex py-10 bg-gradient-to-b from-amber-200/70 to-amber-100/10"
    >
      <div className="items-center w-2/3 justify-center flex flex-col-reverse lg:flex lg:flex-row">
        <div className="lg:p-10 lg:block lg:w-2/3 text-justify">
          <div className="text-white">
            <h2 className="my-4 font-bold text-3xl text-yellow-300 sm:text-4xl ">
              About Me
            </h2>
            <p className="text-sm mb-4 text-white">
            Hi there, I'm Faiz, a fourth-year Computer Science and Math double major at the University of Massachusetts Amherst. I have extensive experience in software development and most recently interned at AWS as a software engineer. Moving forward, I'm eager to explore the intersection of technology and the natural world!
            </p>
            <p className="text-sm mb-4 text-white">
            These days, I'm especially interested in building functional software with accessible and responsive UIs, and I've recently developed a growing curiosity about computer applications in the physical world, especially smart agriculture and environmental/wildlife conservation.
            </p>
            <p className="text-sm mb-4 text-white">
              When I'm not in front of the computer, I love going on outdoor adventures (the PNW especially), shooting cinematic photos and videos, spoil my cats with wayyy too many treats, do adrenaline-inducing activities, and collect postcards whenever I get the chance.
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
