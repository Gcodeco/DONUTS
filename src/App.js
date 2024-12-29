import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Testestimonial from "./Components/Testestimonial";
import Work from "./Components/Work";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testestimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
