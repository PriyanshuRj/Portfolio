import React from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

function Certifications(props) {
  const theme = props.theme;
  return (
    <div className="main" id="certs">
      <div className="certs-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="certs-header" style={{ color: theme.text }}>
            Certifications
          </h1>
        </Fade>
      </div>
      <ul className="certs-body-div">
        {certifications.certifications.map((cert) => {
          return <li><CertificationCard certificate={cert} theme={theme} /></li>;
        })}
      </ul>
    </div>
  );
}

export default Certifications;
