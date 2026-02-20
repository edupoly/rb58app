import React, { useState } from "react";

function Todolist() {
  var [todos, setTodos] = useState(["new bat", "goto goa", "Play cricket"]);
  var [ntd, setNtd] = useState("");
  function addTodo() {
    // setTodos([...todos, document.getElementById("ntd").value]);
    setTodos((cv) => {
      return [...cv, ntd];
    });
  }
  function deleteTodo(i) {
    setTodos((cv) => {
      cv.splice(i, 1);
      return [...cv];
    });
  }
  return (
    <div className="border border-primary border-2 m-2 p-2 rounded">
      <h1>Todolist</h1>
      <input
        type="text"
        onChange={(ev) => {
          setNtd(ev.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodo();
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((todo, i) => {
          return (
            <li>
              {todo}
              <button
                onClick={() => {
                  deleteTodo(i);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
