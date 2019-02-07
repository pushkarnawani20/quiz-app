import React, { Component } from 'react';

class Options extends Component {
  render() {
    return (
      <>
        <ul className="questionOptions">
          {this.props.answers.map((answer, i) =>
            <li key={i}>
              <a href='#' onClick={() => this.props.handleSelect(answer)}>{answer}</a>
            </li>
          )}
        </ul>
        <div className="submitionSection">
          <p>You have selected: {this.props.selectedAnswer}</p>
          <button className="btn" onClick={this.props.handleSubmit}>Submit</button>
        </div>
      </>
    )
  }
}

export default Options;
