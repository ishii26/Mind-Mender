import Guide from "./Guide";
import Hero from "./Hero";
import Benefits from "./Benefits";
import Details from "./Details";
import Footer from "./Footer";
//import Landing, { Landingau } from "./Landingau";
import Navbar from "./Navbar";
// import Signupmodal from "./Signupmodal";

function Homepage() {
  return (
    <>
      <Navbar />
      {/* <Signupmodal /> */}
      <Hero />
      <Guide />
      <Benefits />
      <Details />
      <Footer />
      {/* <Landingau /> */}
    </>
  );
}

export default Homepage;
