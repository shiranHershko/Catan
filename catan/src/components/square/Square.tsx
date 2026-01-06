import "./square.css";

const Square = (props: {
  cubeOption: number;
  type: string;
  color: string;
  icon: string;
}) => {
  return (
    <div
      className="square"
      style={
        {
          backgroundColor: props.color,
          "--square-color": props.color,
        } as React.CSSProperties
      }
    >
      <span className="square-number">{props.cubeOption}</span>
      <div className="icon-type">{props.icon}</div>
    </div>
  );
};

export default Square;
