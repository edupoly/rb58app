import React from "react";
import BabyChild from "./BabyChild";

function GrandChild() {
  return (
    <div className="border border-secondary border-2 m-2 p-2 rounded">
      GrandChild
      <BabyChild></BabyChild>
    </div>
  );
}

export default GrandChild;
