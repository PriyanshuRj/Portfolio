import React, { useState } from 'react';
import ProjectLanguages from '../projectLanguages/ProjectLanguages';
import './ProjectCard.css';
import { Fade } from 'react-awesome-reveal';
import { style } from 'glamor';
import PropTypes from 'prop-types';
import { AiFillGithub } from 'react-icons/ai';
export default function ProjectCard({ repo, theme }) {
  const [readMoreState, setReadMoreState] = useState(200);
  function openRepoinNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

  const styles = style({
    color: 'rgb(88, 96, 105)',

    // padding: "2rem",
    cursor: 'pointer',
    height: '100%',

    background: 'rgba( 255, 255, 255, 0.25 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 8px )',
    webkitBackdropFilter: 'blur( 8px )',
    borderRadius: '10px',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',
    transition: 'all 0.2s ease-in-out',
    ':hover': {
      boxShadow: `${theme.imageDark} 0 2px 15px`
      // transform: 'scale(1.5)'
    }
  });

  return (
    <div className="cards__item">
      <div>
        <Fade bottom duration={2000} distance="40px">
          <div
            className="project-card"
            {...styles}
            key={repo.id}

            // style={{ backgroundColor: theme.projectCard }}
          >
            <div className="repo-card-bg">
              <img
                className="project-card-image"
                src={require(`../../assests/images/${repo.img_url}`)}
                // src={repo.img_url}
                alt={repo.name}
                style={{ width: '100%', borderRadius: '10px' }}></img>
            </div>
            <div style={{ padding: '2rem' }}>
              <div className="repo-name-div">
                <p className="repo-name" style={{ color: theme.text }}>
                  {repo.name}
                </p>
              </div>
              <p className="repo-description" style={{ color: theme.text }}>
                {repo.description.substring(0, readMoreState)}
                {repo.description.length > readMoreState ? '... ' : ' '}
                {repo.description.length > 200 ? (
                  <span
                    className="repo-desc-readMore"
                    onClick={() => setReadMoreState((prev) => (prev == 200 ? 1000 : 200))}>
                    {readMoreState === 200 ? 'Read More' : 'Read Less'}
                  </span>
                ) : undefined}
              </p>
              <div className="repo-details">
                <ProjectLanguages logos={repo.languages} />
              </div>
              <button
                className="project-guithub-button"
                style={{ background: theme.projectCard, color: theme.text }}
                onClick={() => openRepoinNewTab(repo.url)}>
                <AiFillGithub className="project-github-logo" />
                Guithub
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
ProjectCard.propTypes = {
  repo: PropTypes.object,
  theme: PropTypes.object
};
