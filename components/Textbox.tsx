"use client"

import React from "react";
import Grid from "./Projects";
import Experiences from "./Experiences";

export default function Textbox() {
  return (
    <div className="h-fit justify-center flex flex-col">
      <Grid />
      <Experiences />
    </div>
  );
}
