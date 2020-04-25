import React, { useRef } from 'react';
import './reset.css';
import './App.css';
import InitialSplash from './components/InitialSplash';
import Main from './components/Main';

function App() {

  const contractedHeader = useRef(null);
  const expandedHeader = useRef(null);
  return (
    <div className="App">

      <header className="header">
        <div className="headedContracted">{`{leon dail}`}</div>
        <div className="headerExpanded"></div>
      </header>

      <InitialSplash />
      <Main />

    </div>
  );
}

export default App;
