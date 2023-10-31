import React, { useState } from 'react';

const GameBoard = ({ onSelectedSquare, activePlayer, board }) => {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSelectedSquare = (rowIndex, colIndex) => {
    onSelectedSquare(rowIndex, colIndex);
  };

  // const handleSelectedSquare = (rowIndex, colIndex) => {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedGameBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedGameBoard[rowIndex][colIndex] = activePlayer;
  //     return updatedGameBoard;
  //   });
  //   onSelectedSquare();
  // };

  const rowLists = board.map((row, rowIndex) => (
    <li key={rowIndex}>
      <ol>
        {row.map((symbol, colIndex) => (
          <li key={colIndex}>
            <button
              onClick={() => handleSelectedSquare(rowIndex, colIndex)}
              disabled={symbol !== null}
            >
              {symbol}
            </button>
          </li>
        ))}
      </ol>
    </li>
  ));
  return <ol id="game-board">{rowLists}</ol>;
};

export default GameBoard;
