import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {OfferContainer} from "./OfferContainer/OfferContainer";
const phoneJson = require('./phones.json');

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <OfferContainer data={phoneJson}/>
      </div>
    );
  }
}

export default App;
