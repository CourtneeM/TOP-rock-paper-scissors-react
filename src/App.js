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
      didWin: ""
    },
    roundNumber: 0,
    playerChoice: "",
    computerChoice: "",
    availableChoices: ['Rock', 'Paper', 'Scissors'],
  }

  gameResults = (gameWon) => {
    let didWin = "";
    if (gameWon === 'tie') {
      didWin = "It's a tie!";
    } else if (!gameWon) {
      didWin = 'You lose!';
    } else if (gameWon) {
      didWin = "You win!";
    }
    this.setState({
      gameResults: {
        gameOver: true,
        didWin
      }
    });
  }

  roundNumber = (roundNumber) => {
    this.setState({
      roundNumber
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

  resetResults = () => {
    this.setState({
      gameResults: {
        gameOver: false,
        didWin: ""
      }
    });
  }
  
  render(){
    return (
      <div className="App">
        <Header />
        <Gameplay playerChoice={this.playerChoice} computerChoice={this.computerChoice} gameResults={this.gameResults} roundNumber={this.roundNumber} resetResults={this.resetResults}/>
        <Results playerChoice={this.state.playerChoice} computerChoice={this.state.computerChoice} roundNumber={this.state.roundNumber} gameResults={this.state.gameResults} />
      </div>
    )
  }
}

export default App;