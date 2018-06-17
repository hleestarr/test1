import React, { Component } from 'react';
import logo from './logo.svg';
import FirstCom from './FirstCom';
import './App.css';
import FirstSubSubCom from './FirstSubSubCom';
import CheckBox from './CheckBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CheckBox />
        <FirstSubSubCom title="## tilte from App ##" />
        <FirstCom title="....This is my First Com...." />        
      </div>
    );
  }
}

export default App;
