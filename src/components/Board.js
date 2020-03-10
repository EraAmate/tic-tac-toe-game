import React from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);

  // const [nextPlayer, setNextPlayer] = React.useState(true);

  const status = "Next player: " + (xIsNext ? "X" : "O");

  // ODER

  // const player = xIsNext ? "X" : "O";
  // const status = `Next player: ${player}`;

  // function handleClick(squareIndex) {
  //   const squaresCopy = squares.slice();
  //   squaresCopy[squareIndex] = player;
  //   setXIsNext(!xIsNext);
  //   setSquares(squaresCopy);
  // }

  // const [status1, setStatus] = React.useState(true);

  // function changeStatusByHandleClick(status) {
  //   const status2 = status.slice();
  //   if (status) {
  //     status = status1;
  //   } else {
  //     status = status2;
  //   }
  //   status(!status);
  //   setStatus(status2);
  // }

  function handleClick(squareIndex) {
    const squaresCopy = squares.slice();
    //  DIES IST SCHÖNER : squareCopy[squareIndex] =  XisNext ? "X" : "O"
    if (xIsNext) {
      squaresCopy[squareIndex] = "X";
    } else {
      squaresCopy[squareIndex] = "O";
    }
    setXIsNext(!xIsNext);
    setSquares(squaresCopy);
  }

  // const squaresCopyNum2 = squares.slice();
  // squaresCopyNum2[squareIndex] = "O";

  // if (squaresCopy[squareIndex] === "X") {
  //   squaresCopy[squareIndex] = squaresCopyNum2[squareIndex];
  // }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

// ODER
// <Square value="0" />
//         <Square value={0} />
//         <Square value={++1} />
//         <Square value={++1} />
//         <Square value={++1} />
