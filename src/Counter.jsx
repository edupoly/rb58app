import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function incCount() {
    setCount(count + 1);
  }
  useEffect(function () {
    console.log("Counter Mounted");
  }, []);
  useEffect(function () {
    console.log("Counter Updated");
  });
  return (
    <div className="border border-success border-2 m-2 p-2 rounded">
      <p>Count: {count}</p>
      <button
        onClick={() => {
          incCount();
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
