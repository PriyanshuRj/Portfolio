import React from 'react';
import Coderimg from './Coderimg';
import { Fade } from 'react-awesome-reveal';
import './about.css';
import PropTypes from 'prop-types';
import { about } from '../../portfolio';
export default function About(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="20px">
      <h1 className="skills-header" style={{ color: theme.text }}>
        More About Me
      </h1>
      <div className="about-main-div">
        <div className="about-text-div">
          <Fade left duration={1000}>
            <h1 className="about-heading" style={{ color: theme.accentColor[1] }}>
              {about.title}
            </h1>
          </Fade>
          <Fade left duration={1400}>
            <div className="about-text-head" style={{ color: theme.accentColor[0] }}>
              {about.extraLine}
            </div>
          </Fade>
          <Fade left duration={2000}>
            <div className="about-text-subhead">{about.discriptionLine}</div>
          </Fade>

          <Fade left duration={2500}>
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
      </div>
    </Fade>
  );
}

About.propTypes = {
  theme: PropTypes.object
};
