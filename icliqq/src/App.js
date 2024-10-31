import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";
import Downloads from "./components/Downloads/Downloads";
import Partners from "./components/Partners/Partners";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About-us/About";

function App() {
  return (
    <Router>
      <div className=".App-header">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
