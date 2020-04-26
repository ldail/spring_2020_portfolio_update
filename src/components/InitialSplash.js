import React from 'react';
import {ReactComponent as GithubIcon} from '../assets/github-brands.svg';
import {ReactComponent as LinkedInIcon} from '../assets/linkedin-brands.svg';
import {ReactComponent as EmailIcon} from '../assets/envelope-open-text-solid.svg';
import {ReactComponent as UmbrellaIcon} from '../assets/umbrella-beach-solid.svg';
import headshot from '../assets/headshot2.png'

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
        {/* Inside h3 above:
        //<UmbrellaIcon className="umbrellaIcon"  /> */}
        
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