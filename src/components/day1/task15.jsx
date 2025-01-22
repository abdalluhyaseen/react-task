import { useState } from "react";

function Add() {
  const [color, setColore] = useState("green");

  const redcolor = (change) => {
    setColore(change);
  };
  return (
    <div>
      <h1 style={{ color }}>Amro</h1>
      <button onClick={() => redcolor("red")}>red</button>
      <button onClick={() => redcolor("blue")}>blue</button>
      <button onClick={() => redcolor("pink")}>pink</button>
    </div>
  );
}

export default Add;
