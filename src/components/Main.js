import React, { useState } from 'react';
import {projects, skills, experiences} from '../assets/data';
import {ReactComponent as AboutMeIcon} from '../assets/address-card-regular.svg';
import {ReactComponent as ExperiencesIcon} from '../assets/briefcase-solid.svg';
import {ReactComponent as SkillsIcon} from '../assets/tools-solid.svg';
import {ReactComponent as ProjectsIcon} from '../assets/project-diagram-solid.svg';
import {ReactComponent as SiteLinkIcon} from '../assets/link-solid.svg';
import {ReactComponent as GithubIcon} from '../assets/github-brands.svg';

const Main = ({linkRefs: {aboutLink, experiencesLink, projectsLink, skillsLink}}) => {
  const [showAllWork, setShowAllWork] = useState(false);
  


  return (
    <>
      <section className="info-section about-me" ref={aboutLink}>
        <h4 className="section-header"><AboutMeIcon className="headerIcon"/> <span>about me</span></h4>
        <h5>Hi! My name is Leon, and I'm a full-stack web developer specializing in Javascript with React and NodeJS.</h5>
        <p>I find myself most proud when I am able to solve a challenging problem. I am confident knowing that I can look at a question from all sides and execute the best solution.</p>
        <p>I have years of experience with coding and web design. I was the administrator, designer, and coder for small, hobby websites in the past. I taught myself how to manage a community and all of its coding needs, including quick solutions when problems arise. Now, I am utilizing JavaScript to develop web applications. I am hoping to work on a team with great programmers.</p>
        <p>My biggest passions are designing and creating games; I am always eager to piece together all types - board games, pen and paper, and internet games alike - to test my creativity. My other outlets are writing stories and staying healthy!</p>
      </section>
      <section className="info-section experience" ref={experiencesLink}>
      <h4 className="section-header"><ExperiencesIcon className="headerIcon" /> <span>experience</span></h4>
        <ul className="experience-list">
          {experiences.map((experience,i) => {
            if (showAllWork || i < 2) {
              return (
                <li className="experience-item">
                  <span className="bullet-icon" />
                  <div className="experience-item-info">
                    <a href={experience.link}><img src={experience.icon} alt={experience.name} /></a>
                    <h5>{experience.name}</h5>
                    <span className="experience-dates">
                      {experience.startDate} - {experience.endDate}
                    </span>
                    <span className="experience-role">
                      {experience.role}
                    </span>
                    <ul className="experience-tasks">
                      {experience.tasks.map(task => (
                        <li>{task}</li>
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
            ? <button onClick={() => setShowAllWork(true)}>(show more. . .)</button>
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
                {skillStack.skills.map(skill => (
                  <li>{skill}</li>
                ))}
              </ul>
            </>
          )})}
      </section>
      <section className="info-section projects" ref={projectsLink}>
        <h4 className="section-header"><ProjectsIcon className="headerIcon" /> <span>projects</span></h4>
        <ul className="project-list">
          {projects.map(project => (
            <li className="project-list">
              <div className="screenshot-container">
                <img src={project.screenshot} alt={project.name} />
              </div>
              <h5>{project.name}</h5>
              <ul className="project-links-list">
                <li className="project-link-item">
                  <a href={project.link}><SiteLinkIcon className="external-link" /></a>
                </li>
                <li className="project-link-item">
                  <a href={project.github}><GithubIcon className="external-link"/></a>
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
                        ? `>  ${tech},`
                        : `${tech},`
                    }
                  </li>))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Main;