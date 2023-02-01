import React from "react";
import { image } from "../data/data";

const About = () => (
  <div id="about">
    <h2>About Me</h2>
    <p>I am a web developer who is passionate about building beautiful and functional websites. I have experience working with React, Angular, and Vue.js and I am constantly looking for new ways to improve my skills and stay up-to-date with the latest technologies.</p>
    <img src={image} alt="I made this" />
  </div>
);

export default About;

