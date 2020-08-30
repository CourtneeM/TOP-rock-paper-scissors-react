import React, { Component } from "react";
import Header from './components/Header';
import Gameplay from './components/Gameplay';
import Results from './components/Results';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.playerChoice.bind(this);
  }

  state = {
    gameWon: false,
    playerChoice: "",
    computerChoice: "",
    availableChoices: ['Rock', 'Paper', 'Scissors'],
  }

  playerChoice = (playerChoice) => {
    this.setState({
      playerChoice
    });
  }
  
  render(){
    return (
      <div className="App">
        <Header />
        <Gameplay playerChoice={this.playerChoice} />
        <Results playerChoice={this.state.playerChoice} computerChoice={this.state.computerChoice} />
      </div>
    )
  }
}

export default App;