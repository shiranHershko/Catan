import "./square.css";

const Square = (props: { cubeOption: number }) => {
  return <div className="square">{props.cubeOption}</div>;
};

export default Square;
