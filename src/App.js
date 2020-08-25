import React, { Component } from "react";
import Header from './components/Header';
import Gameplay from './components/Gameplay';
import "./App.css";

class App extends Component {
  state = {
    gameWon: false
  }
  
  render(){
    return (
      <div className="App">
        <Header />
        <Gameplay />
      </div>
    )
  }
}

export default App;