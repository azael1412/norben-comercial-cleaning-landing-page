import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Info } from "./components/Info";
import NavBar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Info />
      <NavBar />
      <Banner />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
