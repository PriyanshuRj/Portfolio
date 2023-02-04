import React from 'react';
import './Skills.css';
import SoftwareSkill from '../../components/softwareSkills/SoftwareSkill';
import { skills } from '../../portfolio';
import { Fade } from 'react-awesome-reveal';
import FullStackImg from './FullStackImg';
import CloudInfraImg from './CloudInfraImg';
import DesignImg from './DesignImg';
import DataScienceImg from './DataScienceImg';
import PropTypes from 'prop-types';
function GetSkillSvg(props) {
  if (props.fileName === 'FullStackImg') return <FullStackImg theme={props.theme} />;
  else if (props.fileName === 'CloudInfraImg') return <CloudInfraImg theme={props.theme} />;
  else if (props.fileName === 'DataScienceImg') return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === 'DesignImg') return <DesignImg theme={props.theme} />;
}

function SkillSection(props) {
  const theme = props.theme;
  return (
    <div>
      {skills.data.map((skill, index) => {
        if (index % 2 === 0) {
          return (
            <div className="skills-main-div" key={index}>
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} theme={theme} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, index) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                          key={skillSentence + index}>
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        } else {
          return (
            <div key={index} className="skills-main-div">
              <div className="skills-text-div">
                <Fade left duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade left duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} theme={theme} />
                </Fade>
                <Fade left duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, index) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          key={index}
                          style={{ color: theme.secondaryText }}>
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
              <Fade right duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>
            </div>
          );
        }
      })}
    </div>
  );
}
GetSkillSvg.propTypes = {
  fileName: PropTypes.string,
  theme: PropTypes.object
};
SkillSection.propTypes = {
  theme: PropTypes.object,
  fileName: PropTypes.string,
  skill: PropTypes.object
};
export default SkillSection;
