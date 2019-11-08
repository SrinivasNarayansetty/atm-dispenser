import React from 'react';
import './App.scss';
import HeaderContent from './components/header-content.js';
import AtmMachine from './components/atm-machine.js';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderContent></HeaderContent>
        <AtmMachine ></AtmMachine>
      </div>
    );
  }
}


export default App;
