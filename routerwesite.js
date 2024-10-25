import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import img from "./dead.jpg"

const Home = () => (
  <div>
    <h1>Welcome to ABC College</h1>
    <p>Your future begins here!</p>
  </div>
);

const Contact = () => (
  <div>
    <h1>Contact Us</h1>
    <p>Email: info@abccollege.edu</p>
    <p>Phone: +1234567890</p>
  </div>
);

const Departments = () => (
  <div>
    <h1>Departments</h1>
    <ul>
      <li>Computer Science</li>
      <li>Electrical Engineering</li>
      <li>Mechanical Engineering</li>
      <li>Mathematics</li>
    </ul>
  </div>
);

const App = () => (
  
  <Router>
    
    <nav>
      
        <Link to="/">Home</Link>&nbsp; 
        <Link to="/departments">Departments</Link>
        <img src={img} height="20px"></img>
        <Link to="/contact">Contact Us</Link>
      
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
