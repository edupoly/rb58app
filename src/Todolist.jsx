import React, { useEffect, useRef } from "react";

function Todolist() {
  const [todos, setTodos] = React.useState(["Buy Milk", "Learn React"]);
  const [newTodo, setNewTodo] = React.useState("");
  const tref = useRef();
  useEffect(() => {
    tref.current.focus();
    // document.getElementById("ntd").focus();
  }, []);
  return (
    <div className="border border-primary m-2 p-2">
      <h3>Todolist</h3>
      <input
        ref={tref}
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        onClick={() => {
          setTodos([...todos, newTodo]);
          setNewTodo("");
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
export default Todolist;
