import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "../styles/Gameplay.css";

class Gameplay extends Component {
  state = {
    playerWins: 0,
    computerWins: 0,
    roundNumber: 0,
    availableChoices: ['Rock', 'Paper', 'Scissors'],
    currentRoundChoices: {
      playerChoice: "",
      computerChoice: ""
    }
  }

  playMatch() {
    this.checkForWin();

    if (this.props.gameResults.gameOver) {
      return;
    }

    let playerChoice = this.state.currentRoundChoices.playerChoice;
    let computerChoice = this.state.currentRoundChoices.computerChoice;
    
    const rockWin = () => {
      if (playerChoice === 'Rock') {
        this.setState({
          playerWins: this.state.playerWins + 1
        })
      } else {
        this.setState({
          computerWins: this.state.computerWins + 1
        })
      }
    };

    // switch statement
    // rock beat scissors
    // scissors beat paper
    // paper beat rock

    // Set up win conditions //
    
    rockWin();
  }

  roundNumber() {
    this.setState({
      roundNumber: this.state.roundNumber + 1
    }, () => {
      this.props.roundNumber(this.state.roundNumber);
      this.checkForWin();
    });
  }

  checkForWin() {
    if (this.state.roundNumber === 5) {
      if (this.state.playerWins > this.state.computerWins) {
        this.props.gameResults(true);
      } else {
        this.props.gameResults(false);
      }
      this.disableChoices();
    }
  }

  disableChoices() {
    const selectionContainer = Array.from(document.querySelector('.selection-container').children);
    selectionContainer.forEach((button) => {
      button.disabled = true;
      button.style.backgroundColor = "gray";
    });
  }

  enableChoices() {
    const selectionContainer = Array.from(document.querySelector('.selection-container').children);
    selectionContainer.forEach((button) => {
      button.disabled = false;
      button.style.backgroundColor = "mediumslateblue";
    });
  }

  newGame = () => {
    this.setState({
      playerWins: 0,
      computerWins: 0,
      roundNumber: 0
    }, () => {
      this.props.roundNumber(this.state.roundNumber);
      this.enableChoices();
    });
  }

  handleClick = (e) => {
    this.setState({
      currentRoundChoices: {
        playerChoice: e.target.textContent,
        computerChoice: this.state.availableChoices[Math.floor(Math.floor(Math.random(this.state.availableChoices.length) * this.state.availableChoices.length))]
      }
    }, () => {
      this.props.playerChoice(this.state.currentRoundChoices.playerChoice);
      this.props.computerChoice(this.state.currentRoundChoices.computerChoice);
      this.roundNumber();
      this.playMatch();
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
        <button onClick={this.newGame}>New Game</button>
      </div>
    )
  }
}

Gameplay.propTypes = {
  playerChoice: PropTypes.func.isRequired
}

export default Gameplay;