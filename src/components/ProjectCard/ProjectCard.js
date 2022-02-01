import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

export default function ProjectCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const styles = style({
    color: "rgb(88, 96, 105)",
  
    // padding: "2rem",
    cursor: "pointer",
    height: "100%",

    background: "rgba( 255, 255, 255, 0.25 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 8px )",
    webkitBackdropFilter: "blur( 8px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
      transform: 'scale(1.5)'
    },
  });

  return (
    <div className="cards__item">
      <div >
      <Fade bottom duration={2000} distance="40px">
        <div
          className="project-card"
          {...styles}
          key={repo.id}
          onClick={() => openRepoinNewTab(repo.url)}
          // style={{ backgroundColor: theme.projectCard }}
        >
          <div className="repo-card-bg">
          <img className="project-card-image" 
          src={require(`../../assests/images/${repo.img_url}`)}
          // src={repo.img_url} 
          alt={repo.name} style={{width: '100%',borderRadius:'10px'}}></img></div>
          <div style={{padding: '2rem'}}>
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="repo-details">
            <ProjectLanguages logos={repo.languages} />
          </div>
        </div>
        </div>
      </Fade>
      </div>
    </div>
  );
}
