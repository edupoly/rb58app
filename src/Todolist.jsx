import React, { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add a new task
  const addTask = () => {
    if (task.trim() === "") return; // Don't add empty tasks
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask(""); // Clear input
  };

  // Delete a task
  const deleteTask = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  // Toggle completion status
  const toggleComplete = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2>My Tasks</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="What needs to be done?"
          style={{ flexGrow: 1, padding: "8px" }}
        />
        <button onClick={addTask} style={{ padding: "8px 16px" }}>
          Add
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              borderBottom: "1px solid #eee",
            }}
          >
            <span
              onClick={() => toggleComplete(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
                flexGrow: 1,
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTask(todo.id)}
              style={{
                background: "#ff4d4d",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
