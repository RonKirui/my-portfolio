import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 1 }}
    >
      <div>
        <div className="body-page">
          <div className="project-container">
            <div className="porfolio-welcome">
              <h1>WELCOME TO MY PORTFOLIO</h1>
              <br />
              Here’s a collection of my projects showcasing creativity,
              precision, and problem-solving through code. If you’d like to
              explore more of my work and see the variety of projects I’ve
              developed, simply click the button below to discover more.
            </div>
            <button
              type="button"
              className="btn btn-outline-success check-github"
            >
              <a href="https://github.com/RonKirui" target="_blank">
                Check My GitHub
              </a>
            </button>
            <div className="portfolio-section-divider"></div>
            <div className="projects-flex-container">
              <ProjectCard />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
