import React from 'react';
import './Greeting.css';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import { greeting } from '../../portfolio';
import { Fade } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';
import FeelingProud from './FeelingProud';
import { style } from 'glamor';
import PropTypes from 'prop-types';
import Type from './typewriter';
export default function Greeting(props) {
  const theme = props.theme;
  const navigate = useNavigate();

  const styles = style({
    backgroundColor: `${theme.accentColor[1]}`,
    ':hover': {
      boxShadow: `0 5px 15px ${theme.accentColor[1]}`
    }
  });

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">
                {greeting.title}
                <span className="greeting-wave">👋</span>.
              </h1>
              <p className="greeting-text-p subTitle" style={{ color: theme.secondaryText }}>
                <span>I&lsquo;m </span>
                <span style={{ color: theme.accentColor[0] }}>{greeting.full_name}. </span>
                {/* {greeting.subTitle} */}
                <Type />
              </p>

              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <button
                  {...styles}
                  className="button"
                  onClick={() => {
                    navigate('/contact');
                  }}>
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}

Greeting.propTypes = {
  theme: PropTypes.object
};
