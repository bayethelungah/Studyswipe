import { useState } from "react";
import Home from "./Home";
import Study from "./Study";
import About from "./About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<Study />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
