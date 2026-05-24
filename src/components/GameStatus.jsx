import React from 'react';

const GameStatus = ({ currentPlayer, winnerInfo, isDraw }) => {
  let statusClass = 'game-status ';
  let emoji = '';
  let message = '';

  if (winnerInfo) {
    statusClass += `status-winner-${winnerInfo.winner}`;
    emoji = '🏆';
    message = `Player ${winnerInfo.winner} wins!`;
  } else if (isDraw) {
    statusClass += 'status-draw';
    emoji = '🤝';
    message = "It's a draw!";
  } else {
    statusClass += 'status-playing';
    emoji = currentPlayer === 'X' ? '✨' : '🌿';
    message = `Player ${currentPlayer}'s turn`;
  }

  return (
    <div className={statusClass} role="status" aria-live="polite">
      <span className="status-emoji">{emoji}</span>
      {message}
    </div>
  );
};

export default GameStatus;