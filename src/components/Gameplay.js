import React, {Component} from 'react';
import "../styles/Gameplay.css";

class Gameplay extends Component {
  state = {
    playerWins: 0,
    computerWins: 0,
    numberOfRounds: 0,
    availableChoices: ['Rock', 'Paper', 'Scissors'],
    currentRoundChoices: {
      playerChoice: "",
      computerChoice: ""
    }
  }
  
  playerChoice(e) {
    let playerChoice = e.target.textContent;
    this.state.availableChoices.forEach((choice) => {
      if (playerChoice === choice) {
        console.log(playerChoice);
        this.setState({
          currentRoundChoices: {
            playerChoice: playerChoice
          } 
        });
      }
    });
  }
  
  computerChoice() {
    
  }
  
  playMatch() {
    
  }
  
  render() {
    return (
      <div className="container">
        <p>Select of the moves below. Best out of 5 wins!</p>
        <div className="selection-container">
          <button id="rock-btn" onClick={(e) => this.playerChoice(e)}>Rock</button>
          <button id="paper-btn" onClick={(e) => this.playerChoice(e)}>Paper</button>
          <button id="scissors-btn" onClick={(e) => this.playerChoice(e)}>Scissors</button>
        </div>
      </div>
    )
  }
}

export default Gameplay;