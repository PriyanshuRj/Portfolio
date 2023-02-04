import React from 'react';
import './Footer.css';
import { Fade } from 'react-awesome-reveal';
import { greeting } from '../../portfolio.js';

import PropTypes from 'prop-types';

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">❤️</span> by{' '}
          <a
            href="https://github.com/PriyanshuRj"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}>
            {greeting.title2}
          </a>
        </p>
      </Fade>
    </div>
  );
}

Footer.propTypes = {
  theme: PropTypes.object
};
