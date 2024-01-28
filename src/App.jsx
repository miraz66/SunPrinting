import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//All pages
import Home from "./pages/Home";
import About from "./pages/About";
import Printing from "./pages/Printing";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-green-50">
      <div className="font-rubik bg-black overflow-x-hidden">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home isOpen={isOpen} setIsOpen={setIsOpen} />}
            />
            <Route
              path="/about"
              element={<About isOpen={isOpen} setIsOpen={setIsOpen} />}
            />
            <Route
              path="/services"
              element={<Services isOpen={isOpen} setIsOpen={setIsOpen} />}
            />
            <Route
              path="/printing"
              element={<Printing isOpen={isOpen} setIsOpen={setIsOpen} />}
            />
            <Route
              path="/contact"
              element={<Contact isOpen={isOpen} setIsOpen={setIsOpen} />}
            />
            <Route
              path="projects"
              element={<Projects isOpen={isOpen} setIsOpen={setIsOpen} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
