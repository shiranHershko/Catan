import { Square } from "../square";

const Grid = () => {
  const squares = [
    // pick in random the squares data
    { type: "tree", color: "green", number: 8 },
    { type: "rock", color: "gray", number: 3 },
    { type: "weat", color: "yellow", number: 5 },
  ];
  return (
    <div>
      <Square cubeOption={8} />;
      <Square cubeOption={8} />;
    </div>
  );
};

export default Grid;
