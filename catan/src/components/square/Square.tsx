import "./square.css";

const Square = (props: { cubeOption: number; type: string; color: string }) => {
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
      <span className="square-type">{props.type}</span>
    </div>
  );
};

export default Square;
