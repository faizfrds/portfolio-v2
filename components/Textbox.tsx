"use client"

import React from "react";
import Projects from "./Projects";
import Experiences from "./Experiences";

export default function Textbox() {
  return (
    <div className="h-fit justify-center flex flex-col">
      <Projects />
      <Experiences />
    </div>
  );
}
