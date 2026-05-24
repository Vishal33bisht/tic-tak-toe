import React from 'react';
import Square from './Square';

const Board = ({ squares, onSquareClick, winningLine, gameOver, currentPlayer }) => {
  return (
    <div className="board-wrapper">
      <div className="board" role="grid" aria-label="Tic Tac Toe board">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => onSquareClick(index)}
            isWinning={winningLine?.includes(index) ?? false}
            isDisabled={!!value || gameOver}
            currentPlayer={currentPlayer}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;