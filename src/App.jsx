import { useState } from 'react'
import Game from './components/Game';
import Scoreboard from './components/Scoreboard';
import './App.css';

function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [draw, setDraw] = useState(0);

  return (
    <div className="App">
      <h1>Rock, Paper, Scissors Game</h1>
      <Scoreboard playerScore={playerScore} computerScore={computerScore} draw={draw} />
      <Game setPlayerScore={setPlayerScore} setComputerScore={setComputerScore} setDraw={setDraw} />
    </div>
  );
}

export default App;

