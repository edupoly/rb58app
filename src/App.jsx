import { useEffect } from "react";
import Todolist from "./Todolist";
import Calc from "./Calc";

function App() {
  useEffect(function () {
    console.log("App Mounted");
  }, []);
  return (
    <div className="border border-danger border-2 m-2 p-2 rounded">
      <h1>Edupoly</h1>
      <Calc></Calc>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
