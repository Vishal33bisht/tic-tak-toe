import React, { useState } from 'react';

const Square = ({ value, onClick, isWinning, isDisabled, currentPlayer }) => {
  const [isHovered, setIsHovered] = useState(false);
  const classes = [
    'square',
    value === 'X' ? 'x-mark' : '',
    value === 'O' ? 'o-mark' : '',
    isWinning ? 'winning-square' : '',
    isDisabled ? 'disabled' : '',
    !value && isHovered && !isDisabled ? `preview-${currentPlayer.toLowerCase()}` : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={isDisabled}
      aria-label={
        value
          ? `Square filled with ${value}`
          : `Empty square, ${currentPlayer}'s turn`
      }
    >
      {value || (isHovered && !isDisabled && !value ? currentPlayer : '')}
    </button>
  );
};

export default Square;