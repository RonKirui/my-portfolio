//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
//import TopNavbar from "./components/TopNavBar";
import Navbar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import image from "./assets/profile.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import logo from "./assets/logo.png";
import project_image1 from "./assets/image_0.jpg";
import Footer from "./components/Footer";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <body>
      <Router>
        <Navbar logo={logo} />
        <Routes>
          <Route path="/" element={<Home image={image} />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/portfolio"
            element={<Projects image={project_image1} />}
          ></Route>
        </Routes>
      </Router>

      <Footer />
    </body>
  );
}

export default App;
