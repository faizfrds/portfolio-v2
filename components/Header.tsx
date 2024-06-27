"use client";
import React from "react";
import Image from "next/image";
import Textbox from "./Textbox";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./Navbar";
import Experiences from "./Experiences";

export default function Header() {
  return (
    <div className="h-3/4">
      <Parallax pages={3} style={{ top: "0.1", left: "0" }} className="animation">
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation_layer parallax" id="background"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.3}>
          <div className="animation_layer parallax" id="bg3"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.1}>
          <div className="animation_layer parallax" id="bg2"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={-0.1} speed={-0.06}>
          <div className="animation_layer parallax" id="nametag"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.4}>
          <div className="animation_layer parallax" id="bg1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.4}>
          <div className="animation_layer parallax" id="black"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.85} speed={0.25}>
          <Textbox />
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={0.25}>
          <Experiences />
        </ParallaxLayer>
        
      </Parallax>
    </div>
  );
}
