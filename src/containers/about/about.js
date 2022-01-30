import React from 'react';
import Coderimg from "./Coderimg";
import { Fade } from "react-reveal";
import './about.css';
import { about } from "../../portfolio";
export default function About(props) {
    const theme = props.theme;
  return <div className="about-main-div">

              <div className="about-text-div">
                <Fade left duration={1000}>
                  <h1 className="about-heading" style={{ color: theme.accentColor[0] }}>
                    {about.title}
                  </h1>
                </Fade>
                <Fade left duration={1500}>
                  {/* <SoftwareSkill logos={skill.softwareSkills} /> */}
                </Fade>
                <Fade left duration={2000}>
                  <div className="about-text-p" style={{ color: theme.secondaryText }}>
                 {about.discription}
                  </div>
                </Fade>
              </div>
              <Fade left duration={2000}>
                <div className="about-image-div">
                  <Coderimg theme={theme} />
                </div>
              </Fade>
  </div>;
}
            