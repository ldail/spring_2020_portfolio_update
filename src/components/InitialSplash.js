import React, { useEffect, useRef, useState } from 'react';
import {ReactComponent as GithubIcon} from '../assets/github-brands.svg';
import {ReactComponent as LinkedInIcon} from '../assets/linkedin-brands.svg';
import {ReactComponent as EmailIcon} from '../assets/envelope-open-text-solid.svg';
import headshot from '../assets/headshot2.png'
import {ReactComponent as LinkArrow} from '../assets/arrow-up-solid.svg';
import { GITHUB_LINK, LINKEDIN_LINK, EMAIL_LINK } from '../assets/data';


const InitialSplash = () => {
  const splashRef = useRef(null);
  const splashInfoRef = useRef(null);
  const firstHeaderRoleRef = useRef(null);
  const secondHeaderRoleRef = useRef(null);
  const contactLinkListRef = useRef(null);
  const locationRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const [firstHeaderRoleText, setFirstHeaderRoleText] = useState('');
  const [secondHeaderRoleText, setSecondHeaderRoleText] = useState('');

  useEffect(() => {
    let count = 500;

    for (let child of splashRef.current.children) {
      count += 200;
      setTimeout(() => child.classList.add('zero-to-hundred-opacity-slow'), count)
    }
    setTimeout(() => nameRef.current.classList.add('zero-to-hundred-opacity-slow'), count + 200)
    setTimeout(() => roleRef.current.classList.add('zero-to-hundred-opacity'), count + 400)

    const firstHeaderRoleTextFull = `Full-Stack`
    const secondHeaderRoleTextFull = `Software Developer`
    let newCount = count + 1700;
    for (let i=0;i<firstHeaderRoleTextFull.length;i++) {
      setTimeout(() => setFirstHeaderRoleText(firstHeaderRoleTextFull.slice(0,i + 1)),newCount + (i * 70));
    }
    let nextCount = newCount + ((firstHeaderRoleTextFull.length -1) * 70);
    for (let i=0; i<secondHeaderRoleTextFull.length;i++) {
      setTimeout(() => setSecondHeaderRoleText(secondHeaderRoleTextFull.slice(0,i + 1)), nextCount + (i * 70))
    }
    let finalCount = nextCount + ((secondHeaderRoleTextFull.length -1) * 70);


    setTimeout(() => locationRef.current.classList.add('zero-to-hundred-opacity'), finalCount + 200)
    setTimeout(() => contactLinkListRef.current.classList.add('zero-to-hundred-opacity'), finalCount + 500)

  },[])

  return (
    <div id="InitialSplash" ref={splashRef}>
      <div className="headshot-container">
        <img src={headshot} alt="headshot" className="headshot" />
      </div>
      <div className="splash-info" ref={splashInfoRef}>
        <h1 ref={nameRef}>leon dail</h1>
        <h2 ref={roleRef}><span className="header-role-one" ref={firstHeaderRoleRef}>{firstHeaderRoleText}</span> <span className="header-role-two" ref={secondHeaderRoleRef}>{secondHeaderRoleText}</span></h2>
        <h3 ref={locationRef}>Based in sunny San Diego, CA</h3>
        
        <ul className="contact-link-list" ref={contactLinkListRef}>
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