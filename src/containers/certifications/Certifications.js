import React from 'react';
import './Certifications.css';
import { Fade } from 'react-awesome-reveal';
import { certifications } from '../../portfolio';
import PropTypes from 'prop-types';
import CertificationCard from '../../components/certificationCard/CertificationCard';

function Certifications(props) {
  const theme = props.theme;
  return (
    <div id="certs">
      <div className="certs-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="certs-header" style={{ color: theme.text }}>
            Certifications
          </h1>
        </Fade>
      </div>
      <div className="certi-cards-div-main">
        {certifications.certifications.map((cert, ind) => {
          return <CertificationCard key={ind} certificate={cert} theme={theme} />;
        })}
      </div>
    </div>
  );
}
Certifications.propTypes = {
  theme: PropTypes.object
};

export default Certifications;
