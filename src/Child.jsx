import React, { useContext } from "react";
import GrandChild from "./GrandChild";
import { MyContext } from "./MyContext";

function Child() {
  var x = useContext(MyContext);
  console.log(x);
  return (
    <div className="border border-success border-2 m-2 p-2 rounded">
      <h1>{x.firstname}</h1>
      <GrandChild></GrandChild>
    </div>
  );
}

export default Child;
