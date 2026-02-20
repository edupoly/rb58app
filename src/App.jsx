import { useEffect } from "react";
import Counter from "./Counter";
import Products from "./Products";

function App() {
  useEffect(function () {
    console.log("App Mounted");
  }, []);
  return (
    <div className="border border-danger border-2 m-2 p-2 rounded">
      <h1>Edupoly</h1>
      <Products></Products>
      <Counter></Counter>
    </div>
  );
}

export default App;
