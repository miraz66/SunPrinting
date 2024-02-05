import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//All pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Owner from "./pages/Owner";

function App() {
  return (
    <div className="bg-green-50">
      <div className="font-rubik bg-black overflow-x-hidden">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/owner/:name" element={<Owner />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
