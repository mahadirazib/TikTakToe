
import React from 'react';

function Person(props) {
  return (
    <div>
        
        <h1>Player {props.playerid}</h1>
        <h3>{props.activePlayer===1 ? "Your turn" : "Not your turn"}</h3>

        <svg xmlns="http://www.w3.org/2000/svg" fill={ props.activePlayer === 1 ? "#5bebf1" : "#646464"} width="100" height="100">
          <path d="M89.1,73.8V97H10.9V73.8c0-9.8,10.6-16.5,21.6-20.1c5.2,2.8,11.1,4.4,17.4,4.4s12.2-1.6,17.4-4.4C78.5,57.3,89.1,64,89.1,73.8z M29.2,23.8C29.2,12.4,38.5,3,50,3s20.8,9.4,20.8,20.8S61.5,44.7,50,44.7S29.2,35.3,29.2,23.8z"/>
        </svg>

        <h2> Your sign is "{props.playerSign}"</h2>
        
        <h2> Win: {props.win} </h2>
        <h2> lose: {props.lose} </h2>

    </div>
  );
}

export default Person;
