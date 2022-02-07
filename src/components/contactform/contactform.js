import React from 'react';
import "./contact.css";
import { style } from "glamor";
import { useForm } from "@formspree/react";
import ContactFormSvg from "./contactformsvg";

export default function Contactform(props) {
    const [state, handleSubmit] = useForm("xqknplql");
    const theme = props.theme;
    console.log(state);
    const styles = style({
        color: theme.accentColor[1],
        ":hover": {
            color:'rgba(255, 255, 255, 0.7)' ,
            backgroundColor:theme.accentColor[1],
            boxShadow: `0 5px 15px ${theme.accentColor[1]}`,
        },
      });
    
      if(state.succeeded===true){
        return (
  
          <div>
              <div className="main-contactform-container">
          <div className="contactform-sub-container">
            <div className="contact-screen">
              <div className="contact-screen-header" >
                <div className="contact-screen-header-left">
                  <div className="contact-screen-header-button close"></div>
                  <div className="contact-screen-header-button maximize"></div>
                  <div className="contact-screen-header-button minimize"></div>
                </div>
                <div className="contact-screen-header-right">
                </div>
              </div>
              <div className="contact-screen-body">
                <div className="contact-screen-body-item-after left">
                  <div className="contact-app-title-affter" style={{ color: theme.accentColor[1] }}>
                    <span>Thanks For</span>
                    <span>Submitting Response !!</span>
                    <div className="contact-lower-bound" style={{ backgroundColor: theme.accentColor[1] }}></div>
                  </div>
                 
                </div>
                <div className="contact-screen-body-item-after">
               {/* svg or JSON response here */}
               <ContactFormSvg className="contact-form-svg" theme={theme}/>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>);
      }
      else{
        return (
  
          <div>
              <div className="main-contactform-container">
          <div className="contactform-sub-container">
            <div className="contact-screen">
              <div className="contact-screen-header" >
                <div className="contact-screen-header-left">
                  <div className="contact-screen-header-button close"></div>
                  <div className="contact-screen-header-button maximize"></div>
                  <div className="contact-screen-header-button minimize"></div>
                </div>
                <div className="contact-screen-header-right">
                </div>
              </div>
              <div className="contact-screen-body">
                <div className="contact-screen-body-item left">
                  <div className="contact-app-title" style={{ color: theme.accentColor[1] }}>
                    <span>CONTACT</span>
                    <span>ME</span>
                    <div className="contact-lower-bound" style={{ backgroundColor: theme.accentColor[1] }}></div>
                  </div>
                  <div className="contact-app-contact" style={{ color: theme.secondaryText }}>CONTACT INFO : +91 9871348643 </div>
                </div>
                <div className="contact-screen-body-item">
                <form onSubmit={handleSubmit}>
                  <div className="contact-app-form">
                    <div className="contact-app-form-group">
                      <input className="contact-app-form-control" type="text" placeholder="Name"  style={{ color: theme.secondaryText }}/>
                    </div>
                    <div className="contact-app-form-group">
                      <input className="contact-app-form-control" type="email" name="_replyto" placeholder="EMAIL" style={{ color: theme.secondaryText }}/>
                    </div>
                    <div className="contact-app-form-group">
                      <input className="contact-app-form-control" placeholder="CONTACT NO" style={{ color: theme.secondaryText }}/>
                    </div>
                    <div className="contact-app-form-group message">
                      <textarea className="contact-app-form-control-textarea" name="message" placeholder="MESSAGE" style={{ color: theme.secondaryText }}></textarea>
                    </div>
                    <div className="contact-app-form-group buttons" >
                     
                      <button className="contact-app-form-button contact-general-btn" type="submit"
                          disabled={state.submitting} {...styles}>SEND</button>
                    </div>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>);
      }
  
}
