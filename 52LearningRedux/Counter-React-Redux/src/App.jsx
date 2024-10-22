import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter.jsx";
import Container from "./components/Container.jsx";
import Controls from "./components/Controls.jsx";
import { useSelector } from "react-redux";
import PrivacyMessege from "./components/PrivacyMessege.jsx";

const App = () => {
  const privacy = useSelector((store) => store.privacy);

  return (
    <center className="px-4 py-5 my-5 ">
      <Container>
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          {privacy ? <PrivacyMessege /> : <DisplayCounter />}
          <Controls></Controls>
        </div>
      </Container>
    </center>
  );
};

export default App;
