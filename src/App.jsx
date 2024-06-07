import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Main, Gallery, Projects, Erropage } from "./pages";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      {/* defining my react-router path */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Erropage />} />
      </Routes>
    </>
  );
}

export default App;
