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
import ic_fb from "./assets/ic_fb.png";
import ic_git from "./assets/ic_git.png";
import ic_lkdin from "./assets/ic_lkdin.png";
import Blog from "./pages/Blog";

function App() {
  //const [count, setCount] = useState(0)

  const images = [ic_git, ic_lkdin, ic_fb];
  return (
    <div className="show">
      <Router>
        <Navbar logo={logo} />
        <Routes>
          <Route path="/" element={<Home image={image} />}></Route>
          <Route path="/contact" element={<Contact images={images} />}></Route>
          <Route
            path="/portfolio"
            element={<Projects image={project_image1} />}
          ></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
