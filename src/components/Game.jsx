import { useState } from 'react';

const Game = ({ setPlayerScore, setComputerScore, setDraw }) => {
  const choices = ["Rock", "Paper", "Scissors"];
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    const computerChoice = getRandomChoice();
    setComputerChoice(computerChoice);
    const result = determineWinner(choice, computerChoice);
    setResult(result);
    updateScore(result);
  };

  const getRandomChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      return 'Draw';
    } else if (
      (player === 'Rock' && computer === 'Scissors') ||
      (player === 'Scissors' && computer === 'Paper') ||
      (player === 'Paper' && computer === 'Rock')
    ) {
      return 'Player Wins!';
    } else {
      return 'Computer Wins!';
    }
  };

  const updateScore = (result) => {
    if (result === 'Player Wins!') {
      setPlayerScore((prevScore) => prevScore + 1);
    } else if (result === 'Computer Wins!') {
      setComputerScore((prevScore) => prevScore + 1);
    } else{
        setDraw((prevScore) => prevScore + 1);
    }
  };

  const resetGame = () =>{
    setPlayerScore(0);
    setComputerScore(0);
    setDraw(0);
    setPlayerChoice("");
    setComputerChoice("");
    setResult("");
  }

  return (
    <div className="game-container">
      <h2>Rock, Paper, Scissors</h2>
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handlePlayerChoice(choice)}>
            {choice}
          </button>
        ))}
        <button className="resetBtm" onClick={resetGame}>Reset</button>
      </div>
      <div className="results">
        <p>Player Choice: {playerChoice}</p>
        <p>Computer Choice: {computerChoice}</p>
        <h3>{result}</h3>
      </div>
    </div>
  );
};

export default Game;
