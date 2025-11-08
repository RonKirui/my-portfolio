import { motion } from "framer-motion";
interface PortfolioProps {
  image: string;
}
function Projects({ image }: PortfolioProps) {
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
              <h1>Welcome To My Portfolio</h1>
              <br />
              Here’s a collection of my projects showcasing creativity,
              precision, and problem-solving through code. Each project reflects
              my passion for building functional and visually appealing digital
              solutions.
              <br />
              If you’d like to explore more of my work and see the variety of
              projects I’ve developed, simply click the button below to discover
              more.
            </div>
            <button type="button" className="btn btn-outline-success">
              <a href="https://github.com/RonKirui">Check My GitHub</a>
            </button>
            <div className="portfolio-section-divider"></div>
            <div className="projects-flex-container">
              <div className="card-container">
                <div className="card">
                  <img src={image} className="" alt="..."></img>
                </div>
                <div className="card-project-text">
                  <h5>
                    <a>Chimmuni</a>
                  </h5>
                  <h6>
                    An android app that helps mothers to keep track of their
                    children’s immunizations and schedules.
                  </h6>
                </div>
                <div className="flex-teck-stack">
                  <div>Android SDK</div>
                  <div>Java</div>
                  <div>Real-time Firebase</div>
                  <div>FCM</div>
                </div>
              </div>
              <div className="card-container">
                <div className="card">
                  <img src={image} className="" alt="..."></img>
                </div>
                <div className="card-project-text">
                  <h5>
                    <a>TeaPlus</a>
                  </h5>
                  <h6>
                    An Android app built in Java that enables tea farmers to
                    record, track and manage tea leaves production.
                  </h6>
                </div>
                <div className="flex-teck-stack">
                  <div>Android SDK</div>
                  <div>Java</div>
                  <div>Real-time Firebase</div>
                  <div>SQLite</div>
                </div>
              </div>
              <div className="card-container">
                <div className="card">
                  <img src={image} className="" alt="..."></img>
                </div>
                <div className="card-project-text">
                  <h5>
                    <a>Alphapp-Dairy</a>
                  </h5>
                  <h6>
                    Android app that enables farmers to record, monitor, and
                    manage daily dairy and poultry production, health, and
                    inventory...
                  </h6>
                </div>
                <div className="flex-teck-stack">
                  <div>Android SDK</div>
                  <div>Java</div>
                  <div>Real-time Firebase</div>
                  <div>SQLite</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
