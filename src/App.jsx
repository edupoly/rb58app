import "./App.css";
import Carousal from "./components/Carousal";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import HotelCards from "./components/HotelCards";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Carousal></Carousal>
      <HotelCards></HotelCards>
    </>
  );
}

export default App;
