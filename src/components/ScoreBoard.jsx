import React from 'react';

const ScoreCard = ({ label, player, value, colorClass, isActive }) => (
  <div className={`score-card ${colorClass} ${isActive ? 'active-player' : ''}`}>
    <div className="score-label">{label}</div>
    <div className="score-player">{player}</div>
    <div className="score-value">{value}</div>
    {isActive && <div className="active-indicator" />}
  </div>
);

const ScoreBoard = ({ scores, currentPlayer, gameOver }) => {
  return (
    <div className="scoreboard">
      <ScoreCard
        label="Player"
        player="✕  X"
        value={scores.X}
        colorClass="player-x"
        isActive={currentPlayer === 'X' && !gameOver}
      />
      <ScoreCard
        label="Draws"
        player="≡  Ties"
        value={scores.draws}
        colorClass="draws-card"
        isActive={false}
      />
      <ScoreCard
        label="Player"
        player="○  O"
        value={scores.O}
        colorClass="player-o"
        isActive={currentPlayer === 'O' && !gameOver}
      />
    </div>
  );
};

export default ScoreBoard;