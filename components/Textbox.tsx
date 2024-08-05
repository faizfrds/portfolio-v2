"use client"

import React from "react";
import Grid from "./Projects";
import Experiences from "./Experiences";

export default function Textbox() {
  return (
    <div className="bg-gradient-to-b from-black to-slate-950 h-fit mb-10 justify-center flex flex-col">
      <Grid />
      <Experiences />
    </div>
  );
}
