export default function Square({ black, children }) {
  const fill = black ? "black" : "white";
  const stroke = black ? "white" : "black";
  // console.log('fileSquare----------', fill,  stroke, children);

  return (
    <div
      style={{
        backgroundColor: fill,
        color: stroke,
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </div>
  );
}
