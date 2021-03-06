import React from 'react';
import './CertificationCard.css';
import { Fade } from 'react-reveal';

function CertificationCard(props) {
  const certificate = props.certificate;
  const theme = props.theme;

  return (
    <div className="cards__item" style={{ margin: 'auto' }}>
      <Fade bottom duration={2000} distance="20px">
        <div className="certification-card">
          <a
            href={certificate.certificate_link}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <img
              src={require(`../../assests/images/${certificate.img_path}`)}
              className="certi_card__image"
              alt=""
            />
            <div className="certi_card__overlay" style={{ backgroundColor: theme.body }}>
              <div className="certi_card__header" style={{ backgroundColor: theme.body }}>
                <svg
                  className="certi_card__arc"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ fill: theme.body }}
                >
                  <path />
                </svg>
                <img
                  className="certi_card__thumb"
                  src={require(`../../assests/images/${certificate.logo_path}`)}
                  alt={certificate.alt_name}
                />
                <div className="certi_card__header-text">
                  <h3 className="certi_card__title" style={{ color: theme.text }}>
                    {certificate.title}
                  </h3>
                  <span className="certi_card__status" style={{ color: theme.text }}>
                    {certificate.subtitle}
                  </span>
                </div>
              </div>
              <p className="certi_card__description" style={{ color: theme.secondaryText }}>
                {certificate.discription}
              </p>
            </div>
          </a>
        </div>
      </Fade>
    </div>
  );
}

export default CertificationCard;
