import React, { Component } from 'react';
import './App.css';
import {OfferContainer} from "./OfferContainer/OfferContainer";
const phonesJson = require('./phones.json');

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="img/vodafone-big.png" className="App-logo" alt="logo" />
        </header>
        <OfferContainer data={phonesJson[0]}/>
      </div>
    );
  }
}

export default App;
