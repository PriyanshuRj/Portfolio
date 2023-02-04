import React from 'react';
import './ExperienceCard.css';
import { style } from 'glamor';
import PropTypes from 'prop-types';

function ExperienceCard(props) {
  const experience = props.experience;
  const theme = props.theme;
  const styles = style({
    // backgroundColor: theme.accentColor[1],
    ':hover': {
      boxShadow: `0 5px 15px ${theme.accentColor[1]}`
    },
    background: 'rgba( 255, 255, 255, 0.2 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 4px )',
    // -webkit-backdrop-filter: 'blur( 4px )',
    borderRadius: '10px',
    border: '1px solid rgba( 255, 255, 255, 0.18 )'
  });

  return (
    <div className="experience-card" {...styles}>
      <div className="experience-card-logo-div">
        <img
          className="experience-card-logo"
          src={require(`../../assests/images/${experience['logo_path']}`)}
          alt=""
        />
      </div>
      <div className="experience-card-body-div">
        <div className="experience-card-header-div">
          <div className="experience-card-heading-left">
            <h3 className="experience-card-title" style={{ color: theme.text }}>
              {experience['title']}
            </h3>
            <p className="experience-card-company" style={{ color: theme.secondaryText }}>
              <a href={experience['company_url']} target="_blank" rel="noopener noreferrer">
                {experience['company']}
              </a>
            </p>
          </div>
          <div className="experience-card-heading-right">
            <p className="experience-card-duration" style={{ color: theme.secondaryText }}>
              {experience['duration']}
            </p>
            <p className="experience-card-location" style={{ color: theme.secondaryText }}>
              {experience['location']}
            </p>
          </div>
        </div>
        <p className="experience-card-description" style={{ color: theme.text }}>
          {experience['description']}
        </p>
      </div>
    </div>
  );
}

ExperienceCard.propTypes = {
  experience: PropTypes.object,
  theme: PropTypes.object
};
export default ExperienceCard;
