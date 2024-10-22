// Objective: Create a clock that displays the current time.
import CurrTime from "./components/CurrTime";
import Description from "./components/Description";
import Heading from "./components/Heading";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <center>
      <Heading />
      <Description />
      <CurrTime />
    </center>
  );
}

export default App;
