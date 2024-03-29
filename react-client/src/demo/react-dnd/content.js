import React from "react";
import Knight from "./knight";
import Square from "./square";
import BoardSquare from "./boardSquare";
import { moveKnight, canMoveKnight, observe } from "./game";

/* ... */

// function renderSquare(i, knightPosition) {
//   /* ... */
//   return <div onClick={() => handleSquareClick(x, y)}>{/* ... */}</div>;
// }

function handleSquareClick(toX, toY) {
  console.log("toX, toY", toX, toY, canMoveKnight(toX, toY));
  if (canMoveKnight(toX, toY)) {
    moveKnight(toX, toY);
  }
}

function renderSquare(i, knightPosition) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  // const isKnightHere = x === knightX && y === knightY;
  // const black = (x + y) % 2 === 1;
  // const piece = isKnightHere ? <Knight /> : null;

  return (
    <div
      key={i}
      style={{ width: "12.5%", height: "12.5%" }}
    >
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  );
}

function renderPiece(x, y, [knightX, knightY]) {
  if (x === knightX && y === knightY) {
    return <Knight />
  }
}

const ReactDnd = ({ knightPosition }) => {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {squares}
    </div>
  );
};

export default ReactDnd;
