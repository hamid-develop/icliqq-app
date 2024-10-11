import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header'

// Components for each page
const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Us</h2>;
const Services = () => <h2>Our Services</h2>;
const Contact = () => <h2>Contact Us</h2>;

function App() {
  return (
    <Router>
      <div className='.App-header'>
        <Header /> {/* Header component with the menu */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
