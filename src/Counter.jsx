import React, { useReducer } from "react";
import { reducer, initialState } from "./reducers/counterReducer";

function Counter() {

  var [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className="border border-info border-2 m-2 p-2 rounded">
      <b>Counter:{state.count}</b>
      <br />
      <button
        onClick={() => {
          dispatch({ type: "INC" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DEC" });
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
