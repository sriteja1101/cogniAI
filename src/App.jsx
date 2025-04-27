import "./App.css";
import Navbar from "./components/navbar";
import Statement from "./components/statement";
import Hero from "./components/hero";
import AIPowered from "./components/aiPowdered";
import Work from "./components/work";
import Footer from "./components/footer";

import Banner from "./components/banner";

function App() {
  return (
    <div>
      <Navbar />
      <Statement />
      <Hero />
      <AIPowered />
      <Work />
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
