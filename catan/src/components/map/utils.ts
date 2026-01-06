const optionalNumbers = [
  // reduece from this array numbers in generateNumber
  "2",
  "3",
  "3",
  "4",
  "4",
  "5",
  "5",
  "6",
  "6",
  "8",
  "8",
  "9",
  "9",
  "10",
  "10",
  "11",
  "11",
  "12",
];

const getSquares = (): [{ type: string; color: string; number: number }[]] => {
  return [[{ type: "default", color: "white", number: 0 }]];
};

const generateNumber = () => {
  const index = Math.floor(Math.random() * optionalNumbers.length);
  return optionalNumbers.splice(index, 1)[0];
};
