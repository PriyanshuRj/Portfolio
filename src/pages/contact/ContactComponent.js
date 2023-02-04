import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import BlogsImg from './BlogsImg';
import { Fade } from 'react-awesome-reveal';
import './ContactComponent.css';
import { greeting, contactPageData } from '../../portfolio.js';
import { style } from 'glamor';
import PropTypes from 'prop-types';
import ContactForm from '../../components/contactform/contactform';
const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

function Contact(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentColor[1]}`,
    ':hover': {
      boxShadow: `0 5px 15px ${theme.accentColor[1]}`
    }
  });

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={require(`../../assests/images/${ContactData['profile_image_path']}`)}
                alt=""
              />
            </div>
            <div className="contact-heading-text-div">
              <h1 className="contact-heading-text" style={{ color: theme.text, marginTop: 0 }}>
                {ContactData['title']}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}>
                {ContactData['description']}
              </p>
              <SocialMedia />
              <div className="contact-button-container">
                <a
                  {...styles}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                  href={greeting.resumeLink}>
                  See my Resume
                </a>
              </div>
            </div>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="40px">
          <div className="blog-heading-div">
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {blogSection['title']}
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}>
                {blogSection['subtitle']}
              </p>
              <div className="blogsite-btn-div">
                <a
                  {...styles}
                  className="general-btn blogs-btn"
                  href={blogSection.twiter_link}
                  target="_blank"
                  rel="noopener noreferrer">
                  My Twitter Profile
                </a>
                <a
                  {...styles}
                  className="general-btn blogs-btn"
                  href={blogSection.medium_link}
                  target="_blank"
                  rel="noopener noreferrer">
                  My Medium Profile
                </a>
              </div>
            </div>
            <div className="blog-heading-img-div">
              <BlogsImg theme={theme} />
            </div>
          </div>
        </Fade>
        <ContactForm theme={theme} />
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

Contact.propTypes = {
  theme: PropTypes.object,
  setTheme: PropTypes.func,
  onToggle: PropTypes.func
};
export default Contact;
