import React, { useEffect,useState } from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { skillprogress } from "../../portfolio";

import { Fade } from "react-reveal";
import About from "./../about/about";
import "./progressbar.css";
export default function Skills(props) {
  const theme = props.theme;
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
        {skillprogress.skillprogresses.map((skill, index) => {
          return (
            <div className="progress-innerdiv" key={index}>
              <div className="progress-header-bar" style={{ color: theme.accentColor[1] }}>

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
  const [stateno,setStateno] =useState(0);
  const theme = props.theme;
  useEffect(() => {
    const newStyle = {
      opacity: 1,
      width: `${props.done}%`,
      background: `linear-gradient(to left, ${theme.accentColor[1]},${theme.accentColor[0]})`,
      boxShadow: `0 1px 1px -2px ${theme.accentColor[1]}, 0 1px 2px ${theme.accentColor[0]}`,
    }
    
    let bars = document.querySelectorAll('.progress-done');
    for (let bar of bars) {
      let barbounding = bar.getBoundingClientRect();
      if (barbounding.y > 50 && barbounding.y < 400 && stateno == 0) {
        setStateno(1);
        console.log(stateno);
        console.log(barbounding.y);
      }

    }
  })
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
// const Progress = (props) => {
//   const [style, setStyle] = React.useState({});
//   const theme = props.theme;
//   useEffect(() => {
//     const newStyle = {
//       opacity: 1,
//       // width: 0 + '%',
//       background: `linear-gradient(to left, ${theme.accentColor[1]},${theme.accentColor[0]})`,
//       boxShadow: `0 1px 1px -2px ${theme.accentColor[1]}, 0 1px 2px ${theme.accentColor[0]}`,
//     }
//     setStyle(newStyle);
//     let bars = document.querySelectorAll('.progress-done');
//     for (let bar of bars) {
//       let barbounding = bar.getBoundingClientRect();
//       if (barbounding.y > 50 && barbounding.y < 400) {
        
//         setInterval(() => {
//           // bar.style.width = `${props.done}%`;
//           console.log(bar.style.width);
//         }, 5)
//       }

//     }
//   })
//   setTimeout(() => {

    

//   }, 200);

//   return (
//     <div className="progress">
//       <div className="progress-done" style={style}>
//         {props.done}%
//       </div>
//     </div>
//   )
// }