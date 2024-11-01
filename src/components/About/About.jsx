import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import image from "../../assets/image.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={image} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Full stack Developer with 2 years of
              experience in creating dynamic and user-friendly web applications.
              I have had the privilige of collaborating with prestigious
              organisation, contributing to their success and growth.
            </p>
            <p>
              With expertise in front-end and back-end technologies, I strive to
              bridge the gap between user experience and functionality. My aim
              is not just to develop efficient code, but also to deliver
              solutions that make an impact.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Full-Stack</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>MERN</p>
              <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
