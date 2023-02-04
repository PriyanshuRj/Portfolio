import React from 'react';
import ExperienceCard from '../../components/experienceCard/ExperienceCard.js';
import './ExperienceAccordion.css';
// import { Accordion, Panel } from 'baseui/accordion';
import { DarkTheme, LightTheme, ThemeProvider } from 'baseui';
import PropTypes from 'prop-types';

function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <div className="experience-accord">
      <ThemeProvider theme={theme.name === 'light' ? LightTheme : DarkTheme}>
        {/* <Accordion onChange={({ expanded }) => console.log(expanded)}> */}
        {props.sections.map((section) => {
          return (
            // <Panel
            //   className="accord-panel"
            //   title={section["title"]}
            //   key={section["title"]}
            // >
            //   {
            section['experiences'].map((experience, index) => {
              return <ExperienceCard experience={experience} theme={theme} key={{ index }} />;
            })
            //   }
            // </Panel>
          );
        })}
        {/* </Accordion> */}
      </ThemeProvider>
    </div>
  );
}

ExperienceAccordion.propTypes = {
  theme: PropTypes.object,
  sections: PropTypes.object
};

export default ExperienceAccordion;
