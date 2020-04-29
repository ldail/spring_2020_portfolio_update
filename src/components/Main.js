import React, { useState, useEffect } from 'react';
import {projects, skills, experiences} from '../assets/data';
import {ReactComponent as AboutMeIcon} from '../assets/address-card-regular.svg';
import {ReactComponent as ExperiencesIcon} from '../assets/briefcase-solid.svg';
import {ReactComponent as SkillsIcon} from '../assets/tools-solid.svg';
import {ReactComponent as ProjectsIcon} from '../assets/project-diagram-solid.svg';
import {ReactComponent as ResumeIcon} from '../assets/resume-icon.svg';
import {ReactComponent as SiteLinkIcon} from '../assets/link-solid.svg';
import {ReactComponent as GithubIcon} from '../assets/github-brands.svg';
import {ReactComponent as LinkArrow} from '../assets/arrow-up-solid.svg';
import resume from '../assets/Leon_Dail__Software_Engineer__Resume.pdf';


const Main = ({linkRefs: {aboutLink, experiencesLink, projectsLink, skillsLink, resumeLink}}) => {
  const [showAllWork, setShowAllWork] = useState(false);

  useEffect (() => {
    if (window.screen.width >= 1028) {
      setShowAllWork(true);
    }
  },[]);
  
  return (
    <>
      <section 
        className="info-section about-me" 
        ref={aboutLink}>
        <h4 className="section-header"><AboutMeIcon className="headerIcon"/> <span>about me</span></h4>
        <h5>Hi! My name is Leon, and I'm a full-stack web developer specializing in Javascript with React and NodeJS.</h5>
        <p>I find myself most proud when I am able to solve a challenging problem. I am confident knowing that I can look at a question from all sides and execute the best solution.</p>
        <p>I have years of experience with coding and web design. I was the administrator, designer, and coder for small, hobby websites in the past. I taught myself how to manage a community and all of its coding needs, including quick solutions when problems arise. Now, I am utilizing JavaScript to develop web applications. I am hoping to work on a team with great programmers.</p>
        <p>My biggest passions are designing and creating games; I am always eager to piece together all types - board games, pen and paper, and internet games alike - to test my creativity. My other outlets are writing stories and staying healthy!</p>
      </section>
      <div className="desktop-flex">
        <section className="info-section experiences" ref={experiencesLink}>
        <h4 className="section-header"><ExperiencesIcon className="headerIcon" /> <span>experience</span></h4>
          <ul className="experience-list">
            {experiences.map((experience,i) => {
              if (showAllWork || i < 2) {
                return (
                  <li className="experience-item">
                    <span className="bullet-bar" />
                    <span className="bullet-icon" />
                    <div className="experience-item-info">
                      <a href={experience.link} target="_blank" rel="noopener noreferrer"><img src={experience.icon} alt={experience.name} className="experience-logo" /></a>
                      <div className="experience-name"><h5>{experience.name}</h5>
                        <span className="experience-dates">
                          {`(${experience.startDate} - ${experience.endDate})`}
                        </span>
                      </div>
                      <span className="experience-role">
                        {experience.role}
                      </span>
                      <ul className="experience-tasks">
                        {experience.tasks.map(task => (
                          <li className="experience-task">{task}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                )
              }
              else {
                return null;
              }
            })}
            {!showAllWork
              ? <button onClick={() => setShowAllWork(true)} className="show-more-experiences">(show more. . .)</button>
              : null
            }
          </ul>
        </section>
        <section className="info-section skills" ref={skillsLink}>
          <h4 className="section-header"><SkillsIcon className="headerIcon" /> <span>skills</span></h4>
          {skills.map(skillStack => {
            return(
              <>
                <h5>{skillStack.title}</h5>
                <ul className="skills-list">
                  {skillStack.skills.map((skill,i) => (
                    <li className="skill" key={i}>
                      <div className="skills-icon-container">
                        <skill.icon className="skill-icon" style={skill.style ? skill.style : {}}/>
                      </div>
                      <div className="skill-info">
                        <span className="skill-title">{skill.name}</span>
                        <span className="skill-description">{skill.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )})}
        </section>
      </div>
      <section className="info-section projects" ref={projectsLink}>
        <h4 className="section-header"><ProjectsIcon className="headerIcon" /> <span>projects</span></h4>
        <ul className="project-list">
          {projects.map(project => (
            <li className="project-list-item">
              <div className="screenshot-container-behind">
                <img src={project.screenshot} alt={project.name} className="screenshotBehind"/>
              </div>
              <div className="screenshot-container-original">
                <a href={project.link} target="_blank" rel='noreferrer noopener'><img src={project.screenshot} alt={project.name} className="screenshotOriginal"/></a>
                <a href={project.link} target="_blank" rel='noreferrer noopener'>
                  <div className="screenshot-container-overlay">
                    <SiteLinkIcon className="hover-link-icon" />
                  </div>
                </a>
              </div>
              <h5>{project.name}</h5>
              <ul className="project-links-list">
                <li className="project-link-item">
                <a href={project.link} target="_blank" rel='noreferrer noopener'><SiteLinkIcon className="external-link" /></a>
                </li>
                <li className="project-link-item">
                <a href={project.github} target="_blank" rel='noreferrer noopener'><GithubIcon className="external-link"/></a>
                </li>
              </ul>
              <p className="project-description">
                {project.description}
              </p>
              <ul className="project-tech-list">
                {project.tech.map((tech,i) => (
                  <li className="project-tech-item">
                    {tech === project.tech[project.tech.length -1]
                      ? tech
                      : tech === project.tech[[0]] 
                        ? <>
                            <LinkArrow className="tech-arrow" />
                            <span>{tech},</span>
                          </>
                        : <span>{tech},</span>
                    }
                  </li>))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
      <section className="info-section resume" ref={resumeLink}>
        <h4 className="section-header"><ResumeIcon className="headerIcon" /> <span>resume</span></h4>
        <p>If you would like a printer-friendly copy of my resume, please click the link below.</p>
        <p>Thank you!</p>
        <a href={resume} target="_blank" rel="noopener noreferrer"><button type="button" className="resume-button">Download Resume</button></a>
      </section>
    </>
  );
};

export default Main;