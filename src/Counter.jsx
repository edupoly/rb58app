import React, { useState } from "react";
function Counter() {
  //state
  var [x, setX] = useState(0);
  //action
  function inc() {
    setX(x + 1);
  }
  function dec() {
    setX(x - 1);
  }
  //ui
  return (
    <div className="border border-success border-2 m-2 p-2 rounded">
      <h1>Counter:{x}</h1>
      <button
        onClick={() => {
          inc();
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          dec();
        }}
      >
        Dec
      </button>
    </div>
  );
}
export default Counter;
//useState hook is a hook(predefined function)
