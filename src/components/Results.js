import React, {Component} from 'react';
import '../styles/Results.css';

class Results extends Component {

  render() {
    return (
      <div className="results-container">
        <p>Round Number: {this.props.roundNumber}</p>
        <p>
          Player choice:  {this.props.playerChoice} | Computer choice: {this.props.computerChoice}
        </p>
        <p style={{fontWeight: 'bold'}}>{ this.props.gameResults.didWin }</p>
      </div>
    )
  }
}
export default Results;