import React from 'react';
import Coderimg from "./Coderimg";
import { Fade } from "react-reveal";

export default function about(props) {
    const theme = props.theme;
  return <div className="skills-main-div">

              <div className="skills-text-div">
                <Fade left duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    text header
                  </h1>
                </Fade>
                <Fade left duration={1500}>
                  {/* <SoftwareSkill logos={skill.softwareSkills} /> */}
                </Fade>
                <Fade left duration={2000}>
                  <div>
                  Creative and Tech-savvy Web Developer intern dedicated to develop, contribute and optimize Websites and Web app which are interactive and userfriendly. Team player with an eye for detail. Judicious and creative when crafting effective websites, apps and platforms to propel competitive advantage and revenue growth. Technically proficient and leverage analytical problem solver with calm and focused demeanor.
                  </div>
                </Fade>
              </div>
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <Coderimg theme={theme} />
                </div>
              </Fade>
  </div>;
}
            