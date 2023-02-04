import React from 'react';
import './Educations.css';
import DegreeCard from '../../components/degreeCard/DegreeCard.js';
import { degrees } from '../../portfolio';
import { Fade } from 'react-awesome-reveal';
import PropTypes from 'prop-types';
function Educations(props) {
  const theme = props.theme;

  return (
    <div id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}>
            Basic Education
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree, ind) => {
          return <DegreeCard key={ind} degree={degree} theme={theme} />;
        })}
      </div>
    </div>
  );
}

Educations.propTypes = {
  theme: PropTypes.object
};
export default Educations;
