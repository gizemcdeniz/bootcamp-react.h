import React, { Component } from 'react';
import Kart from "./components/Kart.js";
import './App.css';
import './kart.css';

class App extends Component {


  render () {
    
    return (
    <div className="container">
        <div className="coloumn1"> Week 1
      <div className="kartDiv">
        <Kart/>
        </div>
      </div>
      </div>
  );
}
}
export default App;
