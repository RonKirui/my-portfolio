import { Link } from "react-router-dom";
import About from "./About";
import Experience from "./Experience";
import { motion } from "framer-motion";

interface homeProps {
  image: string;
}
function Home({ image }: homeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-section">
        <div className="text-container">
          <h1>Front-End, Back-End & Android Developer</h1>
          <h5>
            I create modern web and Android solutions that work seamlessly.
          </h5>
        </div>
        <div className="image-container">
          <img
            src={image}
            className="img-fluid w-100 rounded-circle"
            alt="..."
          ></img>
        </div>

        <Link className="nav-link" to={"/portfolio"}>
          <button type="button" className="btn btn-outline-success">
            View My Work
          </button>
        </Link>
      </div>
      <About />
      <Experience />
    </motion.div>
  );
}
export default Home;
