//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
//import TopNavbar from "./components/TopNavBar";
import Navbar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import image from "./assets/profile.png";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Home name={"Ronald Kiplangat"} image={image} />
    </div>
  );
}

export default App;
