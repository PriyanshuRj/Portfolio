import React from 'react';
import './SoftwareSkill.css';
import { Icon } from '@iconify/react';
import { style } from 'glamor';
function SoftwareSkill(props) {
  const theme = props.theme;
  const styles = style({
    color: theme.secondaryText,
    ':hover': {
      color: theme.text
    }
  });
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.logos.map((logo) => {
            return (
              <li className="software-skill-inline" name={logo.skillName}>
                <div className="icons-div" {...styles}>
                  <span
                    className="iconify"
                    data-icon={logo.fontAwesomeClassname}
                    style={logo.style}
                    data-inline="false"
                  ></span>
                  <span className="icons-text">{logo.skillName}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SoftwareSkill;
