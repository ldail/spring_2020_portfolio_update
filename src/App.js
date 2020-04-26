import React, { useRef, useState } from 'react';
import './reset.css';
import './App.css';
import InitialSplash from './components/InitialSplash';
import Main from './components/Main';
import { headerIcons } from './assets/data';

function App() {

  const [headerExpanded, setHeaderExpanded] = useState(false);
  const contractedHeader = useRef(null);
  const expandedHeader = useRef(null);
  const linkRefs = {aboutLink: useRef(null), experiencesLink: useRef(null), skillsLink: useRef(null), projectsLink: useRef(null)};

  return (
    <div className="App">

      <header className="header">
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
