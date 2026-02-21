import { useEffect } from "react";
import Todolist from "./Todolist";
import Counter from "./Counter";

function App() {
  useEffect(function () {
    console.log("App Mounted");
  }, []);
  return (
    <div className="border border-danger border-2 m-2 p-2 rounded">
      <h1>Edupoly</h1>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
