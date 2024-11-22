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
              Hi there, I'm Faiz, and I'm currently a junior double majoring in Computer Science and Math (Statistics and Data Science concentration)
              at the University of Massachusetts Amherst. I've been playing with computers for as
              long as I can remember and started learning to code at 11. I'm
              currently an Undergraduate Course Assistant for CS326 (Web
              Programming) under Prof. Tim Richards and looking to get into research.
            </p>
            <p className="text-sm mb-4 text-white">
              My main focus these days is to explore as many areas of computer
              science as possible and gain as much experience as I can. I am avidly interested in making functional
              software with aesthetic UI, and I have recently developed a liking
              for low-level development. I've also been enjoying my database class this semester so I'm definitely keeping my options open.
            </p>
            <p className="text-sm mb-4 text-white">
              When I'm not in front of the computer, I love to go on adventures in the mountains. especially when it's misty, blanketed with pine trees, and waterfalls are flowing down. I also enjoy learning deeper about nature, spoiling my cats with a little too many snacks, do any activity that gets my adrenaline going, and spot cool
              trains (including Amtrak) when I get the chance.
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
