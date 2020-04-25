import React from 'react';
import {ReactComponent as GithubIcon} from '../assets/github-brands.svg';
import {ReactComponent as LinkedInIcon} from '../assets/linkedin-brands.svg';
import {ReactComponent as EmailIcon} from '../assets/envelope-open-text-solid.svg';
import {ReactComponent as UmbrellaIcon} from '../assets/umbrella-beach-solid.svg';

const InitialSplash = () => {

  return (
    <div id="InitialSplash">
      <div className="headshot-container">
        <img src="" alt="headshot" className="headshot" />
      </div>
      <div className="splash-info">
        <h1>{`{leon dail}`}</h1>
        <h2>Full-Stack Software Engineer</h2>
        <h3><span>Based in sunny San Diego, CA</span> <UmbrellaIcon className="umbrellaIcon" /></h3>
        
        <ul className="contact-link-list">
          <li><GithubIcon /></li>
          <li><LinkedInIcon /></li>
          <li><EmailIcon /></li>
        </ul>
      </div>
    </div>
  );
};

export default InitialSplash;