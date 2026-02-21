import { MyContext } from "./MyContext";
import Parent from "./Parent";
const userDetails = {
  firstname: "kiran",
  lastname: "reddy",
};
function App() {
  return (
    <MyContext.Provider value={userDetails}>
      <div className="border border-danger border-2 m-2 p-2 rounded">
        <h1>Edupoly</h1>
        <Parent></Parent>
      </div>
    </MyContext.Provider>
  );
}

export default App;
// parent-child-grandchild
// prop-drilling
// context-api
