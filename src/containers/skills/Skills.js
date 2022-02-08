import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { skillprogress } from "../../portfolio";

import { Fade } from "react-reveal";
import About from "./../about/about";
import "./progressbar.css";
export default function Skills(props) {
  const theme = props.theme;
  console.log(skillprogress.skillprogresses);
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            My Skills
          </h1>
        </Fade>
      </div>
      <div className="Progressbardiv">
       {skillprogress.skillprogresses.map((skill,index)=>{
         return (
          <div className="progress-innerdiv">
          <div className="progress-header-bar" style={{color:theme.accentColor[1]}}>

            <span className="iconify" data-icon={skill.icon}></span>
            <h4>{skill.name}</h4></div>
          <Progress done={skill.done} theme={theme} /></div>
         )
       })}

         
      




      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
const Progress = (props) => {
  const [style, setStyle] = React.useState({});
  const theme = props.theme;

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${props.done}%`,
      background: `linear-gradient(to left, ${theme.accentColor[1]},${theme.accentColor[0]})`,
      boxShadow: `0 1px 1px -2px ${theme.accentColor[1]}, 0 1px 2px ${theme.accentColor[0]}`,
    }

    setStyle(newStyle);
  }, 200);

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {props.done}%
      </div>
    </div>
  )
}