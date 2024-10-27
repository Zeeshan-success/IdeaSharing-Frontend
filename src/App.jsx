import "./App.css";
import CreateIdeas from "./Components/CreateIdeas";
import Footer from "./Components/Footer.Jsx";
import { Outlet } from "react-router-dom";

import NavBar from "./Components/NavBar";
import ShowIdeas from "./Components/ShowIdeas";

function App() {
  return (
    <>
      <NavBar />

      <Outlet />

      <Footer />
    </>
  );
}

export default App;
