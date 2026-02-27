import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="border border-danger border-2 m-2 p-2 rounded">
      <h1>Edupoly</h1>
      <Link to="/">Home</Link>
      &nbsp;&nbsp;
      <Link to="/counter">Counter</Link>
      &nbsp;&nbsp;
      <Link to="/gallery">Gallery</Link>
      &nbsp;&nbsp;
      <Link to="/todolist">Todo List</Link>
      &nbsp;&nbsp;
      <Link to="/products">Products</Link>
      &nbsp;&nbsp;
      <Link to="/recipes">Recipes</Link>
      <br />
      <Outlet></Outlet>
    </div>
  );
}

export default App;
