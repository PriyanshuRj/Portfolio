import React from 'react';
import './SoftwareSkill.css';
import PropTypes from 'prop-types';
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
          {props.logos.map((logo, ind) => {
            return (
              <li className="software-skill-inline" key={ind} name={logo.skillName}>
                <div className="icons-div" {...styles}>
                  <span
                    className="iconify"
                    data-icon={logo.fontAwesomeClassname}
                    style={logo.style}
                    data-inline="false"></span>
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
SoftwareSkill.propTypes = {
  theme: PropTypes.object,
  logos: PropTypes.array
};

export default SoftwareSkill;
