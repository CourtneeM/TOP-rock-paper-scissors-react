import React, {Component} from 'react';
import "../styles/Gameplay.css";

class Gameplay extends Component {
  state = {
    playerWins: 0,
    computerWins: 0,
    numberOfRounds: 0,
    selections: ['rock', 'paper', 'scissors']
  }
  
  playerChoice(selection) {
    console.log('hi');
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
          <button>Rock</button>
          <button>Paper</button>
          <button>Scissors</button>
        </div>
      </div>
    )
  }
}

export default Gameplay;