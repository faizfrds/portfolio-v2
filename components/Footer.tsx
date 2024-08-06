import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black shadow h-fit py-2">
      <section className="text-center leading-6 py-5 font-light text-sm px-5">
        <a
          href="#top"
          className="text-yellow-200 uppercase underline underline-offset-2"
        >
          Back to Top
        </a>
        <h2 className="text-gray-400 pt-2 capitalize">
          created by faiz firdaus - last updated August 2024
        </h2>
        <h3 className="text-gray-500">
          Designed using Figma. Created using Next.js with Tailwind CSS.
          Deployed using Vercel.
        </h3>
      </section>
    </footer>
  );
}
