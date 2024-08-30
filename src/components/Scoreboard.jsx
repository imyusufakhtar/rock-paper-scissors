import React from 'react';

const Scoreboard = ({ playerScore, computerScore, draw}) => {
  return (
    <>
    <div className="scoreboard">
    {/* <div className="score-heading">Scoreboard</div> */}
      <p>Player: {playerScore}</p>
      <p>Computer: {computerScore}</p>
      <p>Draw: {draw} </p>
    </div>
    </>
  );
};

export default Scoreboard;
