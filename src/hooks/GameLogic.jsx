import { useState, useCallback } from 'react';

const WINNING_COMBINATIONS = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonal top-left → bottom-right
  [2, 4, 6], // diagonal top-right → bottom-left
];

function checkWinner(squares) {
  for (const [a, b, c] of WINNING_COMBINATIONS) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return null;
}

function checkDraw(squares) {
  return squares.every((sq) => sq !== null);
}


export function useGameLogic() {
  const [squares, setSquares]     = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn]     = useState(true);
  const [scores, setScores]       = useState({ X: 0, O: 0, draws: 0 });
  const [gameOver, setGameOver]   = useState(false);
  const [winnerInfo, setWinnerInfo] = useState(null); // { winner, line }

  const handleSquareClick = useCallback(
    (index) => {

      if (squares[index] || gameOver) return;

      const nextSquares = squares.slice();
      nextSquares[index] = isXTurn ? 'X' : 'O';

      const result = checkWinner(nextSquares);

      if (result) {
        setSquares(nextSquares);
        setWinnerInfo(result);
        setGameOver(true);
        setScores((prev) => ({ ...prev, [result.winner]: prev[result.winner] + 1 }));
      } else if (checkDraw(nextSquares)) {
        setSquares(nextSquares);
        setGameOver(true);
        setScores((prev) => ({ ...prev, draws: prev.draws + 1 }));
      } else {
       setSquares(nextSquares);
        setIsXTurn(!isXTurn);
      }
    },
    [squares, isXTurn, gameOver]
  );

  const resetGame = useCallback(() => {
    setSquares(Array(9).fill(null));
    setIsXTurn(true);
    setGameOver(false);
    setWinnerInfo(null);
  }, []);


  const clearScores = useCallback(() => {
    resetGame();
    setScores({ X: 0, O: 0, draws: 0 });
  }, [resetGame]);

  const isDraw    = gameOver && !winnerInfo;
  const currentPlayer = isXTurn ? 'X' : 'O';

  return {
    squares,
    currentPlayer,
    winnerInfo,
    isDraw,
    gameOver,
    scores,
    handleSquareClick,
    resetGame,
    clearScores,
  };
}