import React from "react";
import "./Hero.css";
import image from "../../assets/image.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={image} alt="" />
      <h1>
        <span>I am Vikas Jha,</span>Software Developer.
      </h1>
      <p>
        I am a Full Stack Developer from Australia have 2 years of experience in
        Software and Application Development.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
