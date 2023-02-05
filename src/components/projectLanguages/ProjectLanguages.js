import React from 'react';
import './ProjectLanguages.css';
import PropTypes from 'prop-types';
// import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';
function ProjectLanguages(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons-languages">
          <ReactTooltip place="top" type="dark" effect="solid" />
          {props.logos.map((logo) => {
            return (
              //
              <li key={logo.name} className="software-skill-inline-languages" name={logo.skillName}>
                <span
                  className="iconify"
                  id="icon-title"
                  data-icon={logo.iconifyClass}
                  data-tip="Click to copy"
                  data-inline="false"></span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
ProjectLanguages.propTypes = {
  logos: PropTypes.array
};
export default ProjectLanguages;
