import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
  
  computerChoice() {
    
  }
  
  playMatch() {
    
  }

  handleClick() {
    this.props.playerChoice.bind();
  }
  
  render() {
    return (
      <div className="container">
        <p>Select of the moves below. Best out of 5 wins!</p>
        <div className="selection-container">
          <button id="rock-btn" onClick={handleClick}>Rock</button>
          {/* <button id="paper-btn" onClick={(e) => this.props.playerChoice.bind(this, e.target.textContent)}>Paper</button>
          <button id="scissors-btn" onClick={(e) => this.props.playerChoice.bind(this, e.target.textContent)}>Scissors</button> */}
        </div>
      </div>
    )
  }
}

Gameplay.propTypes = {
  playerChoice: PropTypes.func.isRequired
}

export default Gameplay;