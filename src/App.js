import React from 'react';
import './App.css';
import HeaderContent from './components/header-content.js';
import AtmMachine from './components/atm-machine.js';

function App() {
  return (
    <div className="App">
      <HeaderContent></HeaderContent>
      <AtmMachine></AtmMachine>
    </div>
  );
}

export default App;
