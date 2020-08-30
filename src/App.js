import React, { Component } from "react";
import Header from './components/Header';
import Gameplay from './components/Gameplay';
import Results from './components/Results';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.playerChoice.bind(this);
    this.computerChoice.bind(this);
  }

  state = {
    gameResults: {
      gameOver: false,
      gameWon: false
    },
    playerChoice: "",
    computerChoice: "",
    availableChoices: ['Rock', 'Paper', 'Scissors'],
  }

  gameResults = (gameWon) => {
    this.setState({
      gameResults: {
        gameOver: true,
        gameWon
      }
    });
  }

  playerChoice = (playerChoice) => {
    this.setState({
      playerChoice
    });
  }

  computerChoice = (computerChoice) => {
    this.setState({
      computerChoice
    });
  }
  
  render(){
    return (
      <div className="App">
        <Header />
        <Gameplay playerChoice={this.playerChoice} computerChoice={this.computerChoice} gameResults={this.gameResults} />
        <Results playerChoice={this.state.playerChoice} computerChoice={this.state.computerChoice} />
      </div>
    )
  }
}

export default App;