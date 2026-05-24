import React from 'react';
import Board from './components/Board';
import GameStatus from './components/GameStatus';
import ScoreBoard from './components/ScoreBoard';
import { useGameLogic } from './hooks/GameLogic';

function App() {
  const {
    squares,
    currentPlayer,
    winnerInfo,
    isDraw,
    gameOver,
    scores,
    handleSquareClick,
    resetGame,
    clearScores,
  } = useGameLogic();

  return (
    <div className="app-container">
      <h1 className="game-title">Tic Tac Toe</h1>
      <ScoreBoard
        scores={scores}
        currentPlayer={currentPlayer}
        gameOver={gameOver}
      />

      <GameStatus
        currentPlayer={currentPlayer}
        winnerInfo={winnerInfo}
        isDraw={isDraw}
      />

      <Board
        squares={squares}
        onSquareClick={handleSquareClick}
        winningLine={winnerInfo?.line ?? null}
        gameOver={gameOver}
        currentPlayer={currentPlayer}
      />

      <div className="button-group">
        <button className="btn btn-reset" onClick={resetGame}>
          <span>🔄</span> New Round
        </button>
        <button className="btn btn-clear" onClick={clearScores}>
          <span>🗑️</span> Reset All
        </button>
      </div>
    </div>
  );
}

export default App;