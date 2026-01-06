import { COLOR_MAP, ICONS_RESOURCES } from "../../const";
import { Square } from "../square";

import "./map.css";
const Map = () => {
  const squares = [
    [
      {
        type: "tree",
        color: COLOR_MAP.Tree,
        number: 8,
        icon: ICONS_RESOURCES.Tree,
      },
      {
        type: "rock",
        color: COLOR_MAP.Rock,
        number: 3,
        icon: ICONS_RESOURCES.Rock,
      },
      {
        type: "wheat",
        color: COLOR_MAP.Wheat,
        number: 5,
        icon: ICONS_RESOURCES.Wheat,
      },
    ],
    [
      {
        type: "desert",
        color: COLOR_MAP.Desert,
        number: 6,
        icon: ICONS_RESOURCES.Desert,
      },
      {
        type: "brick",
        color: COLOR_MAP.Brick,
        number: 6,
        icon: ICONS_RESOURCES.Brick,
      },
      {
        type: "brick",
        color: COLOR_MAP.Brick,
        number: 6,
        icon: ICONS_RESOURCES.Brick,
      },
      {
        type: "sheep",
        color: COLOR_MAP.Sheep,
        number: 9,
        icon: ICONS_RESOURCES.Sheep,
      },
    ],
    [
      {
        type: "sheep",
        color: "lightgreen",
        number: 9,
        icon: ICONS_RESOURCES.Wheat,
      },
      { type: "brick", color: "red", number: 6, icon: ICONS_RESOURCES.Wheat },
      { type: "brick", color: "red", number: 6, icon: ICONS_RESOURCES.Wheat },
      { type: "brick", color: "red", number: 6, icon: ICONS_RESOURCES.Wheat },
      {
        type: "sheep",
        color: "lightgreen",
        number: 9,
        icon: ICONS_RESOURCES.Wheat,
      },
    ],
    [
      { type: "brick", color: "red", number: 6, icon: ICONS_RESOURCES.Wheat },
      { type: "brick", color: "red", number: 6, icon: ICONS_RESOURCES.Wheat },
      { type: "brick", color: "red", number: 6, icon: ICONS_RESOURCES.Wheat },
      {
        type: "sheep",
        color: "lightgreen",
        number: 9,
        icon: ICONS_RESOURCES.Wheat,
      },
    ],
    [
      { type: "tree", color: "green", number: 8, icon: ICONS_RESOURCES.Wheat },
      { type: "rock", color: "gray", number: 3, icon: ICONS_RESOURCES.Wheat },
      {
        type: "wheat",
        color: "rgb(255, 241, 162)",
        number: 5,
        icon: ICONS_RESOURCES.Sheep,
      },
    ],
  ];

  return (
    <div className="map">
      {squares.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((square, index) => (
            <Square
              key={index}
              cubeOption={square.number}
              type={square.type}
              color={square.color}
              icon={square.icon}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Map;
