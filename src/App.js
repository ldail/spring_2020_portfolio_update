import React from 'react';
import './App.css';
import InitialSplash from './components/InitialSplash';

function App() {
  return (
    <div className="App">

      <header className="header">
        <div className="nameHeader">{`{leon dail}`}</div>
        <div className="menuHeader">...</div>
      </header>

      <InitialSplash />

    </div>
  );
}

export default App;
