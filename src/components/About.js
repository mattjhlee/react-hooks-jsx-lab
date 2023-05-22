import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>Whatever you want to put here bro</p>
    <img src={image} alt="I made this" />
  </div>
  )
}

export default About;
