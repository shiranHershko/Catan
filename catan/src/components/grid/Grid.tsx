import { Square } from "../square";
import "./grid.css";
const Grid = () => {
  const squares = [
    [
      { type: "tree", color: "green", number: 8 },
      { type: "rock", color: "gray", number: 3 },
      { type: "wheat", color: "rgb(255, 241, 162)", number: 5 },
    ],
    [
      { type: "brick", color: "red", number: 6 },
      { type: "brick", color: "red", number: 6 },
      { type: "brick", color: "red", number: 6 },
      { type: "sheep", color: "lightgreen", number: 9 },
    ],
    [
      { type: "sheep", color: "lightgreen", number: 9 },
      { type: "brick", color: "red", number: 6 },
      { type: "brick", color: "red", number: 6 },
      { type: "brick", color: "red", number: 6 },
      { type: "sheep", color: "lightgreen", number: 9 },
    ],
    [
      { type: "brick", color: "red", number: 6 },
      { type: "brick", color: "red", number: 6 },
      { type: "brick", color: "red", number: 6 },
      { type: "sheep", color: "lightgreen", number: 9 },
    ],
    [
      { type: "tree", color: "green", number: 8 },
      { type: "rock", color: "gray", number: 3 },
      { type: "wheat", color: "rgb(255, 241, 162)", number: 5 },
    ],
  ];

  return (
    <div className="grid">
      {squares.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((square, index) => (
            <Square
              key={index}
              cubeOption={square.number}
              type={square.type}
              color={square.color}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
