import React, { Component } from 'react';

const Results = (props) => {
    return  (
      <div>
        <p>{props.end_message}</p>
        <p>Your score was: {props.score}</p>
        <button className="btn" onClick={props.retry}>Retry</button>
      </div>
    )
}
export default Results;
