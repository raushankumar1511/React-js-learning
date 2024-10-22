import { Outlet } from "react-router-dom";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import HomeItem from "../src/components/HomeItem";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
