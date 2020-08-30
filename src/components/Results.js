import React, {Component} from 'react';
import '../styles/Results.css';

class Results extends Component {
  render() {
    return (
      <div className="results-container">
        <p>
          Player choice:  { this.props.playerChoice } | Computer choice: { this.props.computerChoice }
        </p>
      </div>
    )
  }
}

export default Results;