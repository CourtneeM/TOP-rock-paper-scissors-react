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

  handleClick = (e) => {
    this.setState({
      currentRoundChoices: {
        playerChoice: e.target.textContent
      }
    }, () => {
      this.props.playerChoice(this.state.currentRoundChoices.playerChoice);
    }); 
  }
  
  render() {
    return (
      <div className="container">
        <p>Select of the moves below. Best out of 5 wins!</p>
        <div className="selection-container">
          <button id="rock-btn" onClick={this.handleClick}>Rock</button>
          <button id="paper-btn" onClick={this.handleClick}>Paper</button>
          <button id="scissors-btn" onClick={this.handleClick}>Scissors</button>
        </div>
      </div>
    )
  }
}

Gameplay.propTypes = {
  playerChoice: PropTypes.func.isRequired
}

export default Gameplay;