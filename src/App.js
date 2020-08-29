import React, { Component } from "react";
import Header from './components/Header';
import Gameplay from './components/Gameplay';
import "./App.css";

class App extends Component {
  state = {
    gameWon: false,
    playerChoice: "",
    availableChoices: ['Rock', 'Paper', 'Scissors'],
  }

  playerChoice(playerChoice) {
    this.setState({
      playerChoice: playerChoice
    });
    console.log(playerChoice);
  }
  
  render(){
    return (
      <div className="App">
        <Header />
        <Gameplay playerChoice={this.playerChoice}/>
      </div>
    )
  }
}

export default App;


// find way to user .bind with onClick on Gameplay component