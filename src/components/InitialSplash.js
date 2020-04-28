import React from 'react';
import {ReactComponent as GithubIcon} from '../assets/github-brands.svg';
import {ReactComponent as LinkedInIcon} from '../assets/linkedin-brands.svg';
import {ReactComponent as EmailIcon} from '../assets/envelope-open-text-solid.svg';
import headshot from '../assets/headshot2.png'
import {ReactComponent as LinkArrow} from '../assets/arrow-up-solid.svg';
import { GITHUB_LINK, LINKEDIN_LINK, EMAIL_LINK } from '../assets/data';


const InitialSplash = () => {

  return (
    <div id="InitialSplash">
      <div className="headshot-container">
        <img src={headshot} alt="headshot" className="headshot" />
      </div>
      <div className="splash-info">
        <h1>leon dail</h1>
        <h2><span>Full-Stack</span> <span>Software Developer</span></h2>
        <h3><span>Based in sunny San Diego, CA</span></h3>
        
        <ul className="contact-link-list">
          <li className="externalGithubLink">
            <a href={GITHUB_LINK} target="_blank" rel='noreferrer noopener'>
              <GithubIcon className="external-icon" />
              <LinkArrow className="externalClickIcon" />
            </a>
          </li>
          <li className="externalLinkedInLink">
            <a href={LINKEDIN_LINK} target="_blank" rel='noreferrer noopener'>
              <LinkedInIcon className="external-icon" />
              <LinkArrow className="externalClickIcon" />
            </a>
          </li>
          <li className="externalEmailLink">
            <a href={EMAIL_LINK} target="_blank" rel='noreferrer noopener'>
              <EmailIcon className="external-icon" />
              <LinkArrow className="externalClickIcon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InitialSplash;