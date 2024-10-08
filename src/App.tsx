import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.sass";
import Home from "./Pages/Home";
import LeftMenu from "./Components/LeftMenu";

const App: React.FC = () => {
  return (
    <div className="App">
      <LeftMenu/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
