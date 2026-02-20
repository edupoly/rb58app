import Counter from "./Counter";
import Gallery from "./Gallery";
import Todolist from "./Todolist";
function App() {
  return (
    <div className="border border-danger border-2 m-2 p-2 rounded">
      <h1>Edupoly</h1>
      <Todolist></Todolist>
      <Counter></Counter>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
