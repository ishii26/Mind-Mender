// import Guide from "./Components/Guide";
// import Hero from "./Components/Hero";
// import Benefits from "./Components/Benefits";
// import Details from "./Components/Details";
// import Footer from "./Components/Footer";
import Homepage from "./Components/Homepage";
import Landing, { Landingau } from "./Components/Landingau";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route element={<Homepage />}></Route> */}
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Landingau" element={<Landingau />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
