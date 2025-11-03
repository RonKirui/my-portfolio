//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
//import TopNavbar from "./components/TopNavBar";
import Navbar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import image from "./assets/profile.png";
import experience_image from "./assets/experience.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <body>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home name={"Ronald Kiplangat"} image={image} />}
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route
            path="/Experience"
            element={<Experience experience_image={experience_image} />}
          ></Route>
        </Routes>
      </Router>
    </body>
  );
}

export default App;
