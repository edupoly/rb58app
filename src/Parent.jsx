import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div className="border border-info border-2 m-2 p-2 rounded">
      Parent
      <Child></Child>
    </div>
  );
}

export default Parent;
