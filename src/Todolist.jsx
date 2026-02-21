import React, { useReducer } from "react";
import { initialState, reducer } from "./reducers/todolistReducer";
function Todolist() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = React.useState("");
  return (
    <div className="border border-primary m-2 p-2">
      <h3>Todolist</h3>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADDTODO", payload: newTodo });
          setNewTodo("");
        }}
      >
        Add Todo
      </button>
      <ul>
        {state.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
export default Todolist;
