import React, { Component } from 'react';
import './App.css'; 
import './hour.css';
import Hour from './hour';
import Minute from './minute';
import Second from './second';

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <div class="flex-container">
  <div> <Hour/></div>
 
  <div> <Minute/></div>
  
  <div>   <Second/></div>  
</div>
<div class="flex-container">
  <div className="text"> <p>Hour</p></div>
  <div className="text"> <p>Minute</p></div>
  <div className="text">  <p> Second</p></div>  
</div>
      
      
  
      </div>
    );
  }
}

export default App;
