import React from "react";
import Navbar from "./layouts/Navbar";
import Home from "./layouts/Home";
import Services from "./layouts/Services";
import About from "./layouts/About";
import Contact from "./layouts/Contact";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="max-w-[1400px] overflow-hidden mx-auto">
      <Navbar />
      <Home />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
