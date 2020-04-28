import React, { useRef, useState, useEffect } from 'react';
import './reset.css';
import './App.css';
import InitialSplash from './components/InitialSplash';
import Main from './components/Main';
import { headerIcons, skills } from './assets/data';

function App() {

  const [headerExpanded, setHeaderExpanded] = useState(false);
  const contractedHeader = useRef(null);
  const expandedHeader = useRef(null);
  const appRef = useRef(null)
  const headerRef = useRef(null);
  const [revealedAbout, setRevealedAbout] = useState(false);
  const [revealedExperiences, setRevealedExperiences] = useState(false);
  const [revealedSkills, setRevealedSkills] = useState(false);
  const [revealedProjects, setRevealedProjects] = useState(false);
  const linkRefs = {aboutLink: useRef(null), experiencesLink: useRef(null), skillsLink: useRef(null), projectsLink: useRef(null)};

  useEffect(() => {
      setTimeout(() => headerRef.current.classList.add('zero-to-hundred-opacity'), 300)
      window.addEventListener('scroll',() => checkForScroll(),true)
  },[])

  const checkForScroll = () => {
    const {aboutLink, experiencesLink, skillsLink, projectsLink} = linkRefs;
    if (!revealedProjects) {
      if (window.screen.height + window.scrollY > projectsLink.current.offsetTop + 100) {
        setRevealedProjects(true);
        projectsLink.current.classList.add('zero-to-hundred-opacity-slow');
      }
    }
    if (!revealedSkills) {
      if (window.screen.height + window.scrollY > skillsLink.current.offsetTop + 100) {
        setRevealedSkills(true);
        skillsLink.current.classList.add('zero-to-hundred-opacity-slow');
      }
    }
    if (!revealedExperiences) {
      if (window.screen.height + window.scrollY > experiencesLink.current.offsetTop + 100) {
        setRevealedExperiences(true);
        experiencesLink.current.classList.add('zero-to-hundred-opacity-slow');
      }
    }
    if (!revealedAbout) {
      if (window.screen.height + window.scrollY > aboutLink.current.offsetTop + 100) {
        setRevealedAbout(true);
        aboutLink.current.classList.add('zero-to-hundred-opacity');
      }
    }
  }

  return (
    <div className="App" 
      ref={appRef}>
      <header className="header" ref={headerRef}>
        {!headerExpanded
          ? <div className="headedContracted" ref={contractedHeader} onMouseOver={() => setHeaderExpanded(true)}>leon dail</div>
          : <ul className="headerExpanded" ref={expandedHeader} onMouseLeave={() => setHeaderExpanded(false)}>
            {headerIcons.map(iconSet => (
              <li className="header-expanded-icon" key={`${iconSet.name}Key`}>
                <iconSet.icon onClick={() => {
                 window.scrollTo({top: linkRefs[iconSet.name + 'Link'].current.offsetTop - 80, behavior: 'smooth'})}} />
              </li>
            ))}
          </ul>
        }
      </header>

      <InitialSplash />
      <Main linkRefs={linkRefs} />

    </div>
  );
}

export default App;
