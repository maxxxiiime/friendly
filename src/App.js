import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Projet from "./pages/Projet";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import { Routes, Route } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projet/:id" element={<Projet />}  />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
